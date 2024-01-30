import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import Rowposter from './Components/Rowposter/Rowposter';
import { action, originals } from './urls';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <br />
      <Rowposter url={action} title='Netflix Originals' />
      <br />
      <Rowposter url={originals} title='Action'  />
    </div>
  )
}

export default App
