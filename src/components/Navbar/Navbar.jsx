import React from "react";
import { useState,useEffect } from "react";
import './navbar.css';
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

const Navbar = () =>{

    const [width,setwidth] = useState(window.innerWidth);
    const [activemodal,setactivemodal] = useState(false);
    const handlewidth = () =>{
        setwidth(window.innerWidth);
       
    }
    const handlenavbar = () =>{
        let nav = document.getElementById('navbar-container');
        nav.style.background = "rgba(0, 0, 0, 0.468)";
    }



    useEffect(()=>{
    handlewidth();
   window.addEventListener('resize',handlewidth);
   console.log(innerWidth);
   window.addEventListener('scroll',handlenavbar);
 
    },[])



    const handlemodal = () =>{
        if(activemodal){
            setactivemodal(false);
            
        }
        else{
            setactivemodal(true);  
        }
    }

  

    return(
        <>
        <div id="navbar-container" className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-list">

                    <li className="listed-item">

                    {width <= 550 ? <div className="container-hamburguer" >
                         <input className="modal-input"  type="checkbox" id="toggle" onClick={()=>handlemodal()}/>
                         <label className="menu" htmlFor="toggle"></label>

                         <Modal activemodal={activemodal}/>
                        </div> : null }
                        
                        </li>


                    <li className="listed-item"><img src="https://i.postimg.cc/yYgdQYST/TICKPASS.png" alt="" className="img-logo" /></li>
                    <ul className="events-list">
                     {width >= 551 ? <div className="flex flex-row gap-2">
                        <NavLink to={'/log-in'}><li><div id="container" className="items-container">
                            <span>I</span>
                            <span>n</span>
                            <span>i</span>
                            <span>c</span>
                            <span>i</span>
                            <span>a</span>
                            <span>r</span>
                            <small className="opacity-0">a</small>
                            <span>s</span>
                            <span>e</span>
                            <span>s</span>
                            <span>i</span>
                            <span>o</span>
                            <span>n</span>
                            </div>
                        </li></NavLink>
                      <NavLink to={'/registro'}>
                        <li>
                            <div id="container" className="items-container">
                                <span>R</span>
                                <span>e</span>
                                <span>g</span>
                                <span>i</span>
                                <span>s</span>
                                <span>t</span>
                                <span>r</span>
                                <span>a</span>
                                <span>r</span>
                                <span>s</span>
                                <span>e</span>
                            </div>
                            </li>

                            </NavLink>
                     </div> : null}
                       

                        <li> <button className="btn-crear mr-3">Crear</button></li>

                    </ul>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar