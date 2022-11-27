import React from "react";
import "./Paginado.css"


export default function Paginado({pokePerPage,allPokemons,paginado,currentPage}){
    const pageNumbers=[]
    const countPages=Math.ceil(allPokemons/pokePerPage)
   
   
    for(let i=1;i<=countPages;i++){
        pageNumbers.push(i)
    }
    
    
    return(
        <div>
            <ul className="boxPag">
                <li className="numbers" ><button onClick={()=>paginado(currentPage-1)}>Prev</button></li>
                {pageNumbers?.map(number =>(
                    <li className="numbers" key={number} >
                        <button onClick={()=>paginado(number)} className="button">{number}</button>
                    </li>
                    
                ))}
                <li className="numbers"><button onClick={()=>paginado(currentPage+1)}>Next</button></li>
            </ul>
        </div>
    )
}