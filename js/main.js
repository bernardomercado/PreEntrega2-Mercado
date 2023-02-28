let opcion = prompt("Indicar alguna de las siguientes opciones: Venta o Alquiler");
let tipo = prompt("Indicar que esta buscando: Casa o Departamento");
let ambientes = Number(prompt("Indicar la cantidad de ambientes"));
let minimo = Number(prompt("Indicar el precio mínimo requerido (valores expresados en dólares)"));
let maximo = Number(prompt("Indicar el precio maximo requerido (valores expresados en dólares)"));
let barrio = prompt("Indicar el Barrio");

const datosBusqueda ={
    opcion: opcion,
    tipo: tipo,
    ambientes: ambientes,
    minimo: minimo,
    maximo: maximo,
    barrio: barrio,
}

function mostrarPropiedades(propiedades){
    propiedades.forEach(propiedad => {
        console.log(propiedad.opcion + " - " + propiedad.tipo + " - " + propiedad.ambientes + " ambientes - " + " - Precio: " + propiedad.precio + " - Barrio: " + propiedad.barrio)
    })
}

function noResultados(){
    alert("No hay resultados");
}

function filtrarOpcion(propiedad){
    if(datosBusqueda.opcion){
        return propiedad.opcion === datosBusqueda.opcion;
    }
    return propiedad;
}

function filtrarTipo(propiedad){
    if(datosBusqueda.tipo){
        return propiedad.tipo === datosBusqueda.tipo;
    }
    return propiedad;
}

function filtrarAmbientes(propiedad){
    if(datosBusqueda.ambientes){
        return propiedad.ambientes === datosBusqueda.ambientes;
    }
    return propiedad;
}

function filtrarMinimo(propiedad){
    if(datosBusqueda.minimo){
        return propiedad.precio >= datosBusqueda.minimo;
    }
    return propiedad;
}

function filtrarMaximo(propiedad){
    if(datosBusqueda.maximo){
        return propiedad.precio <= datosBusqueda.maximo;
    }
    return propiedad;
}

function filtrarBarrio(propiedad){
    if(datosBusqueda.barrio){
        return propiedad.barrio === datosBusqueda.barrio;
    }
    return propiedad;
}

function filtrarPropiedades(){
    let resultado = propiedades.filter(filtrarOpcion).filter(filtrarTipo).filter(filtrarAmbientes).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarBarrio);
    if(resultado.length){
        mostrarPropiedades(resultado);
    }else{
        noResultados();
    }
}

filtrarPropiedades();