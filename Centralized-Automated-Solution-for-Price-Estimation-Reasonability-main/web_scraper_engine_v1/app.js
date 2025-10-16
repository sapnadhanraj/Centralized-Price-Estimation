const express = require('express');
const path = require('path');
const scrapeProducts = require('./scraper'); // Scraper logic
const app = express();

// Use the environment port if provided, otherwise default to 3000
const PORT = process.env.PORT || 3000;
// Serve static files from the "public" directory
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

// Render query_1 page with an empty products array
app.get('/first', (req, res) => {
    res.render('query_1', { products: [] });
});

// Render query_2 page with an empty products array
app.get('/second', (req, res) => {
    res.render('query_2', { products: [] });
});

// Handle search requests
app.get('/search', async (req, res) => {
    const { title, specs, make, model, queryPage } = req.query;

    try {
        // Determine which template to render (query_1 or query_2)
        const viewTemplate = queryPage === 'query_1' ? 'query_1' : 'query_2';

        let products = [];

        if (make && model) {
            // Scrape products with title, specs, make, and model (for query_1)
            products = await scrapeProducts(title, specs, make, model);
        } else {
            // Scrape products with title and specs only (for query_2)
            products = await scrapeProducts(title, specs);
        }

        // Render the appropriate template with the scraped products
        res.render(viewTemplate, { products: products || [] });

    } catch (error) {
        console.error('Error fetching products:', error);
        // Render the appropriate template with an empty array in case of an error
        res.render(viewTemplate, { products: [] });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
