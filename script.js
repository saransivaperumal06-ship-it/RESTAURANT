// ============================================================
//  BITERUSH — script.js  (Premium Redesign)
//  Couples packs, coupon system, confetti, cursor glow
// ============================================================

// ==================== COUPLES PACKS DATA ====================
const COUPLES_PACKS = [
  {
    id: "cp1",
    name: "The Romantic Escape",
    for: "Perfect for 2 · Date Night",
    badge: "⭐ Most Popular",
    badgeClass: "gold-badge",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    items: [
      "2 × Gourmet Mains of your choice",
      "2 × Signature Desserts",
      "2 × Wine / Mocktail",
      "Complimentary Bread & Butter",
    ],
    originalPrice: 98.00,
    discountedPrice: 78.40,
    discount: "20% OFF",
    featured: true,
  },
  {
    id: "cp2",
    name: "Candlelight Comfort",
    for: "Cosy Night In · For 2",
    badge: "🔥 Trending",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=85",
    items: [
      "2 × Pasta or Pizza Mains",
      "1 × Tiramisu to Share",
      "2 × Sparkling Lemonade",
      "Garlic Focaccia Starter",
    ],
    originalPrice: 74.00,
    discountedPrice: 59.20,
    discount: "20% OFF",
    featured: false,
  },
  {
    id: "cp3",
    name: "Anniversary Feast",
    for: "Special Occasions · For 2",
    badge: "👑 Premium",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=85",
    items: [
      "2 × Premium Steak / Seafood Mains",
      "Charcuterie Board Starter",
      "2 × Lava Cake Desserts",
      "2 × Premium Cocktails / Champagne",
    ],
    originalPrice: 148.00,
    discountedPrice: 118.40,
    discount: "20% OFF",
    featured: false,
  },
  {
    id: "cp4",
    name: "Sushi for Two",
    for: "Japanese Night · For 2",
    badge: "🍣 New",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=85",
    items: [
      "2 × Premium Sushi Platters (10 pcs each)",
      "1 × Miso Soup each",
      "2 × Dragon Rolls",
      "2 × Green Tea / Sake",
    ],
    originalPrice: 112.00,
    discountedPrice: 89.60,
    discount: "20% OFF",
    featured: false,
  },
];

