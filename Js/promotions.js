/**
  * La función `loadPromotions` obtiene datos del archivo promotion.JSON y luego muestra las promociones en
  * contenedores separados según los requisitos de membresía.
  */
let allPromotions = []

function loadPromotions() {

    fetch('promotions.json')
        .then(response => response.json())
        .then(data => {
            allPromotions = data.Promotions
            showData(allPromotions);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function showData(data) {

    let generalContainer = document.querySelector("#general .cardsContainer");
    let cineFanContainer = document.querySelector("#cineFan .cardsContainer");

    generalContainer.innerHTML = "";
    cineFanContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let newCard = document.createElement("div")
        newCard.classList.add("card");

        let newImage = document.createElement("img")
        newImage.src = data[i].card;

        newCard.appendChild(newImage);


        if (data[i].requisito == "ninguno") {
            generalContainer.appendChild(newCard)
        }
        else if (data[i].requisito == "socios") {
            cineFanContainer.appendChild(newCard)
        }
        else if (busqueda.trim() === "") {
            // Si no hay búsqueda, simplemente mostrar todas las promociones
            showData(allPromotions);
            return; // Salir de la función
        }
    }
} 

/**
  * La función `buscarPromocion` filtra promociones según la entrada del usuario y los criterios de filtrado seleccionados,
  * luego muestra los datos filtrados.
  */
loadPromotions();

document.querySelector(".btnSearch").addEventListener("click", function () {
    buscarPromocion();
});

function buscarPromocion() {
    const busqueda = document.querySelector("#searchPr").value.toLowerCase();

    const filter = document.querySelectorAll("input[name=opciones]");
    const filterSelected = [...filter].find(opcion => opcion.checked).value;

    const filterPromotions = allPromotions.filter(promocion => {
        switch (filterSelected) {
            case "opcion1":
                return promocion.banco.toLowerCase().includes(busqueda);
            case "opcion2":
                return promocion.dia.toLowerCase().includes(busqueda);
            case "opcion3":
                return promocion.lugar.toLowerCase().includes(busqueda);
            case "opcion4":
                return promocion.requisito.toLowerCase().includes(busqueda);
            default:
                return "true";
        }
    });
    showData(filterPromotions);
}

// Event listener para el botón de limpiar filtros
document.querySelector(".btnClear").addEventListener("click", clearFilters);

// Función para limpiar los filtros y mostrar todas las promociones
function clearFilters() {
    // Limpiar el campo de búsqueda
    document.querySelector("#searchPr").value = "";
    // Limpiar los radio buttons
    const filterRadios = document.querySelectorAll("input[name=opciones]");
    filterRadios.forEach(radio => radio.checked = false);
    // Mostrar todas las promociones
    showAllPromotions();
}

// Función para mostrar todas las promociones
function showAllPromotions() {
    showData(allPromotions);
}