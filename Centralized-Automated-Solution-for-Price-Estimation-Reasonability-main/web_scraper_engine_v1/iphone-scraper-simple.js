const puppeteer = require('puppeteer');

/**
 * Simplified iPhone Scraper - Focus on reliability
 * Only scrapes Amazon and Flipkart for faster, more reliable results
 */

/**
 * Scrape Amazon India
 */
async function scrapeAmazon(searchQuery) {
    console.log(`\n[Amazon] Starting scrape for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        
        const searchUrl = `https://www.amazon.in/s?k=${encodeURIComponent(searchQuery)}`;
        console.log(`[Amazon] Navigating to: ${searchUrl}`);
        
        await page.goto(searchUrl, { 
            waitUntil: 'networkidle2', 
            timeout: 30000 
        });
        
        // Wait for results
        await page.waitForSelector('[data-component-type="s-search-result"]', { timeout: 10000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('[data-component-type="s-search-result"]');
            
            console.log(`Found ${results.length} Amazon results`);
            
            for (let i = 0; i < Math.min(results.length, 10); i++) {
                const item = results[i];
                
                try {
                    const nameElement = item.querySelector('h2 span.a-text-normal');
                    const priceWhole = item.querySelector('.a-price-whole');
                    const linkElement = item.querySelector('h2 a');
                    
                    if (nameElement && priceWhole && linkElement) {
                        const name = nameElement.textContent.trim();
                        const priceText = priceWhole.textContent.replace(/[^\d]/g, '');
                        const price = parseInt(priceText);
                        
                        if (price && price > 1000) { // Filter out invalid prices
                            items.push({
                                name: name,
                                type: 'Smartphone',
                                maker: 'Apple',
                                model: name.includes('Pro Max') ? 'Pro Max' : 
                                       name.includes('Pro') ? 'Pro' : 
                                       name.includes('Plus') ? 'Plus' : 
                                       name.includes('Mini') ? 'Mini' : 'Standard',
                                price: `₹${price.toLocaleString('en-IN')}`,
                                priceValue: price,
                                link: 'https://www.amazon.in' + linkElement.getAttribute('href'),
                                source: 'Amazon India'
                            });
                        }
                    }
                } catch (err) {
                    console.error('Error parsing Amazon item:', err.message);
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Amazon] Found ${products.length} valid products`);
        return products;
        
    } catch (error) {
        console.error('[Amazon] Error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Scrape Flipkart
 */
async function scrapeFlipkart(searchQuery) {
    console.log(`\n[Flipkart] Starting scrape for: ${searchQuery}`);
    let browser;
    
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        
        const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(searchQuery)}`;
        console.log(`[Flipkart] Navigating to: ${searchUrl}`);
        
        await page.goto(searchUrl, { 
            waitUntil: 'networkidle2', 
            timeout: 30000 
        });
        
        // Wait for results
        await page.waitForSelector('._1AtVbE, ._13oc-S', { timeout: 10000 });
        
        const products = await page.evaluate(() => {
            const items = [];
            const results = document.querySelectorAll('._1AtVbE, ._13oc-S');
            
            console.log(`Found ${results.length} Flipkart results`);
            
            for (let i = 0; i < Math.min(results.length, 10); i++) {
                const item = results[i];
                
                try {
                    const nameElement = item.querySelector('._4rR01T, .s1Q9rs');
                    const priceElement = item.querySelector('._30jeq3, ._1_WHN1');
                    const linkElement = item.querySelector('a._1fQZEK, a.s1Q9rs');
                    
                    if (nameElement && priceElement) {
                        const name = nameElement.textContent.trim();
                        const priceText = priceElement.textContent.replace(/[^\d]/g, '');
                        const price = parseInt(priceText);
                        
                        if (price && price > 1000) {
                            items.push({
                                name: name,
                                type: 'Smartphone',
                                maker: 'Apple',
                                model: name.includes('Pro Max') ? 'Pro Max' : 
                                       name.includes('Pro') ? 'Pro' : 
                                       name.includes('Plus') ? 'Plus' : 
                                       name.includes('Mini') ? 'Mini' : 'Standard',
                                price: `₹${price.toLocaleString('en-IN')}`,
                                priceValue: price,
                                link: linkElement ? 'https://www.flipkart.com' + linkElement.getAttribute('href') : '',
                                source: 'Flipkart'
                            });
                        }
                    }
                } catch (err) {
                    console.error('Error parsing Flipkart item:', err.message);
                }
            }
            
            return items;
        });
        
        await browser.close();
        console.log(`[Flipkart] Found ${products.length} valid products`);
        return products;
        
    } catch (error) {
        console.error('[Flipkart] Error:', error.message);
        if (browser) await browser.close();
        return [];
    }
}

/**
 * Main function - scrape both sites
 */
async function scrapeAllSites(searchQuery) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Starting Price Comparison for: ${searchQuery}`);
    console.log(`${'='.repeat(50)}`);
    
    const startTime = Date.now();
    
    try {
        // Run scrapers in parallel
        const [amazonResults, flipkartResults] = await Promise.allSettled([
            scrapeAmazon(searchQuery),
            scrapeFlipkart(searchQuery)
        ]);
        
        // Combine results
        const allProducts = [
            ...(amazonResults.status === 'fulfilled' ? amazonResults.value : []),
            ...(flipkartResults.status === 'fulfilled' ? flipkartResults.value : [])
        ];
        
        // Sort by price
        allProducts.sort((a, b) => a.priceValue - b.priceValue);
        
        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(2);
        
        console.log(`\n${'='.repeat(50)}`);
        console.log(`Scraping Complete!`);
        console.log(`Total Products Found: ${allProducts.length}`);
        console.log(`Time Taken: ${duration} seconds`);
        console.log(`${'='.repeat(50)}\n`);
        
        return allProducts;
        
    } catch (error) {
        console.error('Error during scraping:', error);
        return [];
    }
}

module.exports = {
    scrapeAllSites,
    scrapeAmazon,
    scrapeFlipkart
};
