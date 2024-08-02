import React from "react";
import { useState,useEffect } from "react";

const Modal = ({activemodal}) =>{

    useEffect(()=>{
     if(activemodal){
       let modal = document.getElementById('container');
       modal.style.left = "0px";
     }
     else{
        let modal = document.getElementById('container');
        modal.style.left = "-250px";
     }
    },[activemodal])



    return<>
    <div id="container" className="modal-container"> 
    <ul className="ul-list">
        <li className="list-item">Iniciar sesion</li>
        <li className="list-item">Registrarse</li>
        <li className="list-item">Tickets</li>
        <li className="list-item">Panel General</li>
    </ul>
    </div>
     
    </>
}

export default Modal;