import React from "react";
import "./Card.css";
import { pokeDelete } from "../actions";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";


export default function Card({name, img, type,id}){
    const dispatch= useDispatch()
    

   function handleDeleteClick(e){
        dispatch(pokeDelete(e.target.value));
        alert("Pokémon deleted")
    };

 
    return(
        <div className="card">
               
                <Link to={"/detail/"+ id} key={id} className="linkDiv">
                <h3 className="titleCard">{name}</h3>
                </Link>
                
                
                <div className="imgDivCard">
                <Link to={"/detail/"+ id} key={id} className="linkDiv">
                <img src={img} alt="img not found" className="imgPoke"/>
                </Link>
                </div>
                <div className="typesDivCard">
                <h3 className="subtitleCard">Type:</h3>
                <div className="typesConteiner" >
                {
                    type.map(el=>(
                        <div key={el.type}>
                            <h4 className="types" key={el}>{el}</h4>
                        </div>
                    ))
                }
                
               
            
                </div>
                
                </div>
                {
                  id.length > 5 && 
                        <button className="deleteButton" value={id} onClick={e=>{handleDeleteClick(e)}}>Delete Pokémon</button>
                }
                
                
                
        
        </div>
        
    );
}