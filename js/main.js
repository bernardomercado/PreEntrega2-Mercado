/*for (let i of propiedades.data){
    //Crear tarjeta
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    // imagen div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre de la propiedad
    let name = document.createElement("h4");
    name.classList.add("propiedad-name");
    name.innerText = i.propiedadNombre.toUpperCase();
    container.appendChild(name);
    //opcion
    let opcion = document.createElement("h5");
    opcion.innerText = "En " + i.opcion;
    container.appendChild(opcion);
    //ambientes
    let ambientes = document.createElement("p");
    ambientes.innerText = "Cantidad de ambientes: " + i.ambientes;
    container.appendChild(ambientes);
    //precio
    let precio = document.createElement("p");
    precio.innerText = "USD " + i.precio;
    container.appendChild(precio);
    //barrio
    let barrio = document.createElement("p");
    barrio.innerText = "Barrio: " + i.barrio;
    container.appendChild(barrio);

    card.appendChild(container);
    document.getElementById("propiedades").appendChild(card);
}
*/

// Obtener el formulario y los campos de entrada
const form = document.getElementById('formulario-busqueda');
const tipoTransaccionInput = document.getElementsByName('tipoTransaccion')[0];
const tipoPropiedadInput = document.getElementsByName('tipoPropiedad')[0];
const ambientesInput = document.getElementById('ambientes');
const precioMinimoInput = document.getElementById('priceMin');
const precioMaximoInput = document.getElementById('priceMax');
const barrioInput = document.getElementsByName('barrio')[0];
// Escuchar el evento submit del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que se envíe el formulario
  
    // Obtener los valores de los campos de entrada
    const tipoTransaccion = tipoTransaccionInput.value;
    const tipoPropiedad = tipoPropiedadInput.value;
    const ambientes = ambientesInput.value;
    const precioMinimo = precioMinimoInput.value;
    const precioMaximo = precioMaximoInput.value;
    const barrio = barrioInput.value;
  
    // Filtrar las propiedades según los valores ingresados por el usuario
    const propiedadesFiltradas = propiedades.data.filter(function(propiedad) {
        return (tipoTransaccion === '' || propiedad.opcion === tipoTransaccion) &&
               (tipoPropiedad === '' || propiedad.tipo === tipoPropiedad) &&
               (ambientes === '' || propiedad.ambientes >= parseInt(ambientes)) &&
               (precioMinimo === '' || propiedad.precio >= parseInt(precioMinimo)) &&
               (precioMaximo === '' || propiedad.precio <= parseInt(precioMaximo)) &&
               (barrio === '' || propiedad.barrio === barrio);
      });
  // Mostrar las propiedades filtradas en pantalla
  const propiedadesContainer = document.getElementById('propiedades');
  propiedadesContainer.innerHTML = '';

  propiedadesFiltradas.forEach(function(propiedad) {
    // Crear la tarjeta de la propiedad
    const card = document.createElement('div');
    card.classList.add('card', propiedad.tipo);

    // Crear la imagen de la propiedad
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    const image = document.createElement('img');
    image.setAttribute('src', propiedad.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Crear la información de la propiedad
    const container = document.createElement('div');
    container.classList.add('container');
    const name = document.createElement('h4');
    name.classList.add('propiedad-name');
    name.innerText = propiedad.propiedadNombre.toUpperCase();
    container.appendChild(name);
    const opcion = document.createElement('h5');
    opcion.innerText = 'En ' + propiedad.opcion;
    container.appendChild(opcion);
    const ambientes = document.createElement('p');
    ambientes.innerText = 'Cantidad de ambientes: ' + propiedad.ambientes;
    container.appendChild(ambientes);
    const precio = document.createElement('p');
    precio.innerText = 'USD ' + propiedad.precio;
    container.appendChild(precio);
    const barrio = document.createElement('p');
    barrio.innerText = 'Barrio: ' + propiedad.barrio;
    container.appendChild(barrio);
    card.appendChild(container);

    propiedadesContainer.appendChild(card);
  })})  