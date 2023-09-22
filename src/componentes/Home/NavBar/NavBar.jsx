import { Link } from "react-router-dom";
import img from "../../../assets/img/logo.png";
import React, { useState, useEffect } from "react";
/**icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHouse,
  faUser,
  faArrowDown,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { map } from "lodash";
import Modal from "react-bootstrap/Modal";
import { SwiperCategorias } from "./categorias/swCategorias";
import {
  getTokenApi,
  obtenidusuarioLogueado,
  logoutApi,
} from "../../../api/auth";
import { obtenerUsuario } from "../../../api/usuarios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavBar({ listarSeries }) {

  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isInputOpen, setIsInputOpen] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuVisible((prevVisible) => !prevVisible);
  };

  const redirecciona = useNavigate();
  const location = useLocation();
  //Para cerrar la sesion
  const cerrarSesion = () => {
    logoutApi();
    redirecciona("");
    toast.success("Sesión cerrada");
    window.location.reload();
  }

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



  /**buscar */
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    // Filtrar sugerencias basadas en la entrada del usuario
    const sugerenciasFiltradas = listarSeries.filter((item) =>
      item.titulo.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Actualizar la lista de sugerencias
    setSugerencias(sugerenciasFiltradas);
  };

  const handleSugerenciaSeleccionada = (sugerencia) => {
    // Llenar el campo de búsqueda con la sugerencia seleccionada
    setSearchValue(sugerencia.titulo);

    // Limpiar la lista de sugerencias y restablecer la selección
    setSugerencias([]);
    setSelectedSuggestion(null);
  };

  const handleInputBlur = () => {
    setIsInputOpen(false);
  };

  const filteredItems = listarSeries.filter(
    item => item.titulo && item.titulo.toLowerCase() === searchValue.toLowerCase()
  );

  const [id, setId] = useState();
  const [titulo, setTitulo] = useState();
  const [sinopsis, setSinopsis] = useState();
  const [portada, setPortada] = useState();
  const [tipo, setTipo] = useState("");

  const obtenerTotales = () => {
    map(filteredItems, (item, index) => {
      const { id, tipo, titulo, sinopsis, urlPortada } = item
      setId(id)
      setTipo(tipo)
      setTitulo(titulo)
      setSinopsis(sinopsis)
      setPortada(urlPortada)
    })
  }


  useEffect(() => {
    obtenerTotales();
  }, [searchValue]);

  console.log(filteredItems)



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [idUsuario, setIdeUsuario] = useState("");

  const obtenerDatosUsuario = () => {
    try {
      obtenerUsuario(obtenidusuarioLogueado(getTokenApi())).then(response => {
        const { data } = response;
        setIdeUsuario(data._id);
      }).catch((e) => {
        if (e.message === 'Network Error') {
          //console.log("No hay internet")
          toast.error("Conexión al servidor no disponible");
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    obtenerDatosUsuario();
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
              <li className="special">
                <div className="position-relative buscar">
                  <div >
                    <div className="flex items-center mb-1">
                      <input
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        autoFocus
                        className="inputbuscar"
                        placeholder="Buscar..."
                      />
                    </div>
                  </div>
                  {sugerencias.length > 0 && (
                    <div className="position-absolute mt-2">
                      <ul className="list-group">
                        {sugerencias.map((sugerencia) => (
                          <li
                            key={sugerencia.id}
                            className={`list-group-item ${sugerencia === selectedSuggestion ? 'active' : ''
                              }`}
                            onClick={() => handleSugerenciaSeleccionada(sugerencia)}
                          >
                            {sugerencia.titulo}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                {
                  tipo == "series" &&
                  (
                    <>
                      <Link>

                        <Link to={`/NotaMedicaCompleta?id=${id}&titulo=${titulo}`}><a className="icon">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a></Link>


                      </Link>
                    </>
                  )
                }
              </li>
              <li>
                <div className="btncontainer">
                  <Link>
                    <a id="login-register-button" onClick={() => handleShow()}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                  </Link>
                  <Modal
                    size="xl"
                    show={show}
                    onHide={handleClose}
                    dialogClassName="modal-90w"
                    backdrop="static"
                    keyboard={false}
                    className="mdlCategorias"
                  >
                    <Modal.Header closeButton className="modalcategory">

                    </Modal.Header>
                    <Modal.Body>
                      <SwiperCategorias />
                    </Modal.Body>
                  </Modal>

                  <Link to={`/`}>
                    <a href="#" id="login-register-button"><FontAwesomeIcon icon={faHouse} /></a>
                  </Link>

                  {idUsuario == "" && (
                    <>
                      <Link to={`/login`}>
                        <a href="#" id="login-register-button">
                          <FontAwesomeIcon icon={faUser} />
                        </a>
                      </Link>
                    </>
                  )}

                  {idUsuario != "" && (
                    <>
                      <a href="#" id="login-register-button" onClick={() => cerrarSesion()}>

                        <FontAwesomeIcon
                          icon={faUser}
                        />
                      </a>
                    </>
                  )}
                </div>
              </li>





            </ul>
          </nav>

        </div>
      </header>
    </>
  );
}
