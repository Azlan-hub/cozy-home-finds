export interface Product {
  id: string;
  title: string;
  link: string;
  imageUrl: string;
  category: string;
  description: string;
  merchant: 'Amazon' | 'AliExpress';
}

export const topProducts: Product[] = [
  {
    id: 'wire-cart',
    title: 'Aesthetic Rolling Wire Storage Cart',
    link: 'https://s.click.aliexpress.com/e/_c3dz7jWH',
    imageUrl: '/Products/wire-cart-product.jpg',
    category: 'Storage & Organization',
    description: 'Keep your space tidy and stylish with this versatile, smooth-rolling wire cart. Perfect for tight margins and dead spaces.',
    merchant: 'AliExpress'
  },
  {
    id: '3-globe-modern-lamp',
    title: '3-Globe Modern Table Lamp',
    link: 'https://amzn.to/4w7kD04',
    imageUrl: '/Products/Dimmable Bedside Lamp for Bedroom & Living Room.webp',
    category: 'Lighting',
    description: 'An elegant brass-finished table lamp featuring three frosted globes. Provides a warm, timeless glow perfect for bedside tables or living room consoles.',
    merchant: 'Amazon'
  },
  {
    id: 'ceramic-usb-table-lamp',
    title: 'Elegant Ceramic USB Table Lamp',
    link: 'https://amzn.to/3RuV4He',
    imageUrl: '/Products/Cozy Bedroom Lighting Idea.webp',
    category: 'Lighting',
    description: 'A beautifully detailed ceramic lamp featuring warm ambient light and built-in USB charging ports. The perfect blend of vintage style and modern convenience for your nightstand.',
    merchant: 'Amazon'
  },
  {
    id: 'vintage-plug-in-night-light',
    title: 'Vintage Farmhouse Plug-In Night Light',
    link: 'https://amzn.to/3TBugFK',
    imageUrl: '/Products/Vintage Plug-In Night Light  Farmhouse Warm LED Lamp.webp',
    category: 'Lighting',
    description: 'A stylish, energy-efficient 2200K warm night light with a mini linen shade. Adds a cozy, rustic touch to hallways, bathrooms, or nurseries while keeping the room softly lit.',
    merchant: 'Amazon'
  },
  {
    id: 'indoor-plant-stand-6-lights',
    title: 'Indoor Plant Stand with 6 Grow Lights',
    link: 'https://amzn.to/3TfgNn7',
    imageUrl: '/Products/6 Grow Lights Indoor Plant Stand  Modern Living Room Plant Shelf.webp',
    category: 'Planters & Greenery',
    description: 'A sturdy, multi-tiered indoor plant stand featuring 6 integrated grow lights. Designed for easy assembly and perfect for brightening every leaf in any indoor space.',
    merchant: 'Amazon'
  },
  {
    id: '8-tier-curved-plant-stand',
    title: '8-Tier Curved Plant Stand with Grow Lights',
    link: 'https://amzn.to/4w9Jqjy',
    imageUrl: '/Products/8 Tier Floor Plant Shelf Indoor Plant Stand with Grow Lights.webp',
    category: 'Planters & Greenery',
    description: 'Maximize your vertical space with this curved, 8-tier iron frame stand. Includes full-spectrum grow lights with 10 dimmable levels and a built-in timer to promote healthy growth year-round.',
    merchant: 'Amazon'
  },
  {
    id: 'geometric-led-wall-shelves',
    title: 'Geometric LED Wall Shelves',
    link: 'https://amzn.to/44x0Db8',
    imageUrl: '/Products/LED Wall Shelves for Living Room Decor  Modern Home Lighting.webp',
    category: 'Wall Decor',
    description: 'Add style, light, and life to your walls with these easy-to-install decorative shelves. Features integrated warm LED lighting and a durable geometric frame perfect for displaying small plants.',
    merchant: 'Amazon'
  },
  {
    id: 'balcony-planter-box',
    title: 'Balcony Planter Box',
    link: 'https://amzn.to/4vFBeal',
    imageUrl: '/Products/Balcony Planter Box  Stylish Hanging Flower Pot.webp',
    category: 'Planters & Greenery',
    description: 'Maximize your outdoor aesthetic or indoor window spaces with this sleek planter box. Perfect for trailing plants or starting a compact apartment herb garden.',
    merchant: 'Amazon'
  },
  {
    id: 'foldable-balcony-table',
    title: 'Foldable Balcony Hanging Table',
    link: 'https://amzn.to/4b1B99q',
    imageUrl: '/Products/Foldable Balcony Hanging Table Ideas  Space-Saving Apartment Balcony Upgrade.webp',
    category: 'Furniture',
    description: 'Instantly transform a tight apartment balcony into a cozy dining nook or outdoor workspace with this space-saving, heavy-duty foldable hanging table.',
    merchant: 'Amazon'
  },
  {
    id: 'samsung-27-curved-monitor',
    title: 'Samsung 27" Curved Gaming Monitor',
    link: 'https://amzn.to/4yKziAa',
    imageUrl: '/Products/Samsung 27 Curved Gaming Monitor Setup  Modern Gaming Desk Inspiration.webp',
    category: 'Tech & Gaming',
    description: 'Elevate your gaming room or home office with this immersive 27-inch curved display, offering a sleek profile that maximizes limited desk space.',
    merchant: 'Amazon'
  },
  {
    id: 'rgb-usb-gaming-mic',
    title: 'RGB USB Gaming Microphone with Boom Arm',
    link: 'https://amzn.to/4f67e2k',
    imageUrl: '/Products/RGB USB Gaming Microphone with Boom Arm for Streaming & Gaming.webp',
    category: 'Tech & Gaming',
    description: 'Keep your gaming station organized and professional. This high-quality USB microphone includes a dedicated boom arm to free up valuable desktop real estate.',
    merchant: 'Amazon'
  },
  {
    id: 'modern-led-ceiling-light',
    title: 'Modern LED Ceiling Light',
    link: 'https://amzn.to/4flKsCm',
    imageUrl: '/Products/Modern LED Ceiling Light Ideas for a Stylish Living Room.webp',
    category: 'Lighting',
    description: 'Instantly upgrade basic builder-grade apartment lighting with this ultra-minimalist LED ceiling fixture that casts a clean, diffuse glow across the room.',
    merchant: 'Amazon'
  },
  {
    id: 'romguar-corner-floating-shelves',
    title: 'Rustic Wood Corner Floating Shelves (Set of 4)',
    link: 'https://amzn.to/3Rs4EuA',
    imageUrl: '/Products/Stylish LED Wall Shelves.webp',
    category: 'Wall Decor',
    description: 'Smart storage meets stylish living. Transform dead corners into a beautiful, space-saving display for your trailing plants, books, and ambient decor.',
    merchant: 'Amazon'
  },
  {
    id: 'ruiyey-modern-globe-chandelier',
    title: 'Modern Globe Chandelier Ceiling Fixture',
    link: 'https://amzn.to/4x7tO0N',
    imageUrl: '/Products/globe-chandelier.webp',
    category: 'Lighting',
    description: 'Make a bold statement in your dining room with this elegant, multi-globe chandelier. It casts a luxurious, warm glow perfect for creating a five-star dining experience at home.',
    merchant: 'Amazon'
  },
  {
    id: 'woven-rattan-pendant-light',
    title: 'Woven Rattan Pendant Light',
    link: 'https://amzn.to/4b7RWHZ',
    imageUrl: '/Products/rattan-pendant.webp',
    category: 'Lighting',
    description: 'Bring organic texture and warmth to your home with this beautiful hand-woven rattan pendant. Ideal for casting soft, patterned light over kitchen islands or cozy living spaces.',
    merchant: 'Amazon'
  },
  {
    id: 'artificial-grass-deck-tiles',
    title: 'Customized Sizes Artificial Grass Turf',
    link: 'https://amzn.to/4pRLKdp',
    imageUrl: '/Products/artificial-grass-tiles.webp',
    category: 'Flooring & Turf',
    description: 'Transform your cold concrete balcony into a lush backyard oasis. This artificial grass turf drains easily and feels incredibly soft underfoot.',
    merchant: 'Amazon'
  },
  {
    id: 'circular-backlit-wall-shelf',
    title: '3-Tier Decorative Round Wall Shelf',
    link: 'https://amzn.to/4fIfnc9',
    imageUrl: '/Products/circular-wall-shelf.webp',
    category: 'Wall Decor',
    description: 'Add architectural interest to your balcony walls with this modern circular shelf. Perfect for displaying small succulents and creating a focal point.',
    merchant: 'Amazon'
  },
  {
    id: 'modular-white-wall-planters',
    title: 'Wall Planter for Indoor/Outdoor Plants',
    link: 'https://amzn.to/4wxqcoV',
    imageUrl: '/Products/white-wall-planters.webp',
    category: 'Planters & Greenery',
    description: 'Create a stunning vertical garden without sacrificing floor space. These sleek wall planters are perfect for cascading vines and vibrant florals.',
    merchant: 'Amazon'
  },
  {
    id: 'woven-rope-patio-chairs',
    title: 'Outdoor Patio Dining Chair',
    link: 'https://amzn.to/4h8eNXF',
    imageUrl: '/Products/woven-patio-chairs.webp',
    category: 'Furniture',
    description: 'Visually light, weather-resistant, and incredibly comfortable. These woven patio chairs elevate your balcony aesthetic without making it feel cramped.',
    merchant: 'Amazon'
  },
  {
    id: 'solar-pathway-lights',
    title: 'Solar Pathway Lights Outdoor',
    link: 'https://amzn.to/4aVv0vq',
    imageUrl: '/Products/Solar Pathway Lights Outdoor  Waterproof LED Garden Lights.webp',
    category: 'Lighting',
    description: 'Create a warm, glowing perimeter around your balcony or patio planters without worrying about outdoor outlets.',
    merchant: 'Amazon'
  },
  {
    id: 'rustic-plug-in-night-light-outdoor',
    title: 'Rustic Plug-In Night Light',
    link: 'https://amzn.to/4w6C40V',
    imageUrl: '/Products/Modern Rustic Plug-In Night Light  Dusk to Dawn Sensor Lamp.webp',
    category: 'Lighting',
    description: 'Add a cozy, vintage glow to your enclosed balcony corners or the hallway leading to your patio doors.',
    merchant: 'Amazon'
  },
  {
    id: 'modern-led-table-lamp-outdoor',
    title: 'Modern LED Table Lamp',
    link: 'https://amzn.to/4voFPNT',
    imageUrl: '/Products/Modern LED Table Lamp  Minimalist Bedside Night Light for Bedroom & Living Room.webp',
    category: 'Lighting',
    description: 'A sleek, modern silhouette that casts the perfect warm light for reading or relaxing on cool autumn evenings.',
    merchant: 'Amazon'
  },
  {
    id: 'pre-lit-halloween-garland',
    title: 'Pre-Lit Halloween Garland',
    link: 'https://amzn.to/4ceaS8i',
    imageUrl: '/Products/Pre-Lit Halloween Garland  Easy Spooky Mantel Decor.webp',
    category: 'Seasonal Decor',
    description: 'Instantly transition your space for the season. Drape this glowing garland along your balcony railing for a moody, festive aesthetic.',
    merchant: 'Amazon'
  },
  {
    id: 'lighted-fall-trees',
    title: 'Lighted Fall Trees',
    link: 'https://amzn.to/4w1zdp7',
    imageUrl: '/Products/Lighted Fall Trees for Cozy Living Room Decor  Easy Fall Decorating Idea.webp',
    category: 'Seasonal Decor',
    description: 'Bring the magic of autumn directly to your apartment. These glowing trees are perfect for styling empty balcony corners.',
    merchant: 'Amazon'
  }
];