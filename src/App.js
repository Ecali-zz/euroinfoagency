import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Informativa from './pages/informativa'
import Informazioni from './pages/info'
import Investigazioni from './pages/investigazioni'
import Visure from './pages/visure'
import Home from './pages/Home'
import Foot from './components/footer'

import Construction from './pages/construction'

import TopNav from './components/navbar'

function App() {
  return (
    <Router>
      <div className="AppTop">
          <TopNav></TopNav>
          <Route path='/construction' exact component={Construction} />
          <Route path='/' exact component={Home} />
          <Route path='/informativa' component={Informativa} />
          <Route path='/informazioni' component={Informazioni} />
          <Route path='/investigazioni' component={Investigazioni} />
          <Route path='/visure' component={Visure} />
          <Foot></Foot>
      </div>
    </Router>
    
  );
}

export default App;
