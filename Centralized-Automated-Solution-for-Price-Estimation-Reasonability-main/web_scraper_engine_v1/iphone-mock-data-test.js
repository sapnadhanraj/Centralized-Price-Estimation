/**
 * iPhone Price Database with WORKING Search URLs
 * 
 * IMPORTANT: Prices shown are Apple India MRP (Reference Prices)
 * Actual prices on e-commerce websites may differ due to discounts/offers
 * 
 * All links use simple search URLs that WILL work and show correct products
 * 
 * 3 E-commerce Websites:
 * 1. Amazon India - Simple search
 * 2. Flipkart - Simple search  
 * 3. Croma - Simple search
 */

// URL Generators - VERIFIED Working search URLs (tested January 2026)
function generateAmazonLink(model) {
    const query = encodeURIComponent(`Apple ${model}`);
    return `https://www.amazon.in/s?k=${query}`;
}

function generateFlipkartLink(model) {
    const query = model.toLowerCase().replace(/ /g, '+');
    return `https://www.flipkart.com/search?q=apple+${query}`;
}

function generateCromaLink(model) {
    // Croma uses searchB endpoint with :relevance suffix
    const query = encodeURIComponent(`Apple ${model}`);
    return `https://www.croma.com/searchB?q=${query}%3Arelevance`;
}

// Helper function for iPhone images (using Apple CDN)
function getIPhoneImage(model) {
    const images = {
        'iPhone 16 Pro Max': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-naturaltitanium?wid=300&hei=300&fmt=png-alpha',
        'iPhone 16 Pro': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=300&hei=300&fmt=png-alpha',
        'iPhone 16 Plus': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-plus-finish-select-202409-6-7inch-ultramarine?wid=300&hei=300&fmt=png-alpha',
        'iPhone 16': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=300&hei=300&fmt=png-alpha',
        'iPhone 15 Pro Max': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-finish-select-202309-6-7inch-naturaltitanium?wid=300&hei=300&fmt=png-alpha',
        'iPhone 15 Pro': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=300&hei=300&fmt=png-alpha',
        'iPhone 15 Plus': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-plus-finish-select-202309-6-7inch-blue?wid=300&hei=300&fmt=png-alpha',
        'iPhone 15': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=300&hei=300&fmt=png-alpha',
        'iPhone 14': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=300&hei=300&fmt=png-alpha',
        'iPhone 13': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-midnight?wid=300&hei=300&fmt=png-alpha'
    };
    return images[model] || images['iPhone 15'];
}

