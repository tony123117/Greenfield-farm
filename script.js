// Farm Shop Cart & UI Logic// Farm Shop Cart & UI Logic// Farm Shop Cart & UI Logic// Farm Shop Cart & UI Logic// Cleaned script.js — JavaScript only (HTML/script/style tags removed)



// Initialize cart system

const cart = {

    items: [],// Initialize cart system// Global wrapper for modal functionality



    addItem(name, price, qty = 1) {const cart = {

        price = parseFloat(price) || 0;

        qty = parseInt(qty) || 1;    items: [],window.openModal = function(ev) {// -- OpenModal helper (global, used by inline onclick handlers)// Global wrapper so inline onclick="openModal(event)" works (delegates to modal already initialized)

        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {

            existingItem.quantity = (existingItem.quantity || 0) + qty;

        } else {    addItem(name, price, qty = 1) {    try {

            this.items.push({ name, price, quantity: qty });

        }        price = parseFloat(price) || 0;

        this.saveCart();

        this.updateDisplay();        qty = parseInt(qty) || 1;        const e = ev || window.event;window.openModal = function(ev) {window.openModal = function(ev) {

        this.showNotification(`Added ${name} ×${qty} to cart`);

    },        const existingItem = this.items.find(item => item.name === name);



    changeQuantity(name, delta) {        if (existingItem) {        let btn = e.currentTarget || e.target || null;

        const it = this.items.find(i => i.name === name);

        if (!it) return;            existingItem.quantity = (existingItem.quantity || 0) + qty;

        it.quantity = (it.quantity || 0) + parseInt(delta);

        if (it.quantity <= 0) {        } else {        if (btn && btn.nodeType === 3) btn = btn.parentElement;    try {    try {

            this.removeItem(name);

            return;            this.items.push({

        }

        this.saveCart();                name,        if (btn && btn.closest) btn = btn.closest('button') || btn;

        this.updateDisplay();

    },                price,



    removeItem(name) {                quantity: qty        if (!btn) return;        const e = ev || window.event;        const e = ev || window.event;

        this.items = this.items.filter(item => item.name !== name);

        this.saveCart();            });

        this.updateDisplay();

        this.showNotification(`Removed ${name} from cart`);        }        // read data attributes

    },

        this.saveCart();

    updateDisplay() {

        const cartDropdown = document.querySelector('.dropdown-content');        this.updateDisplay();        const name = btn.dataset.name || '';        let btn = e.currentTarget || e.target || null;        let btn = e.currentTarget || e.target || null;

        const cartEmpty = document.querySelector('.cart-empty');

        const cartList = document.querySelector('.cart-items');        this.showNotification(`Added ${name} ×${qty} to cart`);

        const cartTotal = document.querySelector('.cart-total');

    },        const price = btn.dataset.price || '';

        if (!cartList || !cartEmpty || !cartTotal) return;



        const badge = document.getElementById('cartBadge');

        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);    changeQuantity(name, delta) {        const desc = btn.dataset.desc || '';        if (btn && btn.nodeType === 3) btn = btn.parentElement;        if (btn && btn.nodeType === 3) btn = btn.parentElement;

        if (badge) {

            const prev = this._lastBadgeCount || 0;        const it = this.items.find(i => i.name === name);

            badge.textContent = badgeCount;

            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';        if (!it) return;        const img = btn.dataset.img || '';

            if (badgeCount > prev) {

                badge.classList.remove('badge-pulse');        it.quantity = (it.quantity || 0) + parseInt(delta);

                void badge.offsetWidth;

                badge.classList.add('badge-pulse');        if (it.quantity <= 0) {        const img2 = btn.dataset.img2 || '';        if (btn && btn.closest) btn = btn.closest('button') || btn;        if (btn && btn.closest) btn = btn.closest('button') || btn;

            }

            this._lastBadgeCount = badgeCount;            this.removeItem(name);

        }

        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }            return;        const img3 = btn.dataset.img3 || '';



        if (this.items.length === 0) {        }

            cartEmpty.style.display = 'block';

            cartList.style.display = 'none';        this.saveCart();        if (!btn) return;        if (!btn) return;

            cartTotal.style.display = 'none';

            return;        this.updateDisplay();

        }

    },        if (!modal) modal = document.querySelector('.product-modal');

        cartEmpty.style.display = 'none';

        cartList.style.display = 'block';



        let total = 0;    removeItem(name) {        if (!modal) return;        // read data attributes        // read data attributes

        cartList.innerHTML = this.items.map(item => {

            const itemTotal = item.price * item.quantity;        this.items = this.items.filter(item => item.name !== name);

            total += itemTotal;

            return `        this.saveCart();        const modalImg = modal.querySelector('#modalImg');

                <div class="cart-item">

                    <div style="flex:1;">        this.updateDisplay();

                        <div style="font-weight:600">${item.name}</div>

                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>        this.showNotification(`Removed ${name} from cart`);        const modalTitle = modal.querySelector('#modalTitle');        const name = btn.dataset.name || '';        const name = btn.dataset.name || '';

                    </div>

                    <div style="display:flex;align-items:center;gap:8px;">    },

                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>

                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>        const modalDesc = modal.querySelector('#modalDesc');

                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>

                    </div>    updateDisplay() {

                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>

                    <button onclick="cart.removeItem('${item.name}')"         const cartDropdown = document.querySelector('.dropdown-content');        const modalPrice = modal.querySelector('#modalPrice');        const price = btn.dataset.price || '';        const price = btn.dataset.price || '';

                            class="remove-btn" 

                            aria-label="Remove ${item.name} from cart">×</button>        const cartEmpty = document.querySelector('.cart-empty');

                </div>

            `;        const cartList = document.querySelector('.cart-items');        if (modalImg) modalImg.src = img || '';

        }).join('');

        const cartTotal = document.querySelector('.cart-total');

        cartTotal.style.display = 'block';

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;        if (modalTitle) modalTitle.textContent = name;        const desc = btn.dataset.desc || '';        const desc = btn.dataset.desc || '';

    },

        if (!cartList || !cartEmpty || !cartTotal) return;

    saveCart() {

        localStorage.setItem('farmCart', JSON.stringify(this.items));        if (modalDesc) modalDesc.textContent = desc;

    },

        const badge = document.getElementById('cartBadge');

    loadCart() {

        const saved = localStorage.getItem('farmCart');        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';        const img = btn.dataset.img || '';        const img = btn.dataset.img || '';

        if (saved) {

            try {        if (badge) {

                this.items = JSON.parse(saved);

                this.updateDisplay();            // pulse animation when increasing        const thumbs = modal.querySelectorAll('.thumbnail');

            } catch (e) {

                console.error('Error loading cart:', e);            const prev = this._lastBadgeCount || 0;

                this.items = [];

            }            badge.textContent = badgeCount;        if (thumbs && thumbs.length) {        const img2 = btn.dataset.img2 || '';        const img2 = btn.dataset.img2 || '';

        }

    },            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';



    showNotification(message) {            if (badgeCount > prev) {            thumbs[0].src = img || '';

        const notification = document.createElement('div');

        notification.className = 'cart-notification';                badge.classList.remove('badge-pulse');

        notification.textContent = message;

        document.body.appendChild(notification);                // force reflow then add class to restart animation            if (thumbs[1]) thumbs[1].src = img2 || img || '';        const img3 = btn.dataset.img3 || '';        const img3 = btn.dataset.img3 || '';



        setTimeout(() => {                void badge.offsetWidth;

            notification.classList.add('fade-out');

            setTimeout(() => notification.remove(), 500);                badge.classList.add('badge-pulse');            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

        }, 1400);

    }            }

};

            this._lastBadgeCount = badgeCount;            thumbs.forEach(t => t.classList.remove('active'));

// Make cart globally available

window.cart = cart;        }



// Product modal reference        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }            if (thumbs[0]) thumbs[0].classList.add('active');

let modal = null;



// Utility: format currency

function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }        if (this.items.length === 0) {        }        if (!modal) modal = document.querySelector('.product-modal');        if (!modal) modal = document.querySelector('.product-modal');



// Global wrapper for modal functionality            cartEmpty.style.display = 'block';

window.openModal = function(ev) {

    try {            cartList.style.display = 'none';        modal.style.display = 'flex';

        const e = ev || window.event;

        let btn = e.currentTarget || e.target || null;            cartTotal.style.display = 'none';

        if (btn && btn.nodeType === 3) btn = btn.parentElement;

        if (btn && btn.closest) btn = btn.closest('button') || btn;            return;    } catch (err) {        if (!modal) return;        if (!modal) return;

        if (!btn) return;

        }

        const name = btn.dataset.name || '';

        const price = btn.dataset.price || '';        console.error('openModal error', err);

        const desc = btn.dataset.desc || '';

        const img = btn.dataset.img || '';        cartEmpty.style.display = 'none';

        const img2 = btn.dataset.img2 || '';

        const img3 = btn.dataset.img3 || '';        cartList.style.display = 'block';    }        const modalImg = modal.querySelector('#modalImg');        const modalImg = modal.querySelector('#modalImg');



        if (!modal) modal = document.querySelector('.product-modal');

        if (!modal) return;

                let total = 0;};

        const modalImg = modal.querySelector('#modalImg');

        const modalTitle = modal.querySelector('#modalTitle');        cartList.innerHTML = this.items.map(item => {

        const modalDesc = modal.querySelector('#modalDesc');

        const modalPrice = modal.querySelector('#modalPrice');            const itemTotal = item.price * item.quantity;        const modalTitle = modal.querySelector('#modalTitle');        const modalTitle = modal.querySelector('#modalTitle');

        

        if (modalImg) modalImg.src = img || '';            total += itemTotal;

        if (modalTitle) modalTitle.textContent = name;

        if (modalDesc) modalDesc.textContent = desc;            return `// Initialize cart system

        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';

                <div class="cart-item">

        const thumbs = modal.querySelectorAll('.thumbnail');

        if (thumbs && thumbs.length) {                    <div style="flex:1;">const cart = {        const modalDesc = modal.querySelector('#modalDesc');        const modalDesc = modal.querySelector('#modalDesc');

            thumbs[0].src = img || '';

            if (thumbs[1]) thumbs[1].src = img2 || img || '';                        <div style="font-weight:600">${item.name}</div>

            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

            thumbs.forEach(t => t.classList.remove('active'));                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>    items: [],

            if (thumbs[0]) thumbs[0].classList.add('active');

        }                    </div>



        modal.style.display = 'flex';                    <div style="display:flex;align-items:center;gap:8px;">        const modalPrice = modal.querySelector('#modalPrice');        const modalPrice = modal.querySelector('#modalPrice');

    } catch (err) {

        console.error('openModal error', err);                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>

    }

};                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>    addItem(name, price, qty = 1) {



// Document ready handler                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>

document.addEventListener('DOMContentLoaded', () => {

    // Initialize elements                    </div>        price = parseFloat(price) || 0;        if (modalImg) modalImg.src = img || '';        if (modalImg) modalImg.src = img || '';

    const cartBtn = document.getElementById('cartBtn');

    const cartDropdown = document.querySelector('.dropdown-content');                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>

    modal = document.querySelector('.product-modal');

                    <button onclick="cart.removeItem('${item.name}')"         qty = parseInt(qty) || 1;

    // Add-to-cart helper (reads product qty when passed the button element)

    function addToCart(name, price, btnElement) {                            class="remove-btn" 

        try {

            let qty = 1;                            aria-label="Remove ${item.name} from cart">×</button>        const existingItem = this.items.find(item => item.name === name);        if (modalTitle) modalTitle.textContent = name;        if (modalTitle) modalTitle.textContent = name;

            if (btnElement) {

                const parent = btnElement.closest('.product-actions');                </div>

                const q = parent?.querySelector('.prod-qty');

                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));            `;        if (existingItem) {

            }

            if (window.cart && typeof window.cart.addItem === 'function') {        }).join('');

                window.cart.addItem(name, price, qty);

            } else {            existingItem.quantity = (existingItem.quantity || 0) + qty;        if (modalDesc) modalDesc.textContent = desc;        if (modalDesc) modalDesc.textContent = desc;

                console.warn('cart.addItem not available');

            }        cartTotal.style.display = 'block';

        } catch (err) {

            console.error('addToCart error', err);        cartTotal.textContent = `Total: $${total.toFixed(2)}`;        } else {

        }

    }    },

    window.addToCart = addToCart;

            this.items.push({        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';

    // Expose removeFromCart wrapper

    window.removeFromCart = function(name) {     saveCart() {

        if (window.cart && typeof window.cart.removeItem === 'function') {

            window.cart.removeItem(name);         localStorage.setItem('farmCart', JSON.stringify(this.items));                name,

        }

    };    },



    // Product quantity controls (delegated)                price,        const thumbs = modal.querySelectorAll('.thumbnail');        const thumbs = modal.querySelectorAll('.thumbnail');

    document.addEventListener('click', (e) => {

        const t = e.target;    loadCart() {

        if (t.matches('.prod-qty-increase')) {

            const span = t.parentElement?.querySelector('.prod-qty');        const saved = localStorage.getItem('farmCart');                quantity: qty

            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);

        }        if (saved) {

        if (t.matches('.prod-qty-decrease')) {

            const span = t.parentElement?.querySelector('.prod-qty');            try {            });        if (thumbs && thumbs.length) {        if (thumbs && thumbs.length) {

            if (span) {

                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);                this.items = JSON.parse(saved);

                span.textContent = String(val);

            }                this.updateDisplay();        }

        }

    });            } catch (e) {



    // Product filtering                console.error('Error loading cart:', e);        this.saveCart();            thumbs[0].src = img || '';            thumbs[0].src = img || '';

    const searchInput = document.querySelector('input[type="search"]');

    const categorySelect = document.querySelector('select[name="category"]');                this.items = [];

    const priceRange = document.querySelector('input[type="number"]');

                }        this.updateDisplay();

    function filterProducts() {

        const searchTerm = searchInput?.value.toLowerCase() || '';        }

        const category = categorySelect?.value || 'all';

        const maxPrice = priceRange?.value || Infinity;    },        this.showNotification(`Added ${name} ×${qty} to cart`);            if (thumbs[1]) thumbs[1].src = img2 || img || '';            if (thumbs[1]) thumbs[1].src = img2 || img || '';

        

        const products = document.querySelectorAll('.livestock-card');

        products.forEach(product => {

            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';    showNotification(message) {    },

            const productCategory = product.dataset.category || '';

            const price = parseFloat(product.dataset.price || '0');        const notification = document.createElement('div');

            

            const matchesSearch = title.includes(searchTerm);        notification.className = 'cart-notification';            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

            const matchesCategory = category === 'all' || productCategory === category;

            const matchesPrice = price <= maxPrice;        notification.textContent = message;

            

            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';        document.body.appendChild(notification);    changeQuantity(name, delta) {

        });

    }



    // Add filter event listeners        setTimeout(() => {        const it = this.items.find(i => i.name === name);            thumbs.forEach(t => t.classList.remove('active'));            thumbs.forEach(t => t.classList.remove('active'));

    searchInput?.addEventListener('input', filterProducts);

    categorySelect?.addEventListener('change', filterProducts);            notification.classList.add('fade-out');

    priceRange?.addEventListener('input', filterProducts);

            setTimeout(() => notification.remove(), 500);        if (!it) return;

    // Close modal when clicking outside

    modal?.addEventListener('click', (e) => {        }, 1400);

        if (e.target === modal) {

            modal.style.display = 'none';    }        it.quantity = (it.quantity || 0) + parseInt(delta);            if (thumbs[0]) thumbs[0].classList.add('active');            if (thumbs[0]) thumbs[0].classList.add('active');

        }

    });};



    // Add click listeners to products        if (it.quantity <= 0) {

    document.querySelectorAll('.livestock-card').forEach(card => {

        card.addEventListener('click', () => openModal(card));// Make cart globally available

    });

