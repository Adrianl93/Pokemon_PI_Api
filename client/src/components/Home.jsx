import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getPokemons,getTypes,filterPokeByType,filterPokeByCreated, sortByName,sortByATK } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./Home.css";



export default function Home(){
    const dispatch= useDispatch()
    

    const allPokemons=useSelector((state)=>state.pokemons)
    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch])
    
    const allTypes=useSelector((state)=>state.types)
    useEffect(()=>{
        dispatch(getTypes());
    },[dispatch])
    const[orden,setOrden]=useState('')
    const[currentPage,setCurrentPage]=useState(1)
    const [pokePerPage, setPokePerPage]=useState(40)
    var indexOfLastPoke=currentPage * pokePerPage
    var indexOfFirstPoke=indexOfLastPoke - pokePerPage
    var currentPoke= allPokemons.slice(indexOfFirstPoke,indexOfLastPoke)
    var countPages2=Math.ceil(allPokemons.length/pokePerPage)
    
    
    const paginado=(pageNumber)=>{
        if(pageNumber>0 && pageNumber<=countPages2)
        setCurrentPage(pageNumber)
    }


    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());

    }
    function handleSelectPaginado(e){
        console.log("VALUE:",e.target.value)
       setPokePerPage(e.target.value)
       paginado(1)
       indexOfLastPoke=currentPage * pokePerPage
       indexOfFirstPoke=indexOfLastPoke - pokePerPage
       currentPoke= allPokemons.slice(indexOfFirstPoke,indexOfLastPoke)
       countPages2=Math.ceil(allPokemons.length/pokePerPage)
    }

    function handleFilterType(e){
        dispatch(filterPokeByType(e.target.value));
        setCurrentPage(1);

    }

    function handlefilterPokeByCreated(e){
        dispatch(filterPokeByCreated(e.target.value))
        setCurrentPage(1);
    }

    function handleSortByName (e){
        e.preventDefault();
        dispatch(sortByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
        console.log(orden)
    }
    function handleSortByATK (e){
        e.preventDefault();
        dispatch(sortByATK(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
        console.log(orden)
    }

    

    return(
<div className="homeBox">
    
    
    <h1 className="titleHome">Pokémon Individual Proyect</h1>
    <div className="buttonDiv">
    <button onClick={e=>{handleClick(e)}}>Reload Pokémon</button>
    <button><Link to='/pokemon' className="buttonDiv">Create Pokémon</Link></button>
    </div>
    <div className="filters">
           <select onChange={e=> handleSortByName(e)}>
           <option value="" hidden>ABC</option>
            <option value='asc'>Increasing</option>
            <option value='desc'>Decreasing</option>

           </select>

           <select onChange={e=> handleSortByATK(e)}>
           <option value="" hidden>ATK</option>
           <option value='asc'>Increasing</option>
            <option value='desc'>Decreasing</option>
           </select>

           <select onChange={e=> handlefilterPokeByCreated(e)}>
           <option value="" hidden>Created</option>
            <option value='all'>All</option>
            <option  value='created'>DB</option>
            <option value='api'>Api</option>
           </select>

           <select className="selectType" onChange={e=> handleFilterType(e)}>
           <option value="" hidden>Type</option>
            <option value='all' >All</option>
            {
                allTypes?.map(el=>(
                    <option key={el.id} value={el.name}>{el.name}</option>
                ))

            }
           </select>
           <SearchBar
           paginado={paginado}/>
           <select className="selectType" onChange={e=> handleSelectPaginado(e)}>
           <option value="" hidden>Pokes per page</option>
            <option value='12' >12</option>
            <option value='20' >20</option>
            <option value='40' >40</option>
            <option value='60' >60</option>
            <option value='100'>100</option>
           </select>
           <div className="paginadoBar">
    <Paginado
           pokePerPage={pokePerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
            currentPage={currentPage}/>
            
    </div>
           
           <div>

         <div className="cards">
         {
    currentPoke?.map(el=>{
        return(
            <div className="Cards" key={el.id}>
            
            <Card name={el.name} type={el.type} img={el.img} Types={el.Types} key={el.id} id={el.id}/>
            
            </div>
        );
       
    })}
         </div>
           
    
           </div>

           

        


    </div>
    
    
</div>

    )
}


// Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
// [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.