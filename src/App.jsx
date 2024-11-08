import { useState,useEffect } from "react"
import Boot from "./boot"
import Button from "./button"
import "./App.css"

const App = () => {
  const colo="#" + Math.floor(Math.random()*16777215).toString(16)

  /* or youncan use this
  const colo ="#00000"*/

  const[color,setColor]=useState(colo)
  
   const generate = () => 
    {
    let coloron = "#"+ Math.floor(Math.random()*16777215).toString(16);
    setColor(coloron)
   }
   useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  
  return (
    <div>
       <h1>{color}</h1>
      <button onClick={generate} style={{background:"gray",padding:'20px',cursor:"pointer",border:"2px solid blue"}}>color</button>
      
      <Boot/><br></br>
      <Button/>
    </div>
  )
}

export default App
