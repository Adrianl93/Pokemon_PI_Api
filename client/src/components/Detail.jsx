import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokeDetail,cleanDetail } from "../actions/index";
import { useEffect } from "react";
import "./Detail.css";


export default function Detail(props){
    
    const dispatch=useDispatch()
console.log("PROPS:",props)
console.log("IDPARAMS:",props.match.params.id);
const pokeId=props.match.params.id
console.log("pokeID",pokeId)
    

    useEffect(() => {
        dispatch(pokeDetail(pokeId))
        return () => {
           console.log("Detail Clean up")
           dispatch(cleanDetail())
        }
    }, [dispatch,pokeId])



    const myPoke = useSelector((state)=>state.detail)


    return(

        <div className="detailBigBox">
           

<Link to='/home' className="linkToHome">
                <button className="button">Back to Home</button>
            </Link>
            {
    <h1 className="title">{myPoke.name}</h1>
            }
            {
             <div className="container">
            <div className="detailBox">
                <div className="primary">
                
                <h3>ID:{myPoke.id}</h3>
                <img src={myPoke.img} className="imgDetail" alt="Pokemon not found"/>
    
                </div>
                <div className="statsTitle">
                <h2>Stats</h2>
                
               
                <div className="stats">
                <h5>Hp:{myPoke.hp}</h5>
                <h5>Attack:{myPoke.attack}</h5>
                <h5>Defense:{myPoke.defense}</h5>
                <h5>Speed:{myPoke.speed}</h5>
                <h5>Height:{myPoke.height}</h5>
                <h5>Weight:{myPoke.weight}</h5>
                <div className="typesDiv">
                 <h3>Type:</h3>
                 {console.log("MYPOKETYPE",myPoke.type)}
                 <h4>{myPoke.type + ' '}</h4>
                </div>
                </div>
                </div>
              
            </div>
            </div>
            
           
            
            }
            
<div ></div>
        </div>
        
    )
}