import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//COMPONENTES
import Categorias from "../Categorias/CRUD/insert";
import Patrocinadores from "../Patrocinadores/CRUD/patrocinadores";

export function MenuDash() {
  const [activeMenu, setActiveMenu] = useState("home");
  /**ver componentes */
  const [showComponent, setShowComponent] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
    setShowComponent1(false);
  };
  const handleClick1 = () => {
    setShowComponent(false);
    setShowComponent1(true);
  };
  /**fin ver componentes */
  //menu

  const handleMenuSelect = (menu) => {
    setActiveMenu(menu);
    
  };
  /**fin menu */
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Salud Chanel</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                User Name
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    
                  </p>
                </a>
               
              </li>
             
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>
                    Usuarios
                   
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <Link  onClick={handleClick}>
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Categorias
                  </p>
                </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link  onClick={handleClick1}>
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-square" />
                  <p>
                  Patrocinadores
              
                  </p>
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-image" />
                  <p>
                  Nueva Publicación
                    
                  </p>
                </a>
              </li>
              
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

    <div className="content-wrapper">
    {showComponent && (
                  <div>
                    <Categorias/>
                  </div>
    )}
    {showComponent1 && (
                  <div>
                    <Patrocinadores/>
                  </div>
    )}
    
    </div>
    </>
  );
}
