import React from 'react';
import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import ShopList from './components/ShopList/ShopList'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route 
       exact  
          path="/listacompras"
          element={<ShopList />}
        /> 
      <Route 
          exact 
          path="/"
          element={<Home />}
        /> 
      </Routes>
    </div>
  )
}

export default App;