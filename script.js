document.addEventListener("DOMContentLoaded", function () {
    // Número de teléfono configurado
    const miTelefonoWhatsApp = "56957301930";

    // 1. INTEGRACIÓN CON WHATSAPP
    const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

    whatsappButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".product-card");
            const brand = card.querySelector(".product-brand").innerText;
            const name = card.querySelector(".product-name").innerText;
            const desc = card.querySelector(".product-desc").innerText;

            const textoMensaje = `Hola Aura & Essence! Me interesa consultar la disponibilidad del perfume ${brand} ${name} (${desc}). ¿Tienen stock disponible?`;
            const urlMensaje = encodeURIComponent(textoMensaje);

            window.open(`https://wa.me/${miTelefonoWhatsApp}?text=${urlMensaje}`, '_blank');
        });
    });

    // 2. SISTEMA DE FILTRADO AVANZADO Y MENÚ DESPLEGABLE
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");
    const dropdown = document.getElementById("brands-dropdown");

    if (dropdown) {
        const toggleBtn = dropdown.querySelector(".dropdown-toggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", function (e) {
                e.preventDefault();
                dropdown.classList.toggle("active");
            });
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const filterType = this.getAttribute("data-type");
            const filterValue = this.getAttribute("data-value").toLowerCase();

            productCards.forEach(card => {
                const gender = (card.getAttribute("data-gender") || "").toLowerCase();
                const brand = (card.getAttribute("data-brand") || "").toLowerCase();

                if (filterType === "category") {
                    if (filterValue === "todos" || gender === filterValue) {
                        card.style.display = "";
                    } else {
                        card.style.display = "none";
                    }
                } else if (filterType === "brand") {
                    if (brand === filterValue) {
                        card.style.display = "";
                    } else {
                        card.style.display = "none";
                    }
                }
            });

            if (dropdown) {
                dropdown.classList.remove("active");
            }
        });
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", function () {
        if (dropdown) dropdown.classList.remove("active");
    });

    // 3. SCROLL SUAVE AL HACER CLIC EN 'EXPLORAR CATÁLOGO'
    const exploreBtn = document.getElementById("explore-btn");
    const catalogSection = document.getElementById("catalog");

    if (exploreBtn && catalogSection) {
        exploreBtn.addEventListener("click", function () {
            catalogSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