window.cart = cart;            this.removeItem(name);        }        }

    // Cart functionality

    cartBtn?.addEventListener('click', () => {

        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';

    });// Product modal reference            return;



    // Checkout functionalitylet modal = null;

    const checkoutBtn = document.getElementById('checkoutBtn');

    const checkoutModal = document.getElementById('checkoutModal');        }        modal.style.display = 'flex';        modal.style.display = 'flex';

    const checkoutClose = document.getElementById('checkoutClose');

    const checkoutSummary = document.getElementById('checkoutSummary');// Utility: format currency

    const placeOrderBtn = document.getElementById('placeOrder');

    const orderMessage = document.getElementById('orderMessage');function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }        this.saveCart();



    function populateCheckout() {

        if (!checkoutSummary) return;

        const items = window.cart?.items || [];// Global wrapper for modal functionality        this.updateDisplay();    } catch (err) {    } catch (err) {

        if (items.length === 0) {

            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';window.openModal = function(ev) {

            return;

        }    try {    },

        let html = '<ul style="list-style:none;padding:0;margin:0;">';

        let total = 0;        const e = ev || window.event;

        items.forEach(it => {

            const itTotal = (it.price || 0) * (it.quantity || 1);        let btn = e.currentTarget || e.target || null;        console.error('openModal error', err);        console.error('openModal error', err);

            total += itTotal;

            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;        if (btn && btn.nodeType === 3) btn = btn.parentElement;

        });

        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;        if (btn && btn.closest) btn = btn.closest('button') || btn;    removeItem(name) {

        checkoutSummary.innerHTML = html;

    }        if (!btn) return;



    checkoutBtn?.addEventListener('click', (e) => {        // read data attributes        this.items = this.items.filter(item => item.name !== name);    }    }

        e.preventDefault();

        populateCheckout();        const name = btn.dataset.name || '';

        if (checkoutModal) checkoutModal.style.display = 'flex';

    });        const price = btn.dataset.price || '';        this.saveCart();



    checkoutClose?.addEventListener('click', () => {        const desc = btn.dataset.desc || '';

        if (checkoutModal) checkoutModal.style.display = 'none';

    });        const img = btn.dataset.img || '';        this.updateDisplay();};};



    placeOrderBtn?.addEventListener('click', () => {        const img2 = btn.dataset.img2 || '';

        // Simple validation

        const name = document.getElementById('custName')?.value?.trim();        const img3 = btn.dataset.img3 || '';        this.showNotification(`Removed ${name} from cart`);

        const email = document.getElementById('custEmail')?.value?.trim();

        const addr = document.getElementById('custAddress')?.value?.trim();

        const card = document.getElementById('custCard')?.value?.trim();

        if (!name || !email || !addr || !card) {        if (!modal) modal = document.querySelector('.product-modal');    },

            orderMessage.style.display = 'block';

            orderMessage.textContent = 'Please complete all fields.';        if (!modal) return;

            orderMessage.style.color = 'red';

            return;        const modalImg = modal.querySelector('#modalImg');

        }

        const modalTitle = modal.querySelector('#modalTitle');

        // Simulate placing order

        orderMessage.style.display = 'block';        const modalDesc = modal.querySelector('#modalDesc');    updateDisplay() {// Initialize cart system// Initialize cart system

        orderMessage.style.color = 'green';

        orderMessage.textContent = 'Order placed — thank you!';        const modalPrice = modal.querySelector('#modalPrice');

        

        // Visual confirmation animation        if (modalImg) modalImg.src = img || '';        const cartDropdown = document.querySelector('.dropdown-content');

        orderMessage.classList.remove('order-confirm');

        void orderMessage.offsetWidth;        if (modalTitle) modalTitle.textContent = name;

        orderMessage.classList.add('order-confirm');

        if (modalDesc) modalDesc.textContent = desc;        const cartEmpty = document.querySelector('.cart-empty');const cart = {const cart = {

        // Clear cart

        if (window.cart) {        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';

            window.cart.items = [];

            window.cart.saveCart();        const thumbs = modal.querySelectorAll('.thumbnail');        const cartList = document.querySelector('.cart-items');

            window.cart.updateDisplay();

        }        if (thumbs && thumbs.length) {



        // Close after short delay            thumbs[0].src = img || '';        const cartTotal = document.querySelector('.cart-total');    items: [],    items: [],

        setTimeout(() => {

            if (checkoutModal) checkoutModal.style.display = 'none';            if (thumbs[1]) thumbs[1].src = img2 || img || '';

            orderMessage.style.display = 'none';

            document.getElementById('checkoutForm')?.reset();            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

        }, 1500);

    });            thumbs.forEach(t => t.classList.remove('active'));



    // Close cart when clicking outside            if (thumbs[0]) thumbs[0].classList.add('active');        if (!cartList || !cartEmpty || !cartTotal) return;

    document.addEventListener('click', (e) => {

        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {        }

            cartDropdown.style.display = 'none';

        }        modal.style.display = 'flex';

    });

    } catch (err) {

    // Initialize cart display and load saved state

    if (window.cart && typeof window.cart.updateDisplay === 'function') {        console.error('openModal error', err);        const badge = document.getElementById('cartBadge');    // addItem now accepts optional quantity (qty)    // addItem now accepts optional quantity (qty)

        window.cart.updateDisplay();

        window.cart.loadCart(); // Load saved cart state on page load    }

    }

});};        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);



