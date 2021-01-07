import React, { useState, useEffect } from "react";
import "./Layout.scss";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const [clearMenu, setClearmenu] = useState(true);
  
  useEffect(() => {
    if (!menu) {
      setTimeout(() => {
        setClearmenu(true)
      }, 700);

      document.querySelector('body').style.overflow = 'auto'
      
    } else {
      document.querySelector('body').style.overflow = 'hidden'
    }
  }, [menu])

  return (
    <div id='layout'>
      <header>
        <Link to='/' className='logo-container'>
          <img src='/assets/img/electrologo.jpg' alt='electro mechanics vt' />
          <span className='logoText'>
          ELECTRO-MECHANICS <span className='red-text'>VERTICAL</span> TRANSPORT Ltd.
          </span>
        </Link>

        <div className='icons-container'>
          <a href='mailto:contact@electromechanicsvt.com'>
            <span className='material-icons'>mail_outline</span>
          </a>

          <Link to='#' onClick={() => [setMenu(!menu), setClearmenu(false)]}>
            {!menu ? (
              <span className='material-icons'>menu</span>
            ) : (
              <span className='material-icons red-text'>close</span>
            )}
          </Link>
        </div>
      </header>

      {children}

      <footer>
        <p>© Electromechanicsvt 2020 - All Rights Reserved</p>

        <div className='icons-container'>
          <Link to='#'>
            <i className='fab fa-facebook'></i>
          </Link>

          <Link to='#'>
            <i className='fab fa-instagram'></i>
          </Link>

          <Link to='#'>
            <i className='fab fa-twitter'></i>
          </Link>
        </div>
      </footer>

      {/* {menu && ( */}
        <aside className={menu ? 'show-menu' : 'hide-menu'} id={clearMenu ? 'clearSidebar' : ''}>
          <div className='background' onClick={() => setMenu(false)}></div>

          <ul>
            <li onClick={() => setMenu(!menu)}>
              <Link to='/about'> About Us </Link>
            </li>

            <li onClick={() => setMenu(!menu)}>
              <Link to='/products-and-services'> Products and services </Link>
            </li>

            <li onClick={() => setMenu(!menu)}>
              <Link to='/contact'> Contact Us </Link>
            </li>

            <li onClick={() => setMenu(!menu)}>
              <Link to='/'>Blog </Link>
            </li>
          </ul>
        </aside>
      {/* )} */}
    </div>
  );
}

export default Layout;
