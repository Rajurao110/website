import React from 'react';
import './Home.css'
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import nearme from '../../assets/nearme.png'
import mic from '../../assets/mic.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='slider'>
        <img src={banner1} alt=''/>
        <img src={banner2} alt=''/>
      </div>
      <div className='search-box'>
        <div className='option'>
        <p>Buy</p>
          <p>Rent</p>
          <p>Sell</p>
          <p>Indivisual Space</p>
          <p>Commercial</p>
          <p>Plots/land</p>
          <p>Projects</p>
        </div>
        <div className='search-input'>
          <div className='search-place'>All Residential</div>
          <div className='input'><input type='search' placeholder='Search "3BHK Flat in Raipur"'/></div>
          <div className='search-btns'><img src={nearme} alt=''/><img src={mic} alt=''/><button>Search</button></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