// Document ready handler        if (badge) {    addItem(name, price, qty = 1) {    addItem(name, price, qty = 1) {

document.addEventListener('DOMContentLoaded', () => {

    // Initialize elements            // pulse animation when increasing

    const cartBtn = document.getElementById('cartBtn');

    const cartDropdown = document.querySelector('.dropdown-content');            const prev = this._lastBadgeCount || 0;        price = parseFloat(price) || 0;        price = parseFloat(price) || 0;

    const cartEmpty = document.querySelector('.cart-empty');

    const cartList = document.querySelector('.cart-items');            badge.textContent = badgeCount;

    const cartTotal = document.querySelector('.cart-total');

    modal = document.querySelector('.product-modal');            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';        qty = parseInt(qty) || 1;        qty = parseInt(qty) || 1;



    // Add-to-cart helper (reads product qty when passed the button element)            if (badgeCount > prev) {

    function addToCart(name, price, btnElement) {

        try {                badge.classList.remove('badge-pulse');        const existingItem = this.items.find(item => item.name === name);        const existingItem = this.items.find(item => item.name === name);

            let qty = 1;

            if (btnElement) {                // force reflow then add class to restart animation

                const parent = btnElement.closest('.product-actions');

                const q = parent?.querySelector('.prod-qty');                void badge.offsetWidth;        if (existingItem) {        if (existingItem) {

                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));

            }                badge.classList.add('badge-pulse');

            if (window.cart && typeof window.cart.addItem === 'function') {

                window.cart.addItem(name, price, qty);            }            existingItem.quantity = (existingItem.quantity || 0) + qty;            existingItem.quantity = (existingItem.quantity || 0) + qty;

            } else {

                console.warn('cart.addItem not available');            this._lastBadgeCount = badgeCount;

            }

        } catch (err) {        }        } else {        } else {

            console.error('addToCart error', err);

        }        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }

    }

    window.addToCart = addToCart;            this.items.push({            this.items.push({



    // Expose removeFromCart wrapper        if (this.items.length === 0) {

    window.removeFromCart = function(name) { if (window.cart && typeof window.cart.removeItem === 'function') window.cart.removeItem(name); };

            cartEmpty.style.display = 'block';                name,                name,

    // Product quantity controls (delegated)

    document.addEventListener('click', (e) => {            cartList.style.display = 'none';

        const t = e.target;

        if (t.matches('.prod-qty-increase')) {            cartTotal.style.display = 'none';                price,                price,

            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);            return;

        }

        if (t.matches('.prod-qty-decrease')) {        }                quantity: qty                quantity: qty

            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) {

                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);

                span.textContent = String(val);        cartEmpty.style.display = 'none';            });            });

            }

        }        cartList.style.display = 'block';

    });

        }        }

    // Product filtering

    const searchInput = document.querySelector('input[type="search"]');        let total = 0;

    const categorySelect = document.querySelector('select[name="category"]');

    const priceRange = document.querySelector('input[type="number"]');        cartList.innerHTML = this.items.map(item => {        this.saveCart();        this.saveCart();

    

    function filterProducts() {            const itemTotal = item.price * item.quantity;

        const searchTerm = searchInput?.value.toLowerCase() || '';

        const category = categorySelect?.value || 'all';            total += itemTotal;        this.updateDisplay();        this.updateDisplay();

        const maxPrice = priceRange?.value || Infinity;

                    return `

        const products = document.querySelectorAll('.livestock-card');

        products.forEach(product => {                <div class="cart-item">        this.showNotification(`Added ${name} ×${qty} to cart`);        this.showNotification(`Added ${name} ×${qty} to cart`);

            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';

            const productCategory = product.dataset.category || '';                    <div style="flex:1;">

            const price = parseFloat(product.dataset.price || '0');

                                    <div style="font-weight:600">${item.name}</div>    },    },

            const matchesSearch = title.includes(searchTerm);

            const matchesCategory = category === 'all' || productCategory === category;                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>

            const matchesPrice = price <= maxPrice;

                                </div>

            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';

        });                    <div style="display:flex;align-items:center;gap:8px;">

    }

                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>    // change quantity of an existing item by delta (±)    // change quantity of an existing item by delta (±)

    // Add filter event listeners

    searchInput?.addEventListener('input', filterProducts);                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>

    categorySelect?.addEventListener('change', filterProducts);

    priceRange?.addEventListener('input', filterProducts);                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>    changeQuantity(name, delta) {    changeQuantity(name, delta) {



    // Modal functionality - supports being called with a product element OR an Event                    </div>

    function openModal(productOrEvent) {

        if (!modal) return;                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>        const it = this.items.find(i => i.name === name);        const it = this.items.find(i => i.name === name);



        // normalize input: if an Event was passed, extract dataset from event.currentTarget                    <button onclick="cart.removeItem('${item.name}')" 

        let productEl = null;

        let name = '';                            class="remove-btn"         if (!it) return;        if (!it) return;

        let price = '';

        let desc = '';                            aria-label="Remove ${item.name} from cart">×</button>

        let img = '';

        let img2 = '';                </div>        it.quantity = (it.quantity || 0) + parseInt(delta);        it.quantity = (it.quantity || 0) + parseInt(delta);

        let img3 = '';

            `;

        if (productOrEvent && (productOrEvent.currentTarget || productOrEvent.target)) {

            // called as event handler (inline onclick or addEventListener)        }).join('');        if (it.quantity <= 0) {        if (it.quantity <= 0) {

            let btn = productOrEvent.currentTarget || productOrEvent.target;

            if (btn && btn.nodeType === 3) btn = btn.parentElement; // text node -> parent

            if (btn && btn.closest) btn = btn.closest('button') || btn;

            // If button has data attributes, use them        cartTotal.style.display = 'block';            this.removeItem(name);            this.removeItem(name);

            name = btn?.dataset?.name || '';

            price = btn?.dataset?.price || '';        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

            desc = btn?.dataset?.desc || '';

            img = btn?.dataset?.img || '';    },            return;            return;

            img2 = btn?.dataset?.img2 || '';

            img3 = btn?.dataset?.img3 || '';

        } else if (productOrEvent && productOrEvent.dataset) {

            // called with the product element    saveCart() {        }        }

            productEl = productOrEvent;

            name = productEl.querySelector('h4')?.textContent || productEl.dataset.name || '';        localStorage.setItem('farmCart', JSON.stringify(this.items));

            price = productEl.dataset.price || '';

            desc = productEl.querySelector('p')?.textContent || '';    },        this.saveCart();        this.saveCart();

            img = productEl.dataset.img || '';

            img2 = productEl.dataset.img2 || '';

            img3 = productEl.dataset.img3 || '';

        } else {    loadCart() {        this.updateDisplay();        this.updateDisplay();

            return;

        }        const saved = localStorage.getItem('farmCart');



        const modalImg = modal.querySelector('#modalImg');        if (saved) {    },    },

        const modalTitle = modal.querySelector('#modalTitle');

        const modalDesc = modal.querySelector('#modalDesc');            try {

        const modalPrice = modal.querySelector('#modalPrice');

                this.items = JSON.parse(saved);

        if (modalImg) modalImg.src = img || '';

        if (modalTitle) modalTitle.textContent = name;                this.updateDisplay();

        if (modalDesc) modalDesc.textContent = desc;

        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';            } catch (e) {    removeItem(name) {    removeItem(name) {



        // populate thumbnails dynamically                console.error('Error loading cart:', e);

        const thumbs = modal.querySelectorAll('.thumbnail');

        if (thumbs && thumbs.length) {                this.items = [];        this.items = this.items.filter(item => item.name !== name);        this.items = this.items.filter(item => item.name !== name);

            thumbs[0].src = img || '';

            if (thumbs[1]) thumbs[1].src = img2 || img || '';            }

            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

            thumbs.forEach(t => t.classList.remove('active'));        }        this.saveCart();        this.saveCart();

            if (thumbs[0]) thumbs[0].classList.add('active');

        }    },



        modal.style.display = 'flex';        this.updateDisplay();        this.updateDisplay();

    }

    showNotification(message) {

    // Close modal when clicking outside

    modal?.addEventListener('click', (e) => {        const notification = document.createElement('div');        this.showNotification(`Removed ${name} from cart`);        this.showNotification(`Removed ${name} from cart`);

        if (e.target === modal) {

            modal.style.display = 'none';        notification.className = 'cart-notification';

        }

    });        notification.textContent = message;    },    },



    // Add click listeners to products        document.body.appendChild(notification);

    document.querySelectorAll('.livestock-card').forEach(card => {

        card.addEventListener('click', () => openModal(card));

    });

        setTimeout(() => {

    // Cart functionality

    cartBtn?.addEventListener('click', () => {            notification.classList.add('fade-out');    updateDisplay() {    updateDisplay() {

        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';

    });            setTimeout(() => notification.remove(), 500);



    // Checkout button opens modal        }, 1400);        const cartDropdown = document.querySelector('.dropdown-content');        const cartDropdown = document.querySelector('.dropdown-content');

    const checkoutBtn = document.getElementById('checkoutBtn');

    const checkoutModal = document.getElementById('checkoutModal');    }

    const checkoutClose = document.getElementById('checkoutClose');

    const checkoutSummary = document.getElementById('checkoutSummary');};        const cartEmpty = document.querySelector('.cart-empty');        const cartEmpty = document.querySelector('.cart-empty');

    const placeOrderBtn = document.getElementById('placeOrder');

    const orderMessage = document.getElementById('orderMessage');



    function populateCheckout() {// Make cart globally available        const cartList = document.querySelector('.cart-items');        const cartList = document.querySelector('.cart-items');

        if (!checkoutSummary) return;

        const items = window.cart?.items || [];window.cart = cart;

        if (items.length === 0) {

            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';        const cartTotal = document.querySelector('.cart-total');        const cartTotal = document.querySelector('.cart-total');

            return;

        }// Product modal is handled in the DOMContentLoaded event

        let html = '<ul style="list-style:none;padding:0;margin:0;">';

        let total = 0;let modal = null;

        items.forEach(it => {

            const itTotal = (it.price || 0) * (it.quantity || 1);

            total += itTotal;

            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;// Utility: format currency        if (!cartList || !cartEmpty || !cartTotal) return;        if (!cartList || !cartEmpty || !cartTotal) return;

        });

        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }

        checkoutSummary.innerHTML = html;

    }



    checkoutBtn?.addEventListener('click', (e) => {document.addEventListener('DOMContentLoaded', () => {

        e.preventDefault();

        populateCheckout();    // Initialize elements        const badge = document.getElementById('cartBadge');        const badge = document.getElementById('cartBadge');

        if (checkoutModal) checkoutModal.style.display = 'flex';

    });    const cartBtn = document.getElementById('cartBtn');

    checkoutClose?.addEventListener('click', () => { if (checkoutModal) checkoutModal.style.display = 'none'; });

    const cartDropdown = document.querySelector('.dropdown-content');        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);

    placeOrderBtn?.addEventListener('click', () => {

        // simple validation    const cartEmpty = document.querySelector('.cart-empty');

        const name = document.getElementById('custName')?.value?.trim();

        const email = document.getElementById('custEmail')?.value?.trim();    const cartList = document.querySelector('.cart-items');        if (badge) {        if (badge) {

        const addr = document.getElementById('custAddress')?.value?.trim();

        const card = document.getElementById('custCard')?.value?.trim();    const cartTotal = document.querySelector('.cart-total');

        if (!name || !email || !addr || !card) {

            orderMessage.style.display = 'block';    modal = document.querySelector('.product-modal');            // pulse animation when increasing            // pulse animation when increasing

            orderMessage.textContent = 'Please complete all fields.';

            orderMessage.style.color = 'red';

            return;

        }    // Add-to-cart helper (reads product qty when passed the button element)            const prev = this._lastBadgeCount || 0;            const prev = this._lastBadgeCount || 0;



        // Simulate placing order    function addToCart(name, price, btnElement) {

        orderMessage.style.display = 'block';

        orderMessage.style.color = 'green';        try {            badge.textContent = badgeCount;            badge.textContent = badgeCount;

        orderMessage.textContent = 'Order placed — thank you!';

        // visual confirmation animation            let qty = 1;

        orderMessage.classList.remove('order-confirm');

        void orderMessage.offsetWidth;            if (btnElement) {            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';

        orderMessage.classList.add('order-confirm');

                const parent = btnElement.closest('.product-actions');

        // Clear cart

        if (window.cart) {                const q = parent?.querySelector('.prod-qty');            if (badgeCount > prev) {            if (badgeCount > prev) {

            window.cart.items = [];

            window.cart.saveCart();                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));

            window.cart.updateDisplay();

        }            }                badge.classList.remove('badge-pulse');                badge.classList.remove('badge-pulse');



        // close after short delay            if (window.cart && typeof window.cart.addItem === 'function') {

        setTimeout(() => {

            if (checkoutModal) checkoutModal.style.display = 'none';                window.cart.addItem(name, price, qty);                // force reflow then add class to restart animation                // force reflow then add class to restart animation

            orderMessage.style.display = 'none';

            document.getElementById('checkoutForm')?.reset();            } else {

        }, 1500);

    });                console.warn('cart.addItem not available');                void badge.offsetWidth;                void badge.offsetWidth;



    // Close cart when clicking outside            }

    document.addEventListener('click', (e) => {

        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {        } catch (err) {                badge.classList.add('badge-pulse');                badge.classList.add('badge-pulse');

            cartDropdown.style.display = 'none';

        }            console.error('addToCart error', err);

    });

        }            }            }

    // Initialize cart display and load saved state

    if (window.cart && typeof window.cart.updateDisplay === 'function') {    }

        window.cart.updateDisplay();

        window.cart.loadCart(); // Load saved cart state on page load    window.addToCart = addToCart;            this._lastBadgeCount = badgeCount;            this._lastBadgeCount = badgeCount;

    }

});

    // Expose removeFromCart wrapper        }        }

    window.removeFromCart = function(name) { if (window.cart && typeof window.cart.removeItem === 'function') window.cart.removeItem(name); };

        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }

    // Product quantity controls (delegated)

    document.addEventListener('click', (e) => {

        const t = e.target;

        if (t.matches('.prod-qty-increase')) {        if (this.items.length === 0) {        if (this.items.length === 0) {

            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);            cartEmpty.style.display = 'block';            cartEmpty.style.display = 'block';

        }

        if (t.matches('.prod-qty-decrease')) {            cartList.style.display = 'none';            cartList.style.display = 'none';

            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) {            cartTotal.style.display = 'none';            cartTotal.style.display = 'none';

                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);

                span.textContent = String(val);            return;            return;

            }

        }        }        }

    });



    // Product filtering

    const searchInput = document.querySelector('input[type="search"]');        cartEmpty.style.display = 'none';        cartEmpty.style.display = 'none';

    const categorySelect = document.querySelector('select[name="category"]');

    const priceRange = document.querySelector('input[type="number"]');        cartList.style.display = 'block';        cartList.style.display = 'block';

    

    function filterProducts() {

        const searchTerm = searchInput?.value.toLowerCase() || '';

        const category = categorySelect?.value || 'all';        let total = 0;        let total = 0;

        const maxPrice = priceRange?.value || Infinity;

                cartList.innerHTML = this.items.map(item => {        cartList.innerHTML = this.items.map(item => {

        const products = document.querySelectorAll('.livestock-card');

        products.forEach(product => {            const itemTotal = item.price * item.quantity;            const itemTotal = item.price * item.quantity;

            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';

            const productCategory = product.dataset.category || '';            total += itemTotal;            total += itemTotal;

            const price = parseFloat(product.dataset.price || '0');

                        return `            return `

            const matchesSearch = title.includes(searchTerm);

            const matchesCategory = category === 'all' || productCategory === category;                <div class="cart-item">                <div class="cart-item">

            const matchesPrice = price <= maxPrice;

                                <div style="flex:1;">                    <div style="flex:1;">

            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';

        });                        <div style="font-weight:600">${item.name}</div>                        <div style="font-weight:600">${item.name}</div>

    }

                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>

    // Add filter event listeners

    searchInput?.addEventListener('input', filterProducts);                    </div>                    </div>

    categorySelect?.addEventListener('change', filterProducts);

    priceRange?.addEventListener('input', filterProducts);                    <div style="display:flex;align-items:center;gap:8px;">                    <div style="display:flex;align-items:center;gap:8px;">



    // Modal functionality - supports being called with a product element OR an Event                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>

    function openModal(productOrEvent) {

        if (!modal) return;                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>



        // normalize input: if an Event was passed, extract dataset from event.currentTarget                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>

        let productEl = null;

        let name = '';                    </div>                    </div>

        let price = '';

        let desc = '';                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>

        let img = '';

        let img2 = '';                    <button onclick="cart.removeItem('${item.name}')"                     <button onclick="cart.removeItem('${item.name}')" 

        let img3 = '';

                            class="remove-btn"                             class="remove-btn" 

        if (productOrEvent && (productOrEvent.currentTarget || productOrEvent.target)) {

            // called as event handler (inline onclick or addEventListener)                            aria-label="Remove ${item.name} from cart">×</button>                            aria-label="Remove ${item.name} from cart">×</button>

            let btn = productOrEvent.currentTarget || productOrEvent.target;

            if (btn && btn.nodeType === 3) btn = btn.parentElement; // text node -> parent                </div>                </div>

            if (btn && btn.closest) btn = btn.closest('button') || btn;

            // If button has data attributes, use them            `;            `;

            name = btn?.dataset?.name || '';

            price = btn?.dataset?.price || '';        }).join('');        }).join('');

            desc = btn?.dataset?.desc || '';

            img = btn?.dataset?.img || '';

            img2 = btn?.dataset?.img2 || '';

            img3 = btn?.dataset?.img3 || '';        cartTotal.style.display = 'block';        cartTotal.style.display = 'block';

        } else if (productOrEvent && productOrEvent.dataset) {

            // called with the product element        cartTotal.textContent = `Total: $${total.toFixed(2)}`;        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

            productEl = productOrEvent;

            name = productEl.querySelector('h4')?.textContent || productEl.dataset.name || '';    },    },

            price = productEl.dataset.price || '';

            desc = productEl.querySelector('p')?.textContent || '';

            img = productEl.dataset.img || '';

            img2 = productEl.dataset.img2 || '';    saveCart() {    saveCart() {

            img3 = productEl.dataset.img3 || '';

        } else {        localStorage.setItem('farmCart', JSON.stringify(this.items));        localStorage.setItem('farmCart', JSON.stringify(this.items));

            return;

        }    },    },



        const modalImg = modal.querySelector('#modalImg');

        const modalTitle = modal.querySelector('#modalTitle');

        const modalDesc = modal.querySelector('#modalDesc');    loadCart() {    loadCart() {

        const modalPrice = modal.querySelector('#modalPrice');

        const saved = localStorage.getItem('farmCart');        const saved = localStorage.getItem('farmCart');

        if (modalImg) modalImg.src = img || '';

        if (modalTitle) modalTitle.textContent = name;        if (saved) {        if (saved) {

        if (modalDesc) modalDesc.textContent = desc;

        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';            try {            try {



        // populate thumbnails dynamically                this.items = JSON.parse(saved);                this.items = JSON.parse(saved);

        const thumbs = modal.querySelectorAll('.thumbnail');

        if (thumbs && thumbs.length) {                this.updateDisplay();                this.updateDisplay();

            thumbs[0].src = img || '';

            if (thumbs[1]) thumbs[1].src = img2 || img || '';            } catch (e) {            } catch (e) {

            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

            thumbs.forEach(t => t.classList.remove('active'));                console.error('Error loading cart:', e);                console.error('Error loading cart:', e);

            if (thumbs[0]) thumbs[0].classList.add('active');

        }                this.items = [];                this.items = [];



        modal.style.display = 'flex';            }            }

    }

        }        }

    // Close modal when clicking outside

    modal?.addEventListener('click', (e) => {    },    },

        if (e.target === modal) {

            modal.style.display = 'none';

        }

    });    showNotification(message) {    showNotification(message) {



    // Add click listeners to products        const notification = document.createElement('div');        const notification = document.createElement('div');

    document.querySelectorAll('.livestock-card').forEach(card => {

        card.addEventListener('click', () => openModal(card));        notification.className = 'cart-notification';        notification.className = 'cart-notification';

    });

        notification.textContent = message;        notification.textContent = message;

    // Cart functionality

    cartBtn?.addEventListener('click', () => {        document.body.appendChild(notification);        document.body.appendChild(notification);

        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';

    });



    // Checkout button opens modal        setTimeout(() => {        setTimeout(() => {

    const checkoutBtn = document.getElementById('checkoutBtn');

    const checkoutModal = document.getElementById('checkoutModal');            notification.classList.add('fade-out');            notification.classList.add('fade-out');

    const checkoutClose = document.getElementById('checkoutClose');

    const checkoutSummary = document.getElementById('checkoutSummary');            setTimeout(() => notification.remove(), 500);            setTimeout(() => notification.remove(), 500);

    const placeOrderBtn = document.getElementById('placeOrder');

    const orderMessage = document.getElementById('orderMessage');        }, 1400);        }, 1400);



    function populateCheckout() {    }    }

        if (!checkoutSummary) return;

        const items = window.cart?.items || [];};};

        if (items.length === 0) {

            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';

            return;

        }// Make cart globally available// Make cart globally available

        let html = '<ul style="list-style:none;padding:0;margin:0;">';

        let total = 0;window.cart = cart;window.cart = cart;

        items.forEach(it => {

            const itTotal = (it.price || 0) * (it.quantity || 1);

            total += itTotal;

            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;// Product modal is handled in the DOMContentLoaded event// Product modal is handled in the DOMContentLoaded event

        });

        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;let modal = null;let modal = null;

        checkoutSummary.innerHTML = html;

    }



    checkoutBtn?.addEventListener('click', (e) => {// Utility: format currency// Utility: format currency

        e.preventDefault();

        populateCheckout();function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }

        if (checkoutModal) checkoutModal.style.display = 'flex';

    });

    checkoutClose?.addEventListener('click', () => { if (checkoutModal) checkoutModal.style.display = 'none'; });

