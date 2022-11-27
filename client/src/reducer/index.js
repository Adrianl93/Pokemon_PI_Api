
const initialState={
    pokemons:[],
    allPokemons:[],
    types:[],
    detail:[]
}



function rootReducer(state=initialState,action){
switch(action.type){
    case 'GET_POKEMONS':
        return{
            ...state,
            allPokemons:action.payload,
            pokemons:action.payload
        }

    case 'GET_TYPES':
        return{
            ...state,
            types:action.payload
        }

    case 'FILTER_BY_TYPE':
        const allPoke=state.allPokemons
        const typeFiltered=action.payload==='all'? allPoke :
        allPoke.filter((el)=>el.type.includes(action.payload))
        
        return{
         ...state,
         pokemons:typeFiltered
         }

    case 'FILTER_BY_CREATED':
        const allPoke2=state.allPokemons
        const createdFilter=action.payload==='created'? allPoke2.filter(el=>el.created): allPoke2.filter(el=>!el.created)
        return{
            ...state,
            pokemons: action.payload==='all'? state.allPokemons : createdFilter
        }

    case 'SORT_BY_NAME':
        let sortName=action.payload==='asc'?
        state.pokemons.sort(function (a,b){
            if(a.name>b.name){
                return 1;
            }
            if(b.name>a.name){
                return -1;
            }
            return 0;
        }) :
        state.pokemons.sort(function(a,b){
            if(a.name>b.name){
                return -1;
            }
            if(b.name>a.name){
                return 1;
            }
            return 0;
        })
        return{
            ...state,
            pokemons:sortName
        }
        
    case 'SORT_BY_ATK':
    let sortATK=action.payload==='asc'?
        state.pokemons.sort(function (a,b){
            if(a.attack>b.attack){
                return 1;
            }
            if(b.attack>a.attack){
                return -1;
            }
            return 0;
        }) :
        state.pokemons.sort(function(a,b){
            if(a.attack>b.attack){
                return -1;
            }
            if(b.attack>a.attack){
                return 1;
            }
            return 0;
        })
        return{
            ...state,
            pokemons:sortATK
        }
    case 'GET_BY_NAME':
        return{
            ...state,
            pokemons:action.payload
        }
    case 'POST_POKE':
        return{
            ...state,
        }
    case 'GET_DETAILS':
        return{
            ...state,
            detail:action.payload
        }
    case 'CLEAN_DETAIL':
        return{
            ...state,
            detail:[]
        }
    case 'DELETE_POKE_DB':
        const allPoke3=state.pokemons
        const filterDelete=allPoke3.filter(el=>el.id!==action.payload)
        return{
            ...state,
            pokemons:filterDelete

        }
        

    default:
        return state;
}
}

export default rootReducer;