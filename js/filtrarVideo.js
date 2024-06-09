import { conexionAPI } from "./conexionAPI.js";
//import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){

    evento.preventDefault();
    const datoBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = conexionAPI.buscarVideos(datoBusqueda);
    console.log(busqueda);
    
    }
    
    const botonBusqueda = document.querySelector("[data-boton-busqueda]");
    
    botonBusqueda.addEventListener("click",evento=>filtrarVideo(evento))
    //console.log(botonBusqueda);