document.addEventListener('DOMContentLoaded', () => {document.addEventListener('DOMContentLoaded', () => {

    placeOrderBtn?.addEventListener('click', () => {

        // simple validation    // Initialize elements    // Initialize elements

        const name = document.getElementById('custName')?.value?.trim();

        const email = document.getElementById('custEmail')?.value?.trim();    const cartBtn = document.getElementById('cartBtn');    const cartBtn = document.getElementById('cartBtn');

        const addr = document.getElementById('custAddress')?.value?.trim();

        const card = document.getElementById('custCard')?.value?.trim();    const cartDropdown = document.querySelector('.dropdown-content');    const cartDropdown = document.querySelector('.dropdown-content');

        if (!name || !email || !addr || !card) {

            orderMessage.style.display = 'block';    const cartEmpty = document.querySelector('.cart-empty');    const cartEmpty = document.querySelector('.cart-empty');

            orderMessage.textContent = 'Please complete all fields.';

            orderMessage.style.color = 'red';    const cartList = document.querySelector('.cart-items');    const cartList = document.querySelector('.cart-items');

            return;

        }    const cartTotal = document.querySelector('.cart-total');    const cartTotal = document.querySelector('.cart-total');



        // Simulate placing order    modal = document.querySelector('.product-modal');    modal = document.querySelector('.product-modal');

        orderMessage.style.display = 'block';

        orderMessage.style.color = 'green';

        orderMessage.textContent = 'Order placed — thank you!';

        // visual confirmation animation    // Add-to-cart helper (reads product qty when passed the button element)    // Add-to-cart helper (reads product qty when passed the button element)

        orderMessage.classList.remove('order-confirm');

        void orderMessage.offsetWidth;    function addToCart(name, price, btnElement) {    function addToCart(name, price, btnElement) {

        orderMessage.classList.add('order-confirm');

        try {        try {

        // Clear cart

        if (window.cart) {            let qty = 1;            let qty = 1;

            window.cart.items = [];

            window.cart.saveCart();            if (btnElement) {            if (btnElement) {

            window.cart.updateDisplay();

        }                const parent = btnElement.closest('.product-actions');                const parent = btnElement.closest('.product-actions');



        // close after short delay                const q = parent?.querySelector('.prod-qty');                const q = parent?.querySelector('.prod-qty');

        setTimeout(() => {

            if (checkoutModal) checkoutModal.style.display = 'none';                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));

            orderMessage.style.display = 'none';

            document.getElementById('checkoutForm')?.reset();            }            }

        }, 1500);

    });            if (window.cart && typeof window.cart.addItem === 'function') {            if (window.cart && typeof window.cart.addItem === 'function') {



    // Close cart when clicking outside                window.cart.addItem(name, price, qty);                window.cart.addItem(name, price, qty);

    document.addEventListener('click', (e) => {

        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {            } else {            } else {

            cartDropdown.style.display = 'none';

        }                console.warn('cart.addItem not available');                console.warn('cart.addItem not available');

    });

            }            }

    // Initialize cart display and load saved state

    if (window.cart && typeof window.cart.updateDisplay === 'function') {        } catch (err) {        } catch (err) {

        window.cart.updateDisplay();

        window.cart.loadCart(); // Load saved cart state on page load            console.error('addToCart error', err);            console.error('addToCart error', err);

    }

});        }        }

    }    }

    window.addToCart = addToCart;    window.addToCart = addToCart;



    // Expose removeFromCart wrapper    // Expose removeFromCart wrapper

    window.removeFromCart = function(name) { if (window.cart && typeof window.cart.removeItem === 'function') window.cart.removeItem(name); };    window.removeFromCart = function(name) { if (window.cart && typeof window.cart.removeItem === 'function') window.cart.removeItem(name); };



    // Product quantity controls (delegated)    // Product quantity controls (delegated)

    document.addEventListener('click', (e) => {    document.addEventListener('click', (e) => {

        const t = e.target;        const t = e.target;

        if (t.matches('.prod-qty-increase')) {        if (t.matches('.prod-qty-increase')) {

            const span = t.parentElement?.querySelector('.prod-qty');            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);

        }        }

        if (t.matches('.prod-qty-decrease')) {        if (t.matches('.prod-qty-decrease')) {

            const span = t.parentElement?.querySelector('.prod-qty');            const span = t.parentElement?.querySelector('.prod-qty');

            if (span) {            if (span) {

                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);

                span.textContent = String(val);                span.textContent = String(val);

            }            }

        }        }

    });    });



    // Product filtering    // Product filtering

    const searchInput = document.querySelector('input[type="search"]');    const searchInput = document.querySelector('input[type="search"]');

    const categorySelect = document.querySelector('select[name="category"]');    const categorySelect = document.querySelector('select[name="category"]');

    const priceRange = document.querySelector('input[type="number"]');    const priceRange = document.querySelector('input[type="number"]');

        

    function filterProducts() {    function filterProducts() {

        const searchTerm = searchInput?.value.toLowerCase() || '';        const searchTerm = searchInput?.value.toLowerCase() || '';

        const category = categorySelect?.value || 'all';        const category = categorySelect?.value || 'all';

        const maxPrice = priceRange?.value || Infinity;        const maxPrice = priceRange?.value || Infinity;

                

        const products = document.querySelectorAll('.livestock-card');        const products = document.querySelectorAll('.livestock-card');

        products.forEach(product => {        products.forEach(product => {

            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';

            const productCategory = product.dataset.category || '';            const productCategory = product.dataset.category || '';

            const price = parseFloat(product.dataset.price || '0');            const price = parseFloat(product.dataset.price || '0');

                        

            const matchesSearch = title.includes(searchTerm);            const matchesSearch = title.includes(searchTerm);

            const matchesCategory = category === 'all' || productCategory === category;            const matchesCategory = category === 'all' || productCategory === category;

            const matchesPrice = price <= maxPrice;            const matchesPrice = price <= maxPrice;

                        

            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';

        });        });

    }    }



    // Add filter event listeners    // Add filter event listeners

    searchInput?.addEventListener('input', filterProducts);    searchInput?.addEventListener('input', filterProducts);

    categorySelect?.addEventListener('change', filterProducts);    categorySelect?.addEventListener('change', filterProducts);

    priceRange?.addEventListener('input', filterProducts);    priceRange?.addEventListener('input', filterProducts);



    // Modal functionality - supports being called with a product element OR an Event    // Modal functionality - supports being called with a product element OR an Event

    function openModal(productOrEvent) {    function openModal(productOrEvent) {

        if (!modal) return;        if (!modal) return;



        // normalize input: if an Event was passed, extract dataset from event.currentTarget        // normalize input: if an Event was passed, extract dataset from event.currentTarget

        let productEl = null;        let productEl = null;

        let name = '';        let name = '';

        let price = '';        let price = '';

        let desc = '';        let desc = '';

        let img = '';        let img = '';

        let img2 = '';        let img2 = '';

        let img3 = '';        let img3 = '';



        if (productOrEvent && (productOrEvent.currentTarget || productOrEvent.target)) {        if (productOrEvent && (productOrEvent.currentTarget || productOrEvent.target)) {

            // called as event handler (inline onclick or addEventListener)            // called as event handler (inline onclick or addEventListener)

            let btn = productOrEvent.currentTarget || productOrEvent.target;            let btn = productOrEvent.currentTarget || productOrEvent.target;

            if (btn && btn.nodeType === 3) btn = btn.parentElement; // text node -> parent            if (btn && btn.nodeType === 3) btn = btn.parentElement; // text node -> parent

            if (btn && btn.closest) btn = btn.closest('button') || btn;            if (btn && btn.closest) btn = btn.closest('button') || btn;

            // If button has data attributes, use them            // If button has data attributes, use them

            name = btn?.dataset?.name || '';            name = btn?.dataset?.name || '';

            price = btn?.dataset?.price || '';            price = btn?.dataset?.price || '';

            desc = btn?.dataset?.desc || '';            desc = btn?.dataset?.desc || '';

            img = btn?.dataset?.img || '';            img = btn?.dataset?.img || '';

            img2 = btn?.dataset?.img2 || '';            img2 = btn?.dataset?.img2 || '';

            img3 = btn?.dataset?.img3 || '';            img3 = btn?.dataset?.img3 || '';

        } else if (productOrEvent && productOrEvent.dataset) {        } else if (productOrEvent && productOrEvent.dataset) {

            // called with the product element            // called with the product element

            productEl = productOrEvent;            productEl = productOrEvent;

            name = productEl.querySelector('h4')?.textContent || productEl.dataset.name || '';            name = productEl.querySelector('h4')?.textContent || productEl.dataset.name || '';

            price = productEl.dataset.price || '';            price = productEl.dataset.price || '';

            desc = productEl.querySelector('p')?.textContent || '';            desc = productEl.querySelector('p')?.textContent || '';

            img = productEl.dataset.img || '';            img = productEl.dataset.img || '';

            img2 = productEl.dataset.img2 || '';            img2 = productEl.dataset.img2 || '';

            img3 = productEl.dataset.img3 || '';            img3 = productEl.dataset.img3 || '';

        } else {        } else {

            return;            return;

        }        }



        const modalImg = modal.querySelector('#modalImg');        const modalImg = modal.querySelector('#modalImg');

        const modalTitle = modal.querySelector('#modalTitle');        const modalTitle = modal.querySelector('#modalTitle');

        const modalDesc = modal.querySelector('#modalDesc');        const modalDesc = modal.querySelector('#modalDesc');

        const modalPrice = modal.querySelector('#modalPrice');        const modalPrice = modal.querySelector('#modalPrice');



        if (modalImg) modalImg.src = img || '';        if (modalImg) modalImg.src = img || '';

        if (modalTitle) modalTitle.textContent = name;        if (modalTitle) modalTitle.textContent = name;

        if (modalDesc) modalDesc.textContent = desc;        if (modalDesc) modalDesc.textContent = desc;

        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';



        // populate thumbnails dynamically        // populate thumbnails d

        const thumbs = modal.querySelectorAll('.thumbnail');        ynamically

        if (thumbs && thumbs.length) {        const thumbs = modal.querySelectorAll('.thumbnail');

            thumbs[0].src = img || '';        if (thumbs && thumbs.length) {

            if (thumbs[1]) thumbs[1].src = img2 || img || '';            thumbs[0].src = img || '';

            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';            if (thumbs[1]) thumbs[1].src = img2 || img || '';

            thumbs.forEach(t => t.classList.remove('active'));            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';

            if (thumbs[0]) thumbs[0].classList.add('active');            thumbs.forEach(t => t.classList.remove('active'));

        }            if (thumbs[0]) thumbs[0].classList.add('active');

        }

        modal.style.display = 'flex';

    }        modal.style.display = 'flex';

    }

    // Close modal when clicking outside

    modal?.addEventListener('click', (e) => {    // Close modal when clicking outside

        if (e.target === modal) {    modal?.addEventListener('click', (e) => {

            modal.style.display = 'none';        if (e.target === modal) {

        }            modal.style.display = 'none';

    });        }

    });

    // Add click listeners to products

    document.querySelectorAll('.livestock-card').forEach(card => {    // Add click listeners to products

        card.addEventListener('click', () => openModal(card));    document.querySelectorAll('.livestock-card').forEach(card => {

    });        card.addEventListener('click', () => openModal(card));

    });

    // Cart functionality

    cartBtn?.addEventListener('click', () => {    // Cart functionality

        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';    cartBtn?.addEventListener('click', () => {

    });        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';

    });

    // Checkout button opens modal

    const checkoutBtn = document.getElementById('checkoutBtn');    // Checkout button opens modal

    const checkoutModal = document.getElementById('checkoutModal');    const checkoutBtn = document.getElementById('checkoutBtn');

    const checkoutClose = document.getElementById('checkoutClose');    const checkoutModal = document.getElementById('checkoutModal');

    const checkoutSummary = document.getElementById('checkoutSummary');    const checkoutClose = document.getElementById('checkoutClose');

    const placeOrderBtn = document.getElementById('placeOrder');    const checkoutSummary = document.getElementById('checkoutSummary');

    const orderMessage = document.getElementById('orderMessage');    const placeOrderBtn = document.getElementById('placeOrder');

    const orderMessage = document.getElementById('orderMessage');

    function populateCheckout() {

        if (!checkoutSummary) return;    function populateCheckout() {

        const items = window.cart?.items || [];        if (!checkoutSummary) return;

        if (items.length === 0) {        const items = window.cart?.items || [];

            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';        if (items.length === 0) {

            return;            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';

        }            return;

        let html = '<ul style="list-style:none;padding:0;margin:0;">';        }

        let total = 0;        let html = '<ul style="list-style:none;padding:0;margin:0;">';

        items.forEach(it => {        let total = 0;

            const itTotal = (it.price || 0) * (it.quantity || 1);        items.forEach(it => {

            total += itTotal;            const itTotal = (it.price || 0) * (it.quantity || 1);

            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;            total += itTotal;

        });            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;

        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;        });

        checkoutSummary.innerHTML = html;        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;

    }        checkoutSummary.innerHTML = html;

    }

    checkoutBtn?.addEventListener('click', (e) => {

        e.preventDefault();    checkoutBtn?.addEventListener('click', (e) => {

        populateCheckout();        e.preventDefault();

        if (checkoutModal) checkoutModal.style.display = 'flex';        populateCheckout();

    });        if (checkoutModal) checkoutModal.style.display = 'flex';

    checkoutClose?.addEventListener('click', () => { if (checkoutModal) checkoutModal.style.display = 'none'; });    });

    checkoutClose?.addEventListener('click', () => { if (checkoutModal) checkoutModal.style.display = 'none'; });

    placeOrderBtn?.addEventListener('click', () => {

        // simple validation    placeOrderBtn?.addEventListener('click', () => {

        const name = document.getElementById('custName')?.value?.trim();        // simple validation

        const email = document.getElementById('custEmail')?.value?.trim();        const name = document.getElementById('custName')?.value?.trim();

        const addr = document.getElementById('custAddress')?.value?.trim();        const email = document.getElementById('custEmail')?.value?.trim();

        const card = document.getElementById('custCard')?.value?.trim();        const addr = document.getElementById('custAddress')?.value?.trim();

        if (!name || !email || !addr || !card) {        const card = document.getElementById('custCard')?.value?.trim();

            orderMessage.style.display = 'block';        if (!name || !email || !addr || !card) {

            orderMessage.textContent = 'Please complete all fields.';            orderMessage.style.display = 'block';

            orderMessage.style.color = 'red';            orderMessage.textContent = 'Please complete all fields.';

            return;            orderMessage.style.color = 'red';

        }            return;

        }

        // Simulate placing order

        orderMessage.style.display = 'block';        // Simulate placing order

        orderMessage.style.color = 'green';        orderMessage.style.display = 'block';

        orderMessage.textContent = 'Order placed — thank you!';        orderMessage.style.color = 'green';

        // visual confirmation animation        orderMessage.textContent = 'Order placed — thank you!';

        orderMessage.classList.remove('order-confirm');        // visual confirmation animation

        void orderMessage.offsetWidth;        orderMessage.classList.remove('order-confirm');

        orderMessage.classList.add('order-confirm');        void orderMessage.offsetWidth;

        orderMessage.classList.add('order-confirm');

        // Clear cart

        if (window.cart) {        // Clear cart

            window.cart.items = [];        if (window.cart) {

            window.cart.saveCart();            window.cart.items = [];

            window.cart.updateDisplay();            window.cart.saveCart();

        }            window.cart.updateDisplay();

        }

        // close after short delay

        setTimeout(() => {        // close after short delay

            if (checkoutModal) checkoutModal.style.display = 'none';        setTimeout(() => {

            orderMessage.style.display = 'none';            if (checkoutModal) checkoutModal.style.display = 'none';

            document.getElementById('checkoutForm')?.reset();            orderMessage.style.display = 'none';

        }, 1500);            document.getElementById('checkoutForm')?.reset();

    });        }, 1500);

    });

    // Close cart when clicking outside

    document.addEventListener('click', (e) => {    // Close cart when clicking outside

        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {    document.addEventListener('click', (e) => {

            cartDropdown.style.display = 'none';        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {

        }            cartDropdown.style.display = 'none';

    });        }

    });

    // Initialize cart display

    if (window.cart && typeof window.cart.updateDisplay === 'function') {    // Cart is managed by the cart object defined earlier

        window.cart.updateDisplay();

    }    // Initialize cart display

});    if (window.cart && typeof window.cart.updateDisplay === 'function') {

        window.cart.updateDisplay();

// Error handling    }

window.addEventListener('error', (e) => {});

    console.error('Error:', e.message);

});// Error handling
window.addEventListener('error', (e) => {
    console.error('Error:', e.message);
});
// Inlined cleaned script (merged per Option B) — cart, modal, checkout, and helpers
// -- begin cleaned JS

