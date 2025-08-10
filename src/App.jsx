

import React, { useEffect, useState } from 'react'

const App = () => {

     const[data,setdata]=useState();

useEffect(()=>{
     (async()=>{
     let response =  await fetch('https://dummyjson.com/carts');

      let result = await response.json();
     setdata(result);

     })()
},[])

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;

