const puppeteer = require('puppeteer');

async function scrapeProducts(title, specs, make = null, model = null) {
    console.log('Scraper started with params:', { title, specs, make, model });
    
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Construct Google Shopping search URL
    let searchQuery;
    if (make && model) {
        searchQuery = `${title} ${specs} ${make} ${model}`.replace(/ /g, '+');
    } else {
        searchQuery = `${title} ${specs}`.replace(/ /g, '+');
    }
    const url = `https://www.google.com/search?q=${searchQuery}&tbm=shop`;
    
    console.log('Search URL:', url);

    try {
        console.log('Navigating to Google Shopping...');
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        console.log('Page loaded successfully');

        // Scraping product details
        const products = await page.evaluate(() => {
            let productData = [];
            let items = document.querySelectorAll('.sh-dgr__content');
            
            console.log('Found items:', items.length);

            for (let i = 0; i < items.length && productData.length < 5; i++) {
                const item = items[i];

                const title = item.querySelector('.tAxDx')?.textContent || 'N/A';
                const price = item.querySelector('.a8Pemb')?.textContent || 'N/A';
                const image = item.querySelector('.ArOc1c img')?.src || '';
                
                // Extracting source/store name and product URL
                const offerContent = item.querySelector('.sh-dgr__offer-content');
                if (offerContent) {
                    const linkElement = offerContent.querySelector('a.shntl');
                    const source = linkElement ? linkElement.querySelector('.aULzUe')?.textContent.trim() : 'N/A';
                    const productUrl = linkElement ? linkElement.href : '';

                    // Get current date as release date
                    const releaseDate = new Date().toISOString().split('T')[0];
                    
                    productData.push({
                        title,
                        price,
                        source,
                        productUrl,
                        image,
                        releaseDate
                    });
                }
            }

            return productData;
        });

        console.log('Products scraped:', products.length);
        
        if (products.length === 0) {
            console.log('No products found. The page structure might have changed or no results available.');
        }

        await browser.close();
        return products;

    } catch (error) {
        console.error('Error during scraping:', error.message);
        console.error('Stack trace:', error.stack);
        await browser.close();
        return []; // Return an empty array in case of error
    }
}

module.exports = scrapeProducts;
