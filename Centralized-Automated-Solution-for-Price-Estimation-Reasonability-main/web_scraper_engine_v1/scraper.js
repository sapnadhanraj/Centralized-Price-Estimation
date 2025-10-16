const puppeteer = require('puppeteer');

async function scrapeProducts(title, specs, make = null, model = null) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Construct Google Shopping search URL
    let searchQuery;
    if (make && model) {
        searchQuery = `${title} ${specs} ${make} ${model}`.replace(/ /g, '+');
    } else {
        searchQuery = `${title} ${specs}`.replace(/ /g, '+');
    }
    const url = `https://www.google.com/search?q=${searchQuery}&tbm=shop`;

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Scraping product details
        const products = await page.evaluate(async () => {
            let productData = [];
            let items = document.querySelectorAll('.sh-dgr__content');

            for (let i = 0; i < 5 && i < items.length; i++) {
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

                    // Fetch the release date from another source
                    const releaseDate = await fetchReleaseDate(title); // Fetching logic moved outside
                    if(i==0) {continue;}
                    productData.push({
                        title,
                        price,
                        source,
                        productUrl,
                        image,
                        releaseDate // Include the release date in the product data
                    });
                }
            }

            return productData;

            async function fetchReleaseDate(title) {
                // Logic to fetch the release date based on the title
                // This is just an example; replace it with actual scraping or API calls
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title + ' release date')}`;
                const response = await fetch(searchUrl);
                const text = await response.text();

                // Implement logic to parse the response text and extract the release date
                // Placeholder logic (you'll need to replace it with actual parsing)
                const releaseDateMatch = text.match(/Release Date:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
                return releaseDateMatch ? releaseDateMatch[1] : 'Not Available';
            }
        });

        if (products.length === 0) {
            console.log('No products found. Please check if the selectors are correct.');
        }

        await browser.close();
        return products;

    } catch (error) {
        console.error('Error during scraping:', error);
        await browser.close();
        return []; // Return an empty array in case of error
    }
}

module.exports = scrapeProducts;
