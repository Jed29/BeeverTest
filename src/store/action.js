// import { quoteAPI } from "../provider/api"
import axios from 'axios'

export function setQuotes(payload){
    return{
        type:"SETQUOTES",payload
    }
}

export function addFavourite(payload){
    return {
        type:"ADDQUOTES",payload
    }
}

export function fetchQuote(payload){
    return (dispatch)=>{
        fetch('https://api.kanye.rest')
        .then(response=>response.json())
        .then(quotes=>{
            dispatch(setQuotes(quotes))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}