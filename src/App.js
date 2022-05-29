import {  createContext, useState } from 'react';
import './App.css';
import Header from './Components/Heder/Heder'; 
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
export const Context = createContext()

function App() {

  const [category, setCategory] = useState('Mobile');
  
  return (
    <Context.Provider value={[category, setCategory]}>
      <p>count value: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </Context.Provider>
  );
}

export default App;
