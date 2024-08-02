import React from "react";

import { useState,useEffect } from "react";
import './sponsors.css'
const Sponsors = () =>{



    return(<>
       <div className="sponsor-container">
         <ul className="sponsor-list">
            <li>
                <div className="sponsors">
                   <img src="https://i.postimg.cc/zXzHjH4J/Screenshot-2024-08-01-153111.png" alt="" className="img-sponsor" />
                </div>
                </li>

                <li>
                <div className="sponsors">
                <img src="https://i.postimg.cc/63Yq1t78/record.png" alt="" className="img-sponsor" />
                </div>
                </li>

                <li>
                <div className="sponsors">
                <img src="https://i.postimg.cc/FKWPxJ98/club.png" alt="" className="img-sponsor" />
                </div>
                </li>

         </ul>
       </div>
    </>)
}

export default Sponsors;