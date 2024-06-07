import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";


async function buscarVideos(evento) {

    evento.preventDefault();

    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    //console.log(datosBusqueda)
    const buscar = await conexionAPI.buscarVideos(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");
    console.log(listaDeBusqueda)

    /* while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    }*/
    listaDeBusqueda.replaceChildren();

    buscar.forEach(element => listaDeBusqueda. appendChild(crearCard(element.titulo, element.descripcion, element.url, element.imagen)));
}

const botonBucar = document.querySelector("[data-boton-busqueda]");

botonBucar.addEventListener("click", evento => buscarVideos(evento)) //Boton Bucar

