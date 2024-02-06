import React from 'react';
import "./App.css";/*Вызов  CSS */
import { Routes, Route, Link } from 'react-router-dom';/*Эта обьязателья команда для вызова. Link для Link to */
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GridRoute from './components/GridRoute';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <GridRoute/>
    </div>
  );
};
//path='/' - Переход на главной страницы
//path='/contact' - переходит на стр contact
//Link to - используется вместо a href(ссылки)
export default App;
