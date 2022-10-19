import React, { useState } from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';




const Menu = () => (

  <>
    <Link to='/about'>Kapela</Link>
    <Link to='/music'>Hudba</Link>
    <Link to='/video'>Video</Link>
    <Link to='/shows'>Koncerty</Link>
    <a href = '#footer'>Kontakt</a>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='navbar-all' id='navbar'>
      <div className='navbar-container'>
        <div className='navbar-right'>
          <Menu />
        </div>

        <div className='navbar-menu'>
          {toggleMenu
            ? <p onClick={() => setToggleMenu(false)} className='navbar-menu-close'>×</p>
            : <p onClick={() => setToggleMenu(true)} className='navbar-menu-lines'>≡</p>
          }
          {toggleMenu && (
            <div className='navbar-menu_container'>
              <div className='navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar