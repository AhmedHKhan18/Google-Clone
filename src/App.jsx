import React from "react";
import logo from "./assets/googlelogo.png";
import "./index.css";
import "./App.css";
import { IoMdSearch } from "react-icons/io";
import { useState, useRef } from "react";


function App(){
  const [input,setInput] = useState('');
  const inputFile = useRef(null);
  
  function clicked(){
    if(input === ''){
      alert('Please enter a search term');
    }else{
      window.location.href = `https://www.google.com/search?q=${input}&oq=${input}`;
      inputFile.current.value = "";
    }
  }
  function handleButton(event){
    if(event.key === 'Enter'){
      clicked();
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} className="h-[20vh] md:w-[30vw] w-[80vw]"></img>
      <IoMdSearch onClick={clicked} className="absolute mt-[20vh] md:mr-[37vw] h-[12vh] mr-[70vw]"/>
      <input onChange={e =>{setInput(e.target.value)}} ref={inputFile} onKeyDown={handleButton} placeholder="Search Google or type a URL" className="md:w-[40vw] border-2 h-8 rounded-xl px-12 w-[80vw]"></input>
    </div>

  )
}

export default App;