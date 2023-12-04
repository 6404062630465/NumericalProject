import React, { Component, useEffect, useState } from 'react';
/* import './App.css'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AppRouter from './AppRouter';

export default function App(){

  // const API_URL = 'http://localhost:3500/items'
    const [L, setL] = useState([])
	  const [R, setR] = useState([])
    const [root1, setroot] = useState([])

    useEffect(() => {
      const loaddata = async () => {
        const response = await axios.get("")
      }
    })
  
  return (
      <div className='App'>

        <AppRouter />

      </div>
    );
  
}

// export default App;
