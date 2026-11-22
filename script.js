/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS MULTIMARCA (PRECIOS DESDE $10 HASTA $75)
   ========================================================================== */
const PRODUCTS_DB = [
  {
    id: 1,
    name: "Top Verano Boho Tejido",
    brand: "HiloSol",
    category: "ropa",
    audience: "jovenes",
    price: 10,
    oldPrice: 22,
    promo: "REMATE $10",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MMf-qYEBSAwL2PPYQngqvVeY08ZzH5D36fpCH7Rl2rcEooyicoBBRnw&s=10"
  },
  {
    id: 2,
    name: "Pack 2x Amigurumis Mini (Oso y Conejo)",
    brand: "NubeLana",
    category: "peluches",
    audience: "ninos",
    price: 15,
    oldPrice: 28,
    promo: "PROMO 2x$15",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8jgU1KHp7VoTOw55SVA3ZjKBCAflFNxK10rhutD4n7OWhwxvjK7M9gs&s=10"
  },
  {
    id: 3,
    name: "Zapatos Suaves Primeros Pasos",
    brand: "MimoTejido",
    category: "zapatos",
    audience: "bebes",
    price: 10,
    oldPrice: 18,
    promo: "REMATE $10",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtd292iqlN-mAfU54_Oi30LCDixmeHCqWSxxA3jaSHGAduQ0PBqK__h6s&s=10"
  },
  {
    id: 4,
    name: "Ramo de flores",
    brand: "PuntoChic",
    category: "accesorios",
    audience: "jovenes",
    price: 15,
    oldPrice: 24,
    promo: "PROMO 2x$15",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A4raQFdFroIS5VFBGI-FfhJIu5RDBQsbKq7FtzoYu_V7Ifsce5SskMbf&s=10"
  },
  {
    id: 5,
    name: "Manta para dormir",
    brand: "LanaVibe",
    category: "ropa",
    audience: "adultos",
    price: 58,
    oldPrice: 75,
    promo: "-22% DTO",
    featured: true,
    image: "https://i.etsystatic.com/29023808/r/il/7def1b/5550857366/il_570xN.5550857366_hjqv.jpg"
  },
  {
    id: 6,
    name: "Ropa de flores",
    brand: "AbuelaTeje",
    category: "ropa",
    audience: "mayores",
    price: 45,
    oldPrice: 65,
    promo: "OFERTA",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxhio9N4fwe59WjLTWU-JThl3ZdWwEMLVwu2UQ_1JIOW3ArUTMQbHnIo9&s=10"
  },
  {
    id: 7,
    name: "Pantuflas",
    brand: "AbuelaTeje",
    category: "zapatos",
    audience: "Todas",
    price: 28,
    oldPrice: 40,
    promo: "CONFORT",
    featured: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJuV8rN241DgIxrFRbjA-bvwiLV_1FVr1NwGHQjMIcV6kDERamXtPCvw&s=10"
  },
  {
    id: 8,
    name: "Bolso",
    brand: "PuntoChic",
    category: "accesorios",
    audience: "adultos",
    price: 36,
    oldPrice: 52,
    promo: "TENDENCIA",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0rOEpKCE7EuJFJd1JxQuRrug64tPtG9v6ETGVrC5aNZFd0k2L_72Y25i&s=10"
  },
  {
    id: 9,
    name: "Dinosaurio Rex Gigante ",
    brand: "NubeLana",
    category: "peluches",
    audience: "ninos",
    price: 42,
    oldPrice: 60,
    promo: "EDICIÓN XL",
    featured: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dk3jV8eyx98yHn6dK-1RNeMnwW1tX7k7EHIDmhLJ9MLnPF921n-M7Pux&s=10"
  },
  {
    id: 10,
    name: "Manta + Gorrito Apego Recién Nacido",
    brand: "MimoTejido",
    category: "otros",
    audience: "bebes",
    price: 49,
    oldPrice: 68,
    promo: "SET REGALO",
    featured: false,
    image: "https://i.pinimg.com/736x/f8/d7/f7/f8d7f74c5f524bf61ae26c78bd272b2b.jpg"
  },
  {
    id: 11,
    name: "gorros",
    brand: "HiloSol",
    category: "accesorios",
    audience: "jovenes",
    price: 10,
    oldPrice: 20,
    promo: "REMATE $10",
    featured: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-qMkP9QEsuLXCQ0E8oAAZTShyxJiABC-vypJkyvXviSAqBwbu8CdpviX&s=10"
  },
  {
    id: 12,
    name: "Suéter ",
    brand: "LanaVibe",
    category: "ropa",
    audience: "adultos",
    price: 75,
    oldPrice: 95,
    promo: "TOPE GAMA $75",
    featured: false,
    image: "https://i.etsystatic.com/38472102/r/il/e61c90/7364798656/il_570xN.7364798656_wgaj.jpg"
  },
  {
    id: 13,
    name: "Dúo de Patitos Amigurumi",
    brand: "NubeLana",
    category: "peluches",
    audience: "ninos",
    price: 15,
    oldPrice: 28,
    promo: "PROMO 2x$15",
    featured: true,
    image: "https://www.lovelycraft.com/wp-content/uploads/2021/10/Clovis-El-Pato-PDF-Amigurumi-Patron-Gratis-1.jpg"
  },
  {
    id: 14,
    name: "Snoopy Amigurumi con Lazos y Flores",
    brand: "NubeLana",
    category: "peluches",
    audience: "jovenes",
    price: 24,
    oldPrice: 35,
    promo: "EDICIÓN ESPECIAL",
    featured: true,
    image: "https://cozybear.in/cdn/shop/files/crochetsnoopyplushietutorial.jpg?v=1770626819"
  },
  {
    id: 15,
    name: "Dinosaurio Felpa Azul Pastel XL",
    brand: "MimoTejido",
    category: "peluches",
    audience: "ninos",
    price: 38,
    oldPrice: 52,
    promo: "NUEVO",
    featured: true,
    image: "https://imgv2-2-f.scribdassets.com/img/document/561962610/original/fa9a243197/1?v=1"
  },
  {
    id: 16,
    name: "Zorro Pirata Amigurumi Colección",
    brand: "PuntoChic",
    category: "peluches",
    audience: "jovenes",
    price: 26,
    oldPrice: 38,
    promo: "HECHO A MANO",
    featured: true,
    image: "https://i.pinimg.com/736x/c2/ba/d6/c2bad6d4e332a62253ac9723c5d85779.jpg"
  }
];

