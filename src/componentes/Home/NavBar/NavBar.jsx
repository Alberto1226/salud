import { Link } from "react-router-dom";
import img from "../../../assets/img/logo.webp";
import React, { useState, useEffect } from "react";
export function NavBar() {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Cambia el valor según tu definición de vista móvil
        setNavMenuVisible(false);
      } else {
        setNavMenuVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamamos a la función para configurar el estado inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header>
        <div className="flex">
          <div className="logo">
            <a href="#">
              <img src={img} alt="Game Warrior Logo" className="logo-salud" />
            </a>
          </div>
          <nav>
            <button
              id="nav-toggle"
              className="hamburger-menu"
              onClick={toggleNavMenu}
            >
              <span className="strip" />
              <span className="strip" />
              <span className="strip" />
            </button>
            <ul
              id="nav-menu-container"
              style={{
                display:
                  window.innerWidth <= 768
                    ? navMenuVisible
                      ? "block"
                      : "none"
                    : "block",
              }}
            >
              <li>
                <Link to={`/`}>
                <a href="#">Home</a>
                </Link>
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
    </>
  );
}
