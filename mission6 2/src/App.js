import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';





import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Delivery from './pages/Delivery';
import Myaccount from "./pages/Myaccount";
import SignIn from './pages/signin';

import Products from './components/Products';
import Create from './components/create';
function App() {
  return (
  
    

<div>

  

    <Router>
       
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Shop" exact element={<Shop/>} />
        <Route path="/Blog" exact element={<Blog/>} />
        <Route path="/Delivery" exact element={<Delivery/>} />
        <Route path="/account" exact element={<Myaccount/>} />
        <Route path="/signin" exact element={<SignIn/>} />
        

        <Route path="/notes" exact element={<Products/>} />
        <Route path="/create" exact element={<Create/>} />
      </Routes>   
    </Router>

</div>          




             


  );


  
}


export default App;