/* ==========================================================================
   ESTADO DEL CARRITO (PERSISTENTE EN LOCALSTORAGE)
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem("tejiarte_cart")) || [];

function saveCart() {
  localStorage.setItem("tejiarte_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = PRODUCTS_DB.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  openCart();
}

function changeQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function updateCartUI() {
  const countEls = document.querySelectorAll(".cart-count");
  const itemsContainer = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  countEls.forEach(el => (el.textContent = totalQty));
  if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">Tu carrito está vacío. ¡Aprovecha los remates desde $10!</p>`;
    return;
  }

  itemsContainer.innerHTML = cart
    .map(
      item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <small style="color:var(--text-muted);">${item.brand}</small><br>
          <span>$${item.price} c/u</span>
          <div class="cart-qty">
            <button onclick="changeQty(${item.id}, -1)">-</button>
            <strong>${item.qty}</strong>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function openCart() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("open");
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("open");
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Agrega al menos un producto artesanal antes de finalizar tu compra.");
    return;
  }
  alert("¡Gracias por tu compra en TejiArte Store! Tu pedido de crochet multimarca está siendo procesado.");
  cart = [];
  saveCart();
  closeCart();
}

/* ==========================================================================
   RENDERIZADO DE TARJETAS DE PRODUCTO
   ========================================================================== */
function createProductCard(product) {
  return `
    <article class="product-card reveal visible">
      <div class="card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="card-badges">
          <span class="brand-pill">Marca: ${product.brand}</span>
          <span class="offer-pill">${product.promo}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-meta">${product.category} • Público: ${product.audience}</div>
        <h3 class="card-title">${product.name}</h3>
        <div class="card-price-row">
          <span class="price-current">$${product.price}</span>
          <span class="price-old">$${product.oldPrice}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">
          🛒 Añadir al Carrito
        </button>
      </div>
    </article>
  `;
}

