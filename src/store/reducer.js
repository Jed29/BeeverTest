const initialState={
    quotes:[],
    favoriteQuotes:[]
}

export default function reducer(state=initialState, action){
    const {type,payload} = action
    if(type === "SETQUOTES"){
        return {...state, quotes:payload}
    }else if(type === "ADDQUOTES"){
        return {...state, favoriteQuotes:[...state.favoriteQuotes, payload]}
    }else if (type === "FAVOURITEQOUTES"){
        return  state.favoriteQuotes
    }
    return state
}