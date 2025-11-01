const express = require('express');
const path = require('path');
const scrapeProducts = require('./scraper'); // Scraper logic
const { getMockPrices } = require('./iphone-mock-data'); // Mock iPhone price data
const app = express();

// Use the environment port if provided, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the parent directory (where Style, img folders are located)
app.use(express.static(path.join(__dirname, '..')));

// Also serve files from current directory
app.use(express.static(path.join(__dirname, '')));

// Serve the "registration.html" file located in the parent directory as the starting page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../registration.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Render query_1 page with an empty products array
app.get('/first', (req, res) => {
    res.render('query_1', { products: [] });
});

// Render query_2 page with an empty products array
app.get('/second', (req, res) => {
    res.render('query_2', { products: [] });
});

// iPhone Query Routes
app.get('/iphone-query-1', (req, res) => {
    res.render('iphone_query_1');
});

// Direct iPhone Comparison Route (NEW)
app.get('/compare-iphone', async (req, res) => {
    const { name, storage, color, size, query } = req.query;

    console.log('iPhone Comparison request received:');
    console.log('Name:', name);
    console.log('Storage:', storage);
    console.log('Color:', color);
    console.log('Size:', size);

    try {
        // Use mock data for demonstration
        // In production, this would query a database with pre-scraped data
        const products = getMockPrices(name);

        console.log(`Found ${products.length} price entries for ${name}`);

        res.render('iphone_comparison', { 
            products: products || [],
            selectedProduct: {
                name: name,
                storage: storage,
                color: color,
                size: size
            },
            searchQuery: name
        });

    } catch (error) {
        console.error('Error fetching iPhone products:', error);
        res.render('iphone_comparison', { 
            products: [],
            selectedProduct: {
                name: name,
                storage: storage,
                color: color,
                size: size
            },
            searchQuery: name,
            error: error.message
        });
    }
});

app.get('/search-iphone', async (req, res) => {
    const { series, model, storage, queryType } = req.query;

    console.log('iPhone Search request received:');
    console.log('Series:', series);
    console.log('Model:', model);
    console.log('Storage:', storage);
    console.log('Query Type:', queryType);

    try {
        const searchQuery = `${model} ${storage}`;
        console.log('Search Query:', searchQuery);

        // Call the iPhone scraper
        const products = await scrapeAllSites(searchQuery);

        res.render('iphone_results', { 
            products: products || [],
            searchQuery: searchQuery,
            model: model,
            storage: storage
        });

    } catch (error) {
        console.error('Error fetching iPhone products:', error);
        res.render('iphone_results', { 
            products: [],
            searchQuery: '',
            model: '',
            storage: ''
        });
    }
});

// Handle search requests
app.get('/search', async (req, res) => {
    const { title, specs, make, model, queryPage } = req.query;

    console.log('Search request received:');
    console.log('Title:', title);
    console.log('Specs:', specs);
    console.log('Make:', make);
    console.log('Model:', model);
    console.log('Query Page:', queryPage);

    try {
        // Determine which template to render (query_1 or query_2)
        const viewTemplate = queryPage === 'query_1' ? 'query_1' : 'query_2';

        let products = [];

        console.log('Starting scraping...');
        if (make && model) {
            // Scrape products with title, specs, make, and model (for query_1)
            products = await scrapeProducts(title, specs, make, model);
        } else {
            // Scrape products with title and specs only (for query_2)
            products = await scrapeProducts(title, specs);
        }

        console.log('Scraping completed. Products found:', products.length);
        console.log('Products:', products);

        // Render the appropriate template with the scraped products
        res.render(viewTemplate, { products: products || [] });

    } catch (error) {
        console.error('Error fetching products:', error);
        // Render the appropriate template with an empty array in case of an error
        const viewTemplate = queryPage === 'query_1' ? 'query_1' : 'query_2';
        res.render(viewTemplate, { products: [] });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
