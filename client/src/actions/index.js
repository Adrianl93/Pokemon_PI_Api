import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/types');
        return dispatch({
            type:'GET_TYPES',
            payload:json.data
        })
    }
}
export function createPoke(payload){
    return async function(dispatch){
        console.log("payload", payload)
        const response = await axios.post('http://localhost:3001/pokemons',payload);
        console.log("response:", response)
        return response;
    }
}


export function filterPokeByType(payload){
    return {
        type:'FILTER_BY_TYPE',
        payload
    }
}

export function filterPokeByCreated(payload){
    return{
        type:'FILTER_BY_CREATED',
        payload
    }
}

export function sortByName(payload){
    return{
        type:'SORT_BY_NAME',
        payload
    }
}
export function sortByATK(payload){
    return{
        type:'SORT_BY_ATK',
        payload
    }
}

export function getPokeByName(name){
    return async function(dispatch){
        
        console.log("Searching pokémon", name)
        try{
    var obj= await axios.get("http://localhost:3001/pokemons?name="+ name); 
    return dispatch({
        type: 'GET_BY_NAME',
        payload:obj.data
    })
        }catch(e){
            alert(name+" was not found, try another name")
        }
    }
}

export function pokeDetail(id){
    return async function (dispatch){
        try{
            var obj= await axios.get('http://localhost:3001/pokemons/'+ id);
            return dispatch({
                type:'GET_DETAILS',
                payload:obj.data}
                )
                
        }catch(e){
            console.log(e)
        }
    }
}


export function cleanDetail(payload){
    return {
        type:'CLEAN_DETAIL',
        payload
       
    }
}

export function pokeDelete(id){
    return async function(dispatch){
        try{
            await axios.delete('http://localhost:3001/pokemons/'+ id);
            return dispatch({
                type:'DELETE_POKE_DB',
                payload:id})
                
        }catch(e){
            console.log(e)
        }
    }
   
}
    
