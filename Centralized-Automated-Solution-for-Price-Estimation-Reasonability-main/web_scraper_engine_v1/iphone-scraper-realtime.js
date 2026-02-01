/**
 * REAL-TIME iPhone Price Scraper with 3 E-commerce Websites
 * 
 * Websites:
 * 1. Amazon India
 * 2. Flipkart
 * 3. Croma
 * 
 * Features:
 * - Stealth mode to avoid detection
 * - Availability checking
 * - Real product links
 * - Fallback to database if scraping fails
 */

const puppeteer = require('puppeteer');
const { iphonePriceDatabase } = require('./iphone-mock-data-test');

// Browser launch options with stealth settings
const getBrowserOptions = () => ({
    headless: 'new',
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=1920x1080',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--disable-blink-features=AutomationControlled'
    ]
});

// Common page setup with anti-detection
async function setupPage(browser) {
    const page = await browser.newPage();
    
    // Set realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Override navigator properties to avoid detection
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
        Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
    });
    
    return page;
}

/**
 * Scrape Amazon India with updated selectors
 */
async function scrapeAmazonRealtime(modelName) {
    console.log(`[Amazon Real-time] Scraping for: ${modelName}`);
    let browser;
    
    try {
        browser = await puppeteer.launch(getBrowserOptions());
        const page = await setupPage(browser);
        
        const searchQuery = encodeURIComponent(modelName);
        const searchUrl = `https://www.amazon.in/s?k=${searchQuery}&i=electronics`;
        
        console.log('[Amazon] Search URL:', searchUrl);
        
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Wait for products to load
        try {
            await page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 10000 });
        } catch (e) {
            console.log('[Amazon] No search results found');
            return [];
        }
        
        const products = await page.evaluate((searchModel) => {
            const results = [];
            const items = document.querySelectorAll('[data-component-type="s-search-result"]');
            
            for (let i = 0; i < Math.min(items.length, 3); i++) {
                const item = items[i];
                
                // Get product name
                const nameEl = item.querySelector('h2 a span') || item.querySelector('h2 span');
                const productName = nameEl ? nameEl.textContent.trim() : '';
                
                if (!productName || !productName.toLowerCase().includes('iphone')) continue;
                
                // Get product link
                const linkEl = item.querySelector('h2 a');
                let productLink = '';
                if (linkEl && linkEl.href) {
                    productLink = linkEl.href;
                }
                
                // Get price
                const priceEl = item.querySelector('.a-price .a-offscreen') || item.querySelector('.a-price-whole');
                let priceText = priceEl ? priceEl.textContent.trim() : '';
                
                // Get image
                const imgEl = item.querySelector('img.s-image');
                const image = imgEl ? imgEl.src : '';
                
                if (productName && productLink && priceText) {
                    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                    
                    results.push({
                        name: productName,
                        price: priceText.startsWith('₹') ? priceText : '₹' + priceText,
                        priceValue: priceValue,
                        link: productLink,
                        source: 'Amazon India',
                        available: true,
                        isRealTime: true,
                        image: image,
                        scrapedAt: new Date().toISOString()
                    });
                }
            }
            
            return results;
        }, modelName);
        
        console.log(`[Amazon] Found ${products.length} products`);
        return products.slice(0, 1);
        
    } catch (error) {
        console.error('[Amazon] Scraping error:', error.message);
        return [];
    } finally {
        if (browser) await browser.close();
    }
}

/**
 * Scrape Flipkart with updated selectors
 */
