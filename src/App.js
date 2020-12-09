import React from 'react';
import './Assets/css/style.css';

import Header from './Components/Header';
import Navbar from './Components/Navbar';

import Accueil from './Containers/Accueil';

function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Accueil />
      </div>
  );
}

export default App;
