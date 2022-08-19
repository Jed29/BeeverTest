import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { addFavourite, fetchQuote } from "../store/action";
export default function KanyeQuoteView() {
  const dispatch = useDispatch()
  const quotes = useSelector(state=>state.quotes)
  const favouriteQuotes = useSelector(state=>state.favoriteQuotes)
  useEffect(()=>{
    dispatch(fetchQuote())
  },[dispatch])

  const getQuotes = ()=>{
    dispatch(fetchQuote())
  }

  const addFavourites = ()=>{
    dispatch(addFavourite(quotes.quote))
    // const fav = favouriteQuotes.find(quotes.quote)
    // if(fav){
    //   alert("Quotes Already declared")
    // }
  }
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

      <button onClick={()=>getQuotes()}  >Get Quote</button>
      <button onClick={()=>addFavourites()} >Add Favorite</button>
      {
        // quotes.map(quote=>{
        //   return(
        //   <>
        //     {JSON.stringify(quote)}
        //     <p>{quote.quote}</p>
        //   </>)
        // })
      }
      <p>{quotes.quote}</p>
      <h2>Favorite</h2>
      <p>{favouriteQuotes}</p>
    </section>
  );
}