function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:2rem; color:var(--text-muted);">No encontramos creaciones con ese filtro. Prueba otra combinación.</p>`;
    return;
  }
  container.innerHTML = list.map(createProductCard).join("");
}

/* ==========================================================================
   INICIALIZACIÓN DE EVENTOS AL CARGAR EL DOM
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();

  // 1. Menú Hamburguesa
  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // 2. Carrito Drawer
  document.getElementById("openCartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);

  // 3. Renderizado inicial en Index (Destacados)
  const featuredGrid = document.getElementById("featuredProductsGrid");
  if (featuredGrid) {
    const featured = PRODUCTS_DB.filter(p => p.featured);
    renderProducts("featuredProductsGrid", featured);

    // Filtros rápidos en Index
    document.querySelectorAll(".home-filter").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".home-filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        if (filter === "all") renderProducts("featuredProductsGrid", featured);
        else if (filter === "remate") renderProducts("featuredProductsGrid", PRODUCTS_DB.filter(p => p.price <= 15));
        else renderProducts("featuredProductsGrid", PRODUCTS_DB.filter(p => p.category === filter));
      });
    });
  }

  // 4. Renderizado en Remates (remates.html)
  const rematesGrid = document.getElementById("rematesGrid");
  if (rematesGrid) {
    renderProducts("rematesGrid", PRODUCTS_DB.filter(p => p.price <= 30));
  }

  // 5. Renderizado y Filtros Avanzados en Catálogo (catalogo.html)
  const catalogGrid = document.getElementById("catalogGrid");
  if (catalogGrid) {
    const catSelect = document.getElementById("filterCategory");
    const audSelect = document.getElementById("filterAudience");
    const brandSelect = document.getElementById("filterBrand");
    const priceSelect = document.getElementById("filterPrice");

    // Preseleccionar categoría si viene por URL (?cat=ropa)
    const params = new URLSearchParams(window.location.search);
    if (params.get("cat") && catSelect) catSelect.value = params.get("cat");

    function applyCatalogFilters() {
      let filtered = [...PRODUCTS_DB];
      if (catSelect && catSelect.value !== "all") {
        filtered = filtered.filter(p => p.category === catSelect.value);
      }
      if (audSelect && audSelect.value !== "all") {
        filtered = filtered.filter(p => p.audience === audSelect.value);
      }
      if (brandSelect && brandSelect.value !== "all") {
        filtered = filtered.filter(p => p.brand === brandSelect.value);
      }
      if (priceSelect && priceSelect.value !== "all") {
        if (priceSelect.value === "10") filtered = filtered.filter(p => p.price === 10);
        if (priceSelect.value === "15") filtered = filtered.filter(p => p.price <= 15);
        if (priceSelect.value === "40") filtered = filtered.filter(p => p.price <= 40);
      }
      renderProducts("catalogGrid", filtered);
    }

    [catSelect, audSelect, brandSelect, priceSelect].forEach(el => {
      el?.addEventListener("change", applyCatalogFilters);
    });
    applyCatalogFilters();
  }

  // 6. Buscador Rápido en Navbar
  const searchInput = document.getElementById("quickSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const term = e.target.value.toLowerCase().trim();
      const targetGrid = document.getElementById("catalogGrid") || document.getElementById("featuredProductsGrid");
      if (!targetGrid) return;
      const results = PRODUCTS_DB.filter(
        p =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.audience.toLowerCase().includes(term)
      );
      renderProducts(targetGrid.id, results);
    });
  }

  // 7. Validación de Formulario de Contacto
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("cName");
      const email = document.getElementById("cEmail");
      const message = document.getElementById("cMessage");

      document.querySelectorAll(".error-msg").forEach(el => (el.style.display = "none"));

      if (!name.value.trim() || name.value.trim().length < 3) {
        document.getElementById("errName").style.display = "block";
        valid = false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        document.getElementById("errEmail").style.display = "block";
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        document.getElementById("errMessage").style.display = "block";
        valid = false;
      }

      if (valid) {
        const feedback = document.getElementById("formFeedback");
        feedback.textContent = "¡Mensaje enviado con éxito! Nuestro equipo artesanal te responderá en menos de 24 horas.";
        feedback.className = "form-feedback success";
        contactForm.reset();
      }
    });
  }

  // 8. Animación suave al hacer scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});