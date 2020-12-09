import React from 'react';
import Css from './Assets/css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';

import Accueil from './Containers/Accueil';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
