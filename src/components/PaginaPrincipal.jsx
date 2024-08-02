import React from "react";
import { useState,useEffect } from "react";

import Productos from './Productos'
import Navbar from './Navbar/Navbar'
import '../App.css'
import PaginacionBtn from "./paginaprincipal/PaginacionBtn";
import Filtro from "./paginaprincipal/Filtro";
import {productos} from '../db.json'
import Footer from "./footer/Footer";
import Sponsors from "./sponsors/Sponsors";


const PaginaPrincipal = () =>{
 const [datos,setdatos] = useState(productos);
 
  const itemperpage = 16;
  const [items,setitems] = useState([...datos].splice(0,itemperpage));
  const [page,setpage] = useState(1);

  const nextpage = () =>{
    const firstindex = page * itemperpage;
    const totalitems = datos.length
    if(firstindex === totalitems){
      return;
    }
    if(firstindex <= totalitems){
      setitems([...datos].splice(firstindex,itemperpage));
      setpage(page + 1);
    }
  
  }

  const previospage = () =>{
    const previospage = page - 1;
    const firstindex = page * itemperpage;
    const totalitems = datos.length
    if(firstindex === totalitems){
      return;
    }
    if(page == 1){
      return;
    }
    if(page > 1){
      setitems([...datos].splice(previospage,itemperpage));
      setpage(page - 1);
    }
    
    
  }





    const [filter,setfilter] =useState({
        category: 'all',
        minprice: 0,
        provincia: 'all',
        localidad: 'all',
        nombre: 'all'
      });
    
    const handlefilter = (products) =>{
      return products.filter(product=>{
       return(
        product.precio >= filter.minprice   &&   
        (
          filter.category == 'all' && filter.provincia == 'all' && filter.localidad == 'all' && filter.nombre =='all'  ||
          product.category == filter.category ||
          product.provincia == filter.provincia && filter.localidad =='all'  ||
          product.provincia == filter.provincia && product.localidad == filter.localidad  ||
            product.nombre == filter.nombre 
           
         
        ) 
        
       )
      });
    }
    

    const filterproducts = handlefilter(items);

  
  useEffect(()=>{
    console.log(filterproducts);
  },[filter])




    return<>

    <Navbar/>
    <Filtro filter={filter} setfilter={setfilter} />
    <Productos products={filterproducts} />
     <PaginacionBtn page={page} setpage={setpage} nextpage={nextpage} previospage={previospage} />
     <Sponsors/>
     <Footer/>
    </>


}

export default PaginaPrincipal;