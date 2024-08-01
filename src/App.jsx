import { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Shipment from './Shipment/Shipment';
export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('Laptop')

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider >
  );
}

export default App;
