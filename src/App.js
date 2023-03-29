import React, { useState } from 'react'
import data from './data.js'
import Tours from './Components/Tours.js';
import './App.css'

function App(){
  
  const[tours,setTours]=useState(data);
  function removeTour(id) {
    const newTours=tours.filter(tour => tour.id !==id)
    setTours(newTours);    
  }
  function refreshHandeler() {
    setTours(data);
  }
  if(tours.length===0){
    return(
    <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={refreshHandeler}>Refresh</button>
    </div>
    )
  }
  return(
    <div className='App'>
        <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}
export default App;