async function scrapeFlipkartRealtime(modelName) {
    console.log(`[Flipkart Real-time] Scraping for: ${modelName}`);
    let browser;
    
    try {
        browser = await puppeteer.launch(getBrowserOptions());
        const page = await setupPage(browser);
        
        const searchQuery = encodeURIComponent(modelName);
        const searchUrl = `https://www.flipkart.com/search?q=${searchQuery}&otracker=search&marketplace=FLIPKART`;
        
        console.log('[Flipkart] Search URL:', searchUrl);
        
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Close login popup if it appears
        try {
            const closeBtn = await page.$('button._2KpZ6l._2doB4z');
            if (closeBtn) await closeBtn.click();
        } catch (e) {}
        
        // Wait for products
        try {
            await page.waitForSelector('[data-id]', { timeout: 10000 });
        } catch (e) {
            console.log('[Flipkart] No search results found');
            return [];
        }
        
        const products = await page.evaluate((searchModel) => {
            const results = [];
            const items = document.querySelectorAll('[data-id]');
            
            for (let i = 0; i < Math.min(items.length, 3); i++) {
                const item = items[i];
                
                // Get product name - multiple selectors for different layouts
                const nameSelectors = ['a.wjcEIp', 'a.IRpwTa', 'a.s1Q9rs', 'div._4rR01T', 'a.WKTcLC'];
                let productName = '';
                let linkEl = null;
                
                for (const selector of nameSelectors) {
                    const el = item.querySelector(selector);
                    if (el && el.textContent.trim()) {
                        productName = el.textContent.trim();
                        if (el.tagName === 'A') linkEl = el;
                        break;
                    }
                }
                
                if (!productName || !productName.toLowerCase().includes('iphone')) continue;
                
                // Get product link
                let productLink = '';
                if (!linkEl) linkEl = item.querySelector('a');
                if (linkEl && linkEl.href) {
                    productLink = linkEl.href;
                }
                
                // Get price
                const priceSelectors = ['div.Nx9bqj', 'div._30jeq3', 'div._1_WHN1'];
                let priceText = '';
                
                for (const selector of priceSelectors) {
                    const el = item.querySelector(selector);
                    if (el && el.textContent.trim()) {
                        priceText = el.textContent.trim();
                        break;
                    }
                }
                
                // Get image
                const imgEl = item.querySelector('img._396cs4') || item.querySelector('img');
                const image = imgEl ? imgEl.src : '';
                
                if (productName && productLink && priceText) {
                    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                    
                    results.push({
                        name: productName,
                        price: priceText,
                        priceValue: priceValue,
                        link: productLink,
                        source: 'Flipkart',
                        available: true,
                        isRealTime: true,
                        image: image,
                        scrapedAt: new Date().toISOString()
                    });
                }
            }
            
            return results;
        }, modelName);
        
        console.log(`[Flipkart] Found ${products.length} products`);
        return products.slice(0, 1);
        
    } catch (error) {
        console.error('[Flipkart] Scraping error:', error.message);
        return [];
    } finally {
        if (browser) await browser.close();
    }
}

/**
 * Scrape Croma
 */
async function scrapeCromaRealtime(modelName) {
    console.log(`[Croma Real-time] Scraping for: ${modelName}`);
    let browser;
    
    try {
        browser = await puppeteer.launch(getBrowserOptions());
        const page = await setupPage(browser);
        
        const searchQuery = encodeURIComponent(modelName);
        const searchUrl = `https://www.croma.com/search/?text=${searchQuery}`;
        
        console.log('[Croma] Search URL:', searchUrl);
        
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Wait for products
        try {
            await page.waitForSelector('.product-item', { timeout: 10000 });
        } catch (e) {
            console.log('[Croma] No search results found');
            return [];
        }
        
        const products = await page.evaluate((searchModel) => {
            const results = [];
            const items = document.querySelectorAll('.product-item, .cp-product');
            
            for (let i = 0; i < Math.min(items.length, 3); i++) {
                const item = items[i];
                
                // Get product name
                const nameEl = item.querySelector('.product-title a') || item.querySelector('h3 a');
                const productName = nameEl ? nameEl.textContent.trim() : '';
                
                if (!productName || !productName.toLowerCase().includes('iphone')) continue;
                
                // Get product link
                let productLink = '';
                if (nameEl && nameEl.href) {
                    productLink = nameEl.href;
                }
                
                // Get price
                const priceEl = item.querySelector('.amount') || item.querySelector('.pdp-price');
                let priceText = priceEl ? priceEl.textContent.trim() : '';
                
                // Get image
                const imgEl = item.querySelector('img');
                const image = imgEl ? imgEl.src : '';
                
                if (productName && productLink && priceText) {
                    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                    
                    results.push({
                        name: productName,
                        price: priceText.startsWith('₹') ? priceText : '₹' + priceText,
                        priceValue: priceValue,
                        link: productLink,
                        source: 'Croma',
                        available: true,
                        isRealTime: true,
                        image: image,
                        scrapedAt: new Date().toISOString()
                    });
                }
            }
            
            return results;
        }, modelName);
        
        console.log(`[Croma] Found ${products.length} products`);
        return products.slice(0, 1);
        
    } catch (error) {
        console.error('[Croma] Scraping error:', error.message);
        return [];
    } finally {
        if (browser) await browser.close();
    }
}

/**
 * Scrape Vijay Sales
 */