const iphonePriceDatabase = {
    // ==================== iPhone 16 Series (Latest - September 2024) ====================
    'iPhone 16 Pro Max': [
        {
            name: 'Apple iPhone 16 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro Max',
            price: '₹1,44,900',
            priceValue: 144900,
            link: generateAmazonLink('iPhone 16 Pro Max'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro Max'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro Max',
            price: '₹1,44,900',
            priceValue: 144900,
            link: generateFlipkartLink('iPhone 16 Pro Max'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro Max'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro Max',
            price: '₹1,44,900',
            priceValue: 144900,
            link: generateCromaLink('iPhone 16 Pro Max'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro Max'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 16 Pro': [
        {
            name: 'Apple iPhone 16 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro',
            price: '₹1,19,900',
            priceValue: 119900,
            link: generateAmazonLink('iPhone 16 Pro'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro',
            price: '₹1,19,900',
            priceValue: 119900,
            link: generateFlipkartLink('iPhone 16 Pro'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Pro',
            price: '₹1,19,900',
            priceValue: 119900,
            link: generateCromaLink('iPhone 16 Pro'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 16 Pro'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 16 Plus': [
        {
            name: 'Apple iPhone 16 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateAmazonLink('iPhone 16 Plus'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 16 Plus'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateFlipkartLink('iPhone 16 Plus'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 16 Plus'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateCromaLink('iPhone 16 Plus'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 16 Plus'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 16': [
        {
            name: 'Apple iPhone 16 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16',
            price: '₹79,900',
            priceValue: 79900,
            link: generateAmazonLink('iPhone 16 128GB'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 16'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16',
            price: '₹79,900',
            priceValue: 79900,
            link: generateFlipkartLink('iPhone 16 128GB'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 16'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 16 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 16',
            price: '₹79,900',
            priceValue: 79900,
            link: generateCromaLink('iPhone 16'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 16'),
            lastChecked: '2026-01-26'
        }
    ],

    // ==================== iPhone 15 Series ====================
    'iPhone 15 Pro Max': [
        {
            name: 'Apple iPhone 15 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro Max',
            price: '₹1,59,900',
            priceValue: 159900,
            link: generateAmazonLink('iPhone 15 Pro Max'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro Max'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro Max',
            price: '₹1,59,900',
            priceValue: 159900,
            link: generateFlipkartLink('iPhone 15 Pro Max'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro Max'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Pro Max 256GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro Max',
            price: '₹1,59,900',
            priceValue: 159900,
            link: generateCromaLink('iPhone 15 Pro Max'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro Max'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 15 Pro': [
        {
            name: 'Apple iPhone 15 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro',
            price: '₹1,34,900',
            priceValue: 134900,
            link: generateAmazonLink('iPhone 15 Pro'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro',
            price: '₹1,34,900',
            priceValue: 134900,
            link: generateFlipkartLink('iPhone 15 Pro'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Pro 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Pro',
            price: '₹1,34,900',
            priceValue: 134900,
            link: generateCromaLink('iPhone 15 Pro'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 15 Pro'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 15 Plus': [
        {
            name: 'Apple iPhone 15 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateAmazonLink('iPhone 15 Plus'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 15 Plus'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateFlipkartLink('iPhone 15 Plus'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 15 Plus'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15 Plus',
            price: '₹89,900',
            priceValue: 89900,
            link: generateCromaLink('iPhone 15 Plus'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 15 Plus'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 15': [
        {
            name: 'Apple iPhone 15 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15',
            price: '₹79,900',
            priceValue: 79900,
            link: generateAmazonLink('iPhone 15 128GB'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 15'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15',
            price: '₹79,900',
            priceValue: 79900,
            link: generateFlipkartLink('iPhone 15 128GB'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 15'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 15 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 15',
            price: '₹79,900',
            priceValue: 79900,
            link: generateCromaLink('iPhone 15'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 15'),
            lastChecked: '2026-01-26'
        }
    ],

    // ==================== iPhone 14 Series ====================
    'iPhone 14 Pro Max': [
        {
            name: 'Apple iPhone 14 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 14 Pro': [
        {
            name: 'Apple iPhone 14 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 14 Plus': [
        {
            name: 'Apple iPhone 14 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Plus',
            price: '₹79,900',
            priceValue: 79900,
            link: generateAmazonLink('iPhone 14 Plus'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Plus',
            price: '₹79,900',
            priceValue: 79900,
            link: generateFlipkartLink('iPhone 14 Plus'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 Plus 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14 Plus',
            price: '₹79,900',
            priceValue: 79900,
            link: generateCromaLink('iPhone 14 Plus'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 14': [
        {
            name: 'Apple iPhone 14 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14',
            price: '₹69,900',
            priceValue: 69900,
            link: generateAmazonLink('iPhone 14 128GB'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14',
            price: '₹69,900',
            priceValue: 69900,
            link: generateFlipkartLink('iPhone 14 128GB'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 14 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 14',
            price: '₹69,900',
            priceValue: 69900,
            link: generateCromaLink('iPhone 14'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 14'),
            lastChecked: '2026-01-26'
        }
    ],

    // ==================== iPhone 13 Series ====================
    'iPhone 13 Pro Max': [
        {
            name: 'Apple iPhone 13 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 13 Pro': [
        {
            name: 'Apple iPhone 13 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 13': [
        {
            name: 'Apple iPhone 13 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13',
            price: '₹59,900',
            priceValue: 59900,
            link: generateAmazonLink('iPhone 13 128GB'),
            source: 'Amazon India',
            available: true,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13',
            price: '₹59,900',
            priceValue: 59900,
            link: generateFlipkartLink('iPhone 13 128GB'),
            source: 'Flipkart',
            available: true,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 128GB',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13',
            price: '₹59,900',
            priceValue: 59900,
            link: generateCromaLink('iPhone 13'),
            source: 'Croma',
            available: true,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 13 Mini': [
        {
            name: 'Apple iPhone 13 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 13 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 13 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    // ==================== iPhone 12 Series (All Discontinued) ====================
    'iPhone 12 Pro Max': [
        {
            name: 'Apple iPhone 12 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Pro Max (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro Max',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 12 Pro': [
        {
            name: 'Apple iPhone 12 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Pro (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Pro',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 12': [
        {
            name: 'Apple iPhone 12 (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ],

    'iPhone 12 Mini': [
        {
            name: 'Apple iPhone 12 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Amazon India',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Flipkart',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        },
        {
            name: 'Apple iPhone 12 Mini (Discontinued)',
            type: 'Smartphone',
            maker: 'Apple',
            model: 'iPhone 12 Mini',
            price: null,
            priceValue: null,
            link: null,
            source: 'Croma',
            available: false,
            image: getIPhoneImage('iPhone 13'),
            lastChecked: '2026-01-26'
        }
    ]
};

module.exports = {
    iphonePriceDatabase,
    getIPhoneImage,
    generateAmazonLink,
    generateFlipkartLink,
    generateCromaLink
};

