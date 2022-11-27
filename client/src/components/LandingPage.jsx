import React from "react";
import {Link} from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage(){
    return(
        <div className="boxLanding">
            <div>
            <h1 className="titleLanding">Pokémon Individual Proyect</h1>
            </div>
            
            <div>
            <Link to='/home'>
                <button className="buttonLanding">Enter</button>
            </Link>
            </div>
            
        </div>
    )
}