// Cleaned script.js — JavaScript only (HTML/script/style tags removed)
// Global wrapper so inline onclick="openModal(event)" works (delegates to modal already initialized)
window.openModal = function(ev) {
    try {
        const e = ev || window.event;
        let btn = e.currentTarget || e.target || null;
        if (btn && btn.nodeType === 3) btn = btn.parentElement;
        if (btn && btn.closest) btn = btn.closest('button') || btn;
        if (!btn) return;
        // read data attributes
        const name = btn.dataset.name || '';
        const price = btn.dataset.price || '';
        const desc = btn.dataset.desc || '';
        const img = btn.dataset.img || '';
        const img2 = btn.dataset.img2 || '';
        const img3 = btn.dataset.img3 || '';

        if (!modal) modal = document.querySelector('.product-modal');
        if (!modal) return;
        const modalImg = modal.querySelector('#modalImg');
        const modalTitle = modal.querySelector('#modalTitle');
        const modalDesc = modal.querySelector('#modalDesc');
        const modalPrice = modal.querySelector('#modalPrice');
        if (modalImg) modalImg.src = img || '';
        if (modalTitle) modalTitle.textContent = name;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';
        const thumbs = modal.querySelectorAll('.thumbnail');
        if (thumbs && thumbs.length) {
            thumbs[0].src = img || '';
            if (thumbs[1]) thumbs[1].src = img2 || img || '';
            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';
            thumbs.forEach(t => t.classList.remove('active'));
            if (thumbs[0]) thumbs[0].classList.add('active');
        }
        modal.style.display = 'flex';
    } catch (err) {
        console.error('openModal error', err);
    }
};

