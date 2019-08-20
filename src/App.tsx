import React from 'react';
import logo from './oceanlogo.png';
import './App.css';
import {Contact} from './contact'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <body>  
        <Contact title='Contact Us' paragraph='richardli@email.com' />
      </body>
    </div>
  );
}

export default App;
