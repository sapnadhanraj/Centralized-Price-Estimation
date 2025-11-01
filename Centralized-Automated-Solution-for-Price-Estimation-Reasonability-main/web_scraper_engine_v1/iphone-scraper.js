const puppeteer = require('puppeteer');

/**
 * iPhone Scraper Module
 * Scrapes iPhone prices from 5 major e-commerce sites in India
 * Sites: Amazon India, Flipkart, Apple India, Croma, Reliance Digital
 */

// User agents to rotate (helps avoid bot detection)
const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0'
];

/**
 * Scrape Amazon India - OPTIMIZED
 */
async function scrapeAmazon(searchQuery) {
    console.log(`[Amazon] Scraping for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu'
            ]
        });
        
        const page = await browser.newPage();
        await page.setUserAgent(userAgents[0]);
        
        // Disable images and CSS for faster loading
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (req.resourceType() === 'image' || req.resourceType() === 'stylesheet' || req.resourceType() === 'font') {
                req.abort();
            } else {
                req.continue();
            }
        });
        
        const searchUrl = `https://www.amazon.in/s?k=${encodeURIComponent(searchQuery)}`;
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        
        // Wait for results with shorter timeout
        await page.waitForSelector('.s-result-item', { timeout: 5000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('[data-component-type="s-search-result"]');
            
            // Limit to top 5 results for faster processing
            for (let i = 0; i < Math.min(results.length, 5); i++) {
                const item = results[i];
                
                const nameElement = item.querySelector('h2 a span');
                const priceElement = item.querySelector('.a-price-whole');
                const imageElement = item.querySelector('img.s-image');
                const linkElement = item.querySelector('h2 a');
                
                if (nameElement && priceElement) {
                    items.push({
                        name: nameElement.textContent.trim(),
                        price: priceElement.textContent.replace(/[^\d]/g, ''),
                        image: imageElement ? imageElement.src : '',
                        link: linkElement ? 'https://www.amazon.in' + linkElement.getAttribute('href') : '',
                        source: 'Amazon India'
                    });
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Amazon] Found ${products.length} products`);
        return products;
        
    } catch (error) {
        console.error('[Amazon] Scraping error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Scrape Flipkart - OPTIMIZED
 */
async function scrapeFlipkart(searchQuery) {
    console.log(`[Flipkart] Scraping for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu'
            ]
        });
        
        const page = await browser.newPage();
        await page.setUserAgent(userAgents[1]);
        
        // Disable images and CSS for faster loading
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (req.resourceType() === 'image' || req.resourceType() === 'stylesheet' || req.resourceType() === 'font') {
                req.abort();
            } else {
                req.continue();
            }
        });
        
        const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(searchQuery)}`;
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        
        // Wait for results with shorter timeout
        await page.waitForSelector('._1AtVbE', { timeout: 5000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('._1AtVbE');
            
            // Limit to top 5 results
            for (let i = 0; i < Math.min(results.length, 5); i++) {
                const item = results[i];
                
                const nameElement = item.querySelector('._4rR01T') || item.querySelector('.s1Q9rs');
                const priceElement = item.querySelector('._30jeq3');
                const imageElement = item.querySelector('._396cs4');
                const linkElement = item.querySelector('._1fQZEK') || item.querySelector('a');
                
                if (nameElement && priceElement) {
                    items.push({
                        name: nameElement.textContent.trim(),
                        price: priceElement.textContent.replace(/[^\d]/g, ''),
                        image: imageElement ? imageElement.src : '',
                        link: linkElement ? 'https://www.flipkart.com' + linkElement.getAttribute('href') : '',
                        source: 'Flipkart'
                    });
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Flipkart] Found ${products.length} products`);
        return products;
        
    } catch (error) {
        console.error('[Flipkart] Scraping error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Scrape Apple India
 */
async function scrapeApple(searchQuery) {
    console.log(`[Apple] Scraping for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setUserAgent(userAgents[2]);
        
        // Apple India iPhone page
        const url = 'https://www.apple.com/in/shop/buy-iphone';
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Wait for product tiles
        await page.waitForSelector('.rf-productnav-item', { timeout: 10000 });
        
        const products = await page.evaluate((query) => {
            const items = [];
            const tiles = document.querySelectorAll('.rf-productnav-item');
            
            tiles.forEach(tile => {
                const nameElement = tile.querySelector('.rf-productnav-title');
                const priceElement = tile.querySelector('.rf-productnav-price');
                const linkElement = tile.querySelector('a');
                
                if (nameElement && nameElement.textContent.toLowerCase().includes(query.toLowerCase().split(' ')[1])) {
                    items.push({
                        name: nameElement.textContent.trim(),
                        price: priceElement ? priceElement.textContent.replace(/[^\d]/g, '') : 'N/A',
                        image: 'https://www.apple.com/v/iphone/home/bv/images/overview/select/iphone_15_pro__bpnjhcrxofqu_large.png',
                        link: linkElement ? 'https://www.apple.com' + linkElement.getAttribute('href') : '',
                        source: 'Apple India'
                    });
                }
            });
            
            return items.slice(0, 2);
        }, searchQuery);
        
        await browser.close();
        console.log(`[Apple] Found ${products.length} products`);
        return products;
        
    } catch (error) {
        console.error('[Apple] Scraping error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Scrape Croma
 */
async function scrapeCroma(searchQuery) {
    console.log(`[Croma] Scraping for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setUserAgent(userAgents[0]);
        
        const searchUrl = `https://www.croma.com/search?q=${encodeURIComponent(searchQuery)}`;
        await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Wait for results
        await page.waitForSelector('.product-item', { timeout: 10000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('.product-item');
            
            for (let i = 0; i < Math.min(results.length, 2); i++) {
                const item = results[i];
                
                const nameElement = item.querySelector('.product-title');
                const priceElement = item.querySelector('.amount');
                const imageElement = item.querySelector('img');
                const linkElement = item.querySelector('a');
                
                if (nameElement && priceElement) {
                    items.push({
                        name: nameElement.textContent.trim(),
                        price: priceElement.textContent.replace(/[^\d]/g, ''),
                        image: imageElement ? imageElement.src : '',
                        link: linkElement ? linkElement.href : '',
                        source: 'Croma'
                    });
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Croma] Found ${products.length} products`);
        return products;
        
    } catch (error) {
        console.error('[Croma] Scraping error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Scrape Reliance Digital
 */
async function scrapeRelianceDigital(searchQuery) {
    console.log(`[Reliance Digital] Scraping for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setUserAgent(userAgents[1]);
        
        const searchUrl = `https://www.reliancedigital.in/search?q=${encodeURIComponent(searchQuery)}`;
        await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Wait for results
        await page.waitForSelector('.sp__product', { timeout: 10000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('.sp__product');
            
            for (let i = 0; i < Math.min(results.length, 2); i++) {
                const item = results[i];
                
                const nameElement = item.querySelector('.sp__name');
                const priceElement = item.querySelector('.sp__price');
                const imageElement = item.querySelector('img');
                const linkElement = item.querySelector('a');
                
                if (nameElement && priceElement) {
                    items.push({
                        name: nameElement.textContent.trim(),
                        price: priceElement.textContent.replace(/[^\d]/g, ''),
                        image: imageElement ? imageElement.src : '',
                        link: linkElement ? linkElement.href : '',
                        source: 'Reliance Digital'
                    });
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Reliance Digital] Found ${products.length} products`);
        return products;
        
    } catch (error) {
        console.error('[Reliance Digital] Scraping error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Main function to scrape all sites
 */
async function scrapeAllSites(searchQuery) {
    console.log(`\n=== Starting iPhone Price Scraping ===`);
    console.log(`Search Query: ${searchQuery}\n`);
    
    const startTime = Date.now();
    
    try {
        // Run all scrapers in parallel for faster results
        const [amazonResults, flipkartResults, appleResults, cromaResults, relianceResults] = await Promise.allSettled([
            scrapeAmazon(searchQuery),
            scrapeFlipkart(searchQuery),
            scrapeApple(searchQuery),
            scrapeCroma(searchQuery),
            scrapeRelianceDigital(searchQuery)
        ]);
        
        // Combine results
        const allProducts = [
            ...(amazonResults.status === 'fulfilled' ? amazonResults.value : []),
            ...(flipkartResults.status === 'fulfilled' ? flipkartResults.value : []),
            ...(appleResults.status === 'fulfilled' ? appleResults.value : []),
            ...(cromaResults.status === 'fulfilled' ? cromaResults.value : []),
            ...(relianceResults.status === 'fulfilled' ? relianceResults.value : [])
        ];
        
        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(2);
        
        console.log(`\n=== Scraping Complete ===`);
        console.log(`Total Products Found: ${allProducts.length}`);
        console.log(`Time Taken: ${duration} seconds\n`);
        
        return allProducts;
        
    } catch (error) {
        console.error('Error during scraping:', error);
        return [];
    }
}

module.exports = {
    scrapeAllSites,
    scrapeAmazon,
    scrapeFlipkart,
    scrapeApple,
    scrapeCroma,
    scrapeRelianceDigital
};
