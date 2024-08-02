import React, { Suspense } from "react";
import { useState,useEffect } from "react";
import './filtro.css'
import axios from 'axios';

const Filtro = ({setfilter,filter}) =>{

const [provinica,setpronvincia] = useState([]);
const [localcontroller,setloc] = useState(false);
const [localidades,setlocalidades] = useState([]);
const [width,setwidth] = useState(innerWidth);
const [locfilter,setlocfilter] = useState('all');
const [provfilter,setprovfilter] = useState('all');
const [price,setprice] = useState(0);



const handlewidth = () =>{
  setwidth(window.innerWidth);
}

useEffect(()=>{

  const peticionprov  = () =>{
    axios.get(' https://apis.datos.gob.ar/georef/api/provincias').then((data)=>{
     
            console.log(data.status);
             console.log(data.data.provincias[0].id);
            setpronvincia(data.data.provincias);
          
           
        })}
  peticionprov();


  window.addEventListener('resize',handlewidth)

   
},[])


    const getlocalidad = (province) =>{
        axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${province}=nombre`).then((data)=>{
            setlocalidades(data.data.localidades);
         console.log(data.data);
        })
      }
  

 const handleprov = (e,provincia) =>{
   e.preventDefault;
    let param = `${provincia}&campos`;
    getlocalidad(param);
    setloc(true);
    console.log(true);
   setprovfilter(provincia);
    setlocfilter('all');
    
 }
 
 const handleloc = (localidad) =>{

  setlocfilter(localidad);

 }

 const handlefilter = () =>{


    setfilter({
      category: 'all',
      minprice: price,
      provincia: provfilter,
      localidad: locfilter,
      nombre: 'all'
    });

  console.log(filter);
  
 }

    return<>
      <div className="filtro-container">
         <div className="filtro">
           <input className="serch" type="text" placeholder="Buscar" />

            <select className="selection">
            <option>Provincia</option>
            {provinica.map(prov =>(
                <option  key={prov.id} onClick={(e)=>handleprov(e,prov.nombre)} >{prov.nombre}</option>
            ))}
           </select>

           {width >= 450 ?   <select className="selection">
            <option>Localidad</option>
            {!localcontroller ? 
             <option>Selecionar provincia</option>
              : localidades.map(local =>(
                <option onClick={()=>handleloc(local.nombre)} key={local.id}>{local.nombre}</option>
              ))}
           </select> : null}
         

          {width >= 650 ?  <div className="selection-price">
            <div className="w-full flex flex-row justify-center items-center gap-3">
            <input className="input-price" type="range" name="price" min={0} max={100000} onChange={(e)=> setprice(e.target.value)}  />
            <span className="w-9">${price}</span>
            </div>
             
           </div> : null}
          
            
            <button className="btn-filtro" onClick={()=>handlefilter()}>Buscar</button>
         </div>

      </div>

    </>
}

export default Filtro;
