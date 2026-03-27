// ============================================
//  BITERUSH — script.js
//  All data, state, and UI logic
// ============================================
 
// ==================== DATA ====================
 
const RESTAURANTS = [
  {
    id: 1,
    name: "The Flame Grill",
    cuisine: "Burgers · Fast Food · American",
    category: ["Fast Food","Non-Veg"],
    rating: 4.8,
    time: "20–30 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge: "🔥 Trending",
    menu: [
      { id: 101, name: "Classic Smash Burger", desc: "Double smash patty, cheddar, pickles, secret sauce", price: 14.90, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", veg: false },
      { id: 102, name: "BBQ Bacon Burger", desc: "Smoky BBQ sauce, crispy bacon, caramelized onions", price: 17.50, image: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80", veg: false },
      { id: 103, name: "Crispy Chicken Burger", desc: "Buttermilk fried chicken, coleslaw, jalapeños", price: 15.90, image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&q=80", veg: false },
      { id: 104, name: "Truffle Fries", desc: "Golden fries tossed in truffle oil & parmesan", price: 8.90, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", veg: true },
      { id: 105, name: "Loaded Nachos", desc: "Tortilla chips, melted cheese, jalapeños, sour cream", price: 11.50, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80", veg: true },
      { id: 106, name: "Chocolate Milkshake", desc: "Thick & creamy chocolate shake with whipped cream", price: 7.90, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", veg: true },
    ]
  },
  {
    id: 2,
    name: "Sakura Sushi Bar",
    cuisine: "Japanese · Sushi · Asian",
    category: ["Sushi","Non-Veg"],
    rating: 4.9,
    time: "35–45 min",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
    badge: "⭐ Top Rated",
    menu: [
      { id: 201, name: "Salmon Avocado Roll", desc: "Fresh salmon, creamy avocado, cucumber, sesame", price: 18.90, image: "https://images.unsplash.com/photo-1617196034099-a3ca0a59ffc5?w=400&q=80", veg: false },
      { id: 202, name: "Dragon Roll", desc: "Shrimp tempura topped with avocado & eel sauce", price: 22.50, image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80", veg: false },
      { id: 203, name: "Veggie Rainbow Roll", desc: "Avocado, cucumber, carrot, pickled radish", price: 15.90, image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80", veg: true },
      { id: 204, name: "Miso Soup", desc: "Traditional dashi broth with tofu & wakame", price: 5.50, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80", veg: true },
      { id: 205, name: "Tuna Sashimi (8 pcs)", desc: "Premium grade tuna, thinly sliced, with wasabi", price: 24.90, image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80", veg: false },
    ]
  },
  {
    id: 3,
    name: "Mama Rosa's Pizza",
    cuisine: "Italian · Pizza · Pasta",
    category: ["Pizza","Veg"],
    rating: 4.7,
    time: "25–35 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    badge: "🍕 Bestseller",
    menu: [
      { id: 301, name: "Margherita Classic", desc: "San Marzano tomatoes, fresh mozzarella, basil", price: 16.90, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80", veg: true },
      { id: 302, name: "Pepperoni Feast", desc: "Double pepperoni, mozzarella, oregano drizzle", price: 19.90, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", veg: false },
      { id: 303, name: "BBQ Chicken Pizza", desc: "Grilled chicken, BBQ sauce, red onion, cilantro", price: 20.50, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", veg: false },
      { id: 304, name: "Truffle Mushroom Pizza", desc: "Wild mushroom, truffle oil, gruyère, thyme", price: 22.90, image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80", veg: true },
      { id: 305, name: "Spaghetti Carbonara", desc: "Egg yolk, guanciale, pecorino, black pepper", price: 18.50, image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=400&q=80", veg: false },
      { id: 306, name: "Tiramisu", desc: "Classic espresso-soaked ladyfingers, mascarpone", price: 9.90, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", veg: true },
    ]
  },
  {
    id: 4,
    name: "Dragon Noodle House",
    cuisine: "Chinese · Dim Sum · Noodles",
    category: ["Chinese","Non-Veg"],
    rating: 4.6,
    time: "20–28 min",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    badge: "🐉 Fan Fav",
    menu: [
      { id: 401, name: "Beef Ramen", desc: "Rich tonkotsu broth, braised beef, soft-boiled egg", price: 17.90, image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=80", veg: false },
      { id: 402, name: "Dim Sum Platter (12 pcs)", desc: "Har gow, siu mai, BBQ pork bao assortment", price: 21.50, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80", veg: false },
      { id: 403, name: "Kung Pao Tofu", desc: "Crispy tofu, peanuts, dried chili, Sichuan sauce", price: 14.90, image: "https://images.unsplash.com/photo-1582576163090-efcbb2a50eb3?w=400&q=80", veg: true },
      { id: 404, name: "Spring Rolls (6 pcs)", desc: "Vegetable & glass noodle stuffed crispy rolls", price: 10.50, image: "https://images.unsplash.com/photo-1515013016572-fce2f254b8ae?w=400&q=80", veg: true },
      { id: 405, name: "Fried Rice with Crab", desc: "Wok-fried jasmine rice, crab meat, egg, scallion", price: 19.90, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80", veg: false },
    ]
  },
  {
    id: 5,
    name: "Green Garden Café",
    cuisine: "Vegan · Healthy · Bowls",
    category: ["Veg"],
    rating: 4.8,
    time: "15–22 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    badge: "🌱 Healthy",
    menu: [
      { id: 501, name: "Açaí Power Bowl", desc: "Açaí base, granola, banana, blueberry, chia seeds", price: 14.90, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80", veg: true },
      { id: 502, name: "Avocado Toast Deluxe", desc: "Sourdough, smashed avocado, poached egg, microgreens", price: 13.50, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80", veg: true },
      { id: 503, name: "Buddha Bowl", desc: "Quinoa, roasted chickpea, kale, tahini dressing", price: 15.90, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", veg: true },
      { id: 504, name: "Cold Brew Smoothie", desc: "Cold brew, banana, almond milk, cacao nibs", price: 8.90, image: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=400&q=80", veg: true },
    ]
  },
  {
    id: 6,
    name: "Spice Route",
    cuisine: "Indian · Biryani · Curry",
    category: ["Non-Veg","Veg"],
    rating: 4.7,
    time: "30–40 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    badge: "🌶️ Spicy Picks",
    menu: [
      { id: 601, name: "Chicken Biryani", desc: "Basmati rice, tender chicken, saffron, whole spices", price: 18.90, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", veg: false },
      { id: 602, name: "Butter Chicken", desc: "Slow-cooked chicken in rich tomato-cream gravy", price: 17.50, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80", veg: false },
      { id: 603, name: "Paneer Tikka Masala", desc: "Cottage cheese cubes in aromatic masala sauce", price: 15.90, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", veg: true },
      { id: 604, name: "Garlic Naan", desc: "Butter naan topped with roasted garlic & herbs", price: 4.50, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", veg: true },
      { id: 605, name: "Mango Lassi", desc: "Chilled yoghurt drink with Alphonso mango", price: 6.90, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80", veg: true },
      { id: 606, name: "Gulab Jamun (4 pcs)", desc: "Soft milk dumplings soaked in rose syrup", price: 7.50, image: "https://images.unsplash.com/photo-1666793893466-4afb9f78494f?w=400&q=80", veg: true },
    ]
  },
  {
    id: 7,
    name: "Sweet Spot Desserts",
    cuisine: "Desserts · Cakes · Ice Cream",
    category: ["Desserts","Veg"],
    rating: 4.9,
    time: "18–25 min",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    badge: "🍨 Sweet Treats",
    menu: [
      { id: 701, name: "Molten Lava Cake", desc: "Warm chocolate cake, liquid center, vanilla gelato", price: 12.90, image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=400&q=80", veg: true },
      { id: 702, name: "New York Cheesecake", desc: "Dense, creamy cheesecake with blueberry compote", price: 11.90, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80", veg: true },
      { id: 703, name: "Gelato 3-Scoop Cup", desc: "Your choice: pistachio, strawberry, salted caramel", price: 9.90, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80", veg: true },
      { id: 704, name: "Crème Brûlée", desc: "Classic vanilla custard with caramelised sugar crust", price: 10.50, image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80", veg: true },
      { id: 705, name: "Churros & Chocolate", desc: "Golden fried churros with rich dark chocolate dip", price: 8.90, image: "https://images.unsplash.com/photo-1586816879360-004f4a799891?w=400&q=80", veg: true },
    ]
  },
  {
    id: 8,
    name: "Taco Loco",
    cuisine: "Mexican · Tacos · Burritos",
    category: ["Fast Food","Non-Veg"],
    rating: 4.6,
    time: "20–30 min",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    badge: "🌮 Street Style",
    menu: [
      { id: 801, name: "Carne Asada Taco (3 pcs)", desc: "Grilled beef, salsa verde, onion, cilantro", price: 15.90, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80", veg: false },
      { id: 802, name: "Chicken Burrito", desc: "Grilled chicken, rice, beans, cheese, guac wrap", price: 14.50, image: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=400&q=80", veg: false },
      { id: 803, name: "Veggie Quesadilla", desc: "Roasted veggies, pepper jack cheese, chipotle sauce", price: 12.90, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80", veg: true },
      { id: 804, name: "Guacamole & Chips", desc: "Fresh-smashed avocado, lime, cilantro, tomato", price: 9.90, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80", veg: true },
      { id: 805, name: "Horchata", desc: "Chilled cinnamon rice milk drink", price: 5.90, image: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=400&q=80", veg: true },
    ]
  },
];
 
// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem('biterush_cart') || '[]');
let currentRestaurant = null;
let activeCategory = 'All';
let searchQuery = '';
 
// ==================== HELPERS ====================
function saveCart() {
  localStorage.setItem('biterush_cart', JSON.stringify(cart));
}
 
function getTotalItems() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
 
function getTotalPrice() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}
 
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const total = getTotalItems();
  badge.textContent = total;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 200);
}
 
function showToast(msg = 'Item added to cart!') {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
 
function generateOrderId() {
  return 'BR-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}
 
function formatPrice(p) {
  return '$' + p.toFixed(2);
}
 
// ==================== PAGE ROUTING ====================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
 
  if (name === 'cart') renderCart();
  if (name === 'checkout') renderCheckoutSummary();
}
 
// ==================== RESTAURANT LISTING ====================
function renderRestaurants(list) {
  const grid = document.getElementById('restaurant-grid');
  const none = document.getElementById('no-results');
 
  if (!list.length) {
    grid.innerHTML = '';
    none.classList.remove('hidden');
    return;
  }
  none.classList.add('hidden');
 
  // Show skeleton first
  grid.innerHTML = list.map(() => `
    <div class="skeleton-card">
      <div class="skel-img skeleton"></div>
      <div class="skel-body">
        <div class="skel-line skeleton"></div>
        <div class="skel-line short skeleton"></div>
        <div class="skel-line shorter skeleton"></div>
      </div>
    </div>
  `).join('');
 
  setTimeout(() => {
    grid.innerHTML = list.map((r, idx) => `
      <div class="restaurant-card" style="animation-delay:${idx * 0.06}s" onclick="openMenu(${r.id})">
        <div class="card-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy"/>
          <div class="card-badge">${r.badge}</div>
          <div class="card-time"><i class="fa-regular fa-clock"></i> ${r.time}</div>
        </div>
        <div class="card-body">
          <div class="card-top">
            <div class="card-name">${r.name}</div>
            <div class="card-rating"><i class="fa-solid fa-star"></i> ${r.rating}</div>
          </div>
          <div class="card-cuisine">${r.cuisine}</div>
          <button class="view-menu-btn">View Menu <i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    `).join('');
  }, 600);
}
 
function filterRestaurants() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  applyFilters();
}
 
function filterByCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}
 
function applyFilters() {
  let filtered = RESTAURANTS.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery) ||
                          r.cuisine.toLowerCase().includes(searchQuery);
    const matchesCat = activeCategory === 'All' || r.category.includes(activeCategory);
    return matchesSearch && matchesCat;
  });
  renderRestaurants(filtered);
}
 
// ==================== MENU ====================
function openMenu(restaurantId) {
  currentRestaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!currentRestaurant) return;
 
  // Header
  document.getElementById('menu-restaurant-info').innerHTML = `
    <h2>${currentRestaurant.name}</h2>
    <p>${currentRestaurant.cuisine} · ⭐ ${currentRestaurant.rating} · 🕐 ${currentRestaurant.time}</p>
  `;
 
  // Menu items
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = currentRestaurant.menu.map((item, idx) => `
    <div class="menu-card" style="animation-delay:${idx * 0.07}s">
      <div class="menu-card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy"/>
        <div class="veg-dot ${item.veg ? 'veg' : 'nonveg'}">${item.veg ? '▲' : '▲'}</div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-price">${formatPrice(item.price)}</div>
          <button class="add-btn" id="addbtn-${item.id}" onclick="addToCart(${item.id}, '${item.name.replace(/'/g,"\\'")}', ${item.price}, '${item.image}', '${currentRestaurant.name}')">
            + Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
 
  // Highlight already-in-cart buttons
  cart.forEach(ci => {
    const btn = document.getElementById('addbtn-' + ci.id);
    if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
  });
 
  showPage('menu');
}
 
// ==================== CART LOGIC ====================
function addToCart(id, name, price, image, restaurant) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, restaurant, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast(`${name} added to cart!`);
 
  // Visual feedback on button
  const btn = document.getElementById('addbtn-' + id);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.add('added');
  }
}
 
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  updateCartBadge();
  renderCart();
}
 
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast('Item removed.');
}
 
// ==================== RENDER CART ====================
function renderCart() {
  const wrap = document.getElementById('cart-items-wrap');
  const summary = document.getElementById('cart-summary');
  const empty = document.getElementById('cart-empty');
  const label = document.getElementById('cart-count-label');
 
  if (!cart.length) {
    wrap.innerHTML = '';
    summary.innerHTML = '';
    empty.classList.remove('hidden');
    label.textContent = '';
    return;
  }
 
  empty.classList.add('hidden');
  label.textContent = `(${getTotalItems()} items)`;
 
  wrap.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" style="animation-delay:${idx * 0.06}s">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-restaurant">${item.restaurant}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
 
  const subtotal = getTotalPrice();
  const delivery = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal * 0.09;
  const total = subtotal + delivery + tax;
 
  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Delivery fee</span><span class="orange">${formatPrice(delivery)}</span></div>
    <div class="summary-row"><span>GST (9%)</span><span>${formatPrice(tax)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
    <div class="checkout-btn-wrap">
      <button class="btn-primary full-width" onclick="showPage('checkout')">
        Proceed to Checkout <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;
}
 
// ==================== CHECKOUT ====================
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-summary');
  if (!el) return;
 
  const subtotal = getTotalPrice();
  const delivery = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal * 0.09;
  const total = subtotal + delivery + tax;
 
  el.innerHTML = `
    <h3>Your Order</h3>
    ${cart.map(i => `
      <div class="co-item-row">
        <span>${i.name} × ${i.qty}</span>
        <span>${formatPrice(i.price * i.qty)}</span>
      </div>
    `).join('')}
    <div class="summary-row" style="margin-top:12px"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${formatPrice(delivery)}</span></div>
    <div class="summary-row"><span>GST</span><span>${formatPrice(tax)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
  `;
}
 
function placeOrder() {
  const name = document.getElementById('co-name').value.trim();
  const phone = document.getElementById('co-phone').value.trim();
  const address = document.getElementById('co-address').value.trim();
 
  if (!name || !phone || !address) {
    showToast('⚠️ Please fill in all delivery details.');
    return;
  }
 
  const orderId = generateOrderId();
  document.getElementById('order-id-display').textContent = orderId;
 
  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();
 
  showPage('confirm');
 
  // Animate steps
  const steps = document.querySelectorAll('.confirm-steps .step');
  steps.forEach((s, i) => {
    setTimeout(() => s.classList.add('active'), i * 1000);
  });
}
 
function resetAndGoHome() {
  // Clear form
  ['co-name','co-phone','co-address'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.querySelectorAll('.confirm-steps .step').forEach(s => s.classList.remove('active'));
  showPage('home');
  renderRestaurants(RESTAURANTS);
}
 
// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderRestaurants(RESTAURANTS);
 
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(17,18,20,0.98)';
    } else {
      nav.style.background = 'rgba(17,18,20,0.85)';
    }
  });
});