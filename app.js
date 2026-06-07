// Mom's Food Delight - Core Web Application Script

// 1. Menu Database (Derived exactly from the printed menu image)
const menuItems = [
    // --- THALIS ---
    {
        id: "veg-thali",
        name: "Veg Thali",
        category: "Thalis",
        price: 90,
        description: "2 veg sabzis of choice + 3 chapatis + rice + fresh salad.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "veg-thali",
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "paneer-thali",
        name: "Paneer Thali",
        category: "Thalis",
        price: 120,
        description: "1 Paneer sabzi + 1 veg sabzi of choice + 3 chapatis + rice + fresh salad.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "paneer-thali",
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "paratha-combo",
        name: "Paratha Combo",
        category: "Thalis",
        price: 100,
        description: "1 sabzi of choice (Paneer or Veg) + 2 Laccha Parathas or 2 Namak Mirch Parathas.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "paratha-combo",
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "poori-combo",
        name: "Poori Combo",
        category: "Thalis",
        price: 80,
        description: "Aloo Gravy or White Chole served with 4 fluffy hot Pooris.",
        isVeg: true,
        spicy: 2,
        requiresCustomization: true,
        customizationType: "poori-combo",
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- RICE BOWLS ---
    {
        id: "veg-rice-bowl",
        name: "Veg Rice Bowl",
        category: "Rice Bowls",
        price: 80,
        description: "Gravy sabzi of choice served on a bed of steamed basmati rice.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "rice-bowl-veg",
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "paneer-rice-bowl",
        name: "Paneer Rice Bowl",
        category: "Rice Bowls",
        price: 110,
        description: "Rich cottage cheese paneer gravy served with steamed basmati rice.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "fried-rice",
        name: "Fried Rice",
        category: "Rice Bowls",
        price: 130,
        description: "Steamed rice stir-fried with seasonal chopped vegetables and homestyle spices.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        packagingFee: 10,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- OG PARATHAS ---
    {
        id: "plain-paratha",
        name: "Plain Paratha",
        category: "OG Parathas",
        price: 40,
        description: "Golden flaky tandoor-style pan paratha layered with pure butter.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "aloo-pyaaz-paratha",
        name: "Aloo Pyaaz Paratha",
        category: "OG Parathas",
        price: 50,
        description: "Classic pan-fried paratha stuffed with spicy mashed potato and onion mix.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "mix-paratha",
        name: "Mix Paratha",
        category: "OG Parathas",
        price: 60,
        description: "Wholesome paratha stuffed with a dynamic mix of spiced seasonal veggies.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "paneer-paratha",
        name: "Paneer Paratha",
        category: "OG Parathas",
        price: 80,
        description: "Sumptuous flatbread stuffed with spiced, freshly grated paneer.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "gobi-paratha",
        name: "Gobi Paratha",
        category: "OG Parathas",
        price: 60,
        description: "Flaky paratha stuffed with grated, spiced cauliflower and fresh herbs.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "laccha-paratha",
        name: "Laccha Paratha",
        category: "OG Parathas",
        price: 50,
        description: "Layered, crispy and flaky paratha baked to perfection.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- CURD'S MAGIC ---
    {
        id: "curd",
        name: "Plain Curd",
        category: "Curd's Magic",
        price: 20,
        description: "Cool and refreshing homestyle set curd.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "raita",
        name: "Mix Raita",
        category: "Curd's Magic",
        price: 40,
        description: "Spiced yoghurt blended with cucumbers, tomatoes, and crispy boondi.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "masala-lassi",
        name: "Masala Lassi",
        category: "Curd's Magic",
        price: 40,
        description: "Refreshing buttermilk churned with salt, cumin, and fresh mint.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        category: "Curd's Magic",
        price: 50,
        description: "Thick, sweet, churned yoghurt drink infused with cardamom flavor.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- MAIN COURSE ---
    {
        id: "dal-makhni",
        name: "Dal Makhni",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Slow-cooked black lentils in creamy tomato gravy with a dollop of white butter.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "dal-fry",
        name: "Dal Fry",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Yellow lentils tempered with cumin seeds, onions, tomatoes, and garlic.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "mix-dal",
        name: "Mix Dal",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Nutritious blend of five native lentils tempered with homestyle spices.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "kadhi-pakora",
        name: "Kadhi Pakora",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Spiced yoghurt and gram-flour curry with soft onion fritters.",
        isVeg: true,
        spicy: 2,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "rajma",
        name: "Rajma",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Kidney beans simmered in thick onion-tomato gravy with aromatic spices.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "white-chole",
        name: "White Chole",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Punjabi-style chickpea curry cooked with dark spices and dry pomegranate.",
        isVeg: true,
        spicy: 2,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "paneer-bhurji",
        name: "Paneer Bhurji",
        category: "Main Course",
        price: { half: 150, full: 290 },
        description: "Crushed scrambled cottage cheese cooked with green peas, onions, and capsicum.",
        isVeg: true,
        spicy: 2,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "gravy-paneer",
        name: "Gravy Paneer",
        category: "Main Course",
        price: { half: 150, full: 290 },
        description: "Soft cottage cheese chunks cooked in rich creamy onion-tomato gravy.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "dry-sabzi",
        name: "Dry Sabzi",
        category: "Main Course",
        price: { half: 100, full: 190 },
        description: "Dry preparation of fresh seasonal vegetables tossed with light spices.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: true,
        customizationType: "portion-size",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- HIGH PROTEIN ---
    {
        id: "besan-cheela",
        name: "Besan Cheela",
        category: "High Protein",
        price: 50,
        description: "Savoury pan crepes made of spiced chickpea flour and loaded with fresh coriander.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "stuffed-besan-cheela",
        name: "Stuffed Besan Cheela",
        category: "High Protein",
        price: 80,
        description: "Chickpea flour pancake stuffed with spiced grated paneer and mixed vegetables.",
        isVeg: true,
        spicy: 1,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    // --- ROTI & SIDES ---
    {
        id: "roti",
        name: "Plain Chapati",
        category: "Roti",
        price: 12,
        description: "Freshly puffed whole-wheat tawa chapati.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "butter-roti",
        name: "Butter Chapati",
        category: "Butter Roti",
        price: 14,
        description: "Freshly puffed whole-wheat tawa chapati topped with pure dairy butter.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
        id: "tea",
        name: "Adrak Elaichi Tea",
        category: "Roti",
        price: 25,
        description: "Piping hot milk tea infused with fresh ginger and crushed green cardamom.",
        isVeg: true,
        spicy: 0,
        requiresCustomization: false,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
];

// Helper to check if item is a thali or rice bowl for packaging fee application
function isThaliOrBowl(item) {
    return item.category === "Thalis" || item.category === "Rice Bowls";
}

// 2. Global State Variables
let currentCategory = "All";
let searchQuery = "";
let isVegOnly = false;
let cart = [];
let activeOrder = null;
let orderHistory = [];
let customizeTargetItem = null;
window.sabziAvailability = {};
let isAdminAuthorized = false;

// Business Settings Default config
let storeConfig = {
    upiId: "paytmqr5cz2tn@ptys",
    payeeName: "RENU CHUGH",
    whatsappNumber: "9818946641",
    deliveryThreshold: 150,
    deliveryCharge: 20,
    packagingCharge: 10 // ₹10 per thali/bowl
};

// Fetch dynamic config from server env file
async function loadRemoteConfig() {
    try {
        const res = await fetch('/api/config');
        const remote = await res.json();
        
        // Merge server configuration settings
        storeConfig.upiId = remote.upiId;
        storeConfig.payeeName = remote.payeeName;
        storeConfig.whatsappNumber = remote.whatsappNumber;
        
        // Populate Admin Config settings inputs with values
        document.getElementById("config-upi").value = storeConfig.upiId;
        if (document.getElementById("config-payee-name")) {
            document.getElementById("config-payee-name").value = storeConfig.payeeName;
        }
        document.getElementById("config-phone").value = storeConfig.whatsappNumber;
    } catch (err) {
        console.warn("Could not fetch remote server configuration, using defaults.", err);
    }
}

// Fetch availability map from server
async function loadMenuAvailability() {
    try {
        const res = await fetch('/api/menu-availability');
        window.sabziAvailability = await res.json();
    } catch (err) {
        console.warn("Could not fetch menu availability from server.", err);
        // Fallback to all true
        window.sabziAvailability = {
            "Dal Makhni": true,
            "Dal Fry": true,
            "Mix Dal": true,
            "Kadhi Pakora": true,
            "Rajma": true,
            "White Chole": true,
            "Paneer Bhurji": true,
            "Gravy Paneer": true,
            "Dry Sabzi": true
        };
    }
}

// 3. Page Initialization & Loading Storage
document.addEventListener("DOMContentLoaded", async () => {
    loadStoreConfig();
    loadLocalStorageData();
    
    // Remote loadings
    await loadRemoteConfig();
    await loadMenuAvailability();

    renderCategories();
    renderMenuGrid();
    setupEventListeners();
    updateCartDisplay();
    checkActiveOrderTracking();
    renderPastOrders();
    renderAdminSandboxOrders();
});

// Load Config from localStorage
function loadStoreConfig() {
    const savedConfig = localStorage.getItem("mom_store_config");
    if (savedConfig) {
        const parsed = JSON.parse(savedConfig);
        if (parsed.whatsappNumber === "8700685474" || parsed.upiId === "8700685474@paytm") {
            // Overwrite old defaults in local storage
            localStorage.setItem("mom_store_config", JSON.stringify(storeConfig));
        } else {
            storeConfig = parsed;
        }
    }
    // Update Admin form values initially
    document.getElementById("config-upi").value = storeConfig.upiId;
    if (document.getElementById("config-payee-name")) {
        document.getElementById("config-payee-name").value = storeConfig.payeeName || "RENU CHUGH";
    }
    document.getElementById("config-phone").value = storeConfig.whatsappNumber;
    document.getElementById("config-delivery-threshold").value = storeConfig.deliveryThreshold;
    document.getElementById("config-delivery-charge").value = storeConfig.deliveryCharge;
}

// Save Config to localStorage
function saveStoreConfig(newConfig) {
    storeConfig = { ...storeConfig, ...newConfig };
    localStorage.setItem("mom_store_config", JSON.stringify(storeConfig));
    showToast("Configuration saved successfully!");
    renderMenuGrid(); // Re-render in case free delivery limits or something changed
    updateCartDisplay();
}

// Load cart and orders from storage
function loadLocalStorageData() {
    const savedCart = localStorage.getItem("mom_cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    const savedHistory = localStorage.getItem("mom_order_history");
    if (savedHistory) {
        orderHistory = JSON.parse(savedHistory);
    }
    const savedActiveOrder = localStorage.getItem("mom_active_order");
    if (savedActiveOrder) {
        activeOrder = JSON.parse(savedActiveOrder);
    }
}

// Save Cart to storage
function saveCartToStorage() {
    localStorage.setItem("mom_cart", JSON.stringify(cart));
}

// 4. Render Layout Core Components
// Horizontal Category Pill Navigation
function renderCategories() {
    const categories = ["All", "Thalis", "Rice Bowls", "OG Parathas", "Main Course", "Curd's Magic", "High Protein", "Roti"];
    const container = document.getElementById("categories-container");
    container.innerHTML = categories.map(cat => `
        <button class="category-pill ${cat === currentCategory ? 'active' : ''}" onclick="filterCategory('${cat}')">
            ${getCategoryIcon(cat)} ${cat}
        </button>
    `).join('');
}

// Category Icons
function getCategoryIcon(cat) {
    switch(cat) {
        case "All": return "🍽️";
        case "Thalis": return "🍛";
        case "Rice Bowls": return "🍚";
        case "OG Parathas": return "🫓";
        case "Main Course": return "🥣";
        case "Curd's Magic": return "🥛";
        case "High Protein": return "🥦";
        case "Roti": return "🫓";
        default: return "🍕";
    }
}

// Render the main Menu items matching filters
function renderMenuGrid() {
    const container = document.getElementById("menu-grid");
    
    // Filter logic
    let filtered = menuItems.filter(item => {
        const matchesCategory = currentCategory === "All" || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesVeg = !isVegOnly || item.isVeg;
        return matchesCategory && matchesSearch && matchesVeg;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1/-; text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fa-solid fa-face-frown" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>No delicious items found matching your filters. Try a different search!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const cartQty = getQuantityInCart(item.id);
        const itemPrice = typeof item.price === 'object' ? `₹${item.price.half} - ₹${item.price.full}` : `₹${item.price}`;
        
        // Check availability
        const isOutOfStock = item.category === "Main Course" && window.sabziAvailability && window.sabziAvailability[item.name] === false;
        
        const requiresBtnText = isOutOfStock ? 'Out of Stock' : (item.requiresCustomization ? 'Customize' : 'Add to Cart');
        const requiresBtnClass = isOutOfStock ? 'btn-secondary' : (item.requiresCustomization ? 'btn-secondary' : 'btn-primary');
        const disabledAttr = isOutOfStock ? 'disabled' : '';
        
        return `
            <div class="menu-card ${isOutOfStock ? 'out-of-stock' : ''}" data-id="${item.id}">
                <div class="card-image-area">
                    <img src="${item.image}" alt="${item.name}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600'">
                    <span class="veg-indicator ${item.isVeg ? '' : 'non-veg'}">
                        <i class="fa-solid fa-circle-stop"></i> ${item.isVeg ? 'VEG' : 'EGG'}
                    </span>
                    <span class="card-price-tag">${itemPrice}</span>
                    ${isOutOfStock ? `<div class="out-of-stock-badge">Out of Stock</div>` : ''}
                </div>
                <div class="card-details">
                    <div class="card-title-row">
                        <h3>${item.name}</h3>
                        ${item.spicy > 0 ? `<div class="spicy-rating" title="Spiciness">${'🌶️'.repeat(item.spicy)}</div>` : ''}
                    </div>
                    <p class="card-desc">${item.description}</p>
                    
                    <div class="card-actions">
                        ${cartQty > 0 && !item.requiresCustomization && !isOutOfStock ? `
                            <div class="card-qty-control">
                                <button onclick="updateCartQuantity('${item.id}', ${cartQty - 1})">-</button>
                                <span>${cartQty}</span>
                                <button onclick="updateCartQuantity('${item.id}', ${cartQty + 1})">+</button>
                            </div>
                        ` : `
                            <button class="btn ${requiresBtnClass} btn-block" ${disabledAttr} onclick="handleMenuAction('${item.id}')">
                                ${requiresBtnText}
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Navigation triggers
window.filterCategory = function(cat) {
    currentCategory = cat;
    renderCategories();
    renderMenuGrid();
};

// 5. Add / Customize Handlers
window.handleMenuAction = function(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    if (item.requiresCustomization) {
        openCustomizationModal(item);
    } else {
        addToCart(item, 1, null);
        showToast(`${item.name} added to cart!`);
    }
};

function openCustomizationModal(item) {
    customizeTargetItem = item;
    const modal = document.getElementById("customize-modal");
    const title = document.getElementById("customize-item-title");
    const body = document.getElementById("customize-modal-body");
    const qtyVal = document.getElementById("custom-qty-val");
    
    title.innerText = `Customize ${item.name}`;
    qtyVal.innerText = "1";
    
    // Generate customization UI based on type
    body.innerHTML = getCustomizationHTML(item);
    updateCustomModalPrice();
    
    modal.classList.add("open");
}

function getCustomizationHTML(item) {
    const type = item.customizationType;
    let html = '';

    // Get list of standard sabzis for selects
    const sabziOptions = menuItems.filter(i => i.category === "Main Course").map(s => s.name);

    if (type === "veg-thali") {
        html += `
            <div class="custom-option-section">
                <h4>Select 2 Sabzis <span class="req-text">* Choose exactly 2</span></h4>
                <div class="custom-choice-list">
                    ${sabziOptions.map((sabzi, idx) => {
                        const isAvailable = window.sabziAvailability && window.sabziAvailability[sabzi] !== false;
                        const disabledClass = isAvailable ? '' : 'disabled';
                        const clickTrigger = isAvailable ? `onclick="toggleCheckboxChoice(this, 'sabzi', 2)"` : '';
                        return `
                            <div class="custom-choice-item ${disabledClass}" ${clickTrigger}>
                                <div class="choice-checkbox"><i class="fa-solid fa-check"></i></div>
                                <span class="choice-label-text">${sabzi} ${isAvailable ? '' : '<span style="color: var(--error-color); font-size: 11px; margin-left: 6px;">(Out of Stock)</span>'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } 
    else if (type === "paneer-thali") {
        html += `
            <div class="custom-option-section">
                <h4>Select 1 Additional Sabzi <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    ${sabziOptions.map((sabzi, idx) => {
                        const isAvailable = window.sabziAvailability && window.sabziAvailability[sabzi] !== false;
                        const disabledClass = isAvailable ? '' : 'disabled';
                        const clickTrigger = isAvailable ? `onclick="selectRadioChoice(this, 'sabzi')"` : '';
                        return `
                            <div class="custom-choice-item ${disabledClass}" ${clickTrigger}>
                                <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                                <span class="choice-label-text">${sabzi} ${isAvailable ? '' : '<span style="color: var(--error-color); font-size: 11px; margin-left: 6px;">(Out of Stock)</span>'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } 
    else if (type === "paratha-combo") {
        html += `
            <div class="custom-option-section">
                <h4>Choose 1 Sabzi (Paneer/Veg) <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    ${sabziOptions.map(sabzi => {
                        const isAvailable = window.sabziAvailability && window.sabziAvailability[sabzi] !== false;
                        const disabledClass = isAvailable ? '' : 'disabled';
                        const clickTrigger = isAvailable ? `onclick="selectRadioChoice(this, 'sabzi')"` : '';
                        return `
                            <div class="custom-choice-item ${disabledClass}" ${clickTrigger}>
                                <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                                <span class="choice-label-text">${sabzi} ${isAvailable ? '' : '<span style="color: var(--error-color); font-size: 11px; margin-left: 6px;">(Out of Stock)</span>'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="custom-option-section">
                <h4>Choose Paratha Style <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    <div class="custom-choice-item selected" onclick="selectRadioChoice(this, 'paratha')">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">2 Laccha Parathas</span>
                    </div>
                    <div class="custom-choice-item" onclick="selectRadioChoice(this, 'paratha')">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">2 Namak Mirch Parathas</span>
                    </div>
                </div>
            </div>
        `;
    } 
    else if (type === "poori-combo") {
        html += `
            <div class="custom-option-section">
                <h4>Choose Curry Side <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    <div class="custom-choice-item selected" onclick="selectRadioChoice(this, 'curry')">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">Aloo Gravy</span>
                    </div>
                    <div class="custom-choice-item" onclick="selectRadioChoice(this, 'curry')">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">White Chole</span>
                    </div>
                </div>
            </div>
        `;
    } 
    else if (type === "rice-bowl-veg") {
        html += `
            <div class="custom-option-section">
                <h4>Select Gravy Sabzi <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    ${sabziOptions.map(sabzi => {
                        const isAvailable = window.sabziAvailability && window.sabziAvailability[sabzi] !== false;
                        const disabledClass = isAvailable ? '' : 'disabled';
                        const clickTrigger = isAvailable ? `onclick="selectRadioChoice(this, 'gravy')"` : '';
                        return `
                            <div class="custom-choice-item ${disabledClass}" ${clickTrigger}>
                                <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                                <span class="choice-label-text">${sabzi} ${isAvailable ? '' : '<span style="color: var(--error-color); font-size: 11px; margin-left: 6px;">(Out of Stock)</span>'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    else if (type === "portion-size") {
        html += `
            <div class="custom-option-section">
                <h4>Choose Portion Size <span class="req-text">* Choose 1</span></h4>
                <div class="custom-choice-list">
                    <div class="custom-choice-item selected" data-price="${item.price.half}" data-val="Half" onclick="selectRadioChoice(this, 'size'); updateCustomModalPrice();">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">Half Portion</span>
                        <span class="choice-price-addon">₹${item.price.half}</span>
                    </div>
                    <div class="custom-choice-item" data-price="${item.price.full}" data-val="Full" onclick="selectRadioChoice(this, 'size'); updateCustomModalPrice();">
                        <div class="choice-radio"><i class="fa-solid fa-circle"></i></div>
                        <span class="choice-label-text">Full Portion</span>
                        <span class="choice-price-addon">₹${item.price.full}</span>
                    </div>
                </div>
            </div>
        `;
    }

    return html;
}

// Choice helpers for selects inside customization modal
window.toggleCheckboxChoice = function(element, group, maxChoices) {
    const parentList = element.parentElement;
    const selected = parentList.querySelectorAll('.custom-choice-item.selected');
    
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
    } else {
        if (selected.length < maxChoices) {
            element.classList.add('selected');
        } else {
            // Swap last selected
            selected[selected.length - 1].classList.remove('selected');
            element.classList.add('selected');
        }
    }
};

window.selectRadioChoice = function(element, group) {
    const parentList = element.parentElement;
    const siblings = parentList.querySelectorAll('.custom-choice-item');
    siblings.forEach(sib => sib.classList.remove('selected'));
    element.classList.add('selected');
};

// Update price breakdown displayed inside customization modal
function updateCustomModalPrice() {
    if (!customizeTargetItem) return;
    
    let price = 0;
    const qty = parseInt(document.getElementById("custom-qty-val").innerText);
    
    if (customizeTargetItem.customizationType === "portion-size") {
        // Main Course prices are objects: {half: X, full: Y}
        const activeSize = document.querySelector("#customize-modal-body .custom-choice-item.selected");
        if (activeSize) {
            price = parseFloat(activeSize.getAttribute("data-price"));
        } else {
            price = customizeTargetItem.price.half;
        }
    } else {
        price = customizeTargetItem.price;
    }
    
    const totalPrice = price * qty;
    document.getElementById("custom-item-total-price").innerText = `₹${totalPrice}`;
}

// Validation before adding custom item to cart
function validateCustomization() {
    if (!customizeTargetItem) return false;
    const type = customizeTargetItem.customizationType;
    const body = document.getElementById("customize-modal-body");

    if (type === "veg-thali") {
        const selected = body.querySelectorAll(".custom-choice-item.selected");
        if (selected.length !== 2) {
            alert("Please choose exactly 2 veg sabzis for your thali.");
            return false;
        }
    } else if (type === "paneer-thali") {
        const selected = body.querySelectorAll(".custom-choice-item.selected");
        if (selected.length !== 1) {
            alert("Please choose 1 veg sabzi option.");
            return false;
        }
    } else if (type === "paratha-combo") {
        // Must select 1 sabzi and 1 paratha
        const sections = body.querySelectorAll(".custom-option-section");
        const sabziSel = sections[0].querySelectorAll(".custom-choice-item.selected");
        const parathaSel = sections[1].querySelectorAll(".custom-choice-item.selected");
        if (sabziSel.length !== 1 || parathaSel.length !== 1) {
            alert("Please select both a sabzi option and paratha style.");
            return false;
        }
    } else if (type === "poori-combo") {
        const selected = body.querySelectorAll(".custom-choice-item.selected");
        if (selected.length !== 1) {
            alert("Please select one gravy option.");
            return false;
        }
    } else if (type === "rice-bowl-veg") {
        const selected = body.querySelectorAll(".custom-choice-item.selected");
        if (selected.length !== 1) {
            alert("Please select one gravy option.");
            return false;
        }
    }
    return true;
}

// Triggered on modal CTA click
function handleCustomAddToCart() {
    if (!validateCustomization()) return;
    
    const qty = parseInt(document.getElementById("custom-qty-val").innerText);
    const body = document.getElementById("customize-modal-body");
    const customization = {};
    let customPrice = customizeTargetItem.price;

    if (customizeTargetItem.customizationType === "veg-thali") {
        const selected = Array.from(body.querySelectorAll(".custom-choice-item.selected")).map(el => el.querySelector(".choice-label-text").innerText);
        customization.sabzis = selected;
    } else if (customizeTargetItem.customizationType === "paneer-thali") {
        const selected = body.querySelector(".custom-choice-item.selected .choice-label-text").innerText;
        customization.sabzis = [selected];
    } else if (customizeTargetItem.customizationType === "paratha-combo") {
        const sections = body.querySelectorAll(".custom-option-section");
        customization.sabzi = sections[0].querySelector(".custom-choice-item.selected .choice-label-text").innerText;
        customization.paratha = sections[1].querySelector(".custom-choice-item.selected .choice-label-text").innerText;
    } else if (customizeTargetItem.customizationType === "poori-combo") {
        customization.choice = body.querySelector(".custom-choice-item.selected .choice-label-text").innerText;
    } else if (customizeTargetItem.customizationType === "rice-bowl-veg") {
        customization.choice = body.querySelector(".custom-choice-item.selected .choice-label-text").innerText;
    } else if (customizeTargetItem.customizationType === "portion-size") {
        const selectedEl = body.querySelector(".custom-choice-item.selected");
        customization.size = selectedEl.getAttribute("data-val");
        customPrice = parseFloat(selectedEl.getAttribute("data-price"));
    }

    // Add to cart with specific customizations
    addToCart(customizeTargetItem, qty, customization, customPrice);
    
    // Close modal
    document.getElementById("customize-modal").classList.remove("open");
    showToast(`${customizeTargetItem.name} added with customization!`);
    customizeTargetItem = null;
}

// 6. Cart Management Core Calculations
function getQuantityInCart(itemId) {
    // Standard quantity for non-customized items
    let count = 0;
    cart.forEach(cartItem => {
        if (cartItem.item.id === itemId) {
            count += cartItem.quantity;
        }
    });
    return count;
}

function addToCart(item, quantity, customization, customPrice = null) {
    const finalPrice = customPrice !== null ? customPrice : item.price;
    
    // Create unique key based on customization details to group matches
    const customKey = customization ? JSON.stringify(customization) : '';
    
    const existingIndex = cart.findIndex(c => c.item.id === item.id && JSON.stringify(c.customization) === customKey);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: `${item.id}-${Date.now()}`,
            item: item,
            quantity: quantity,
            customization: customization,
            unitPrice: finalPrice
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    renderMenuGrid();
}

window.updateCartQuantity = function(cartOrItemId, newQty) {
    // Handles updates from both menu cards (by itemId) and cart sidebar (by unique cartItem ID)
    let idx = cart.findIndex(c => c.id === cartOrItemId);
    
    if (idx === -1) {
        // Fallback search by item ID if item is not customized
        idx = cart.findIndex(c => c.item.id === cartOrItemId && !c.customization);
    }
    
    if (idx > -1) {
        if (newQty <= 0) {
            cart.splice(idx, 1);
        } else {
            cart[idx].quantity = newQty;
        }
        saveCartToStorage();
        updateCartDisplay();
        renderMenuGrid();
    }
};

window.removeFromCart = function(cartId) {
    cart = cart.filter(c => c.id !== cartId);
    saveCartToStorage();
    updateCartDisplay();
    renderMenuGrid();
};

// Dynamic Calculations: Subtotal, Packing, Delivery
function updateCartDisplay() {
    const container = document.getElementById("cart-items-container");
    const cartBadge = document.getElementById("cart-badge");
    const cartBtnText = document.querySelector(".cart-btn-text");
    const cartItemCount = document.getElementById("cart-item-count");
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your shopping basket is empty.</p>
                <p style="font-size: 13px; margin-top: 8px;">Order some homestyle magic now!</p>
            </div>
        `;
        cartBadge.innerText = "0";
        cartBadge.classList.add("hidden");
        cartBtnText.innerText = "₹0";
        cartItemCount.innerText = "0";
        checkoutBtn.disabled = true;
        
        document.getElementById("cart-subtotal").innerText = "₹0";
        document.getElementById("cart-packaging").innerText = "₹0";
        document.getElementById("cart-delivery").innerText = "₹0";
        document.getElementById("cart-grand-total").innerText = "₹0";
        document.getElementById("delivery-progress-area").classList.add("hidden");
        return;
    }

    // Badge details
    const totalItems = cart.reduce((acc, c) => acc + c.quantity, 0);
    cartBadge.innerText = totalItems;
    cartBadge.classList.remove("hidden");
    cartItemCount.innerText = totalItems;
    checkoutBtn.disabled = false;

    // Render cart item rows
    container.innerHTML = cart.map(cartItem => {
        const item = cartItem.item;
        let detailsHtml = '';
        if (cartItem.customization) {
            if (cartItem.customization.sabzis) {
                detailsHtml = `Sabzis: ${cartItem.customization.sabzis.join(', ')}`;
            } else if (cartItem.customization.sabzi) {
                detailsHtml = `Sabzi: ${cartItem.customization.sabzi} • ${cartItem.customization.paratha}`;
            } else if (cartItem.customization.choice) {
                detailsHtml = `Choice: ${cartItem.customization.choice}`;
            } else if (cartItem.customization.size) {
                detailsHtml = `Size: ${cartItem.customization.size}`;
            }
        }
        
        return `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-title-row">
                        <span>${item.name}</span>
                        <span>₹${cartItem.unitPrice * cartItem.quantity}</span>
                    </div>
                    ${detailsHtml ? `<span class="cart-item-custom-notes"><i class="fa-solid fa-list-ul"></i> ${detailsHtml}</span>` : ''}
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartQuantity('${cartItem.id}', ${cartItem.quantity - 1})">-</button>
                            <span class="qty-val">${cartItem.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity('${cartItem.id}', ${cartItem.quantity + 1})">+</button>
                        </div>
                        <button class="cart-item-remove-btn" onclick="removeFromCart('${cartItem.id}')" title="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Totals calculations
    const subtotal = cart.reduce((acc, c) => acc + (c.unitPrice * c.quantity), 0);
    
    // Calculate packing charges (₹10 per Thali or Rice Bowl unit)
    const packagingUnits = cart.reduce((acc, c) => {
        if (isThaliOrBowl(c.item)) {
            return acc + c.quantity;
        }
        return acc;
    }, 0);
    const packagingCharge = packagingUnits * storeConfig.packagingCharge;

    // Delivery charge check
    let deliveryCharge = storeConfig.deliveryCharge;
    const threshold = storeConfig.deliveryThreshold;
    const isFreeDelivery = subtotal >= threshold;
    if (isFreeDelivery) {
        deliveryCharge = 0;
    }

    const grandTotal = subtotal + packagingCharge + deliveryCharge;

    // Update displays
    cartBtnText.innerText = `₹${grandTotal}`;
    document.getElementById("cart-subtotal").innerText = `₹${subtotal}`;
    
    if (packagingCharge > 0) {
        document.getElementById("packaging-row").style.display = "flex";
        document.getElementById("cart-packaging").innerText = `₹${packagingCharge}`;
    } else {
        document.getElementById("packaging-row").style.display = "none";
    }

    document.getElementById("cart-delivery").innerText = deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`;
    document.getElementById("cart-grand-total").innerText = `₹${grandTotal}`;

    // Delivery progress tracker bar
    const progressArea = document.getElementById("delivery-progress-area");
    const progressText = document.getElementById("delivery-progress-text");
    const progressFill = document.getElementById("delivery-progress-fill");

    if (isFreeDelivery) {
        progressText.innerHTML = `🎉 Order eligible for <strong>FREE Delivery</strong>!`;
        progressFill.style.width = "100%";
        progressFill.style.background = "#10b981";
    } else {
        const remaining = threshold - subtotal;
        const percentage = (subtotal / threshold) * 100;
        progressText.innerHTML = `Add <strong>₹${remaining}</strong> more for FREE Delivery!`;
        progressFill.style.width = `${percentage}%`;
        progressFill.style.background = "linear-gradient(90deg, var(--primary-color) 0%, #10b981 100%)";
    }
    progressArea.classList.remove("hidden");
}

// 7. Checkout Form & Payment Flows
// Initialize Step 2 UPI Payment Elements
function setupUPIPaymentDetails(amount) {
    const upiId = storeConfig.upiId;
    const name = storeConfig.payeeName || "RENU CHUGH";
    
    document.getElementById("display-upi-id").innerText = upiId;
    
    const amtInput = document.getElementById("upi-payment-amount");
    amtInput.value = amount;
    
    updateUPIQRCode(amount);
}

// Regenerate UPI Deep Link & QR Canvas inside Modal
function updateUPIQRCode(amount) {
    const upiId = storeConfig.upiId;
    const name = storeConfig.payeeName || "RENU CHUGH";
    // Base UPI pay scheme VPA URI
    const upiUri = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
    
    // Generate QR using canvas
    const canvas = document.getElementById("upi-qr-canvas");
    
    // Clear canvas first
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const qr = new QRious({
        element: canvas,
        value: upiUri,
        size: 150,
        foreground: '#1c1917',
        background: '#ffffff',
        level: 'H' // High correction level to support overlay
    });

    // Update Mobile direct deep-link href
    const mobileLink = document.getElementById("mobile-upi-intent-link");
    mobileLink.href = upiUri;
}

// 8. Order Placement & WhatsApp Redirect Engine
function getCalculatedInvoice() {
    const subtotal = cart.reduce((acc, c) => acc + (c.unitPrice * c.quantity), 0);
    const packagingUnits = cart.reduce((acc, c) => isThaliOrBowl(c.item) ? acc + c.quantity : acc, 0);
    const packaging = packagingUnits * storeConfig.packagingCharge;
    const delivery = subtotal >= storeConfig.deliveryThreshold ? 0 : storeConfig.deliveryCharge;
    const total = subtotal + packaging + delivery;
    return { subtotal, packaging, delivery, total };
}

function compileWhatsAppMessage(customer, paymentMethod, paidAmount) {
    const invoice = getCalculatedInvoice();
    let msg = `*MOM'S FOOD DELIGHT ORDER*\n`;
    msg += `---------------------------------\n`;
    msg += `*Customer Details:*\n`;
    msg += `• Name: ${customer.name}\n`;
    msg += `• Phone: ${customer.phone}\n`;
    msg += `• Delivery Address: ${customer.address}\n`;
    msg += `• Landmark: ${customer.landmark}\n\n`;
    
    msg += `*Items Ordered:*\n`;
    cart.forEach(cartItem => {
        msg += `• ${cartItem.quantity}x ${cartItem.item.name}`;
        if (typeof cartItem.item.price === 'object') {
            msg += ` (${cartItem.customization.size})`;
        }
        msg += ` - ₹${cartItem.unitPrice * cartItem.quantity}\n`;
        if (cartItem.customization) {
            if (cartItem.customization.sabzis) {
                msg += `  [Sabzis: ${cartItem.customization.sabzis.join(', ')}]\n`;
            } else if (cartItem.customization.sabzi) {
                msg += `  [Sabzi: ${cartItem.customization.sabzi} | ${cartItem.customization.paratha}]\n`;
            } else if (cartItem.customization.choice) {
                msg += `  [Choice: ${cartItem.customization.choice}]\n`;
            }
        }
    });
    msg += `\n`;
    
    msg += `*Pricing Breakdown:*\n`;
    msg += `• Subtotal: ₹${invoice.subtotal}\n`;
    if (invoice.packaging > 0) {
        msg += `• Packing Fee: ₹${invoice.packaging}\n`;
    }
    msg += `• Delivery Charge: ${invoice.delivery === 0 ? 'FREE' : `₹${invoice.delivery}`}\n`;
    msg += `*• Grand Total: ₹${invoice.total}*\n`;
    msg += `---------------------------------\n`;
    
    msg += `*Payment Mode:* ${paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'UPI / Paytm Pre-paid'}\n`;
    if (paymentMethod === 'upi') {
        msg += `• Status: Paid ₹${paidAmount} via UPI\n`;
        // Include clickable link for business reference if they scan
        const upiPayLink = `upi://pay?pa=${storeConfig.upiId}&pn=${encodeURIComponent(storeConfig.payeeName || "RENU CHUGH")}&am=${paidAmount}&cu=INR`;
        msg += `• Payment Link: ${upiPayLink}\n`;
    }
    msg += `---------------------------------\n`;
    msg += `Please confirm and prepare my order. Thank you!`;
    
    return msg;
}

// Complete checkout, save to sandbox, launch WhatsApp
function placeAndDispatchOrder() {
    const customer = {
        name: document.getElementById("cust-name").value,
        phone: document.getElementById("cust-phone").value,
        address: document.getElementById("cust-address").value,
        landmark: document.getElementById("cust-landmark").value
    };

    const isUPI = document.getElementById("pay-method-upi").classList.contains("active");
    const paymentMethod = isUPI ? "upi" : "cod";
    const paidAmount = isUPI ? parseFloat(document.getElementById("upi-payment-amount").value) : 0;
    
    const invoice = getCalculatedInvoice();
    const orderId = `MOM-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const newOrder = {
        id: orderId,
        timestamp: new Date().toISOString(),
        customer: customer,
        items: [...cart],
        invoice: invoice,
        payment: {
            method: paymentMethod,
            amount: paymentMethod === 'upi' ? paidAmount : invoice.total
        },
        status: "placed" // placed -> preparing -> shipping -> delivered
    };

    // Save order history locally
    orderHistory.unshift(newOrder);
    localStorage.setItem("mom_order_history", JSON.stringify(orderHistory));

    // Save active tracking order
    activeOrder = newOrder;
    localStorage.setItem("mom_active_order", JSON.stringify(activeOrder));

    // Trigger local simulation timer for order progress (Simulate updates for user wow factor)
    startLiveOrderMockSimulation(orderId);

    // Create WhatsApp URL redirect
    const msgText = compileWhatsAppMessage(customer, paymentMethod, paidAmount);
    const waUrl = `https://wa.me/91${storeConfig.whatsappNumber}?text=${encodeURIComponent(msgText)}`;

    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    renderMenuGrid();

    // Close checkout modal
    document.getElementById("checkout-modal").classList.remove("open");
    
    // Refresh screens
    renderPastOrders();
    renderAdminSandboxOrders();
    checkActiveOrderTracking();
    
    // Direct User to Tracking tab automatically
    switchTab("tracking-section");

    // Open WhatsApp in new tab to place
    window.open(waUrl, '_blank');
}

// Simple Tab Switcher helper
function switchTab(sectionId) {
    const sections = ["menu-section", "tracking-section", "history-section", "admin-section"];
    
    sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (sec === sectionId) {
            el.classList.remove("hidden");
        } else {
            el.classList.add("hidden");
        }
    });

    // Update active state in nav links
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === `#${sectionId}` || (sectionId === 'menu-section' && href === '#')) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// 9. Mock Tracking System
// Simulation timings (for show): moves statuses automatically if user remains on page
function startLiveOrderMockSimulation(orderId) {
    // Stage 1: Placed -> Preparing (after 10s)
    setTimeout(() => {
        updateSimulatedOrderStatus(orderId, "preparing");
    }, 15000);

    // Stage 2: Preparing -> Shipping (after 35s)
    setTimeout(() => {
        updateSimulatedOrderStatus(orderId, "shipping");
    }, 45000);

    // Stage 3: Shipping -> Delivered (after 70s)
    setTimeout(() => {
        updateSimulatedOrderStatus(orderId, "delivered");
    }, 85000);
}

// Update order status in tracking & admin lists
function updateSimulatedOrderStatus(orderId, newStatus) {
    // Update active tracking order if matches
    if (activeOrder && activeOrder.id === orderId) {
        activeOrder.status = newStatus;
        localStorage.setItem("mom_active_order", JSON.stringify(activeOrder));
        checkActiveOrderTracking();
    }

    // Update in order history
    const idx = orderHistory.findIndex(o => o.id === orderId);
    if (idx > -1) {
        orderHistory[idx].status = newStatus;
        localStorage.setItem("mom_order_history", JSON.stringify(orderHistory));
        renderPastOrders();
    }

    renderAdminSandboxOrders();
}

// Render active order timeline tracking interface
function checkActiveOrderTracking() {
    const container = document.getElementById("tracker-card");
    const navLink = document.getElementById("nav-track-link");

    if (!activeOrder) {
        navLink.style.display = "none"; // Hide tracking link from nav if no active order
        container.innerHTML = `
            <div class="no-active-order">
                <i class="fa-solid fa-bell-slash"></i>
                <h3>No active orders being tracked.</h3>
                <p>Add fresh food to your cart and check out to track live status updates here!</p>
                <button class="btn btn-primary" style="margin-top: 20px;" onclick="switchTab('menu-section')">Browse Menu</button>
            </div>
        `;
        return;
    }

    navLink.style.display = "flex";
    
    // Status visual map
    const status = activeOrder.status;
    let step = 1;
    let fillPercent = 0;
    
    if (status === "placed") { step = 1; fillPercent = 15; }
    else if (status === "preparing") { step = 2; fillPercent = 50; }
    else if (status === "shipping") { step = 3; fillPercent = 80; }
    else if (status === "delivered") { step = 4; fillPercent = 100; }

    // Renders the timeline UI
    container.innerHTML = `
        <div class="tracker-summary-header">
            <div>
                <span class="tracker-id">Order ID: #${activeOrder.id}</span>
                <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">Sent to WhatsApp: ${new Date(activeOrder.timestamp).toLocaleTimeString()}</div>
            </div>
            <div style="text-align: right;">
                <span class="tracker-est-time">${status === 'delivered' ? 'DELIVERED' : 'Est. Delivery: 25-35 mins'}</span>
            </div>
        </div>

        <div class="tracker-timeline" style="--timeline-fill-percent: ${fillPercent}%; --timeline-fill-color: var(--success-color);">
            <div class="timeline-step ${step >= 1 ? (step > 1 ? 'completed' : 'active') : ''}">
                <div class="timeline-icon">
                    ${step > 1 ? '<i class="fa-solid fa-check"></i>' : '1'}
                </div>
                <div class="timeline-title">Order Received</div>
                <div class="timeline-desc">Order details dispatched to Mom's Kitchen via WhatsApp.</div>
            </div>

            <div class="timeline-step ${step >= 2 ? (step > 2 ? 'completed' : 'active') : ''}">
                <div class="timeline-icon">
                    ${step > 2 ? '<i class="fa-solid fa-check"></i>' : '2'}
                </div>
                <div class="timeline-title">Mom Cooking with Love</div>
                <div class="timeline-desc">Your meals are being freshly prepared and packed under premium hygiene standards.</div>
            </div>

            <div class="timeline-step ${step >= 3 ? (step > 3 ? 'completed' : 'active') : ''}">
                <div class="timeline-icon">
                    ${step > 3 ? '<i class="fa-solid fa-check"></i>' : '3'}
                </div>
                <div class="timeline-title">Out for Delivery</div>
                <div class="timeline-desc">Our delivery partner is rushing your steaming hot meal to your doorstep.</div>
            </div>

            <div class="timeline-step ${step >= 4 ? (step > 4 ? 'completed' : 'active') : ''}">
                <div class="timeline-icon">
                    ${step > 4 ? '<i class="fa-solid fa-check"></i>' : '4'}
                </div>
                <div class="timeline-title">Enjoy your Meal!</div>
                <div class="timeline-desc">Order delivered. Enjoy the authentic goodness of Mom's Kitchen!</div>
            </div>
        </div>

        ${status === 'delivered' ? `
            <div style="text-align: center; margin-top: 40px; border-top: 1px solid var(--border-color); padding-top: 24px;">
                <button class="btn btn-secondary" onclick="clearActiveOrderTracking()">Close Tracking Screen</button>
            </div>
        ` : `
            <div class="alert alert-warning" style="margin-top: 40px;">
                <i class="fa-solid fa-clock"></i>
                <span>This page simulates live merchant order status updates. You can also manually override order status inside the <strong>Merchant Admin Control Panel</strong>.</span>
            </div>
        `}
    `;
}

window.clearActiveOrderTracking = function() {
    activeOrder = null;
    localStorage.removeItem("mom_active_order");
    checkActiveOrderTracking();
    switchTab("menu-section");
};

// Render Past Orders lists
function renderPastOrders() {
    const container = document.getElementById("history-list");
    if (orderHistory.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fa-solid fa-clock-rotate-left" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p>You haven't ordered anything yet!</p>
                <button class="btn btn-primary" style="margin-top: 20px;" onclick="switchTab('menu-section')">Order Now</button>
            </div>
        `;
        return;
    }

    container.innerHTML = orderHistory.map(order => {
        const itemSummaries = order.items.map(i => `${i.quantity}x ${i.item.name}`).join(', ');
        const dateStr = new Date(order.timestamp).toLocaleDateString() + ' ' + new Date(order.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        return `
            <div class="history-card">
                <div class="history-header">
                    <div class="history-header-details">
                        <h4>Order ID: #${order.id}</h4>
                        <span class="history-date">${dateStr}</span>
                    </div>
                    <div>
                        <span class="history-amount">₹${order.invoice.total}</span>
                    </div>
                </div>
                <div class="history-body">
                    <div>
                        <div class="history-items-desc">${itemSummaries}</div>
                        <div style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">Payment: ${order.payment.method.toUpperCase()} (${order.payment.amount === order.invoice.total ? 'Paid Full' : `Paid ₹${order.payment.amount}`})</div>
                    </div>
                    <div style="display: flex; gap: 16px; align-items: center;">
                        <span class="history-status-badge status-${order.status === 'delivered' ? 'delivered' : (order.status === 'canceled' ? 'canceled' : 'placed')}">${order.status}</span>
                        <button class="btn btn-secondary btn-sm" onclick="reorderItems('${order.id}')"><i class="fa-solid fa-repeat"></i> Reorder</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.reorderItems = function(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;

    // Load order items back into cart
    order.items.forEach(pastItem => {
        // Find fresh equivalent item from database
        const dbItem = menuItems.find(i => i.id === pastItem.item.id);
        if (dbItem) {
            addToCart(dbItem, pastItem.quantity, pastItem.customization, pastItem.unitPrice);
        }
    });

    showToast("Items added back to cart! Opening cart sidebar...");
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
};

// 10. Admin Control Panel Sandbox simulation logic
function renderAdminSandboxOrders() {
    const container = document.getElementById("admin-orders-list");
    if (orderHistory.length === 0) {
        container.innerHTML = `
            <div style="color: var(--text-secondary); font-size: 13px; text-align: center; padding: 20px;">
                No orders received in local sandbox database. Place mock orders first!
            </div>
        `;
        return;
    }

    container.innerHTML = orderHistory.map(order => `
        <div class="sim-order-row">
            <div class="sim-order-header">
                <span>ID: #${order.id} (Total: ₹${order.invoice.total})</span>
                <span style="color: var(--primary-color); text-transform: uppercase;">${order.status}</span>
            </div>
            <div style="font-size: 12px; color: var(--text-secondary);">
                <div>Client: ${order.customer.name} (${order.customer.phone})</div>
                <div>Address: ${order.customer.address}</div>
            </div>
            <div class="sim-order-actions">
                <button class="btn btn-secondary btn-sm" ${order.status === 'preparing' ? 'disabled' : ''} onclick="updateSimulatedOrderStatus('${order.id}', 'preparing')">Cook</button>
                <button class="btn btn-secondary btn-sm" ${order.status === 'shipping' ? 'disabled' : ''} onclick="updateSimulatedOrderStatus('${order.id}', 'shipping')">Ship</button>
                <button class="btn btn-success btn-sm" ${order.status === 'delivered' ? 'disabled' : ''} onclick="updateSimulatedOrderStatus('${order.id}', 'delivered')">Deliver</button>
                <button class="btn btn-secondary btn-sm" style="color: var(--error-color);" onclick="updateSimulatedOrderStatus('${order.id}', 'canceled')">Cancel</button>
            </div>
        </div>
    `).join('');
}

// Render the list of Sabzi toggles in Admin
function renderAdminSabziToggles() {
    const container = document.getElementById("admin-sabzi-toggles");
    if (!container) return;

    const mainCourseItems = menuItems.filter(i => i.category === "Main Course").map(i => i.name);

    container.innerHTML = mainCourseItems.map(sabzi => {
        const isAvailable = window.sabziAvailability[sabzi] !== false;
        return `
            <div class="sabzi-toggle-row">
                <span class="sabzi-toggle-name">${sabzi}</span>
                <label class="switch">
                    <input type="checkbox" class="sabzi-avail-checkbox" data-name="${sabzi}" ${isAvailable ? 'checked' : ''} onchange="toggleSabziAvailability('${sabzi}', this.checked)">
                    <span class="slider round"></span>
                </label>
            </div>
        `;
    }).join('');
}

// Toggle sabzi availability on change
window.toggleSabziAvailability = async function(sabziName, isAvailable) {
    window.sabziAvailability[sabziName] = isAvailable;
    try {
        const res = await fetch('/api/menu-availability', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(window.sabziAvailability)
        });
        const data = await res.json();
        if (data.success) {
            showToast(`${sabziName} set to ${isAvailable ? 'Available' : 'Out of Stock'}`);
            renderMenuGrid();
            renderAdminSabziToggles();
        } else {
            throw new Error("Failed to save to server");
        }
    } catch (err) {
        console.error("Error setting menu availability", err);
        showToast("Error updating inventory on server.");
    }
};

// Toast notification trigger
function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    
    toastMsg.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// 11. Event Listeners Config Setup
function setupEventListeners() {
    // Theme Toggle Trigger
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const doc = document.documentElement;
        const currentTheme = doc.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        doc.setAttribute("data-theme", newTheme);
        showToast(`Theme switched to ${newTheme} mode!`);
    });

    // Cart Sidebar Trigger opens & close
    const cartTrigger = document.getElementById("cart-trigger");
    const cartClose = document.getElementById("cart-close");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay");
    
    cartTrigger.addEventListener("click", () => {
        cartSidebar.classList.add("open");
        cartOverlay.classList.add("open");
    });
    
    const closeCartFn = () => {
        cartSidebar.classList.remove("open");
        cartOverlay.classList.remove("open");
    };
    cartClose.addEventListener("click", closeCartFn);
    cartOverlay.addEventListener("click", closeCartFn);

    // Search bar search logic
    const searchInput = document.getElementById("menu-search");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderMenuGrid();
    });

    // Pure Veg Toggle switch triggers
    const vegToggle = document.getElementById("veg-only-toggle");
    vegToggle.addEventListener("change", (e) => {
        isVegOnly = e.target.checked;
        renderMenuGrid();
    });

    // Customization Modal Close
    document.getElementById("customize-close-btn").addEventListener("click", () => {
        document.getElementById("customize-modal").classList.remove("open");
        customizeTargetItem = null;
    });

    // Quantity modifiers inside customization modal
    const qtyVal = document.getElementById("custom-qty-val");
    document.getElementById("custom-qty-dec").addEventListener("click", () => {
        const val = parseInt(qtyVal.innerText);
        if (val > 1) {
            qtyVal.innerText = val - 1;
            updateCustomModalPrice();
        }
    });
    document.getElementById("custom-qty-inc").addEventListener("click", () => {
        const val = parseInt(qtyVal.innerText);
        qtyVal.innerText = val + 1;
        updateCustomModalPrice();
    });

    // Add Custom Item CTA Trigger click
    document.getElementById("add-custom-to-cart").addEventListener("click", handleCustomAddToCart);

    // Checkout Drawer CTA Trigger click -> Opens modal
    document.getElementById("cart-checkout-btn").addEventListener("click", () => {
        closeCartFn();
        
        // Open Checkout Modal & reset layout states
        const checkoutModal = document.getElementById("checkout-modal");
        checkoutModal.classList.add("open");
        
        // Populate invoice summary inside step 2 display fields
        const invoice = getCalculatedInvoice();
        document.getElementById("checkout-original-total").innerText = `₹${invoice.total}`;
        
        // Show Step 1 Address panels
        document.getElementById("checkout-step-1").classList.remove("hidden");
        document.getElementById("checkout-step-2").classList.add("hidden");
        document.getElementById("checkout-step-3").classList.add("hidden");
        
        document.getElementById("step-ind-1").className = "step-indicator active";
        document.getElementById("step-ind-2").className = "step-indicator";
        document.getElementById("step-ind-3").className = "step-indicator";
    });

    // Checkout modal Close btn
    document.getElementById("checkout-close-btn").addEventListener("click", () => {
        document.getElementById("checkout-modal").classList.remove("open");
    });

    // Step 1: Address submission triggers transition to Step 2
    document.getElementById("delivery-form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Move to Step 2 Payment panels
        document.getElementById("checkout-step-1").classList.add("hidden");
        document.getElementById("checkout-step-2").classList.remove("hidden");
        
        document.getElementById("step-ind-1").className = "step-indicator completed";
        document.getElementById("step-ind-2").className = "step-indicator active";
        
        // Populate standard default UPI options
        const invoice = getCalculatedInvoice();
        setupUPIPaymentDetails(invoice.total);
    });

    // Step 2 Payment choice tabs selectors
    const btnUPI = document.getElementById("pay-method-upi");
    const btnCOD = document.getElementById("pay-method-cod");
    const contentUPI = document.getElementById("payment-content-upi");
    const contentCOD = document.getElementById("payment-content-cod");

    btnUPI.addEventListener("click", () => {
        btnUPI.classList.add("active");
        btnCOD.classList.remove("active");
        contentUPI.classList.remove("hidden");
        contentCOD.classList.add("hidden");
    });

    btnCOD.addEventListener("click", () => {
        btnCOD.classList.add("active");
        btnUPI.classList.remove("active");
        contentCOD.classList.remove("hidden");
        contentUPI.classList.add("hidden");
    });

    // Amount editor input listener inside step 2 payment screen
    const amtInput = document.getElementById("upi-payment-amount");
    amtInput.addEventListener("input", (e) => {
        let val = parseFloat(e.target.value);
        if (isNaN(val) || val <= 0) val = 1;
        updateUPIQRCode(val);
    });

    document.getElementById("reset-payment-amount").addEventListener("click", () => {
        const invoice = getCalculatedInvoice();
        amtInput.value = invoice.total;
        updateUPIQRCode(invoice.total);
    });

    // Payment Step back button returns to Step 1 Form
    document.getElementById("payment-back-btn").addEventListener("click", () => {
        document.getElementById("checkout-step-2").classList.add("hidden");
        document.getElementById("checkout-step-1").classList.remove("hidden");
        document.getElementById("step-ind-1").className = "step-indicator active";
        document.getElementById("step-ind-2").className = "step-indicator";
    });

    // Payment Step verification transition submit trigger
    document.getElementById("payment-submit-btn").addEventListener("click", () => {
        // Validate UPI amount if chosen
        const isUPI = btnUPI.classList.contains("active");
        if (isUPI) {
            const amt = parseFloat(amtInput.value);
            if (isNaN(amt) || amt <= 0) {
                alert("Please enter a valid payment amount.");
                return;
            }
        }
        
        // Move to Step 3: Confirmation Summary Receipt Details
        document.getElementById("checkout-step-2").classList.add("hidden");
        document.getElementById("checkout-step-3").classList.remove("hidden");
        
        document.getElementById("step-ind-2").className = "step-indicator completed";
        document.getElementById("step-ind-3").className = "step-indicator active";

        // Render checkout invoice preview summaries
        const name = document.getElementById("cust-name").value;
        const phone = document.getElementById("cust-phone").value;
        const addr = document.getElementById("cust-address").value;
        const invoice = getCalculatedInvoice();
        const paymentMethod = isUPI ? "UPI / Paytm Pre-paid" : "Cash on Delivery (COD)";
        
        const receiptContainer = document.getElementById("order-receipt-preview");
        receiptContainer.innerHTML = `
            <div class="receipt-header">
                <span>Mom's Food Delight Receipt</span>
                <span>Pre-Confirmation</span>
            </div>
            <div class="receipt-items-list">
                ${cart.map(c => `
                    <div class="receipt-item-row">
                        <span>${c.quantity}x ${c.item.name} ${c.customization && c.customization.size ? `(${c.customization.size})` : ''}</span>
                        <span>₹${c.unitPrice * c.quantity}</span>
                    </div>
                `).join('')}
            </div>
            <div class="receipt-meta-details">
                <div><strong>Delivery To:</strong> ${name} (${phone})</div>
                <div><strong>Address:</strong> ${addr}</div>
                <div><strong>Subtotal:</strong> ₹${invoice.subtotal}</div>
                ${invoice.packaging > 0 ? `<div><strong>Packaging:</strong> ₹${invoice.packaging}</div>` : ''}
                <div><strong>Delivery Charge:</strong> ${invoice.delivery === 0 ? 'FREE' : `₹${invoice.delivery}`}</div>
                <div style="font-size:16px; margin-top: 8px; color: var(--primary-color);"><strong>Grand Total: ₹${invoice.total}</strong></div>
                <div><strong>Payment Method:</strong> ${paymentMethod} ${isUPI ? `(Paid: ₹${amtInput.value})` : ''}</div>
            </div>
        `;
    });

    // Step 3 final CTA click places local order & redirects to WA
    document.getElementById("whatsapp-dispatch-btn").addEventListener("click", placeAndDispatchOrder);

    // Nav-bar Anchor switches clicks
    document.querySelector(".nav-links").addEventListener("click", (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;
        
        e.preventDefault();
        const href = anchor.getAttribute("href");
        
        if (href === "#") {
            switchTab("menu-section");
        } else {
            switchTab(href.substring(1));
        }
    });

    // Logo Area click switches back to Menu
    document.getElementById("nav-logo").addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("menu-section");
    });

    const handleAdminClick = (e) => {
        e.preventDefault();
        if (isAdminAuthorized) {
            switchTab("admin-section");
            renderAdminSabziToggles();
        } else {
            document.getElementById("admin-auth-modal").classList.add("open");
            document.getElementById("auth-passcode").value = "";
            document.getElementById("auth-error-msg").classList.add("hidden");
        }
    };

    // Nav Admin click opens Admin
    document.getElementById("nav-admin-link").addEventListener("click", handleAdminClick);

    // Footer Admin trigger button opens Admin
    document.getElementById("footer-admin-trigger").addEventListener("click", (e) => {
        handleAdminClick(e);
        if (isAdminAuthorized) {
            // Scroll to admin tab smoothly
            document.getElementById("admin-section").scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Close admin panel triggers switch back to menu
    document.getElementById("close-admin-btn").addEventListener("click", () => {
        switchTab("menu-section");
    });

    // Admin Passcode authentication form verify
    document.getElementById("admin-auth-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const passcode = document.getElementById("auth-passcode").value;
        const errorMsg = document.getElementById("auth-error-msg");
        const modalContent = document.querySelector("#admin-auth-modal .modal-content");

        try {
            const response = await fetch('/api/admin/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passcode })
            });
            const data = await response.json();

            if (response.ok && data.success) {
                isAdminAuthorized = true;
                document.getElementById("admin-auth-modal").classList.remove("open");
                showToast("Welcome back, Admin!");
                switchTab("admin-section");
                renderAdminSabziToggles();
            } else {
                throw new Error("Invalid passcode");
            }
        } catch (err) {
            modalContent.classList.add("shake");
            errorMsg.classList.remove("hidden");
            setTimeout(() => modalContent.classList.remove("shake"), 500);
        }
    });

    // Close auth modal click
    document.getElementById("auth-close-btn").addEventListener("click", () => {
        document.getElementById("admin-auth-modal").classList.remove("open");
    });

    // Store Configuration submit triggers save settings
    document.getElementById("store-config-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const upi = document.getElementById("config-upi").value;
        const payeeName = document.getElementById("config-payee-name") ? document.getElementById("config-payee-name").value : "RENU CHUGH";
        const phone = document.getElementById("config-phone").value;
        const threshold = parseFloat(document.getElementById("config-delivery-threshold").value);
        const charge = parseFloat(document.getElementById("config-delivery-charge").value);
        
        saveStoreConfig({
            upiId: upi,
            payeeName: payeeName,
            whatsappNumber: phone,
            deliveryThreshold: threshold,
            deliveryCharge: charge
        });
    });
}
