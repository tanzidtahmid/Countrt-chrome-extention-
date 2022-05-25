/*global chrome*/
/*global browser*/
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';


function App() {
  // let initialNum = localStorage.getItem(window.location.href) ? localStorage.getItem(window.location.href) : 0;
//   async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome?.tabs?.query(queryOptions);
//     console.log(tab)
//     console.log(tab.url);
//     localStorage.setItem('url',tab.url);
//   }
//  getCurrentTab()
//  .then((data) => { console.log('newdata',data)})
//  .then(() => { console.log('error')});
let [data,setData] = useState({})
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
 
   let [tab] = await chrome.tabs.query(queryOptions);
   localStorage.setItem('tabname' , tab);
    return tab;
   }
 
  getCurrentTab()
  .then((data) => { 
    setData(data)
    console.log('newdata',data)
  })
  .then((err) => { console.log('error',err)});

//  const url = localStorage.getItem('url');
 let keys = Object.keys(localStorage);
  let varifiedLink = keys.find(key => key == data.url);
  let initialNum = localStorage.getItem(varifiedLink) ? localStorage.getItem(varifiedLink) : 0;
  const [count,setCount] = useState(initialNum);

 console.log("varifiedLink",varifiedLink)

  const countPlus = () =>{
    
   
    
    const initialNum2 = localStorage.getItem(varifiedLink)? localStorage.getItem(varifiedLink) : '0' ;
    let intNum = JSON.parse(initialNum2);
    setCount(intNum)

    let jsonNum = JSON.stringify(intNum+1);
    if (varifiedLink) {
      localStorage.setItem(varifiedLink, jsonNum);
    } else {
      localStorage.setItem(data.url, jsonNum);
    }
    
    // setCount(intNum+1)
    initialNum = initialNum +1;
   

  }
  const countMinus = () =>{

    const initialNum2 = localStorage.getItem(varifiedLink)? localStorage.getItem(varifiedLink) : '0' ;
    let intNum = JSON.parse(initialNum2);
    setCount(intNum)

    let jsonNum = JSON.stringify(intNum-1);
    if (varifiedLink) {
      localStorage.setItem(varifiedLink, jsonNum);
    } else {
      localStorage.setItem(data.url, jsonNum);
    }
    setCount(intNum-1)
   
  }

  const reset = () =>{
    initialNum=0
    localStorage.setItem(varifiedLink, '0');

  }
  return (
    <div className='shadow flex flex-col p-4 w-80
     float-right' style={{height:"400vh",width:"500px"}} >

      <h4 className='font-mono text-4xl  text-blue-400 font-bold py-2'>Clicked: {initialNum}</h4>
     <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"  onClick={()=>countPlus()}> <FontAwesomeIcon icon = {faPlus}></FontAwesomeIcon> </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-md rounded" onClick={()=>countMinus()}><FontAwesomeIcon icon = {faMinus}></FontAwesomeIcon></button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>reset()}>Reset</button>

      </div>
      
    </div>
  );
}

export default App;
