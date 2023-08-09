import "./headre.css";
import React, { useState, useEffect } from 'react';
export function Head(){
    const [navMenuVisible, setNavMenuVisible] = useState(false);

    const toggleNavMenu = () => {
      setNavMenuVisible(prevVisible => !prevVisible);
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) { // Cambia el valor según tu definición de vista móvil
          setNavMenuVisible(false);
        } else {
          setNavMenuVisible(true);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Llamamos a la función para configurar el estado inicial
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
   return(<>
    
    <header>
          <div className="flex">
            <div className="logo">
              <a href="#">
                <img
                  src="https://onclickwebdesign.com/wp-content/uploads/game_warrior_logo.png"
                  alt="Game Warrior Logo"
                />
              </a>
            </div>
            <nav>
              <button id="nav-toggle" className="hamburger-menu" onClick={toggleNavMenu}>
                <span className="strip" />
                <span className="strip" />
                <span className="strip" />
              </button>
              <ul id="nav-menu-container" style={{
          display: window.innerWidth <= 768 ? (navMenuVisible ? 'block' : 'none') : 'block',
        }}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <a href="#" id="login-register-button">
              Login / Register
            </a>
          </div>
        </header>
    
    <div class="banner-section">
       
        <h1>Bienvenido a tu portal de salud</h1>
        <h4>Servicios de salud</h4>
        <a href="#">Ver más</a>
    </div>


    


   
    </>)
}