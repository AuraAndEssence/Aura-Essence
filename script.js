// ==========================================
// CONFIGURACIÓN CENTRAL DE TU TIENDA
// ==========================================
const MI_WHATSAPP = "56957301930"; 

document.addEventListener("DOMContentLoaded", () => {

    // 1. FUNCIONALIDAD DE LOS BOTONES DE WHATSAPP
    const botonesWhatsApp = document.querySelectorAll(".whatsapp-btn");

    botonesWhatsApp.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Buscamos la tarjeta contenedora del producto para sacar sus datos
            const tarjetaProducto = e.target.closest(".product-card");
            
            // Extraemos los textos exactos de la interfaz
            const marca = tarjetaProducto.querySelector(".product-brand").innerText;
            const nombre = tarjetaProducto.querySelector(".product-name").innerText;
            const precio = tarjetaProducto.querySelector(".product-price").innerText;

            // Creamos un mensaje amigable y bien formateado para ti
            const mensajeFormateado = `Hola! Me gustaría consultar disponibilidad del perfume: *${marca} - ${nombre}* (${precio}). ¿Tienen stock disponible?`;
            
            // Codificamos el mensaje para que sea válido en un enlace URL
            const mensajeEnlace = encodeURIComponent(mensajeFormateado);
            
            // Creamos la dirección final hacia WhatsApp
            const urlWhatsApp = `https://wa.me/${MI_WHATSAPP}?text=${mensajeEnlace}`;
            
            // Abrimos en una pestaña nueva
            window.open(urlWhatsApp, '_blank');
        });
    });

    // 2. FILTRADO DINÁMICO DEL CATÁLOGO (MENÚ DE NAVEGACIÓN)
    const enlacesFiltro = document.querySelectorAll(".filter-btn");
    const tarjetasProductos = document.querySelectorAll(".product-card");

    enlacesFiltro.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const categoria = e.target.getAttribute("data-category");

            tarjetasProductos.forEach(tarjeta => {
                const generoTarjeta = tarjeta.getAttribute("data-gender");

                if (categoria === "todos" || generoTarjeta === categoria) {
                    tarjeta.style.style.display = "block"; // Volví a corregir esto por si acaso
                    tarjeta.style.display = "block"; 
                } else {
                    tarjeta.style.display = "none";  // Oculta
                }
            });
        });
    });

    // 3. BOTÓN EXPLORAR DEL HERO
    const botonExplorar = document.getElementById("explore-btn");
    const seccionCatalogo = document.getElementById("catalog");

    if (botonExplorar && seccionCatalogo) {
        botonExplorar.addEventListener("click", () => {
            seccionCatalogo.scrollIntoView({ behavior: "smooth" });
        });
    }
});