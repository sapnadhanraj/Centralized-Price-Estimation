/**
 * REAL-TIME iPhone Price Scraper
 * 
 * Fetches current prices and working product links from Amazon & Flipkart
 */

const puppeteer = require('puppeteer');

/**
 * Real-time Amazon India scraping with working product links
 */
async function scrapeAmazonRealtime(modelName) {
    console.log(`[Amazon Real-time] Scraping for: ${modelName}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-blink-features=AutomationControlled'
            ]
        });
        
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        await page.setViewport({ width: 1366, height: 768 });
        
        const searchUrl = `https://www.amazon.in/s?k=${encodeURIComponent(modelName)}&rh=n%3A1389401031&ref=sr_nr_n_1`;
        console.log('[Amazon] Search URL:', searchUrl);
        
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 15000 });
        
        const products = await page.evaluate((searchModel) => {
            const results = [];
            const items = document.querySelectorAll('[data-component-type="s-search-result"]');
            
            console.log(`Found ${items.length} Amazon search results`);
            
            for (let i = 0; i < Math.min(items.length, 5); i++) {
                const item = items[i];
                
                // Get product name
                let productName = '';
                const nameSelectors = [
                    'h2 a span',
                    'h2 span',
                    '.a-text-normal'
                ];
                
                for (const selector of nameSelectors) {
                    const nameEl = item.querySelector(selector);
                    if (nameEl && nameEl.textContent.trim()) {
                        productName = nameEl.textContent.trim();
                        break;
                    }
                }
                
                if (!productName || !productName.toLowerCase().includes('iphone')) continue;
                if (!productName.toLowerCase().includes(searchModel.toLowerCase().replace('iphone ', ''))) continue;
                
                // Get product link
                let productLink = '';
                const linkEl = item.querySelector('h2 a');
                if (linkEl && linkEl.href) {
                    productLink = 'https://www.amazon.in' + linkEl.getAttribute('href');
                }
                
                // Get price
                let priceText = '';
                const priceSelectors = [
                    '.a-price .a-offscreen',
                    '.a-price-whole'
                ];
                
                for (const selector of priceSelectors) {
                    const priceEl = item.querySelector(selector);
                    if (priceEl && priceEl.textContent.trim()) {
                        priceText = priceEl.textContent.trim();
                        break;
                    }
                }
                
                if (productName && productLink && priceText) {
                    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                    
                    results.push({
                        name: productName,
                        price: priceText,
                        priceValue: priceValue,
                        link: productLink,
                        source: 'Amazon India',
                        isRealTime: true,
                        scrapedAt: new Date().toISOString()
                    });
                }
            }
            
            return results;
        }, modelName);
        
        console.log(`[Amazon] Found ${products.length} real products`);
        return products.slice(0, 2); // Return top 2 results
        
    } catch (error) {
        console.error('[Amazon] Scraping error:', error.message);
        return [];
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

/**
 * Real-time Flipkart scraping with working product links
 */
async function scrapeFlipkartRealtime(modelName) {
    console.log(`[Flipkart Real-time] Scraping for: ${modelName}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-blink-features=AutomationControlled'
            ]
        });
        
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        await page.setViewport({ width: 1366, height: 768 });
        
        const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(modelName)}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off`;
        console.log('[Flipkart] Search URL:', searchUrl);
        
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector('[data-id]', { timeout: 15000 });
        
        const products = await page.evaluate((searchModel) => {
            const results = [];
            const items = document.querySelectorAll('[data-id]');
            
            console.log(`Found ${items.length} Flipkart search results`);
            
            for (let i = 0; i < Math.min(items.length, 5); i++) {
                const item = items[i];
                
                // Get product name
                let productName = '';
                const nameSelectors = [
                    '.s1Q9rs',
                    '.IRpwTa',
                    '.WKTcLC',
                    '._4rR01T'
                ];
                
                for (const selector of nameSelectors) {
                    const nameEl = item.querySelector(selector);
                    if (nameEl && nameEl.textContent.trim()) {
                        productName = nameEl.textContent.trim();
                        break;
                    }
                }
                
                if (!productName || !productName.toLowerCase().includes('iphone')) continue;
                if (!productName.toLowerCase().includes(searchModel.toLowerCase().replace('iphone ', ''))) continue;
                
                // Get product link
                let productLink = '';
                const linkEl = item.querySelector('a');
                if (linkEl && linkEl.href) {
                    productLink = 'https://www.flipkart.com' + linkEl.getAttribute('href');
                }
                
                // Get price
                let priceText = '';
                const priceSelectors = [
                    '._30jeq3',
                    '._1_WHN1',
                    '.Nx9bqj'
                ];
                
                for (const selector of priceSelectors) {
                    const priceEl = item.querySelector(selector);
                    if (priceEl && priceEl.textContent.trim()) {
                        priceText = priceEl.textContent.trim();
                        break;
                    }
                }
                
                if (productName && productLink && priceText) {
                    const priceValue = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
                    
                    results.push({
                        name: productName,
                        price: priceText,
                        priceValue: priceValue,
                        link: productLink,
                        source: 'Flipkart',
                        isRealTime: true,
                        scrapedAt: new Date().toISOString()
                    });
                }
            }
            
            return results;
        }, modelName);
        
        console.log(`[Flipkart] Found ${products.length} real products`);
        return products.slice(0, 2); // Return top 2 results
        
    } catch (error) {
        console.error('[Flipkart] Scraping error:', error.message);
        return [];
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

/**
 * Get real-time prices from both Amazon and Flipkart
 */
async function getRealTimePrices(modelName) {
    console.log(`\n==================================================`);
    console.log(`REAL-TIME PRICE ESTIMATION: ${modelName}`);
    console.log(`Fetching live data from Amazon & Flipkart...`);
    console.log(`==================================================\n`);
    
    const results = [];
    
    try {
        // Scrape both sites simultaneously
        console.log('🔄 Starting real-time scraping for both sites...');
        
        const [amazonData, flipkartData] = await Promise.allSettled([
            scrapeAmazonRealtime(modelName),
            scrapeFlipkartRealtime(modelName)
        ]);
        
        // Add Amazon results
        if (amazonData.status === 'fulfilled' && amazonData.value.length > 0) {
            results.push(...amazonData.value);
            console.log(`✅ Amazon: ${amazonData.value.length} products found`);
        } else {
            console.log('❌ Amazon: No products found or error occurred');
        }
        
        // Add Flipkart results
        if (flipkartData.status === 'fulfilled' && flipkartData.value.length > 0) {
            results.push(...flipkartData.value);
            console.log(`✅ Flipkart: ${flipkartData.value.length} products found`);
        } else {
            console.log('❌ Flipkart: No products found or error occurred');
        }
        
        // Sort by price
        results.sort((a, b) => a.priceValue - b.priceValue);
        
        console.log(`\n📊 Real-time Results: ${results.length} products`);
        console.log(`Sources: ${[...new Set(results.map(r => r.source))].join(', ')}`);
        console.log(`==================================================\n`);
        
        return results;
        
    } catch (error) {
        console.error('Real-time scraping error:', error);
        return [];
    }
}

module.exports = {
    scrapeAmazonRealtime,
    scrapeFlipkartRealtime,
    getRealTimePrices
};