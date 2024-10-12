import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';

const App=()=> {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
