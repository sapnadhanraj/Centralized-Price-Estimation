/**
 * Mock iPhone Price Data
 * In production, this would be replaced with:
 * - Database queries
 * - Scheduled background scraping jobs
 * - API integration with price comparison services
 */

const iphonePriceDatabase = {
    'iPhone 15 Pro Max': [
        { name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,59,900', priceValue: 159900, link: 'https://www.amazon.in/dp/B0CHX3TW6X', source: 'Amazon India' },
        { name: 'Apple iPhone 15 Pro Max 256GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,59,900', priceValue: 159900, link: 'https://www.flipkart.com/apple-iphone-15-pro-max', source: 'Flipkart' },
        { name: 'iPhone 15 Pro Max 256GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,59,900', priceValue: 159900, link: 'https://www.apple.com/in/shop/buy-iphone/iphone-15-pro', source: 'Apple India' },
        { name: 'Apple iPhone 15 Pro Max 256 GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,62,990', priceValue: 162990, link: 'https://www.croma.com/apple-iphone-15-pro-max', source: 'Croma' },
        { name: 'iPhone 15 Pro Max (Natural Titanium, 256 GB)', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,59,900', priceValue: 159900, link: 'https://www.reliancedigital.in/apple-iphone-15-pro-max', source: 'Reliance Digital' }
    ],
    'iPhone 15 Pro': [
        { name: 'Apple iPhone 15 Pro (256 GB) - Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,34,900', priceValue: 134900, link: 'https://www.amazon.in/dp/B0CHX1W1XY', source: 'Amazon India' },
        { name: 'Apple iPhone 15 Pro 256GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,34,900', priceValue: 134900, link: 'https://www.flipkart.com/apple-iphone-15-pro', source: 'Flipkart' },
        { name: 'iPhone 15 Pro 256GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,34,900', priceValue: 134900, link: 'https://www.apple.com/in/shop/buy-iphone/iphone-15-pro', source: 'Apple India' },
        { name: 'Apple iPhone 15 Pro 256 GB Natural Titanium', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,37,990', priceValue: 137990, link: 'https://www.croma.com/apple-iphone-15-pro', source: 'Croma' }
    ],
    'iPhone 15 Plus': [
        { name: 'Apple iPhone 15 Plus (256 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹99,900', priceValue: 99900, link: 'https://www.amazon.in/dp/B0CHX4B5RD', source: 'Amazon India' },
        { name: 'Apple iPhone 15 Plus 256GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹99,900', priceValue: 99900, link: 'https://www.flipkart.com/apple-iphone-15-plus', source: 'Flipkart' },
        { name: 'iPhone 15 Plus 256GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹99,900', priceValue: 99900, link: 'https://www.apple.com/in/shop/buy-iphone/iphone-15', source: 'Apple India' },
        { name: 'Apple iPhone 15 Plus 256 GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹1,02,990', priceValue: 102990, link: 'https://www.croma.com/apple-iphone-15-plus', source: 'Croma' }
    ],
    'iPhone 15': [
        { name: 'Apple iPhone 15 (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹79,900', priceValue: 79900, link: 'https://www.amazon.in/dp/B0CHX2Z1DY', source: 'Amazon India' },
        { name: 'Apple iPhone 15 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹79,600', priceValue: 79600, link: 'https://www.flipkart.com/apple-iphone-15', source: 'Flipkart' },
        { name: 'iPhone 15 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹79,900', priceValue: 79900, link: 'https://www.apple.com/in/shop/buy-iphone/iphone-15', source: 'Apple India' },
        { name: 'Apple iPhone 15 128 GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹82,990', priceValue: 82990, link: 'https://www.croma.com/apple-iphone-15', source: 'Croma' }
    ],
    'iPhone 14 Pro Max': [
        { name: 'Apple iPhone 14 Pro Max (256 GB) - Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,39,900', priceValue: 139900, link: 'https://www.amazon.in/dp/B0BDJ6K4LC', source: 'Amazon India' },
        { name: 'Apple iPhone 14 Pro Max 256GB Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,38,999', priceValue: 138999, link: 'https://www.flipkart.com/apple-iphone-14-pro-max', source: 'Flipkart' },
        { name: 'Apple iPhone 14 Pro Max 256 GB Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,42,990', priceValue: 142990, link: 'https://www.croma.com/apple-iphone-14-pro-max', source: 'Croma' }
    ],
    'iPhone 14 Pro': [
        { name: 'Apple iPhone 14 Pro (256 GB) - Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,19,900', priceValue: 119900, link: 'https://www.amazon.in/dp/B0BDJ7HFRS', source: 'Amazon India' },
        { name: 'Apple iPhone 14 Pro 256GB Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,18,999', priceValue: 118999, link: 'https://www.flipkart.com/apple-iphone-14-pro', source: 'Flipkart' },
        { name: 'Apple iPhone 14 Pro 256 GB Deep Purple', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,22,990', priceValue: 122990, link: 'https://www.croma.com/apple-iphone-14-pro', source: 'Croma' }
    ],
    'iPhone 14 Plus': [
        { name: 'Apple iPhone 14 Plus (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹79,900', priceValue: 79900, link: 'https://www.amazon.in/dp/B0BDJ5Y3CG', source: 'Amazon India' },
        { name: 'Apple iPhone 14 Plus 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹78,999', priceValue: 78999, link: 'https://www.flipkart.com/apple-iphone-14-plus', source: 'Flipkart' },
        { name: 'Apple iPhone 14 Plus 128 GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Plus', price: '₹82,990', priceValue: 82990, link: 'https://www.croma.com/apple-iphone-14-plus', source: 'Croma' }
    ],
    'iPhone 14': [
        { name: 'Apple iPhone 14 (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹59,900', priceValue: 59900, link: 'https://www.amazon.in/dp/B0BDJ632CZ', source: 'Amazon India' },
        { name: 'Apple iPhone 14 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹58,999', priceValue: 58999, link: 'https://www.flipkart.com/apple-iphone-14', source: 'Flipkart' },
        { name: 'Apple iPhone 14 128 GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹62,990', priceValue: 62990, link: 'https://www.croma.com/apple-iphone-14', source: 'Croma' }
    ],
    'iPhone 13 Pro Max': [
        { name: 'Apple iPhone 13 Pro Max (256 GB) - Sierra Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,19,900', priceValue: 119900, link: 'https://www.amazon.in/dp/B09G9HD6P8', source: 'Amazon India' },
        { name: 'Apple iPhone 13 Pro Max 256GB Sierra Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,18,500', priceValue: 118500, link: 'https://www.flipkart.com/apple-iphone-13-pro-max', source: 'Flipkart' },
        { name: 'Apple iPhone 13 Pro Max 256 GB Sierra Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹1,22,990', priceValue: 122990, link: 'https://www.croma.com/apple-iphone-13-pro-max', source: 'Croma' }
    ],
    'iPhone 13 Pro': [
        { name: 'Apple iPhone 13 Pro (256 GB) - Sierra Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,09,900', priceValue: 109900, link: 'https://www.amazon.in/dp/B09G9FTPC2', source: 'Amazon India' },
        { name: 'Apple iPhone 13 Pro 256GB Sierra Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹1,08,500', priceValue: 108500, link: 'https://www.flipkart.com/apple-iphone-13-pro', source: 'Flipkart' }
    ],
    'iPhone 13': [
        { name: 'Apple iPhone 13 (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹49,900', priceValue: 49900, link: 'https://www.amazon.in/dp/B09G9BL5CP', source: 'Amazon India' },
        { name: 'Apple iPhone 13 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹48,999', priceValue: 48999, link: 'https://www.flipkart.com/apple-iphone-13', source: 'Flipkart' },
        { name: 'Apple iPhone 13 128 GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹52,990', priceValue: 52990, link: 'https://www.croma.com/apple-iphone-13', source: 'Croma' }
    ],
    'iPhone 13 Mini': [
        { name: 'Apple iPhone 13 Mini (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Mini', price: '₹44,900', priceValue: 44900, link: 'https://www.amazon.in/dp/B09G9C8CKZ', source: 'Amazon India' },
        { name: 'Apple iPhone 13 Mini 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Mini', price: '₹43,999', priceValue: 43999, link: 'https://www.flipkart.com/apple-iphone-13-mini', source: 'Flipkart' }
    ],
    'iPhone 12 Pro Max': [
        { name: 'Apple iPhone 12 Pro Max (256 GB) - Pacific Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹99,900', priceValue: 99900, link: 'https://www.amazon.in/dp/B08L5TNJHG', source: 'Amazon India' },
        { name: 'Apple iPhone 12 Pro Max 256GB Pacific Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro Max', price: '₹98,500', priceValue: 98500, link: 'https://www.flipkart.com/apple-iphone-12-pro-max', source: 'Flipkart' }
    ],
    'iPhone 12 Pro': [
        { name: 'Apple iPhone 12 Pro (256 GB) - Pacific Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹89,900', priceValue: 89900, link: 'https://www.amazon.in/dp/B08L5VFHM3', source: 'Amazon India' },
        { name: 'Apple iPhone 12 Pro 256GB Pacific Blue', type: 'Smartphone', maker: 'Apple', model: 'Pro', price: '₹88,500', priceValue: 88500, link: 'https://www.flipkart.com/apple-iphone-12-pro', source: 'Flipkart' }
    ],
    'iPhone 12': [
        { name: 'Apple iPhone 12 (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹49,900', priceValue: 49900, link: 'https://www.amazon.in/dp/B08L5THJL7', source: 'Amazon India' },
        { name: 'Apple iPhone 12 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Standard', price: '₹48,500', priceValue: 48500, link: 'https://www.flipkart.com/apple-iphone-12', source: 'Flipkart' }
    ],
    'iPhone 12 Mini': [
        { name: 'Apple iPhone 12 Mini (128 GB) - Blue', type: 'Smartphone', maker: 'Apple', model: 'Mini', price: '₹44,900', priceValue: 44900, link: 'https://www.amazon.in/dp/B08L5T7N6P', source: 'Amazon India' },
        { name: 'Apple iPhone 12 Mini 128GB Blue', type: 'Smartphone', maker: 'Apple', model: 'Mini', price: '₹43,500', priceValue: 43500, link: 'https://www.flipkart.com/apple-iphone-12-mini', source: 'Flipkart' }
    ]
};

/**
 * Get price data for a specific iPhone model
 * @param {string} modelName - iPhone model name (e.g., "iPhone 15 Pro Max")
 * @returns {Array} Array of price objects
 */
function getMockPrices(modelName) {
    console.log(`[Mock Data] Fetching prices for: ${modelName}`);
    
    // Find matching model in database
    const results = iphonePriceDatabase[modelName] || [];
    
    // Sort by price (lowest first)
    results.sort((a, b) => a.priceValue - b.priceValue);
    
    console.log(`[Mock Data] Found ${results.length} price entries`);
    return results;
}

module.exports = {
    getMockPrices,
    iphonePriceDatabase
};
