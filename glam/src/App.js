import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
