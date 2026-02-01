/**
 * Multi-Brand Smartphone Price Database
 * 
 * Brands: Apple, Samsung, Oppo, Realme, Vivo
 * 3 E-commerce Websites: Amazon India, Flipkart, Croma
 * 
 * Prices are reference MRP - actual prices may vary
 */

// Helper function to generate image path from model name
function getImagePath(model) {
    // Convert model name to lowercase and replace spaces with underscores
    const imageName = model.toLowerCase().replace(/\s+/g, '_');
    return `img/phones/${imageName}.jpg`;
}

// URL Generators
function generateAmazonLink(brand, model) {
    const query = encodeURIComponent(`${brand} ${model}`);
    return `https://www.amazon.in/s?k=${query}`;
}

function generateFlipkartLink(brand, model) {
    const query = `${brand} ${model}`.toLowerCase().replace(/ /g, '+');
    return `https://www.flipkart.com/search?q=${query}`;
}

function generateCromaLink(brand, model) {
    const query = encodeURIComponent(`${brand} ${model}`);
    return `https://www.croma.com/searchB?q=${query}%3Arelevance`;
}

// Product Database - Popular models actually available on all 3 sites
const smartphoneDatabase = {
    // ==================== APPLE iPHONE ====================
    'iPhone 16 Pro Max': [
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,44,900', priceValue: 144900, link: generateAmazonLink('Apple', 'iPhone 16 Pro Max 256GB'), source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') },
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,44,900', priceValue: 144900, link: generateFlipkartLink('Apple', 'iPhone 16 Pro Max 256GB'), source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') },
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,44,900', priceValue: 144900, link: generateCromaLink('Apple', 'iPhone 16 Pro Max 256GB'), source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') }
    ],
    'iPhone 15': [
        { name: 'Apple iPhone 15 128GB', price: '₹79,900', priceValue: 79900, link: generateAmazonLink('Apple', 'iPhone 15 128GB'), source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 15') },
        { name: 'Apple iPhone 15 128GB', price: '₹79,900', priceValue: 79900, link: generateFlipkartLink('Apple', 'iPhone 15 128GB'), source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 15') },
        { name: 'Apple iPhone 15 128GB', price: '₹79,900', priceValue: 79900, link: generateCromaLink('Apple', 'iPhone 15 128GB'), source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 15') }
    ],
    'iPhone 14': [
        { name: 'Apple iPhone 14 128GB', price: '₹69,900', priceValue: 69900, link: generateAmazonLink('Apple', 'iPhone 14 128GB'), source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' },
        { name: 'Apple iPhone 14 128GB', price: '₹69,900', priceValue: 69900, link: generateFlipkartLink('Apple', 'iPhone 14 128GB'), source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' },
        { name: 'Apple iPhone 14 128GB', price: '₹69,900', priceValue: 69900, link: generateCromaLink('Apple', 'iPhone 14 128GB'), source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' }
    ],
    'iPhone 13': [
        { name: 'Apple iPhone 13 128GB', price: '₹59,900', priceValue: 59900, link: generateAmazonLink('Apple', 'iPhone 13 128GB'), source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' },
        { name: 'Apple iPhone 13 128GB', price: '₹59,900', priceValue: 59900, link: generateFlipkartLink('Apple', 'iPhone 13 128GB'), source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' },
        { name: 'Apple iPhone 13 128GB', price: '₹59,900', priceValue: 59900, link: generateCromaLink('Apple', 'iPhone 13 128GB'), source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' }
    ],
    'iPhone SE': [
        { name: 'Apple iPhone SE 64GB', price: '₹49,900', priceValue: 49900, link: generateAmazonLink('Apple', 'iPhone SE 64GB'), source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' },
        { name: 'Apple iPhone SE 64GB', price: '₹49,900', priceValue: 49900, link: generateFlipkartLink('Apple', 'iPhone SE 64GB'), source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' },
        { name: 'Apple iPhone SE 64GB', price: '₹49,900', priceValue: 49900, link: generateCromaLink('Apple', 'iPhone SE 64GB'), source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' }
    ],

    // ==================== SAMSUNG ====================
    'Galaxy S24 Ultra': [
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,29,999', priceValue: 129999, link: generateAmazonLink('Samsung', 'Galaxy S24 Ultra'), source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' },
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,29,999', priceValue: 129999, link: generateFlipkartLink('Samsung', 'Galaxy S24 Ultra'), source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' },
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,29,999', priceValue: 129999, link: generateCromaLink('Samsung', 'Galaxy S24 Ultra'), source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' }
    ],
    'Galaxy S23': [
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹74,999', priceValue: 74999, link: generateAmazonLink('Samsung', 'Galaxy S23'), source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' },
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹74,999', priceValue: 74999, link: generateFlipkartLink('Samsung', 'Galaxy S23'), source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' },
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹74,999', priceValue: 74999, link: generateCromaLink('Samsung', 'Galaxy S23'), source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' }
    ],
    'Galaxy A55': [
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹39,999', priceValue: 39999, link: generateAmazonLink('Samsung', 'Galaxy A55 5G'), source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' },
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹39,999', priceValue: 39999, link: generateFlipkartLink('Samsung', 'Galaxy A55 5G'), source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' },
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹39,999', priceValue: 39999, link: generateCromaLink('Samsung', 'Galaxy A55 5G'), source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' }
    ],
    'Galaxy A35': [
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹30,999', priceValue: 30999, link: generateAmazonLink('Samsung', 'Galaxy A35 5G'), source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' },
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹30,999', priceValue: 30999, link: generateFlipkartLink('Samsung', 'Galaxy A35 5G'), source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' },
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹30,999', priceValue: 30999, link: generateCromaLink('Samsung', 'Galaxy A35 5G'), source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' }
    ],
    'Galaxy M35': [
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateAmazonLink('Samsung', 'Galaxy M35 5G'), source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' },
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateFlipkartLink('Samsung', 'Galaxy M35 5G'), source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' },
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateCromaLink('Samsung', 'Galaxy M35 5G'), source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' }
    ],

    // ==================== OPPO ====================
    'Reno 12 Pro': [
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹36,999', priceValue: 36999, link: generateAmazonLink('Oppo', 'Reno 12 Pro 5G'), source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' },
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹36,999', priceValue: 36999, link: generateFlipkartLink('Oppo', 'Reno 12 Pro 5G'), source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' },
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹36,999', priceValue: 36999, link: generateCromaLink('Oppo', 'Reno 12 Pro 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' }
    ],
    'Reno 11 Pro': [
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹39,999', priceValue: 39999, link: generateAmazonLink('Oppo', 'Reno 11 Pro 5G'), source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' },
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹39,999', priceValue: 39999, link: generateFlipkartLink('Oppo', 'Reno 11 Pro 5G'), source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' },
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹39,999', priceValue: 39999, link: generateCromaLink('Oppo', 'Reno 11 Pro 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' }
    ],
    'F27 Pro': [
        { name: 'Oppo F27 Pro 5G 8GB 128GB', price: '₹27,999', priceValue: 27999, link: generateAmazonLink('Oppo', 'F27 Pro 5G'), source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' },
        { name: 'Oppo F27 Pro 5G 8GB 128GB', price: '₹27,999', priceValue: 27999, link: generateFlipkartLink('Oppo', 'F27 Pro 5G'), source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' },
        { name: 'Oppo F27 Pro 5G 8GB 128GB', price: '₹27,999', priceValue: 27999, link: generateCromaLink('Oppo', 'F27 Pro 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' }
    ],
    'A3 Pro': [
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateAmazonLink('Oppo', 'A3 Pro 5G'), source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' },
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateFlipkartLink('Oppo', 'A3 Pro 5G'), source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' },
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateCromaLink('Oppo', 'A3 Pro 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' }
    ],
    'K12x': [
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹14,999', priceValue: 14999, link: generateAmazonLink('Oppo', 'K12x 5G'), source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' },
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹14,999', priceValue: 14999, link: generateFlipkartLink('Oppo', 'K12x 5G'), source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' },
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹14,999', priceValue: 14999, link: generateCromaLink('Oppo', 'K12x 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' }
    ],

    // ==================== REALME ====================
    'GT 6': [
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹44,999', priceValue: 44999, link: generateAmazonLink('Realme', 'GT 6 5G'), source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' },
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹44,999', priceValue: 44999, link: generateFlipkartLink('Realme', 'GT 6 5G'), source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' },
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹44,999', priceValue: 44999, link: generateCromaLink('Realme', 'GT 6 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' }
    ],
    '13 Pro Plus': [
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹35,999', priceValue: 35999, link: generateAmazonLink('Realme', '13 Pro Plus 5G'), source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' },
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹35,999', priceValue: 35999, link: generateFlipkartLink('Realme', '13 Pro Plus 5G'), source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' },
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹35,999', priceValue: 35999, link: generateCromaLink('Realme', '13 Pro Plus 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' }
    ],
    'Narzo 70 Pro': [
        { name: 'Realme Narzo 70 Pro 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateAmazonLink('Realme', 'Narzo 70 Pro 5G'), source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' },
        { name: 'Realme Narzo 70 Pro 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateFlipkartLink('Realme', 'Narzo 70 Pro 5G'), source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' },
        { name: 'Realme Narzo 70 Pro 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: generateCromaLink('Realme', 'Narzo 70 Pro 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' }
    ],
    'P1 Pro': [
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateAmazonLink('Realme', 'P1 Pro 5G'), source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' },
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateFlipkartLink('Realme', 'P1 Pro 5G'), source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' },
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateCromaLink('Realme', 'P1 Pro 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' }
    ],
    'C65': [
        { name: 'Realme C65 5G 6GB 128GB', price: '₹12,999', priceValue: 12999, link: generateAmazonLink('Realme', 'C65 5G'), source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/C65.png' },
        { name: 'Realme C65 5G 6GB 128GB', price: '₹12,999', priceValue: 12999, link: generateFlipkartLink('Realme', 'C65 5G'), source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/C65.png' },
        { name: 'Realme C65 5G 6GB 128GB', price: '₹12,999', priceValue: 12999, link: generateCromaLink('Realme', 'C65 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/C65.png' }
    ],

    // ==================== VIVO ====================
    'X100': [
        { name: 'Vivo X100 5G 12GB 256GB', price: '₹63,999', priceValue: 63999, link: generateAmazonLink('Vivo', 'X100 5G'), source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' },
        { name: 'Vivo X100 5G 12GB 256GB', price: '₹63,999', priceValue: 63999, link: generateFlipkartLink('Vivo', 'X100 5G'), source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' },
        { name: 'Vivo X100 5G 12GB 256GB', price: '₹63,999', priceValue: 63999, link: generateCromaLink('Vivo', 'X100 5G'), source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' }
    ],
    'V30': [
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹33,999', priceValue: 33999, link: generateAmazonLink('Vivo', 'V30 5G'), source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' },
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹33,999', priceValue: 33999, link: generateFlipkartLink('Vivo', 'V30 5G'), source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' },
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹33,999', priceValue: 33999, link: generateCromaLink('Vivo', 'V30 5G'), source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' }
    ],
    'T3': [
        { name: 'Vivo T3 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateAmazonLink('Vivo', 'T3 5G'), source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' },
        { name: 'Vivo T3 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateFlipkartLink('Vivo', 'T3 5G'), source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' },
        { name: 'Vivo T3 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: generateCromaLink('Vivo', 'T3 5G'), source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' }
    ],
    'Y200': [
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹23,999', priceValue: 23999, link: generateAmazonLink('Vivo', 'Y200 5G'), source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' },
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹23,999', priceValue: 23999, link: generateFlipkartLink('Vivo', 'Y200 5G'), source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' },
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹23,999', priceValue: 23999, link: generateCromaLink('Vivo', 'Y200 5G'), source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' }
    ],
    'Y28': [
        { name: 'Vivo Y28 5G 6GB 128GB', price: '₹15,999', priceValue: 15999, link: generateAmazonLink('Vivo', 'Y28 5G'), source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' },
        { name: 'Vivo Y28 5G 6GB 128GB', price: '₹15,999', priceValue: 15999, link: generateFlipkartLink('Vivo', 'Y28 5G'), source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' },
        { name: 'Vivo Y28 5G 6GB 128GB', price: '₹15,999', priceValue: 15999, link: generateCromaLink('Vivo', 'Y28 5G'), source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' }
    ]
};

// Brand configurations
const brandConfigs = {
    'Apple': {
        icon: 'fab fa-apple',
        color: '#000000',
        displayName: 'Apple iPhone'
    },
    'Samsung': {
        icon: 'fas fa-mobile-alt',
        color: '#1428A0',
        displayName: 'Samsung Galaxy'
    },
    'Oppo': {
        icon: 'fas fa-mobile-alt',
        color: '#00A86B',
        displayName: 'Oppo'
    },
    'Realme': {
        icon: 'fas fa-mobile-alt',
        color: '#FFD700',
        displayName: 'Realme'
    },
    'Vivo': {
        icon: 'fas fa-mobile-alt',
        color: '#0066CC',
        displayName: 'Vivo'
    }
};

module.exports = {
    smartphoneDatabase,
    brandConfigs,
    generateAmazonLink,
    generateFlipkartLink,
    generateCromaLink
};
