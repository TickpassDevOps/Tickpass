import React from "react";
import { useState,useEffect } from "react";
import './paginacion.css'
const PaginacionBtn = ({page,setpage,nextpage,previospage}) =>{



    return(
        <>
        <div className="paginacion-container">
           <div className="controlers">
            <button className="btn-controler" onClick={previospage}><img className="img-btn" src="https://i.postimg.cc/N0YvZHP9/flecha-izquierda-3.png" alt="" /></button>
            <h2 className="pagactual">{page}</h2>
            <button className="btn-controler" onClick={nextpage}> <img className="img-btn" src="https://i.postimg.cc/DwxRpMsD/flecha-izquierda-4.png" alt="" /></button>
           </div>
        </div>
        </>
    )
}

export default PaginacionBtn;