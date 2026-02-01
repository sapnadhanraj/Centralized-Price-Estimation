const express = require('express');
const path = require('path');
const scrapeProducts = require('./scraper'); // Scraper logic
const { getRealTimePrices, getFallbackData } = require('./iphone-scraper-realtime'); // Real-time scraper with working links
const { iphonePriceDatabase, getIPhoneImage } = require('./iphone-mock-data-test'); // Test database for "Not found" logic
const { smartphoneDatabase, brandConfigs } = require('./smartphone-database'); // Multi-brand database
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
    res.render('phone_query');
});

// API endpoint to serve smartphone database for homepage
app.get('/api/smartphones', (req, res) => {
    // Extract all unique models with their details
    const products = [];
    
    Object.keys(smartphoneDatabase).forEach(model => {
        const productData = smartphoneDatabase[model][0]; // Get first entry (has all details)
        if (productData) {
            products.push({
                brand: productData.brand,
                model: model,
                name: productData.name,
                image: productData.image,
                price: productData.price,
                priceValue: productData.priceValue
            });
        }
    });
    
    res.json({
        products: products,
        brandConfigs: brandConfigs
    });
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

// Multi-Brand Phone Query Route
app.get('/phone-query', (req, res) => {
    res.render('phone_query');
});

// Multi-Brand Phone Comparison Route
app.get('/compare-phone', async (req, res) => {
    const { brand, model, returnUrl } = req.query;

    console.log('Phone Comparison request received:');
    console.log('Brand:', brand);
    console.log('Model:', model);
    console.log('Return URL:', returnUrl);

    try {
        // Get products from database
        const products = smartphoneDatabase[model] || [];
        
        if (products.length === 0) {
            console.log(`No products found for ${brand} ${model}`);
        } else {
            console.log(`Found ${products.length} products for ${brand} ${model}`);
        }

        // Get brand config
        const brandConfig = brandConfigs[brand] || {
            icon: 'fas fa-mobile-alt',
            color: '#667eea',
            displayName: brand
        };

        // Get product image
        const productImage = products.length > 0 ? products[0].image : '';

        res.render('phone_comparison', { 
            products: products,
            selectedProduct: {
                name: model,
                brand: brand,
                fullName: `${brand} ${model}`,
                image: productImage
            },
            brandConfig: brandConfig,
            searchQuery: `${brand} ${model}`,
            returnUrl: returnUrl || '/home'
        });

    } catch (error) {
        console.error('Error fetching phone products:', error);
        res.render('phone_comparison', { 
            products: [],
            selectedProduct: {
                name: model,
                brand: brand,
                fullName: `${brand} ${model}`,
                image: ''
            },
            brandConfig: brandConfigs[brand] || { icon: 'fas fa-mobile-alt', color: '#667eea', displayName: brand },
            searchQuery: `${brand} ${model}`,
            returnUrl: returnUrl || '/home',
            error: 'Unable to fetch product data'
        });
    }
});

// Direct iPhone Comparison Route (legacy support)
app.get('/compare-iphone', async (req, res) => {
    const { name, storage, color, size, query, returnUrl } = req.query;

    console.log('iPhone Comparison request received:');
    console.log('Name:', name);
    console.log('Storage:', storage);
    console.log('Color:', color);
    console.log('Size:', size);
    console.log('Return URL:', returnUrl);

    try {
        // Get prices from all 3 websites (real-time + fallback)
        let products = await getRealTimePrices(name);
        console.log(`Results for ${name}: ${products.length} products from 3 websites`);

        // Ensure we always have 3 website entries
        const requiredSources = ['Amazon India', 'Flipkart', 'Croma'];
        const existingSources = products.map(p => p.source);
        
        // Add missing sources as "not available"
        for (const source of requiredSources) {
            if (!existingSources.includes(source)) {
                products.push({
                    name: name,
                    price: null,
                    priceValue: null,
                    link: null,
                    source: source,
                    available: false,
                    isRealTime: false,
                    image: getIPhoneImage(name)
                });
            }
        }

        console.log(`Found ${products.length} products for ${name}`);
        
        // Add metadata about data sources
        const realTimeCount = products.filter(p => p.isRealTime).length;
        const fallbackCount = products.filter(p => !p.isRealTime && p.available).length;
        const unavailableCount = products.filter(p => !p.available).length;
        
        console.log(`Real-time: ${realTimeCount}, Verified: ${fallbackCount}, Unavailable: ${unavailableCount}`);

        // Get product image
        const productImage = products.find(p => p.image)?.image || getIPhoneImage(name);

        res.render('iphone_comparison', { 
            products: products || [],
            selectedProduct: {
                name: name,
                storage: storage,
                color: color,
                size: size,
                image: productImage
            },
            searchQuery: name,
            returnUrl: returnUrl || '/home',
            metadata: {
                totalResults: products.length,
                realTimeResults: realTimeCount,
                fallbackResults: fallbackCount,
                unavailableResults: unavailableCount,
                lastUpdated: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Error fetching iPhone products:', error);
        
        // Last resort: use database directly
        try {
            console.log('Critical error, attempting database fallback...');
            const fallbackProducts = iphonePriceDatabase[name] || [];
            
            res.render('iphone_comparison', { 
                products: fallbackProducts || [],
                selectedProduct: {
                    name: name,
                    storage: storage,
                    color: color,
                    size: size,
                    image: getIPhoneImage(name)
                },
                searchQuery: name,
                returnUrl: returnUrl || '/home',
                error: 'Real-time data unavailable, showing verified historical prices',
                metadata: {
                    totalResults: fallbackProducts ? fallbackProducts.length : 0,
                    realTimeResults: 0,
                    fallbackResults: fallbackProducts ? fallbackProducts.filter(p => p.available).length : 0,
                    unavailableResults: fallbackProducts ? fallbackProducts.filter(p => !p.available).length : 0,
                    lastUpdated: new Date().toISOString()
                }
            });
        } catch (fallbackError) {
            console.error('Complete failure:', fallbackError);
            res.render('iphone_comparison', { 
                products: [],
                selectedProduct: {
                    name: name,
                    storage: storage,
                    color: color,
                    size: size,
                    image: getIPhoneImage(name)
                },
                searchQuery: name,
                returnUrl: returnUrl || '/home',
                error: 'Unable to fetch product data at this time',
                metadata: {
                    totalResults: 0,
                    realTimeResults: 0,
                    fallbackResults: 0,
                    unavailableResults: 0,
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
        // Use model name directly for search
        const searchQuery = model;
        console.log('Search Query:', searchQuery);

        // Get prices from all 3 websites
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
