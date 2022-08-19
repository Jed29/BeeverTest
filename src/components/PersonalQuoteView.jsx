import React,{useState} from "react";

export default function PersonalQuoteView() {
  let [myQuotes,setMyQuotes] = useState("")
  let [data,setData] = useState("")
  const onChangeHandler = event=>{
    event.preventDefault()
    myQuotes = event.target.value
    setMyQuotes(myQuotes)
  }

  const getQuotes = ()=>{
    data = myQuotes
    setData(data)
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
    <form onSubmit={()=>getQuotes()} >
        <input onChange={onChangeHandler} value={myQuotes} name='quotes' type='text' />
        <button
          type={`submit`}
        >
          Submit
        </button>
      </form>
      {data}
    </section>
  );
}