// Initialize cart system
const cart = {
    items: [],

    // addItem now accepts optional quantity (qty)
    addItem(name, price, qty = 1) {
        price = parseFloat(price) || 0;
        qty = parseInt(qty) || 1;
        const existingItem = this.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 0) + qty;
        } else {
            this.items.push({
                name,
                price,
                quantity: qty
            });
        }
        this.saveCart();
        this.updateDisplay();
        this.showNotification(`Added ${name} ×${qty} to cart`);
    },

    // change quantity of an existing item by delta (±)
    changeQuantity(name, delta) {
        const it = this.items.find(i => i.name === name);
        if (!it) return;
        it.quantity = (it.quantity || 0) + parseInt(delta);
        if (it.quantity <= 0) {
            this.removeItem(name);
            return;
        }
        this.saveCart();
        this.updateDisplay();
    },

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.saveCart();
        this.updateDisplay();
        this.showNotification(`Removed ${name} from cart`);
    },

    updateDisplay() {
        const cartDropdown = document.querySelector('.dropdown-content');
        const cartEmpty = document.querySelector('.cart-empty');
        const cartList = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total');

        if (!cartList || !cartEmpty || !cartTotal) return;

        const badge = document.getElementById('cartBadge');
        const badgeCount = this.items.reduce((s, it) => s + (it.quantity || 0), 0);
        if (badge) {
            // pulse animation when increasing
            const prev = this._lastBadgeCount || 0;
            badge.textContent = badgeCount;
            badge.style.display = badgeCount > 0 ? 'inline-flex' : 'none';
            if (badgeCount > prev) {
                badge.classList.remove('badge-pulse');
                // force reflow then add class to restart animation
                void badge.offsetWidth;
                badge.classList.add('badge-pulse');
            }
            this._lastBadgeCount = badgeCount;
        }
        try { localStorage.setItem('farmCartCount', String(badgeCount)); } catch (e) { /* ignore */ }

        if (this.items.length === 0) {
            cartEmpty.style.display = 'block';
            cartList.style.display = 'none';
            cartTotal.style.display = 'none';
            return;
        }

        cartEmpty.style.display = 'none';
        cartList.style.display = 'block';

        let total = 0;
        cartList.innerHTML = this.items.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <div style="flex:1;">
                        <div style="font-weight:600">${item.name}</div>
                        <div style="font-size:12px;color:#666;">${fmtPrice(item.price)}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <button class="prod-qty-decrease" onclick="cart.changeQuantity('${item.name}', -1)" aria-label="Decrease quantity">−</button>
                        <span class="cart-item-qty" aria-live="polite">${item.quantity}</span>
                        <button class="prod-qty-increase" onclick="cart.changeQuantity('${item.name}', 1)" aria-label="Increase quantity">+</button>
                    </div>
                    <div style="margin-left:12px;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>
                    <button onclick="cart.removeItem('${item.name}')" 
                            class="remove-btn" 
                            aria-label="Remove ${item.name} from cart">×</button>
                </div>
            `;
        }).join('');

        cartTotal.style.display = 'block';
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    },

    saveCart() {
        localStorage.setItem('farmCart', JSON.stringify(this.items));
    },

    loadCart() {
        const saved = localStorage.getItem('farmCart');
        if (saved) {
            try {
                this.items = JSON.parse(saved);
                this.updateDisplay();
            } catch (e) {
                console.error('Error loading cart:', e);
                this.items = [];
            }
        }
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 1400);
    }
};

// Make cart globally available
window.cart = cart;

// Product modal is handled in the DOMContentLoaded event
let modal = null;

// Utility: format currency
function fmtPrice(v) { return '$' + parseFloat(v || 0).toFixed(2); }

document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const cartBtn = document.getElementById('cartBtn');
    const cartDropdown = document.querySelector('.dropdown-content');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    modal = document.querySelector('.product-modal');

    // Add-to-cart helper (reads product qty when passed the button element)
    function addToCart(name, price, btnElement) {
        try {
            let qty = 1;
            if (btnElement) {
                const parent = btnElement.closest('.product-actions');
                const q = parent?.querySelector('.prod-qty');
                if (q) qty = Math.max(1, parseInt(q.textContent || '1'));
            }
            if (window.cart && typeof window.cart.addItem === 'function') {
                window.cart.addItem(name, price, qty);
            } else {
                console.warn('cart.addItem not available');
            }
        } catch (err) {
            console.error('addToCart error', err);
        }
    }
    window.addToCart = addToCart;

    // Expose removeFromCart wrapper
    window.removeFromCart = function(name) { if (window.cart && typeof window.cart.removeItem === 'function') window.cart.removeItem(name); };

    // Product quantity controls (delegated)
    document.addEventListener('click', (e) => {
        const t = e.target;
        if (t.matches('.prod-qty-increase')) {
            const span = t.parentElement?.querySelector('.prod-qty');
            if (span) span.textContent = String((parseInt(span.textContent||'1')||1) + 1);
        }
        if (t.matches('.prod-qty-decrease')) {
            const span = t.parentElement?.querySelector('.prod-qty');
            if (span) {
                const val = Math.max(1, (parseInt(span.textContent||'1')||1) - 1);
                span.textContent = String(val);
            }
        }
    });

    // Product filtering
    const searchInput = document.querySelector('input[type="search"]');
    const categorySelect = document.querySelector('select[name="category"]');
    const priceRange = document.querySelector('input[type="number"]');
    
    function filterProducts() {
        const searchTerm = searchInput?.value.toLowerCase() || '';
        const category = categorySelect?.value || 'all';
        const maxPrice = priceRange?.value || Infinity;
        
        const products = document.querySelectorAll('.livestock-card');
        products.forEach(product => {
            const title = product.querySelector('.livestock-title')?.textContent.toLowerCase() || '';
            const productCategory = product.dataset.category || '';
            const price = parseFloat(product.dataset.price || '0');
            
            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = category === 'all' || productCategory === category;
            const matchesPrice = price <= maxPrice;
            
            product.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';
        });
    }

    // Add filter event listeners
    searchInput?.addEventListener('input', filterProducts);
    categorySelect?.addEventListener('change', filterProducts);
    priceRange?.addEventListener('input', filterProducts);

    // Modal functionality - supports being called with a product element OR an Event
    function openModal(productOrEvent) {
        if (!modal) return;

        // normalize input: if an Event was passed, extract dataset from event.currentTarget
        let productEl = null;
        let name = '';
        let price = '';
        let desc = '';
        let img = '';
        let img2 = '';
        let img3 = '';

        if (productOrEvent && (productOrEvent.currentTarget || productOrEvent.target)) {
            // called as event handler (inline onclick or addEventListener)
            let btn = productOrEvent.currentTarget || productOrEvent.target;
            if (btn && btn.nodeType === 3) btn = btn.parentElement; // text node -> parent
            if (btn && btn.closest) btn = btn.closest('button') || btn;
            // If button has data attributes, use them
            name = btn?.dataset?.name || '';
            price = btn?.dataset?.price || '';
            desc = btn?.dataset?.desc || '';
            img = btn?.dataset?.img || '';
            img2 = btn?.dataset?.img2 || '';
            img3 = btn?.dataset?.img3 || '';
        } else if (productOrEvent && productOrEvent.dataset) {
            // called with the product element
            productEl = productOrEvent;
            name = productEl.querySelector('h4')?.textContent || productEl.dataset.name || '';
            price = productEl.dataset.price || '';
            desc = productEl.querySelector('p')?.textContent || '';
            img = productEl.dataset.img || '';
            img2 = productEl.dataset.img2 || '';
            img3 = productEl.dataset.img3 || '';
        } else {
            return;
        }

        const modalImg = modal.querySelector('#modalImg');
        const modalTitle = modal.querySelector('#modalTitle');
        const modalDesc = modal.querySelector('#modalDesc');
        const modalPrice = modal.querySelector('#modalPrice');

        if (modalImg) modalImg.src = img || '';
        if (modalTitle) modalTitle.textContent = name;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalPrice) modalPrice.textContent = price ? ('$' + parseFloat(price).toFixed(2)) : '';

        // populate thumbnails dynamically
        const thumbs = modal.querySelectorAll('.thumbnail');
        if (thumbs && thumbs.length) {
            thumbs[0].src = img || '';
            if (thumbs[1]) thumbs[1].src = img2 || img || '';
            if (thumbs[2]) thumbs[2].src = img3 || img2 || img || '';
            thumbs.forEach(t => t.classList.remove('active'));
            if (thumbs[0]) thumbs[0].classList.add('active');
        }

        modal.style.display = 'flex';
    }

    // Close modal when clicking outside
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add click listeners to products
    document.querySelectorAll('.livestock-card').forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    // Cart functionality
    cartBtn?.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Checkout button opens modal
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutClose = document.getElementById('checkoutClose');
    const checkoutSummary = document.getElementById('checkoutSummary');
    const placeOrderBtn = document.getElementById('placeOrder');
    const orderMessage = document.getElementById('orderMessage');

    function populateCheckout() {
        if (!checkoutSummary) return;
        const items = window.cart?.items || [];
        if (items.length === 0) {
            checkoutSummary.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
        let html = '<ul style="list-style:none;padding:0;margin:0;">';
        let total = 0;
        items.forEach(it => {
            const itTotal = (it.price || 0) * (it.quantity || 1);
            total += itTotal;
            html += `<li style="padding:6px 0;border-bottom:1px solid #eee;">${it.name} &times; ${it.quantity} — ${fmtPrice(itTotal)}</li>`;
        });
        html += `</ul><div style="text-align:right;margin-top:8px;font-weight:700;">Total: ${fmtPrice(total)}</div>`;
        checkoutSummary.innerHTML = html;
    }

    checkoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        populateCheckout();
        if (checkoutModal) checkoutModal.style.display = 'flex';
    });
    checkoutClose?.addEventListener('click', () => { if (checkoutModal) checkoutModal.style.display = 'none'; });

    placeOrderBtn?.addEventListener('click', () => {
        // simple validation
        const name = document.getElementById('custName')?.value?.trim();
        const email = document.getElementById('custEmail')?.value?.trim();
        const addr = document.getElementById('custAddress')?.value?.trim();
        const card = document.getElementById('custCard')?.value?.trim();
        if (!name || !email || !addr || !card) {
            orderMessage.style.display = 'block';
            orderMessage.textContent = 'Please complete all fields.';
            orderMessage.style.color = 'red';
            return;
        }

        // Simulate placing order
        orderMessage.style.display = 'block';
        orderMessage.style.color = 'green';
        orderMessage.textContent = 'Order placed — thank you!';
        // visual confirmation animation
        orderMessage.classList.remove('order-confirm');
        void orderMessage.offsetWidth;
        orderMessage.classList.add('order-confirm');

        // Clear cart
        if (window.cart) {
            window.cart.items = [];
            window.cart.saveCart();
            window.cart.updateDisplay();
        }

        // close after short delay
        setTimeout(() => {
            if (checkoutModal) checkoutModal.style.display = 'none';
            orderMessage.style.display = 'none';
            document.getElementById('checkoutForm')?.reset();
        }, 1500);
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartBtn && cartDropdown && !cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
            cartDropdown.style.display = 'none';
        }
    });

