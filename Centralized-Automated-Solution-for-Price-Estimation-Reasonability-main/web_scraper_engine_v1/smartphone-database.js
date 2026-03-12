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
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,34,900', priceValue: 134900, link: 'https://www.amazon.in/iPhone-16-Pro-Max-TB/dp/B0DGJD75G2', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') },
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,34,900', priceValue: 134900, link: 'https://www.flipkart.com/apple-iphone-16-pro-max-black-titanium-256-gb/p/itm7e75db4f27bd5', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') },
        { name: 'Apple iPhone 16 Pro Max 256GB', price: '₹1,27,490', priceValue: 127490, link: 'https://www.croma.com/apple-iphone-16-pro-max-256gb-white-titanium-/p/309744', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro Max') }
    ],
    'iPhone 15': [
        { name: 'Apple iPhone 15 256GB', price: '₹64,900', priceValue: 64900, link: 'https://www.amazon.in/Apple-iPhone-15-256-GB/dp/B0CHX6N27Y', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 15') },
        { name: 'Apple iPhone 15 128GB', price: '₹54,900', priceValue: 54900, link: 'https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 15') },
        { name: 'Apple iPhone 15 128GB', price: '₹54,790', priceValue: 54790, link: 'https://www.croma.com/apple-iphone-15-128gb-black-/p/300684', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 15') }
    ],
    'iPhone 14': [
        { name: 'Apple iPhone 14 128GB', price: '₹59,999', priceValue: 59999, link: 'https://www.amazon.in/s?k=iphone+14', source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' },
        { name: 'Apple iPhone 14 128GB', price: '₹54,900', priceValue: 54900, link: 'https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d', source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' },
        { name: 'Apple iPhone 14 128GB', price: '₹52,999', priceValue: 52999, link: 'https://www.croma.com/apple-iphone-14-128gb-blue-/p/261941', source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_14.jpg' }
    ],
    'iPhone 13': [
        { name: 'Apple iPhone 13 128GB', price: '₹49,900', priceValue: 49900, link: 'https://www.amazon.in/dp/B09G9D8KRQ', source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' },
        { name: 'Apple iPhone 13 128GB', price: '₹49,900', priceValue: 49900, link: 'https://www.flipkart.com/apple-iphone-13-pink-128-gb/p/itm6e30c6ee045d2', source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' },
        { name: 'Apple iPhone 13 128GB', price: '₹45,690', priceValue: 45690, link: 'https://www.croma.com/apple-iphone-13-128gb-blue-/p/243463', source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_13.jpg' }
    ],
    'iPhone SE': [
        { name: 'Apple iPhone SE 64GB', price: '₹41,900', priceValue: 41900, link: 'https://www.amazon.in/Apple-iPhone-SE-64-Generation/dp/B09V44MF6K', source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' },
        { name: 'Apple iPhone SE 64GB', price: '₹39,900', priceValue: 39900, link: 'https://www.flipkart.com/apple-iphone-se-black-64-gb/p/itm832dd5963a08d', source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' },
        { name: 'Apple iPhone SE 64GB', price: '₹39,900', priceValue: 39900, link: 'https://www.croma.com/apple-iphone-se-64gb-midnight-/p/249850', source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_SE.jpg' }
    ],
    'iPhone 16 Pro': [
        { name: 'Apple iPhone 16 Pro 128GB', price: '₹1,10,900', priceValue: 110900, link: 'https://www.amazon.in/s?k=iphone+16+pro&crid=3PZ8H8S5DOBZR&sprefix=iphone+16+pr%2Caps%2C348&ref=nb_sb_noss_2', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro') },
        { name: 'Apple iPhone 16 Pro 128GB', price: '₹1,09,900', priceValue: 109900, link: 'https://www.flipkart.com/apple-iphone-16-pro-black-titanium-128-gb/p/itm12f97adb4c5ed', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro') },
        { name: 'Apple iPhone 16 Pro 128GB', price: '₹1,03,900', priceValue: 103900, link: 'https://www.croma.com/apple-iphone-16-pro-128gb-desert-titanium-/p/309727', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 16 Pro') }
    ],
    'iPhone 16': [
        { name: 'Apple iPhone 16 128GB', price: '₹69,900', priceValue: 69900, link: 'https://www.amazon.in/s?k=iphone+16', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 16') },
        { name: 'Apple iPhone 16 128GB', price: '₹64,900', priceValue: 64900, link: 'https://www.flipkart.com/apple-iphone-16-white-128-gb/p/itm7c0281cd247be', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 16') },
        { name: 'Apple iPhone 16 128GB', price: '₹64,900', priceValue: 64900, link: 'https://www.croma.com/apple-iphone-16-128gb-black-/p/309621', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 16') }
    ],
    'iPhone 15 Pro Max': [
        { name: 'Apple iPhone 15 Pro Max 256GB', price: '₹1,60,900', priceValue: 160900, link: 'https://www.amazon.in/s?k=iphone+15+pro+max', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro Max') },
        { name: 'Apple iPhone 15 Pro Max 256GB', price: '₹1,59,900', priceValue: 159900, link: 'https://www.flipkart.com/apple-iphone-15-pro-max-black-titanium-256-gb/p/itmd170cfc1dec9e', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro Max') },
        { name: 'Apple iPhone 15 Pro Max 256GB', price: '₹1,58,900', priceValue: 158900, link: 'https://www.croma.com/apple-iphone-15-pro-max-256gb-natural-titanium-/p/300819', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro Max') }
    ],
    'iPhone 15 Pro': [
        { name: 'Apple iPhone 15 Pro 128GB', price: '₹1,34,900', priceValue: 134900, link: 'https://www.amazon.in/Apple-iPhone-15-Pro-128/dp/B0CHX2DRGV', source: 'Amazon India', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro') },
        { name: 'Apple iPhone 15 Pro 128GB', price: '₹1,34,900', priceValue: 134900, link: 'https://www.flipkart.com/apple-iphone-15-pro-black-titanium-128-gb/p/itm96f61fdd7e604', source: 'Flipkart', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro') },
        { name: 'Apple iPhone 15 Pro 128GB', price: '₹1,34,900', priceValue: 134900, link: 'https://www.croma.com/apple-iphone-15-pro-128gb-natural-titanium-/p/300749', source: 'Croma', available: true, brand: 'Apple', image: getImagePath('iPhone 15 Pro') }
    ],
    'iPhone 12': [
        { name: 'Apple iPhone 12 64GB', price: '₹51,900', priceValue: 51900, link: 'https://www.amazon.in/s?k=iPhone+12&crid=27H8T0FDHGW9C&sprefix=iphone+12%2Caps%2C392&ref=nb_sb_noss_2', source: 'Amazon India', available: true, brand: 'Apple', image: 'img/phones/iphone_12.jpg' },
        { name: 'Apple iPhone 12 64GB', price: '₹49,900', priceValue: 49900, link: 'https://www.flipkart.com/apple-iphone-12-white-64-gb/p/itm8b88bdc03cd79', source: 'Flipkart', available: true, brand: 'Apple', image: 'img/phones/iphone_12.jpg' },
        { name: 'Apple iPhone 12 64GB', price: '₹49,900', priceValue: 49900, link: 'https://www.croma.com/searchB?q=iphone%2012%3Arelevance&text=iphone%2012', source: 'Croma', available: true, brand: 'Apple', image: 'img/phones/iphone_12.jpg' }
    ],

    // ==================== SAMSUNG ====================
    'Galaxy S24 Ultra': [
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,09,900', priceValue: 109900, link: 'https://www.amazon.in/s?k=Galaxy+S24+Ultra&crid=28KOL3Z0MRHF9&sprefix=galaxy+s24+ultra%2Caps%2C341&ref=nb_sb_noss_2', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' },
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,19,999', priceValue: 119999, link: 'https://www.flipkart.com/samsung-galaxy-s24-ultra-5g-titanium-gray-256-gb/p/itm12ef5ea0212ed', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' },
        { name: 'Samsung Galaxy S24 Ultra 12GB 256GB', price: '₹1,19,999', priceValue: 119999, link: 'https://www.croma.com/samsung-galaxy-s24-ultra-5g-12gb-ram-256gb-titanium-gray-/p/303838', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_ultra.jpg' }
    ],
    'Galaxy S23': [
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹49,999', priceValue: 49999, link: 'https://www.amazon.in/s?k=samsung+s23&crid=338BYCDG4VQPM&sprefix=samsung+s%2Caps%2C352&ref=nb_sb_noss_2', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' },
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹47,999', priceValue: 47999, link: 'https://www.flipkart.com/samsung-galaxy-s23-5g-green-128-gb/p/itm6fe1123c0e2e2', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' },
        { name: 'Samsung Galaxy S23 8GB 128GB', price: '₹44,994', priceValue: 44994, link: 'https://www.croma.com/samsung-galaxy-s23-5g-8gb-ram-128gb-green-/p/268867', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S23.jpg' }
    ],
    'Galaxy A55': [
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹27,999', priceValue: 27999, link: 'https://www.amazon.in/Samsung-Awesome-Storage-Nightography-Corning/dp/B0CWPBBQ3M', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' },
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹32,990', priceValue: 32990, link: 'https://www.flipkart.com/samsung-galaxy-a55-5g-awesome-iceblue-128-gb/p/itm0bb662185bcc4', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' },
        { name: 'Samsung Galaxy A55 5G 8GB 128GB', price: '₹32,990', priceValue: 32990, link: 'https://www.croma.com/searchB?q=samsung%20a55%3Arelevance&text=samsung%20a55', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A55.jpg' }
    ],
    'Galaxy A35': [
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹21,998', priceValue: 21998, link: 'https://www.amazon.in/samsung-Galaxy-Awesome-Storage-Without/dp/B0CXMD9YX5', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' },
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: 'https://www.flipkart.com/samsung-galaxy-a35-5g-awesome-navy-128-gb/p/itm12fccc5bfbaac', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' },
        { name: 'Samsung Galaxy A35 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: 'https://www.croma.com/searchB?q=samsung%20a35%3Arelevance&text=samsung%20a35', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A35.jpg' }
    ],
    'Galaxy M35': [
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹16,999', priceValue: 16999, link: 'https://www.amazon.in/Samsung-Moonlight-Storage-Corning-Gorilla/dp/B0D8134JH8', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' },
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹22,000', priceValue: 22000, link: 'https://www.flipkart.com/samsung-galaxy-m35-5g-daybreak-blue-128-gb/p/itmd4d8ef7b859de', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' },
        { name: 'Samsung Galaxy M35 5G 8GB 128GB', price: '₹16,999', priceValue: 16999, link: 'https://www.croma.com/searchB?q=samsung%20m35%3Arelevance&text=samsung%20m35', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M35.jpg' }
    ],
    'Galaxy S24 Plus': [
        { name: 'Samsung Galaxy S24+ 12GB 256GB', price: '₹69,490', priceValue: 69490, link: 'https://www.amazon.in/Samsung-Galaxy-Smartphone-Cobalt-Storage/dp/B0CS6FPH6P', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_plus.jpg' },
        { name: 'Samsung Galaxy S24+ 12GB 256GB', price: '₹59,999', priceValue: 59999, link: 'https://www.flipkart.com/samsung-galaxy-s24-5g-onyx-black-256-gb/p/itm325da4a26d7bb', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_plus.jpg' },
        { name: 'Samsung Galaxy S24+ 12GB 256GB', price: '₹59,999', priceValue: 59999, link: 'https://www.croma.com/samsung-galaxy-s24-plus-5g-12gb-ram-256gb-onyx-black-/p/303861', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24_plus.jpg' }
    ],
    'Galaxy S24': [
        { name: 'Samsung Galaxy S24 8GB 256GB', price: '₹43,990', priceValue: 43990, link: 'https://www.amazon.in/Samsung-Galaxy-Smartphone-Black-Storage/dp/B0CS62KYQY', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24.jpg' },
        { name: 'Samsung Galaxy S24 8GB 128GB', price: '₹42,999', priceValue: 42999, link: 'https://www.flipkart.com/samsung-galaxy-s24-5g-snapdragon-amber-yellow-128-gb/p/itmd4baa945a78ef', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24.jpg' },
        { name: 'Samsung Galaxy S24 8GB 256GB', price: '₹70,999', priceValue: 70999, link: 'https://www.croma.com/samsung-galaxy-s24-5g-8gb-ram-256gb-onyx-black-/p/303849', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_S24.jpg' }
    ],
    'Galaxy A25': [
        { name: 'Samsung Galaxy A25 5G 8GB 128GB', price: '₹20,999', priceValue: 20999, link: 'https://www.amazon.in/Samsung-Storage-Android-Expandable-Battery/dp/B0CP7VDJN1', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A25.jpg' },
        { name: 'Samsung Galaxy A25 5G 8GB 256GB', price: '₹31,499', priceValue: 31499, link: 'https://www.flipkart.com/samsung-galaxy-a25-5g-blue-black-256-gb/p/itm2a8153e01ba0b', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A25.jpg' },
        { name: 'Samsung Galaxy A25 5G 8GB 128GB', price: '₹18,499', priceValue: 18499, link: 'https://www.croma.com/samsung-galaxy-a25-5g-8gb-ram-128gb-blue-/p/303397', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A25.jpg' }
    ],
    'Galaxy A15': [
        { name: 'Samsung Galaxy A15 5G 6GB 128GB', price: '₹16,900', priceValue: 16900, link: 'https://www.amazon.in/Samsung-Storage-Expandable-MediaTek-Dimensity/dp/B0CP7W9ZDZ', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A15.jpg' },
        { name: 'Samsung Galaxy A15 5G 6GB 256GB', price: '₹16,869', priceValue: 16869, link: 'https://www.flipkart.com/samsung-galaxy-a15-5g-blue-256-gb/p/itm06604fe9b8276', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A15.jpg' },
        { name: 'Samsung Galaxy A15 5G 6GB 128GB', price: '₹15,499', priceValue: 15499, link: 'https://www.croma.com/samsung-galaxy-a15-5g-6gb-ram-128gb-light-blue-/p/303255', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_A15.jpg' }
    ],
    'Galaxy M15': [
        { name: 'Samsung Galaxy M15 5G 4GB 128GB', price: '₹12,904', priceValue: 12904, link: 'https://www.amazon.in/Samsung-Celestial-MediaTek-Dimensity-Security/dp/B0DGX9F1T6', source: 'Amazon India', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M15.jpg' },
        { name: 'Samsung Galaxy M15 5G 4GB 128GB', price: '₹11,885', priceValue: 11885, link: 'https://www.flipkart.com/samsung-galaxy-m15-5g-blue-topaz-128-gb/p/itm99bbe4613b680', source: 'Flipkart', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M15.jpg' },
        { name: 'Samsung Galaxy M15 5G 4GB 128GB', price: '₹11,904', priceValue: 11904, link: 'https://www.croma.com/samsung-galaxy-m15-5g-prime-4gb-ram-128gb-dark-blue-/p/306006', source: 'Croma', available: true, brand: 'Samsung', image: 'img/phones/galaxy_M15.jpg' }
    ],

    // ==================== OPPO ====================
    'Reno 12 Pro': [
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹29,999', priceValue: 29999, link: 'https://www.amazon.in/Oppo-Reno-Pro-Sunset-Gold/dp/B0D9C5JZCT', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' },
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹53,999', priceValue: 53999, link: 'https://www.flipkart.com/oppo-reno-12-pro-5g-sunset-gold-256-gb/p/itmed01efe011f83', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' },
        { name: 'Oppo Reno 12 Pro 5G 12GB 256GB', price: '₹32,999', priceValue: 32999, link: 'https://www.croma.com/oppo-reno-12-pro-5g-12gb-ram-256gb-sunset-gold-/p/307963', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/reno_12_Pro.jpg' }
    ],
    'Reno 11 Pro': [
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹34,400', priceValue: 34400, link: 'https://www.amazon.in/Oppo-Pearl-White-256GB-Storage/dp/B0CVN5VDY8', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' },
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹44,999', priceValue: 44999, link: 'https://www.flipkart.com/oppo-reno-11-pro-5g-pearl-white-256-gb/p/itm18c5d66bdfaa4', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' },
        { name: 'Oppo Reno 11 Pro 5G 12GB 256GB', price: '₹42,999', priceValue: 42999, link: 'https://www.croma.com/oppo-reno11-pro-5g-12gb-ram-256gb-rock-grey-/p/303681', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/reno_11_Pro.jpg' }
    ],
    'F27 Pro': [
        { name: 'Oppo F27 Pro 5G 8GB 128GB', price: '₹27,999', priceValue: 27999, link: 'https://www.amazon.in/Midnight-Toughest-Featured-SUPERVOOC-Additional/dp/B0D53Y9W5D', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' },
        { name: 'Oppo F27 Pro 5G 8GB 128GB', price: '₹34,999', priceValue: 34999, link: 'https://www.flipkart.com/oppo-f27-pro-midnight-navy-128-gb/p/itm5235c3c836cc9', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' },
        { name: 'Oppo F27 Pro Plus 5G 8GB 128GB', price: '₹19,999', priceValue: 19999, link: 'https://www.croma.com/oppo-f27-pro-plus-5g-8gb-ram-128gb-midnight-navy-/p/307373', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/f27_Pro.jpg' }
    ],
    'A3 Pro': [
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹18,390', priceValue: 18390, link: 'https://www.amazon.in/Storage-Refresh-SUPERVOOC-Additional-Exchange/dp/B0D6R9RGN8', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' },
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹14,999', priceValue: 14999, link: 'https://www.flipkart.com/oppo-a3-pro-5g-moonlight-purple-128-gb/p/itm296e480f459a5', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' },
        { name: 'Oppo A3 Pro 5G 8GB 128GB', price: '₹16,999', priceValue: 16999, link: 'https://www.croma.com/oppo-a3-pro-5g-8gb-ram-128gb-starry-black-/p/307491', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/a3_Pro.jpg' }
    ],
    'K12x': [
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹12,747', priceValue: 12747, link: 'https://www.amazon.in/Oppo-K12x-SUPERVOOC-Charger-Breeze/dp/B0DHCXDHWQ', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' },
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹18,999', priceValue: 18999, link: 'https://www.flipkart.com/oppo-k12x-5g-45w-supervooc-charger-in-the-box-feather-pink-128-gb/p/itma30cb38861d4c', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' },
        { name: 'Oppo K12x 5G 8GB 128GB', price: '₹12,999', priceValue: 12999, link: 'https://www.croma.com/oppo-k12x-5g-6gb-ram-128gb-breeze-blue-/p/308829', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/K12x.jpg' }
    ],
    'Find X7': [
        { name: 'Oppo Find X7 5G 12GB 256GB', price: '₹25,999', priceValue: 25999, link: 'https://www.amazon.in/s?k=oppo+find+x7&i=electronics&crid=131CQN6EOS7XW&sprefix=oppofind+x7%2Celectronics%2C320&ref=nb_sb_noss_2', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/find_x7.jpg' },
        { name: 'Oppo Find X7 5G 12GB 256GB', price: '₹23,999', priceValue: 23999, link: 'https://www.flipkart.com/search?q=oppo%20find%20x7&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/find_x7.jpg' },
        { name: 'Oppo Find X7 5G 12GB 256GB', price: '₹21,999', priceValue: 21999, link: generateCromaLink('Oppo', 'Find X7 5G'), source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/find_x7.jpg' }
    ],
    'Reno 12': [
        { name: 'Oppo Reno 12 5G 8GB 256GB', price: '₹24,990', priceValue: 24990, link: 'https://www.amazon.in/Oppo-Reno-Matte-Brown-256/dp/B0DB6B6NB6', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/reno_12.jpg' },
        { name: 'Oppo Reno 12 5G 8GB 256GB', price: '₹19,298', priceValue: 19298, link: 'https://www.flipkart.com/oppo-reno-12-5g-matte-brown-256-gb/p/itm67abc047e245e', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/reno_12.jpg' },
        { name: 'Oppo Reno 12 5G 8GB 256GB', price: '₹19,100', priceValue: 19100, link: 'https://www.croma.com/oppo-reno-12-5g-8gb-ram-256gb-matte-brown-/p/307970', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/reno_12.jpg' }
    ],
    'A79 5G': [
        { name: 'Oppo A79 5G 8GB 128GB', price: '₹16,299', priceValue: 16299, link: 'https://www.amazon.in/Oppo-Glowing-SUPERVOOC-Additional-Exchange/dp/B0CL53RJML', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/a79_5g.jpg' },
        { name: 'Oppo A79 5G 8GB 128GB', price: '₹17,179', priceValue: 17179, link: 'https://www.flipkart.com/oppo-a79-5g-mystery-black-128-gb/p/itm5c4f5a203ee1f', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/a79_5g.jpg' },
        { name: 'Oppo A79 5G 8GB 128GB', price: '₹14,199', priceValue: 14199, link: 'https://www.croma.com/oppo-a79-5g-8gb-ram-128gb-glowing-green-/p/302439', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/a79_5g.jpg' }
    ],
    'A78 5G': [
        { name: 'Oppo A78 5G 8GB 128GB', price: '₹16,190', priceValue: 16190, link: 'https://www.amazon.in/Oppo-Glowing-SUPERVOOC-Additional-Exchange/dp/B082F2T5PQ', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/a78_5g.jpg' },
        { name: 'Oppo A78 5G 8GB 128GB', price: '₹18,999', priceValue: 18999, link: 'https://www.flipkart.com/oppo-a78-5g-glowing-blue-128-gb/p/itmf1eeaf323aaa5', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/a78_5g.jpg' },
        { name: 'Oppo A78 5G 8GB 128GB', price: '₹18,999', priceValue: 18999, link: 'https://www.croma.com/oppo-a78-5g-8gb-ram-128gb-glowing-black-/p/267796', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/a78_5g.jpg' }
    ],
    'A38': [
        { name: 'Oppo A38 4G 4GB 128GB', price: '₹11,590', priceValue: 11590, link: 'https://www.amazon.in/Glowing-SUPERVOOC-Waterdrop-Additional-Exchange/dp/B0CHDW6N8J', source: 'Amazon India', available: true, brand: 'Oppo', image: 'img/phones/a38.jpg' },
        { name: 'Oppo A38 4G 4GB 128GB', price: '₹11,888', priceValue: 11888, link: 'https://www.flipkart.com/oppo-a38-glowing-black-128-gb/p/itme1efb05b1af7f', source: 'Flipkart', available: true, brand: 'Oppo', image: 'img/phones/a38.jpg' },
        { name: 'Oppo A38 4G 4GB 128GB', price: '₹9,994', priceValue: 9994, link: 'https://www.croma.com/oppo-a38-4gb-ram-128gb-glowing-black-/p/300502', source: 'Croma', available: true, brand: 'Oppo', image: 'img/phones/a38.jpg' }
    ],

    // ==================== REALME ====================
    'GT 6': [
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹29,999', priceValue: 29999, link: 'https://www.amazon.in/realme-GT-Smartphone-256-Green/dp/B0D2L42K9H', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' },
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹28,999', priceValue: 28999, link: 'https://www.flipkart.com/realme-gt-6-razor-green-256-gb/p/itm1a28b99c077b5', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' },
        { name: 'Realme GT 6 5G 12GB 256GB', price: '₹25,999', priceValue: 25999, link: 'https://www.croma.com/realme-gt-6-5g-12gb-ram-256gb-fluid-silver-/p/307771', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/GT_6.jpg' }
    ],
    '13 Pro Plus': [
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹26,999', priceValue: 26999, link: 'https://www.amazon.in/realme-Pro-256-Emerald-Green/dp/B0DBLX1K7P', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' },
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹25,999', priceValue: 25999, link: 'https://www.flipkart.com/realme-13-pro-5g-emerald-green-256-gb/p/itm1e3e0852d520a', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' },
        { name: 'Realme 13 Pro Plus 5G 12GB 256GB', price: '₹27,494', priceValue: 27494, link: 'https://www.croma.com/realme-13-pro-plus-5g-8gb-ram-256gb-monet-gold-/p/308451', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/13_Pro_Plus.jpg' }
    ],
    'Narzo 70 Pro': [
        { name: 'Realme Narzo 70 Pro 5G 8GB 256GB', price: '₹21,784', priceValue: 21784, link: 'https://www.amazon.in/realme-Storage-Dimensity-Chipset-Flagship/dp/B0CX1Y49P2', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' },
        { name: 'Realme Narzo 70 Pro 5G 8GB 256GB', price: '₹20,784', priceValue: 20784, link: 'https://www.flipkart.com/realme-rmx3870-glass-gold-256-gb/p/itme20ad7d947014', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' },
        { name: 'Realme Narzo 70 Pro 5G 8GB 256GB', price: '₹20,784', priceValue: 20784, link: generateCromaLink('Realme', 'Narzo 70 Pro 5G'), source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/Narzo_70_Pro.jpg' }
    ],
    'P1 Pro': [
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹18,999', priceValue: 18999, link: 'https://www.amazon.in/realme-Phoenix-Snapdragon-Processor-Resistance/dp/B0D2L7CG3D', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' },
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹15,999', priceValue: 15999, link: 'https://www.flipkart.com/realme-p1-pro-5g-parrot-blue-128-gb/p/itmc859edf8053dc', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' },
        { name: 'Realme P1 Pro 5G 8GB 128GB', price: '₹16,999', priceValue: 16999, link: 'https://www.croma.com/searchB?q=real%20me%20p1%20pro%3Arelevance&text=real%20me%20p1%20pro', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/P1_Pro.jpg' }
    ],
    'C65': [
        { name: 'Realme C65 5G 6GB 128GB', price: '₹10,900', priceValue: 10900, link: 'https://www.amazon.in/realme-C65-Feather-Green-128/dp/B0D2DNDQZW', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/C65.png' },
        { name: 'Realme C65 5G 6GB 128GB', price: '₹9,300', priceValue: 9300, link: 'https://www.flipkart.com/realme-c65-5g-feather-green-128-gb/p/itma294063ac4410', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/C65.png' },
        { name: 'Realme C65 5G 6GB 128GB', price: '₹11,999', priceValue: 11999, link: 'https://www.croma.com/realme-c65-5g-6gb-ram-128gb-feather-green-/p/306436', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/C65.png' }
    ],
    'GT Neo 6': [
        { name: 'Realme GT Neo 6 5G 12GB 256GB', price: '₹27,999', priceValue: 27999, link: 'https://www.amazon.in/gt-neo-6/s?k=gt+neo+6', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/GT_Neo_6.jpg' },
        { name: 'Realme GT Neo 6 5G 12GB 256GB', price: '₹28,999', priceValue: 28999, link: 'https://www.flipkart.com/realme-gt-6-razor-green-256-gb/p/itm1a28b99c077b5', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/GT_Neo_6.jpg' },
        { name: 'Realme GT Neo 6 5G 12GB 256GB', price: '₹35,999', priceValue: 35999, link: 'https://www.croma.com/realme-gt-6-5g-12gb-ram-256gb-fluid-silver-/p/307771', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/GT_Neo_6.jpg' }
    ],
    '13 Pro': [
        { name: 'Realme 13 Pro 5G 8GB 128GB', price: '₹22,999', priceValue: 22999, link: 'https://www.amazon.in/realme-Pro-Monet-Gold-128GB/dp/B0DBM2XQYF', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/13_Pro.jpg' },
        { name: 'Realme 13 Pro 5G 8GB 256GB', price: '₹29,890', priceValue: 29890, link: 'https://www.flipkart.com/realme-13-pro-5g-monet-purple-256-gb/p/itmf7360eb52d883', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/13_Pro.jpg' },
        { name: 'Realme 13 Pro 5G 8GB 128GB', price: '₹23,994', priceValue: 23994, link: 'https://www.croma.com/realme-13-pro-5g-8gb-ram-128gb-emerald-green-/p/308739', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/13_Pro.jpg' }
    ],
    'Narzo 70': [
        { name: 'Realme Narzo 70 5G 6GB 128GB', price: '₹13,500', priceValue: 13500, link: 'https://www.amazon.in/realme-narzo-Pro-128-Green/dp/B0CHQKRVMQ', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/Narzo_70.jpg' },
        { name: 'Realme Narzo 70 5G 6GB 128GB', price: '₹13,628', priceValue: 13628, link: 'https://www.flipkart.com/realme-narzo-70-5g-forest-green-128-gb/p/itm0d29cc0b3111b', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/Narzo_70.jpg' },
        { name: 'Realme Narzo 70 5G 6GB 128GB', price: '₹12,628', priceValue: 12628, link: 'https://www.croma.com/searchB?q=realme%20narzo%2070%3Arelevance&text=realme%20narzo%2070', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/Narzo_70.jpg' }
    ],
    'P2 Pro': [
        { name: 'Realme P2 Pro 5G 8GB 128GB', price: '₹18,999', priceValue: 18999, link: 'https://www.amazon.in/realme-Storage-Dynamic-Processor-Charging/dp/B0DH36JCN4', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/P2_Pro.jpg' },
        { name: 'Realme P2 Pro 5G 8GB 128GB', price: '₹17,999', priceValue: 17999, link: 'https://www.flipkart.com/realme-p2-pro-5g-parrot-green-128-gb/p/itm53d39fff9f20c', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/P2_Pro.jpg' },
        { name: 'Realme P2 Pro 5G 8GB 128GB', price: '₹17,500', priceValue: 17500, link: 'https://www.croma.com/searchB?q=realme%20p2%20pro%3Arelevance&text=realme%20p2%20pro', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/P2_Pro.jpg' }
    ],
    'C67 5G': [
        { name: 'Realme C67 5G 4GB 128GB', price: '₹14,999', priceValue: 14999, link: 'https://www.amazon.in/realme-C67-Sunny-Oasis-128/dp/B0CPVMQQH9', source: 'Amazon India', available: true, brand: 'Realme', image: 'img/phones/C67.jpg' },
        { name: 'Realme C67 5G 4GB 128GB', price: '₹14,999', priceValue: 14999, link: 'https://www.flipkart.com/realme-c67-5g-sunny-oasis-128-gb/p/itm1e65b288f166f', source: 'Flipkart', available: true, brand: 'Realme', image: 'img/phones/C67.jpg' },
        { name: 'Realme C67 5G 4GB 128GB', price: '₹11,694', priceValue: 11694, link: 'https://www.croma.com/realme-c67-5g-4gb-ram-128gb-dark-purple-/p/303219', source: 'Croma', available: true, brand: 'Realme', image: 'img/phones/C67.jpg' }
    ],

    // ==================== VIVO ====================
    'X100': [
        { name: 'Vivo X100 5G 12GB 256GB', price: '₹60,999', priceValue: 60999, link: 'https://www.amazon.in/Vivo-Asteroid-MediaTek-Dimensity-Processor/dp/B0D1N5NSCM', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' },
        { name: 'Vivo X100 Pro 5G 16GB 512GB', price: '₹59,999', priceValue: 59999, link: 'https://www.flipkart.com/vivo-x100-pro-asteroid-black-512-gb/p/itm798a26f6edb96', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' },
        { name: 'Vivo X100 5G 12GB 256GB', price: '₹45,994', priceValue: 45994, link: 'https://www.croma.com/vivo-x100-5g-12gb-ram-256gb-asteroid-black-/p/303562', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/X100.jpg' }
    ],
    'V30': [
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹28,999', priceValue: 28999, link: 'https://www.amazon.in/Peacock-Storage-Additional-Exchange-Offers/dp/B07WHRBK8X', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' },
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹31,999', priceValue: 31999, link: 'https://www.flipkart.com/vivo-v30-5g-classic-black-128-gb/p/itme3a94b78a025f', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' },
        { name: 'Vivo V30 5G 8GB 128GB', price: '₹25,499', priceValue: 25499, link: 'https://www.croma.com/vivo-v30-5g-8gb-ram-128gb-classic-black-/p/305298', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/V30.jpg' }
    ],
    'T3': [
        { name: 'Vivo T3 5G 8GB 256GB', price: '₹21,499', priceValue: 21499, link: 'https://www.amazon.in/Vivo-Cosmic-Blue-256-RAM/dp/B07WGP8898', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' },
        { name: 'Vivo T3 5G 8GB 256GB', price: '₹19,499', priceValue: 19499, link: 'https://www.flipkart.com/vivo-t3-5g-crystal-flake-256-gb/p/itm69b3c5633378f', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' },
        { name: 'Vivo T3 5G 8GB 128GB', price: '₹18,499', priceValue: 18499, link: 'https://www.croma.com/vivo-t3-5g-8gb-ram-128gb-crystal-flake-/p/305656', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/T3.jpg' }
    ],
    'Y200': [
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹22,999', priceValue: 22999, link: 'https://www.amazon.in/Vivo-Desert-Storage-Additional-Exchange/dp/B07WHPL866', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' },
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹21,999', priceValue: 21999, link: 'https://www.flipkart.com/vivo-y200-5g-jungle-green-128-gb/p/itmc79ade2c32297', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' },
        { name: 'Vivo Y200 5G 8GB 128GB', price: '₹21,599', priceValue: 21599, link: 'https://www.croma.com/vivo-y200-5g-8gb-ram-128gb-jungle-green-/p/302301', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/Y200.jpg' }
    ],
    'Y28': [
        { name: 'Vivo Y28 5G 6GB 128GB', price: '₹12,900', priceValue: 12900, link: 'https://www.amazon.in/Vivo-Glitter-Storage-Additional-Exchange/dp/B07WGPKSFV', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' },
        { name: 'Vivo Y28 5G 6GB 128GB', price: '₹12,850', priceValue: 12850, link: 'https://www.flipkart.com/vivo-y28-5g-crystal-purple-128-gb/p/itmf3cf02fda7962', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' },
        { name: 'Vivo Y28 5G 8GB 128GB', price: '₹15,999', priceValue: 15999, link: 'https://www.croma.com/vivo-y28-5g-8gb-ram-128gb-crystal-purple-/p/303528', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/Y28.jpg' }
    ],
    'X100 Pro': [
        { name: 'Vivo X100 Pro 5G 16GB 512GB', price: '₹58,999', priceValue: 58999, link: 'https://www.amazon.in/VIVO-X100-Pro-Smartphone-Dimensity/dp/B07WHRTX85', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/X100_Pro.jpg' },
        { name: 'Vivo X100 Pro 5G 16GB 512GB', price: '₹59,999', priceValue: 59999, link: 'https://www.flipkart.com/vivo-x100-pro-asteroid-black-512-gb/p/itm798a26f6edb96', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/X100_Pro.jpg' },
        { name: 'Vivo X100 Pro 5G 16GB 512GB', price: '₹59,994', priceValue: 59994, link: 'https://www.croma.com/vivo-x100-pro-5g-16gb-ram-512gb-asteroid-black-/p/303577', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/X100_Pro.jpg' }
    ],
    'V40': [
        { name: 'Vivo V40 5G 8GB 256GB', price: '₹36,999', priceValue: 36999, link: 'https://www.amazon.in/Titanium-Storage-Additional-Exchange-Offers/dp/B07WGPKPH3', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/V40.jpg' },
        { name: 'Vivo V40 5G 8GB 128GB', price: '₹34,999', priceValue: 34999, link: 'https://www.flipkart.com/vivo-v40-5g-ganges-blue-128-gb/p/itm444f2b97f5db4', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/V40.jpg' },
        { name: 'Vivo V40 5G 8GB 256GB', price: '₹36,999', priceValue: 36999, link: 'https://www.croma.com/vivo-v40-5g-8gb-ram-256gb-titanium-grey-/p/308790', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/V40.jpg' }
    ],
    'V29': [
        { name: 'Vivo V29 5G 12GB 256GB', price: '₹32,999', priceValue: 32999, link: 'https://www.amazon.in/Vivo-V29-Red-128-RAM/dp/B0CLDNSRJM', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/V29.jpg' },
        { name: 'Vivo V29 5G 8GB 128GB', price: '₹32,999', priceValue: 32999, link: 'https://www.flipkart.com/vivo-v29-5g-red-128-gb/p/itm69ac491d37e36', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/V29.jpg' },
        { name: 'Vivo V29 5G 12GB 256GB', price: '₹27,499', priceValue: 27499, link: 'https://www.croma.com/vivo-v29-5g-12gb-ram-256gb-majestic-red-/p/301350', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/V29.jpg' }
    ],
    'T2 Pro': [
        { name: 'Vivo T2 Pro 5G 8GB 256GB', price: '₹23,999', priceValue: 23999, link: 'https://www.amazon.in/Vivo-Pro-New-Moon-Black/dp/B0CZ7CGQB2', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/T2_Pro.jpg' },
        { name: 'Vivo T2 Pro 5G 8GB 256GB', price: '₹23,999', priceValue: 23999, link: 'https://www.flipkart.com/vivo-t2-pro-5g-dune-gold-256-gb/p/itm1230688cdef18', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/T2_Pro.jpg' },
        { name: 'Vivo T2 5G 8GB 128GB', price: '₹17,999', priceValue: 17999, link: 'https://www.croma.com/vivo-t2-5g-8gb-ram-128gb-nitro-blaze-/p/271394', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/T2_Pro.jpg' }
    ],
    'Y100': [
        { name: 'Vivo Y100 5G 8GB 128GB', price: '₹20,990', priceValue: 20990, link: 'https://www.amazon.in/Vivo-Twilight-Storage-Additional-Exchange/dp/B07WHQQ97D', source: 'Amazon India', available: true, brand: 'Vivo', image: 'img/phones/Y100.jpg' },
        { name: 'Vivo Y100 5G 8GB 128GB', price: '₹16,788', priceValue: 16788, link: 'https://www.flipkart.com/vivo-y100-5g-twilight-gold-128-gb/p/itm02d7cc65cf584', source: 'Flipkart', available: true, brand: 'Vivo', image: 'img/phones/Y100.jpg' },
        { name: 'Vivo Y100 5G 8GB 128GB', price: '₹20,990', priceValue: 20990, link: 'https://www.croma.com/vivo-y100-5g-8gb-ram-128gb-metal-black-/p/268558', source: 'Croma', available: true, brand: 'Vivo', image: 'img/phones/Y100.jpg' }
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
