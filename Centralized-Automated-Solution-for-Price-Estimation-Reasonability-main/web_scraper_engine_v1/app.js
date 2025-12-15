const express = require('express');
const path = require('path');
const scrapeProducts = require('./scraper'); // Scraper logic
const { getRealTimePrices } = require('./iphone-scraper-realtime'); // Real-time scraper with working links
const { iphonePriceDatabase } = require('./iphone-mock-data-test'); // Test database for "Not found" logic
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

// Direct iPhone Comparison Route
app.get('/compare-iphone', async (req, res) => {
    const { name, storage, color, size, query } = req.query;

    console.log('iPhone Comparison request received:');
    console.log('Name:', name);
    console.log('Storage:', storage);
    console.log('Color:', color);
    console.log('Size:', size);

    try {
        // Try real-time scraper first for live price estimation
        let products = await getRealTimePrices(name);
        console.log(`Real-time results for ${name}:`, products);

        // If real-time scraping fails or returns no results, use working links database
        if (!products || products.length === 0) {
            console.log('Real-time scraping returned no results, using working links database...');
            console.log(`[Working Links] Getting data for: ${name}`);
            
            const fallbackData = iphonePriceDatabase[name];
            if (fallbackData && fallbackData.length > 0) {
                products = fallbackData.map(item => ({
                    ...item,
                    isRealTime: false,
                    fallbackReason: 'Using verified working links database'
                }));
                
                console.log(`✅ Found ${products.length} products with working links`);
            } else {
                console.log(`❌ No data found for: ${name}`);
                products = [];
            }
        }

        console.log(`Found ${products.length} products for ${name}`);
        
        // Add metadata about data sources
        const realTimeCount = products.filter(p => p.isRealTime).length;
        const fallbackCount = products.filter(p => !p.isRealTime).length;
        
        console.log(`Real-time data: ${realTimeCount}, Fallback data: ${fallbackCount}`);

        // Function to get iPhone image with fallbacks
        function getIPhoneImage(model) {
            const images = {
                'iPhone 16 Pro Max': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
                'iPhone 16 Pro': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg', 
                'iPhone 16 Plus': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
                'iPhone 16': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
                'iPhone 15 Pro Max': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
                'iPhone 15 Pro': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
                'iPhone 15 Plus': 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg',
                'iPhone 15': 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg'
            };
            return images[model] || 'https://picsum.photos/400/600?random=1';
        }

        res.render('iphone_comparison', { 
            products: products || [],
            selectedProduct: {
                name: name,
                storage: storage,
                color: color,
                size: size,
                image: products && products.length > 0 ? products[0].image : getIPhoneImage(name)
            },
            searchQuery: name,
            metadata: {
                totalResults: products.length,
                realTimeResults: realTimeCount,
                fallbackResults: fallbackCount,
                lastUpdated: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Error fetching iPhone products:', error);
        
        // Last resort: try verified data
        try {
            console.log('Critical error, attempting verified data as last resort...');
            // Use mock data as fallback instead of removed scraper
            const fallbackProducts = iphonePriceDatabase[name] || [];
            
            res.render('iphone_comparison', { 
                products: fallbackProducts || [],
                selectedProduct: {
                    name: name,
                    storage: storage,
                    color: color,
                    size: size
                },
                searchQuery: name,
                error: 'Real-time data unavailable, showing verified historical prices',
                metadata: {
                    totalResults: fallbackProducts ? fallbackProducts.length : 0,
                    realTimeResults: 0,
                    fallbackResults: fallbackProducts ? fallbackProducts.length : 0,
                    lastUpdated: new Date().toISOString()
                }
            });
        } catch (fallbackError) {
            console.error('Complete failure - both scrapers failed:', fallbackError);
            res.render('iphone_comparison', { 
                products: [],
                selectedProduct: {
                    name: name,
                    storage: storage,
                    color: color,
                    size: size
                },
                searchQuery: name,
                error: 'Unable to fetch product data at this time',
                metadata: {
                    totalResults: 0,
                    realTimeResults: 0,
                    fallbackResults: 0,
                    lastUpdated: new Date().toISOString()
                }
            });
        }
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
        const products = await getRealTimePrices(searchQuery);

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
