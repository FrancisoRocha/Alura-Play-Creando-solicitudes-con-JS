import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async  function enviarVideo(evento){

    evento.preventDefault();

    const imagen= document.querySelector("[data-imagen]").value;
    const url= document.querySelector("[data-url]").value;
    const titulo= document.querySelector("[data-titulo]").value;
    const descripcion= Math.floor(Math.random()*10).toString();

    await conexionAPI.enviarVideo(titulo,descripcion,url,imagen)

    window.location.href="../pages/envio-concluido.html"


}

formulario,addEventListener("submit",evento => enviarVideo(evento));



