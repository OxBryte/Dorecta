import React from 'react';
import '../styles/navbar.css';
// import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg'

function Navbar() {
  return (
    <div className="">
        <nav className='nav'>
            <div className='navlink' to='/'>
                <img src={logo} alt='logo' />
            </div>
            <div className='bars'>
                {/* <FaBars /> */}
            </div>
            <div className='navmenu'>
                <div className='navlink' to='/' active>
                    <a href=''>Home</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href=''>Collection</a>
                </div>
                <div className='navlink' to='/contact-us' activeStyle>
                    <a href=''>Launchpad</a>
                </div>
                {/* <div className='navlink' to='/sign-up' activeStyle>
                    <a href=''>Sign Up</a>
                </div> */}
                {/* Second Nav */}
                <div className='navbtn'>
                    <button to='/sign-in'>Connect wallet</button>
                </div>
            </div>
            {/* <div className='navbtn'>
                <button to='/signin'>Connect wallet</button>
            </div> */}
        </nav>
    </div>
  );
}

export default Navbar;
