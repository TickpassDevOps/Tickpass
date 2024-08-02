import React from "react"
import { useState,useEffect } from "react"

import './productos.css'

const Productos = ({products}) => {

console.log(products);

    return<>
     
     <main className="main-products">
      <div className="container-list" >
        <ul className="list-cotainer">
        
          {products.length == 0 ? <h1 className="text-no">No se encuntraron productos!!</h1> : products.map(product=>(

             <li  className="products-card" key={product.id}>
                <img className="img-container" src={product.thumbnail}
                alt={product.nombre} />
                 <header className="header-info">
                        <small className="ubi-container"><img loading="lazy" className="img-ubi" src="https://i.postimg.cc/WbzKJ1rq/pasador-de-ubicacion.png" alt="" />Av aconquija 2055</small>
                        
                     </header>
                <div className="tittle-container">
                <strong>{product.nombre} -</strong> {`$${product.precio}`} 
                   </div>
                   <div className="info-container">
                  <div className="date-container">
                     <div className="day-container">
                        {product.dia}
                     </div>
                     <div className="month-container">
                     <span className="container-date-minimun">{product.mes}</span>
                     <span className="container-date-minimun" >{product.ano}</span>
                     </div>
                  </div>
                  <div className="div-raya"></div>
                  <div className="date-container">
                  <div className="day-container">
                        {product.hora}
                     </div>
                     <div className="month-container">

                        <span className="container-date-minimun">{product.minutos}</span>
                        <span className="container-date-minimun" >hrs</span>
                       
                     </div>

                  </div>

                   </div>
                    

                      </li>

          ))}
        </ul>
        </div>
     </main>
    
    
    
    </>
}

export default Productos