// ==========================================
// CONFIGURACIÓN CENTRAL DE TU TIENDA
// ==========================================
const MI_WHATSAPP = "56957301930"; 

document.addEventListener("DOMContentLoaded", () => {

    // 1. FUNCIONALIDAD DE BOTONES WHATSAPP (Soporta oferta y precio regular)
    const botonesWhatsApp = document.querySelectorAll(".whatsapp-btn");

    botonesWhatsApp.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const tarjetaProducto = e.target.closest(".product-card");
            
            const marca = tarjetaProducto.querySelector(".product-brand").innerText;
            const nombre = tarjetaProducto.querySelector(".product-name").innerText;
            const desc = tarjetaProducto.querySelector(".product-desc").innerText;
            
            const precioOferta = tarjetaProducto.querySelector(".price-offer");
            const precioNormal = tarjetaProducto.querySelector(".product-price");
            const precioFinal = precioOferta ? `${precioOferta.innerText} (Oferta)` : (precioNormal ? precioNormal.innerText : '');

            const mensajeFormateado = `Hola Aura & Essence! Me gustaría consultar la disponibilidad del perfume: *${marca} - ${nombre}* (${desc}) a ${precioFinal}. ¿Tienen stock disponible?`;
            
            const urlWhatsApp = `https://wa.me/${MI_WHATSAPP}?text=${encodeURIComponent(mensajeFormateado)}`;
            
            window.open(urlWhatsApp, '_blank');
        });
    });

    // 2. FILTRADO DINÁMICO (CATEGORÍAS Y CASAS DE PERFUMERÍA)
    const enlacesFiltro = document.querySelectorAll(".filter-btn");
    const tarjetasProductos = document.querySelectorAll(".product-card");
    const dropdownCasas = document.getElementById("brands-dropdown");

    if (dropdownCasas) {
        const toggleBtn = dropdownCasas.querySelector(".dropdown-toggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", (e) => {
                e.preventDefault();
                dropdownCasas.classList.toggle("active");
            });
        }
    }

    enlacesFiltro.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const tipoFiltro = enlace.getAttribute("data-type");
            const valorFiltro = (enlace.getAttribute("data-value") || "").toLowerCase();

            tarjetasProductos.forEach(tarjeta => {
                const generoTarjeta = (tarjeta.getAttribute("data-gender") || "").toLowerCase();
                const marcaTarjeta = (tarjeta.getAttribute("data-brand") || "").toLowerCase();

                if (tipoFiltro === "category") {
                    if (valorFiltro === "todos" || generoTarjeta === valorFiltro) {
                        tarjeta.style.display = "block";
                    } else {
                        tarjeta.style.display = "none";
                    }
                } else if (tipoFiltro === "brand") {
                    if (marcaTarjeta === valorFiltro) {
                        tarjeta.style.display = "block";
                    } else {
                        tarjeta.style.display = "none";
                    }
                }
            });

            if (dropdownCasas) {
                dropdownCasas.classList.remove("active");
            }
        });
    });

    document.addEventListener("click", () => {
        if (dropdownCasas) {
            dropdownCasas.classList.remove("active");
        }
    });

    // 3. SCROLL SUAVE AL BOTÓN DEL HERO
    const botonExplorar = document.getElementById("explore-btn");
    const seccionCatalogo = document.getElementById("catalog");

    if (botonExplorar && seccionCatalogo) {
        botonExplorar.addEventListener("click", () => {
            seccionCatalogo.scrollIntoView({ behavior: "smooth" });
        });
    }
});
