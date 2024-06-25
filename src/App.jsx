import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Area from './components/Area/Area';
import Featured from './components/Featured/Featured';
import Explore from './components/Explore/Explore';
import Whychoose from './components/Whychoose/Whychoose';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Area/>
      <Featured/>
      <Explore/>
      <Whychoose/>
      <Footer/>
    </div>
  );
}

export default App;
