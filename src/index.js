import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'


ReactDOM.render(
  <Router>
   <Routes>
     <Route path='/' element={<App/>}/> 
     <Route path='/Dashboard' element={<Dashboard/>}/>
     {/* <Route path='/' */}
   </Routes>
  </Router>,

 document.getElementById('root')
);
