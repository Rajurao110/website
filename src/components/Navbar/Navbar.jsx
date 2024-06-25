import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../../assets/raipurhome.webp'
import login from '../../assets/login.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <div>
      <div className={`navbar ${sticky? 'dark-nav':''}`}>
        <div className="nav-con">
            <div className='logo'><img src={logo} alt='' />Raipur Homes</div>
            <div className="menu-con">
                <ul>
                <li>Home</li>
                <li>Property Sub-Type</li>
                <li>Explore</li>
                <li>Blog</li>
                </ul>
                <div className='login'><img src={login} alt=''/>Login</div>
                <button>Post Property</button>
            </div>
        </div>
      </div><br />
      
    </div>
  );
}

export default Navbar;
