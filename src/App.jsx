import React, { useRef } from "react";

const App = () => {

 let APIData = useRef(null);
 let myInnerText = useRef();

  const call_API = async() => {
   
      const Response = await fetch("https://dummyjson.com/products")
       APIData.current= await Response.json();
  };

  const show_API =()=>{
      myInnerText.current.innerText = JSON.stringify(APIData);
  }

  const remove_API =()=>{
       myInnerText.current.innerText=""
  }

  return (
    <div>
    
       <p ref={myInnerText}></p>
      <button onClick={call_API}>Get Data</button>
      <button onClick={show_API}>Show Data</button>
         <button onClick={remove_API}>Remove </button>
    </div>
  );
};

export default App;
