import React, {useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import{getTypes,createPoke} from '../actions/index'
import { useDispatch,useSelector } from "react-redux";
import "./PokeCreate.css"
// const imgVal = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/;
const imgVal = /(https?:\/\/)?([\w])+\.{1}([a-zA-Z]{2,63})([\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/;


  

function validate(input){
    let errors={};
   
    if(!input.img || !imgVal.test(input.img) ){
        errors.img='Insert a valid link'
        console.log("length",input.types.length)
    }
    if(!input.name){
        errors.name='A valid Name is required';
    }else if( input.hp<=0 || input.hp>250){
        errors.hp='Choose a number between 1 and 250'
    }else if( input.attack <=0 || input.attack >250){
        errors.attack ='Choose a number between 1 and 250'
    }else if(input.defense<=0 || input.defense>250){
        errors.defense='Choose a number between 1 and 250'
    }else if(input.speed<=0 || input.speed>250){
        errors.speed='Choose a number between 1 and 250'
    }else if(input.height<=0 || input.height>250){
        errors.height='Choose a number between 1 and 250'
    }else if(input.weight<=0 || input.weight>250){
        errors.weight='Choose a number between 1 and 250'
    // }else if(input.types.length<1 || input.types.length>2){
    //     errors.types="Select one or two types"
    }
    return errors;
}

export default function PokeCreate(){
    const dispatch=useDispatch()
    const types=useSelector((state)=> state.types)
    const history=useHistory()
    const [count, setCount] = useState(0)
    console.log("COUNT",count)
    const [errors,setErrors]=useState({});
    const [input,setInput]=useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        types:[]
       

    })
function handleChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    console.log("ERRORS",errors)
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }))
    console.log("input",input)
    
}



function handleCheck(e){
    if(e.target.checked){
        
        setInput({
            ...input,
            types:[...input.types,e.target.value],
        })
        setCount(e=>e+1)
        
        console.log("COUNT:",count)
        console.log("INPUTCHECK",input)
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
        console.log(errors)
     
    }else if(!e.target.checked){
        setInput({
            ...input,
            types:input.types.filter(t=>t!==e.target.value)
        })
        setCount(e=>e-1)
       
       
        console.log("INPUTCHECK",input)
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))

       
    }
}


function handleSubmit(e){
    e.preventDefault();
    setErrors(validate({
        ...input
    }))
    let errorsLength=Object.keys(errors).length;
    console.log("errorsLength",errorsLength)
    if(errorsLength>0){
        console.log("ErrorsSubmit",errors)
        alert("One or more fields have errors, please check them")
    }else{
        console.log("ErrorsSubmit",errors)
        dispatch(createPoke(input))
    alert("The pokémon has been created")
    setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        types:[]
        
    })
    history.push('/home')
    }
 
    
}




    useEffect(()=>{
        dispatch(getTypes());  
    },[dispatch]);

    return(
        <div className="createBox">
            <Link to='/home'><button>Back to Home</button></Link>
            <h1 className="titleCreate">Create your own Pokémon</h1>
            
            <form>
                <div className="containerDiv">
                <div>
            
            <div className="formDiv">
                <div>
                    
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    placeholder="Insert Name"
                    onChange={handleChange}/>
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    
                    <input
                    type="number"
                    value={input.hp}
                    placeholder="Insert Hp"
                    name="hp"
                    onChange={handleChange}/>

                    {errors.hp && (
                        <p className='error'>{errors.hp}</p>
                    )}
                </div>
                <div>
                    
                    <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    placeholder="Insert Attack"
                    onChange={handleChange}/>
                    {errors.attack && (
                        <p className='error'>{errors.attack}</p>
                    )}
                    
                </div>
                <div>
                   
                    <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    placeholder="Insert Defense"
                    onChange={handleChange}/>
                    {errors.defense && (
                        <p className='error'>{errors.defense}</p>
                    )}
                    
                </div>
                <div>
                
                    <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    placeholder="Insert Speed"
                    onChange={handleChange}/>
                    {errors.speed && (
                        <p className='error'>{errors.speed}</p>
                    )}
                    
                </div>
                <div>
                   
                    <input
                    type="number"
                    value={input.height}
                    name="height"
                    placeholder="Insert Height"
                    onChange={handleChange}/>
                    {errors.height && (
                        <p className='error'>{errors.height}</p>
                    )}
                    
                </div>
                <div>
                    
                    <input
                    type="number"
                    placeholder="Insert Weight"
                    value={input.weight}
                    name="weight"
                    onChange={handleChange}/>
                    {errors.weight && (
                        <p className='error'>{errors.weight}</p>
                    )}
                    
                </div>
                <div>
                   
                    
                    <input
                    type="text"
                    placeholder="Insert a link to a Image"
                    value={input.img}
                    name="img"
                    onChange={handleChange}
                    />
                    </div>
                    
                   {errors.img ? (
                    <div>
                        <p className='error'>{errors.img}</p>
                        <img src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-4.png" alt="img not found" width={"100px"} height={"100px"}/>
                        </div>
                        
                    ):(
                    <div>
                        <br/>
                        <br/>
                        <ul className="ulCreate">The chosen image is:<li><img src={input.img} alt="img not found" width={"100px"} height={"100px"}/></li></ul>
                    
                    </div>
                    )
                    
                    }
                    </div>
                </div>
                </div>

                
                <div className="allType">
                    <label>Select Type:</label>
                    {errors.types && (
                        <p className='error'>{errors.types}</p>
                    )}
                    <br/>
                    <div className="typeSelect">
                    {types.map((el)=>(
                        <label key={el.id}><br></br><input
                        type="checkbox"
                        name={el.name}
                        value={el.name}
                        onClick={(e)=>handleCheck(e)}
                        key={el.id}/><br></br>
                        {el.name}


                        </label>
                    ))}
                    
                </div>
                </div>
                <div>
                <div className="submitDiv">
                    <button
                    className="submitButton"
                    type="submit"
                    onClick={(e)=>handleSubmit(e)}>
                        Create New Pokémon
                    </button>
                </div>
                <ul className="ulCreateTypes">The Pokémon Type is: 
                {input.types.map(el=><li className="liCreate">{el}</li>)}  

                </ul>
                </div>
            </form>
        </div>
    )
}