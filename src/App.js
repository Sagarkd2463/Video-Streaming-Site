import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Player from './Components/Player';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route path='/player/:id' Component={Player}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