// ==================== RESTAURANT DATA ====================
const RESTAURANTS = [
  {
    id: 1,
    name: "The Flame Grill",
    cuisine: "Burgers · Fast Food · American",
    category: ["Fast Food","Non-Veg"],
    rating: 4.8, time: "20–30 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge: "🔥 Trending", couples: false,
    menu: [
      { id:101, name:"Classic Smash Burger", desc:"Double smash patty, cheddar, pickles, secret sauce", price:14.90, image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", veg:false },
      { id:102, name:"BBQ Bacon Burger", desc:"Smoky BBQ sauce, crispy bacon, caramelized onions", price:17.50, image:"https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80", veg:false },
      { id:103, name:"Crispy Chicken Burger", desc:"Buttermilk fried chicken, coleslaw, jalapeños", price:15.90, image:"https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&q=80", veg:false },
      { id:104, name:"Truffle Fries", desc:"Golden fries tossed in truffle oil & parmesan", price:8.90, image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", veg:true },
      { id:105, name:"Loaded Nachos", desc:"Tortilla chips, melted cheese, jalapeños, sour cream", price:11.50, image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80", veg:true },
      { id:106, name:"Chocolate Milkshake", desc:"Thick & creamy chocolate shake with whipped cream", price:7.90, image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", veg:true },
    ]
  },
  {
    id: 2,
    name: "Sakura Sushi Bar",
    cuisine: "Japanese · Sushi · Asian",
    category: ["Sushi","Non-Veg","Couples"],
    rating: 4.9, time: "35–45 min",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
    badge: "⭐ Top Rated", couples: true,
    menu: [
      { id:201, name:"Salmon Avocado Roll", desc:"Fresh salmon, creamy avocado, cucumber, sesame", price:18.90, image:"https://images.unsplash.com/photo-1617196034099-a3ca0a59ffc5?w=400&q=80", veg:false },
      { id:202, name:"Dragon Roll", desc:"Shrimp tempura topped with avocado & eel sauce", price:22.50, image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80", veg:false },
      { id:203, name:"Veggie Rainbow Roll", desc:"Avocado, cucumber, carrot, pickled radish", price:15.90, image:"https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80", veg:true },
      { id:204, name:"Miso Soup", desc:"Traditional dashi broth with tofu & wakame", price:5.50, image:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", veg:true },
      { id:205, name:"Tuna Sashimi (8 pcs)", desc:"Premium grade tuna, thinly sliced, with wasabi", price:24.90, image:"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80", veg:false },
    ]
  },
  {
    id: 3,
    name: "Mama Rosa's Pizza",
    cuisine: "Italian · Pizza · Pasta",
    category: ["Pizza","Veg","Couples"],
    rating: 4.7, time: "25–35 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    badge: "🍕 Bestseller", couples: true,
    menu: [
      { id:301, name:"Margherita Classic", desc:"San Marzano tomatoes, fresh mozzarella, basil", price:16.90, image:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80", veg:true },
      { id:302, name:"Pepperoni Feast", desc:"Double pepperoni, mozzarella, oregano drizzle", price:19.90, image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", veg:false },
      { id:303, name:"Truffle Mushroom Pizza", desc:"Wild mushroom, truffle oil, gruyère, thyme", price:22.90, image:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80", veg:true },
      { id:304, name:"Spaghetti Carbonara", desc:"Egg yolk, guanciale, pecorino, black pepper", price:18.50, image:"https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=400&q=80", veg:false },
      { id:305, name:"Tiramisu", desc:"Classic espresso-soaked ladyfingers, mascarpone", price:9.90, image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", veg:true },
      { id:306, name:"Sparkling Lemonade", desc:"Freshly squeezed lemon, sparkling water, mint", price:5.50, image:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80", veg:true },
    ]
  },
  {
    id: 4,
    name: "Dragon Noodle House",
    cuisine: "Chinese · Dim Sum · Noodles",
    category: ["Chinese","Non-Veg"],
    rating: 4.6, time: "20–28 min",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    badge: "🐉 Fan Fav", couples: false,
    menu: [
      { id:401, name:"Beef Ramen", desc:"Rich tonkotsu broth, braised beef, soft-boiled egg", price:17.90, image:"https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=80", veg:false },
      { id:402, name:"Dim Sum Platter (12 pcs)", desc:"Har gow, siu mai, BBQ pork bao assortment", price:21.50, image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80", veg:false },
      { id:403, name:"Kung Pao Tofu", desc:"Crispy tofu, peanuts, dried chili, Sichuan sauce", price:14.90, image:"https://images.unsplash.com/photo-1582576163090-efcbb2a50eb3?w=400&q=80", veg:true },
      { id:404, name:"Spring Rolls (6 pcs)", desc:"Vegetable & glass noodle stuffed crispy rolls", price:10.50, image:"https://images.unsplash.com/photo-1515013016572-fce2f254b8ae?w=400&q=80", veg:true },
      { id:405, name:"Fried Rice with Crab", desc:"Wok-fried jasmine rice, crab meat, egg, scallion", price:19.90, image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", veg:false },
    ]
  },
  {
    id: 5,
    name: "Green Garden Café",
    cuisine: "Vegan · Healthy · Bowls",
    category: ["Veg"],
    rating: 4.8, time: "15–22 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    badge: "🌱 Healthy", couples: false,
    menu: [
      { id:501, name:"Açaí Power Bowl", desc:"Açaí base, granola, banana, blueberry, chia seeds", price:14.90, image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80", veg:true },
      { id:502, name:"Avocado Toast Deluxe", desc:"Sourdough, smashed avocado, poached egg, microgreens", price:13.50, image:"https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80", veg:true },
      { id:503, name:"Buddha Bowl", desc:"Quinoa, roasted chickpea, kale, tahini dressing", price:15.90, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", veg:true },
      { id:504, name:"Cold Brew Smoothie", desc:"Cold brew, banana, almond milk, cacao nibs", price:8.90, image:"https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=400&q=80", veg:true },
    ]
  },
  {
    id: 6,
    name: "Spice Route",
    cuisine: "Indian · Biryani · Curry",
    category: ["Non-Veg","Veg","Couples"],
    rating: 4.7, time: "30–40 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    badge: "🌶️ Spicy Picks", couples: true,
    menu: [
      { id:601, name:"Chicken Biryani", desc:"Basmati rice, tender chicken, saffron, whole spices", price:18.90, image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", veg:false },
      { id:602, name:"Butter Chicken", desc:"Slow-cooked chicken in rich tomato-cream gravy", price:17.50, image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80", veg:false },
      { id:603, name:"Paneer Tikka Masala", desc:"Cottage cheese cubes in aromatic masala sauce", price:15.90, image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", veg:true },
      { id:604, name:"Garlic Naan", desc:"Butter naan topped with roasted garlic & herbs", price:4.50, image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", veg:true },
      { id:605, name:"Mango Lassi", desc:"Chilled yoghurt drink with Alphonso mango", price:6.90, image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80", veg:true },
      { id:606, name:"Gulab Jamun (4 pcs)", desc:"Soft milk dumplings soaked in rose syrup", price:7.50, image:"https://images.unsplash.com/photo-1666793893466-4afb9f78494f?w=400&q=80", veg:true },
    ]
  },
  {
    id: 7,
    name: "Sweet Spot Desserts",
    cuisine: "Desserts · Cakes · Ice Cream",
    category: ["Desserts","Veg"],
    rating: 4.9, time: "18–25 min",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    badge: "🍨 Sweet Treats", couples: false,
    menu: [
      { id:701, name:"Molten Lava Cake", desc:"Warm chocolate cake, liquid center, vanilla gelato", price:12.90, image:"https://images.unsplash.com/photo-1617305855058-336d24456869?w=400&q=80", veg:true },
      { id:702, name:"New York Cheesecake", desc:"Dense, creamy cheesecake with blueberry compote", price:11.90, image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80", veg:true },
      { id:703, name:"Gelato 3-Scoop Cup", desc:"Your choice: pistachio, strawberry, salted caramel", price:9.90, image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80", veg:true },
      { id:704, name:"Crème Brûlée", desc:"Classic vanilla custard with caramelised sugar crust", price:10.50, image:"https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80", veg:true },
    ]
  },
  {
    id: 8,
    name: "Taco Loco",
    cuisine: "Mexican · Tacos · Burritos",
    category: ["Fast Food","Non-Veg"],
    rating: 4.6, time: "20–30 min",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    badge: "🌮 Street Style", couples: false,
    menu: [
      { id:801, name:"Carne Asada Taco (3 pcs)", desc:"Grilled beef, salsa verde, onion, cilantro", price:15.90, image:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80", veg:false },
      { id:802, name:"Chicken Burrito", desc:"Grilled chicken, rice, beans, cheese, guac wrap", price:14.50, image:"https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=400&q=80", veg:false },
      { id:803, name:"Veggie Quesadilla", desc:"Roasted veggies, pepper jack cheese, chipotle sauce", price:12.90, image:"https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80", veg:true },
      { id:804, name:"Guacamole & Chips", desc:"Fresh-smashed avocado, lime, cilantro, tomato", price:9.90, image:"https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80", veg:true },
    ]
  },
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem('biterush_cart') || '[]');
let currentRestaurant = null;
let activeCategory = 'All';
let searchQuery = '';
let couponApplied = false;

// ==================== HELPERS ====================
const $ = id => document.getElementById(id);
const fmt = p => '$' + p.toFixed(2);

function saveCart() { localStorage.setItem('biterush_cart', JSON.stringify(cart)); }
function getTotalItems() { return cart.reduce((s,i) => s + i.qty, 0); }
function getTotalPrice() { return cart.reduce((s,i) => s + i.price * i.qty, 0); }

function updateBadges() {
  const total = getTotalItems();
  ['cart-badge','cart-badge2'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.textContent = total;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 250);
  });
}

function showToast(msg) {
  $('toast-msg').textContent = msg;
  const t = $('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function generateOrderId() {
  return '#BR-' + Math.random().toString(36).substr(2,8).toUpperCase();
}

// ==================== CURSOR GLOW ====================
document.addEventListener('mousemove', e => {
  const g = $('cursor-glow');
  if (g) { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; }
});
document.addEventListener('mousedown', () => { const g=$('cursor-glow'); if(g){g.style.width='24px';g.style.height='24px';} });
document.addEventListener('mouseup',   () => { const g=$('cursor-glow'); if(g){g.style.width='18px';g.style.height='18px';} });

// ==================== NAVBAR ====================
window.addEventListener('scroll', () => {
  const nav = $('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ==================== PAGE ROUTING ====================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'cart') renderCart();
  if (name === 'checkout') renderCheckoutSummary();
}

function scrollToCouples() {
  showPage('home');
  setTimeout(() => {
    const el = $('couples-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ==================== COUPLES PACKS ====================
function renderCouplesPacks() {
  const grid = $('couples-packs-grid');
  if (!grid) return;
  grid.innerHTML = COUPLES_PACKS.map((pack, idx) => `
    <div class="pack-card ${pack.featured ? 'featured' : ''}" style="animation-delay:${idx * .1}s">
      <div class="pack-badge ${pack.badgeClass}">${pack.badge}</div>
      <div class="pack-img">
        <img src="${pack.image}" alt="${pack.name}" loading="lazy"/>
        <div class="pack-img-overlay"></div>
      </div>
      <div class="pack-body">
        <div class="pack-name">${pack.name}</div>
        <div class="pack-for">💑 ${pack.for}</div>
        <ul class="pack-items">
          ${pack.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="pack-footer">
          <div class="pack-price-wrap">
            <span class="pack-original">${fmt(pack.originalPrice)}</span>
            <span class="pack-price">${fmt(pack.discountedPrice)}</span>
            <span class="pack-discount">${pack.discount}</span>
          </div>
          <button class="pack-add-btn" onclick="addPackToCart('${pack.id}','${pack.name.replace(/'/g,"\\'")}',${pack.discountedPrice},'${pack.image}')">
            Add Pack
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function addPackToCart(id, name, price, image) {
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name, price, image, restaurant: 'Couples Pack 💑', qty: 1 }); }
  saveCart(); updateBadges();
  showToast(`${name} added to cart! 💑`);
}

function applyCouplesCoupon() {
  couponApplied = true;
  showToast('LOVE20 applied — enjoy 20% off! 💑');
  // Show coupon row in checkout if visible
  const row = $('coupon-row');
  if (row) row.classList.remove('hidden');
}

// ==================== RESTAURANTS ====================
function renderRestaurants(list) {
  const grid = $('restaurant-grid');
  const none = $('no-results');
  if (!list.length) { grid.innerHTML = ''; none.classList.remove('hidden'); return; }
  none.classList.add('hidden');

  // Skeleton
  grid.innerHTML = list.map(() => `
    <div class="skel-card">
      <div class="skel-img"></div>
      <div class="skel-bd">
        <div class="skel-line"></div>
        <div class="skel-line s60"></div>
        <div class="skel-line s40"></div>
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    grid.innerHTML = list.map((r, idx) => `
      <div class="restaurant-card" style="animation-delay:${idx * .07}s" onclick="openMenu(${r.id})">
        <div class="r-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy"/>
          <div class="r-badge">${r.badge}</div>
          <div class="r-time"><i class="fa-regular fa-clock"></i> ${r.time}</div>
        </div>
        <div class="r-body">
          <div class="r-top">
            <div class="r-name">${r.name}</div>
            <div class="r-rating"><i class="fa-solid fa-star"></i> ${r.rating}</div>
          </div>
          <div class="r-cuisine">${r.cuisine}</div>
          ${r.couples ? '<div class="couples-tag-sm"><i class="fa-solid fa-heart"></i> Couples Offer</div>' : ''}
          <button class="view-menu-btn">View Menu <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    `).join('');
  }, 550);
}

function filterRestaurants() {
  searchQuery = $('search-input').value.toLowerCase();
  applyFilters();
}

function filterByCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
  if (cat !== 'All') document.getElementById('restaurants').scrollIntoView({ behavior:'smooth' });
}

function applyFilters() {
  let list = RESTAURANTS.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(searchQuery) || r.cuisine.toLowerCase().includes(searchQuery);
    const matchCat = activeCategory === 'All' || r.category.includes(activeCategory);
    return matchSearch && matchCat;
  });
  renderRestaurants(list);
}

// ==================== MENU ====================
function openMenu(restaurantId) {
  currentRestaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!currentRestaurant) return;

  $('menu-restaurant-info').innerHTML = `
    <h2>${currentRestaurant.name}</h2>
    <p>${currentRestaurant.cuisine} · ⭐ ${currentRestaurant.rating} · 🕐 ${currentRestaurant.time}</p>
  `;

  $('menu-grid').innerHTML = currentRestaurant.menu.map((item, idx) => `
    <div class="menu-card" style="animation-delay:${idx * .08}s">
      <div class="menu-card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy"/>
        <div class="veg-dot ${item.veg ? 'veg' : 'nonveg'}">▲</div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-price">${fmt(item.price)}</div>
          <button class="add-btn" id="addbtn-${item.id}"
            onclick="addToCart(${item.id},'${item.name.replace(/'/g,"\\'")}',${item.price},'${item.image}','${currentRestaurant.name.replace(/'/g,"\\'")}')">
            + Add
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Highlight already-added items
  cart.forEach(ci => {
    const btn = $('addbtn-' + ci.id);
    if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
  });

  showPage('menu');
}

// ==================== CART LOGIC ====================
function addToCart(id, name, price, image, restaurant) {
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name, price, image, restaurant, qty: 1 });
  saveCart(); updateBadges();
  showToast(`${name} added to cart!`);
  const btn = $('addbtn-' + id);
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateBadges(); renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateBadges(); renderCart();
  showToast('Item removed.');
}

// ==================== RENDER CART ====================
function renderCart() {
  const wrap = $('cart-items-wrap');
  const summary = $('cart-summary');
  const empty = $('cart-empty');
  const label = $('cart-count-label');

  if (!cart.length) {
    wrap.innerHTML = ''; summary.innerHTML = '';
    empty.classList.remove('hidden'); label.textContent = '';
    return;
  }
  empty.classList.add('hidden');
  label.textContent = `(${getTotalItems()} items)`;

  wrap.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" style="animation-delay:${idx * .06}s">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-rest">${item.restaurant}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-del" onclick="removeFromCart('${item.id}')" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  const subtotal = getTotalPrice();
  const delivery = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal * 0.09;
  const discount = couponApplied ? subtotal * 0.2 : 0;
  const total = subtotal + delivery + tax - discount;

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="sum-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="sum-row"><span>Delivery fee</span><span class="burg">${fmt(delivery)}</span></div>
    <div class="sum-row"><span>GST (9%)</span><span>${fmt(tax)}</span></div>
    ${couponApplied ? `<div class="sum-row"><span>LOVE20 Discount</span><span style="color:#16a34a">−${fmt(discount)}</span></div>` : ''}
    <div class="sum-row total"><span>Total</span><span>${fmt(total)}</span></div>
    ${couponApplied ? '<div class="coupon-row"><i class="fa-solid fa-tag"></i> LOVE20 applied — 20% off!</div>' : ''}
    <button class="btn-gold full" onclick="showPage(\'checkout\')">
      Checkout <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
}

// ==================== CHECKOUT ====================
function renderCheckoutSummary() {
  const el = $('checkout-summary');
  if (!el) return;
  const subtotal = getTotalPrice();
  const delivery = 3.99;
  const tax = subtotal * 0.09;
  const discount = couponApplied ? subtotal * 0.2 : 0;
  const total = subtotal + delivery + tax - discount;

  el.innerHTML = `
    <h3>Your Order</h3>
    ${cart.map(i => `<div class="co-item-row"><span>${i.name} ×${i.qty}</span><span>${fmt(i.price * i.qty)}</span></div>`).join('')}
    <div class="sum-row" style="margin-top:12px"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="sum-row"><span>Delivery</span><span>${fmt(delivery)}</span></div>
    <div class="sum-row"><span>GST (9%)</span><span>${fmt(tax)}</span></div>
    ${couponApplied ? `<div class="sum-row"><span>LOVE20</span><span style="color:#16a34a">−${fmt(discount)}</span></div>` : ''}
    <div class="sum-row total"><span>Total</span><span>${fmt(total)}</span></div>
  `;

  if (couponApplied) {
    const row = $('coupon-row');
    if (row) row.classList.remove('hidden');
  }
}

function placeOrder() {
  const name    = $('co-name')?.value.trim();
  const phone   = $('co-phone')?.value.trim();
  const address = $('co-address')?.value.trim();
  if (!name || !phone || !address) { showToast('⚠️ Please fill in all delivery details.'); return; }

  $('order-id-display').textContent = generateOrderId();
  cart = []; couponApplied = false;
  saveCart(); updateBadges();
  showPage('confirm');
  launchConfetti();

  // Animate tracking steps
  ['ts1','ts2','ts3','ts4'].forEach((id, i) => {
    setTimeout(() => {
      const el = $(id);
      if (el) el.classList.add('active');
      const line = $('tl' + (i + 1));
      if (line) line.classList.add('active');
    }, i * 1000);
  });
}

function resetAndGoHome() {
  ['co-name','co-phone','co-address','co-note'].forEach(id => {
    const el = $(id); if (el) el.value = '';
  });
  ['ts1','ts2','ts3','ts4'].forEach(id => {
    const el = $(id); if (el) el.classList.remove('active');
  });
  ['tl1','tl2','tl3'].forEach(id => {
    const el = $(id); if (el) el.classList.remove('active');
  });
  $('confetti-wrap').innerHTML = '';
  showPage('home');
}

// ==================== CONFETTI ====================
function launchConfetti() {
  const wrap = $('confetti-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  const colors = ['#C9962A','#E8B84B','#5C1A2A','#E8647A','#F8F4EE','#A63050'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = Math.random() * 10 + 6;
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      width: ${size}px; height: ${size * (Math.random() + 0.5)}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 2 + 1.5}s;
      animation-delay: ${Math.random() * 0.8}s;
      transform: rotate(${Math.random() * 360}deg);
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    wrap.appendChild(el);
  }
  setTimeout(() => { wrap.innerHTML = ''; }, 4000);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  renderRestaurants(RESTAURANTS);
  renderCouplesPacks();

  // Intersection observer for subtle reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.style.opacity = '1';
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.pack-card, .restaurant-card').forEach(el => {
    observer.observe(el);
  });
});