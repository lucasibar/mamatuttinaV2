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
          path="/mamatuttinav2/listacompras"
          element={<ShopList />}
        /> 
      <Route 
          exact 
          path="/mamatuttinav2"
          element={<Home />}
        /> 
      </Routes>
    </div>
  )
}

export default App;