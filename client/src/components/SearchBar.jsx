import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getPokeByName } from "../actions";



export default function SearchBar({paginado}){
    const dispatch=useDispatch()
    const [name,setName]=useState('')

function handleInputChange(e){
    
    e.preventDefault()
    setName(e.target.value)
    }

function handleSubmit(e){
  
    e.preventDefault()
    dispatch(getPokeByName(name))
    setName('');
    paginado(1);
    e.target.value=''
    
    
        
}

    return(
        <div>
            <input 
            placeholder="Search Pokémon ex:pikachu"
            type='text'
            onChange={(e)=>handleInputChange(e)}/>
            <button type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )
}