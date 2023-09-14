import { Link } from "react-router-dom";
import img from "../../../assets/img/logo.webp";
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
import { map } from "lodash"



export function NavBar({ listarSeries, listarPeliculas, listarDocumentales, listarSeriesEspeciales, listarEspeciales }) {
  const listaMultimedia = listarSeries.concat(listarPeliculas, listarDocumentales, listarSeriesEspeciales, listarEspeciales);
  console.log(listaMultimedia)
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isInputOpen, setIsInputOpen] = useState(false);

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



  /**buscar */
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    // Filtrar sugerencias basadas en la entrada del usuario
    const sugerenciasFiltradas = listaMultimedia.filter((item) =>
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

  const filteredItems = listaMultimedia.filter(
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

              {
                tipo == "seriesEspeciales" &&
                (
                  <>
                    <Link>

                      <Link to={`/fullSeriesEspeciales?id=${id}&titulo=${titulo}`}><a className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a></Link>


                    </Link>
                  </>
                )
              }

              {
                tipo == "peliculas" &&
                (
                  <>
                    <Link>

                      <Link to={`/fullPel?id=${id}&titulo=${titulo}`}><a className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a></Link>


                    </Link>
                  </>
                )
              }

              {
                tipo == "especiales" &&
                (
                  <>
                    <Link>

                      <Link to={`/fullEsp?id=${id}&titulo=${titulo}`}><a className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a></Link>


                    </Link>
                  </>
                )
              }

              {
                tipo == "documentales" &&
                (
                  <>
                    <Link>

                      <Link to={`/fullDoc?id=${id}&titulo=${titulo}&id2=${id}`}><a className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a></Link>


                    </Link>
                  </>
                )
              }
              </li>

              <li>
                <Link to={`/`}>
                <a href="#">Inicio</a>
                </Link>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
             
              
            </ul>
          </nav>
          <Link to={`/login`}>
          <a href="#" id="login-register-button">
            <FontAwesomeIcon icon={faUser} />
          </a>
          </Link>
        </div>
      </header>
    </>
  );
}
