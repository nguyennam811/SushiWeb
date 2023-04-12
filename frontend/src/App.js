import React from 'react';
import './App.css';
import Routes from './route';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter basename="/">
        
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
