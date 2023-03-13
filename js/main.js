for (let i of propiedades.data){
    //Crear tarjeta
    let card = document.createElement("div");
    //Crear clase
    card.classList.add("card", "i.category");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
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
    opcion.innerText = i.opcion;
    container.appendChild(opcion)

    card.appendChild(container);
    document.getElementById("propiedades").appendChild(card);
}