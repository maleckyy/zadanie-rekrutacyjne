import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import SearchPage from './components/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="App">
    <BrowserRouter>

      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  </div>
  </React.StrictMode>
);


reportWebVitals();