/**
 * Get fallback data from database
 */
function getFallbackData(modelName) {
    console.log(`[Fallback] Getting database data for: ${modelName}`);
    
    // Try exact match first
    if (iphonePriceDatabase[modelName]) {
        return iphonePriceDatabase[modelName];
    }
    
    // Try partial match
    const keys = Object.keys(iphonePriceDatabase);
    for (const key of keys) {
        if (modelName.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(modelName.toLowerCase())) {
            return iphonePriceDatabase[key];
        }
    }
    
    return [];
}

/**
 * Main function: Get real-time prices from all 4 websites
 * Falls back to database if scraping fails
 */
async function getRealTimePrices(modelName) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`REAL-TIME PRICE ESTIMATION: ${modelName}`);
    console.log(`Fetching from 3 websites: Amazon, Flipkart, Croma`);
    console.log(`${'='.repeat(60)}\n`);
    
    const allResults = [];
    const sources = ['Amazon India', 'Flipkart', 'Croma'];
    
    try {
        // First, get fallback data from database
        const fallbackData = getFallbackData(modelName);
        console.log(`[Database] Found ${fallbackData.length} products in database`);
        
        // Try real-time scraping (with timeout to avoid long waits)
        console.log('\n🔄 Attempting real-time scraping...\n');
        
        const scrapePromises = [
            Promise.race([
                scrapeAmazonRealtime(modelName),
                new Promise(resolve => setTimeout(() => resolve([]), 15000))
            ]),
            Promise.race([
                scrapeFlipkartRealtime(modelName),
                new Promise(resolve => setTimeout(() => resolve([]), 15000))
            ]),
            Promise.race([
                scrapeCromaRealtime(modelName),
                new Promise(resolve => setTimeout(() => resolve([]), 15000))
            ])
        ];
        
        const [amazonData, flipkartData, cromaData] = await Promise.allSettled(scrapePromises);
        
        // Create a map of source to scraped data
        const scrapedBySource = {
            'Amazon India': amazonData.status === 'fulfilled' ? amazonData.value : [],
            'Flipkart': flipkartData.status === 'fulfilled' ? flipkartData.value : [],
            'Croma': cromaData.status === 'fulfilled' ? cromaData.value : []
        };
        
        // For each source, use scraped data if available, otherwise use fallback
        for (const source of sources) {
            const scraped = scrapedBySource[source];
            const fallback = fallbackData.filter(p => p.source === source);
            
            if (scraped && scraped.length > 0) {
                console.log(`✅ ${source}: Using real-time data (${scraped.length} products)`);
                allResults.push(...scraped);
            } else if (fallback && fallback.length > 0) {
                console.log(`📦 ${source}: Using database data (${fallback.length} products)`);
                // Add isRealTime: false to indicate it's from database
                const fallbackWithFlag = fallback.map(p => ({
                    ...p,
                    isRealTime: false
                }));
                allResults.push(...fallbackWithFlag);
            } else {
                console.log(`❌ ${source}: No data available`);
                // Add a "not available" entry
                allResults.push({
                    name: `${modelName}`,
                    price: null,
                    priceValue: null,
                    link: null,
                    source: source,
                    available: false,
                    isRealTime: false
                });
            }
        }
        
        // Sort by price (available products first, then by price)
        allResults.sort((a, b) => {
            if (a.available && !b.available) return -1;
            if (!a.available && b.available) return 1;
            if (!a.priceValue) return 1;
            if (!b.priceValue) return -1;
            return a.priceValue - b.priceValue;
        });
        
        console.log(`\n📊 Final Results: ${allResults.length} products`);
        console.log(`   Available: ${allResults.filter(p => p.available).length}`);
        console.log(`   Not Available: ${allResults.filter(p => !p.available).length}`);
        console.log(`${'='.repeat(60)}\n`);
        
        return allResults;
        
    } catch (error) {
        console.error('Real-time scraping error:', error);
        
        // Return database data as fallback
        const fallbackData = getFallbackData(modelName);
        if (fallbackData.length > 0) {
            console.log(`[Fallback] Returning ${fallbackData.length} products from database`);
            return fallbackData.map(p => ({ ...p, isRealTime: false }));
        }
        
        return [];
    }
}

module.exports = {
    scrapeAmazonRealtime,
    scrapeFlipkartRealtime,
    scrapeCromaRealtime,
    getRealTimePrices,
    getFallbackData
};
