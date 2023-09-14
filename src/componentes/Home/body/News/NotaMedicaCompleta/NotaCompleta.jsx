import { NavBar } from "../../../NavBar/NavBar";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ReactPlayer from "react-player";
//Api
import { listarSeries, obtenerSeries, actualizarContadorSeries } from "../../../../../api/series";
import { registraHistorialUsuario } from "../../../../../api/historialUsuarios";
import { getTokenApi, obtenidusuarioLogueado } from "../../../../../api/auth";
import { listarPatrocinadoresPrioridad, actualizarPatrocinadores, obtenerPatrocinador } from "../../../../../api/patrocinadores";
//css

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./NotaCompleta.css";
export function NotaMedicaCompleta(props) {
  const locations = useLocation();
  const { id } = queryString.parse(locations.search);

  const { location } = props;
  const [listarSer, setListSeries] = useState([{ id: "", urlTrailer: "", titulo: "", sinopsis: "", duracion: "" }]);

  const [matchedIndex, setMatchedIndex] = useState(0);
  const [contadorActual, setContadorActual] = useState(0);



  const aumentarContador = () => {
    try {
      // console.log(data)
      obtenerSeries(id).then(response => {
        const { data } = response;
        console.log(data)
        const dataTemp = {
          contador: parseInt(data.contador) + 1
        }
        actualizarContadorSeries(id, dataTemp).then(response => {
          // console.log(response)
        }).catch(e => {
          console.log(e)
        })

      }).catch(e => {
        console.log(e)
      })
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    aumentarContador();
  }, [location]);

  const registrarHistorial = () => {
    try {
      // console.log(data)
      obtenerSeries(id).then(response => {
        const { data } = response;
        console.log(data)
        const dataTemp = {
          id_usuario: obtenidusuarioLogueado(getTokenApi()),
          id_reproduccion: data._id,
          nombre_reproduccion: data.titulo,
          tipo: "serie",
          url_reproduccion: data.urlTrailer
        }
        registraHistorialUsuario(dataTemp).then(response => {
          // console.log(response)
        }).catch(e => {
          console.log(e)
        })

      }).catch(e => {
        console.log(e)
      })
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    registrarHistorial();
  }, [location]);



  /**
   *btn next 
   */
   const videoRef = useRef(null);
   const [showNextButton, setShowNextButton] = useState(false);
   /**
    * fin btn next
    */
  const obtenerSerie = () => {
    try {
      listarSeries()
        .then((response) => {
          const { data } = response;

          if (!listarSer && data) {
            setListSeries(formatModelSeries(data));

            console.log(data);
          } else {
            const datosSer = formatModelSeries(data);

            if(datosSer.length > 0){
              const matchIndex = datosSer.findIndex((data) => data.id === id);
              setMatchedIndex(matchIndex);
            }else{
              setMatchedIndex(-1)
            }
            //console.log(data);
            
            setListSeries(datosSer);
            //console.log(filteredSer);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  useEffect(() => {
    obtenerSerie();
  }, [location]);
  console.log(matchedIndex)



  /**
   * 
   * alert patrocinador por prioridades */

  const totalVistas = listarSer.reduce((amount, item) => (amount + parseInt(item.contador)), 0);
  const media = totalVistas / listarSer.length;
  function redondearDecimal(numero) {
    return numero < 0.5 ? Math.floor(numero) : Math.ceil(numero);
  }
  console.log(media)
  console.log(redondearDecimal(media))
  console.log(totalVistas)
  console.log(contadorActual)
  console.log(listarSer[matchedIndex].id)

  useEffect(() => {
    obtenerSerie();
  }, []);

  const [listarPatrocinadores, setListPatrocinadores] = useState([]);

  const obtenerPatrocinadoresPrioritarios = () => {
    try {
      listarPatrocinadoresPrioridad("1")
        .then((response) => {
          const { data } = response;

          if (!listarPatrocinadores && data) {
            setListPatrocinadores(formatModelPatrocinadores(data));
          } else {
            const datosPel = formatModelPatrocinadores(data);
            setListPatrocinadores(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  const obtenerPatrocinadoresNoPrioritarios = () => {
    try {
      listarPatrocinadoresPrioridad("0")
        .then((response) => {
          const { data } = response;

          if (!listarPatrocinadores && data) {
            setListPatrocinadores(formatModelPatrocinadores(data));
          } else {
            const datosPel = formatModelPatrocinadores(data);
            setListPatrocinadores(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    if (contadorActual >= redondearDecimal(media)) {
      obtenerPatrocinadoresPrioritarios()
    } 
    else {
      obtenerPatrocinadoresNoPrioritarios()
    }
  }, [media]);

  console.log(listarPatrocinadores)

  const patrocinadoresPagados = listarPatrocinadores.filter(patrocinador => parseInt(patrocinador.numeroApariciones) >= 0);

  console.log(patrocinadoresPagados)

  function generarNumeroAleatorio(minimo, maximo) {
    // Genera un número aleatorio entre 0 y 1 (no incluido)
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;

    // Redondea el número si es necesario (opcional)
    // const numeroRedondeado = Math.round(numeroEnRango);
  }

  console.log(patrocinadoresPagados.length)

  // Ejemplo de uso:
  let numeroAleatorio = 0;
  numeroAleatorio = generarNumeroAleatorio(0, patrocinadoresPagados.length); // Genera un número entre 1 y 10 (incluyendo 1, excluyendo 10)
  console.log(numeroAleatorio);

  const disminuirCantidadApariciones = () => {
    try {
      // console.log(data)
      obtenerPatrocinador(patrocinadoresPagados[numeroAleatorio]?.id).then(response => {
        const { data } = response;
        console.log(data)
        const dataTemp = {
          numeroApariciones: parseInt(data.numeroApariciones) - 1
        }
        actualizarPatrocinadores(patrocinadoresPagados[numeroAleatorio]?.id, dataTemp).then(response => {
          // console.log(response)
        }).catch(e => {
          console.log(e)
        })

      }).catch(e => {
        console.log(e)
      })
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    disminuirCantidadApariciones();
  }, [numeroAleatorio]);

  /**fin patrocinador prioridades */

  const [isModalOpen, setIsModalOpen] = useState(true);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página al inicio
  }, []);

  const cerrarVentanaFlotante = () => {
    setShow(false);
  };

  /**landscape */
  const toggleFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }
  };
  /**fin */

  const handleNextVideo = () => {
    // Increment the matchedIndex to show the next video
    setMatchedIndex((prevIndex) => (prevIndex + 1) % listarSer.length);
  };

  return (
    <>
      <NavBar />
      {listarSer .length > 0 && (
          <main className="main" key={listarSer[matchedIndex].id ?? ""}>
            <ReactPlayer onClick={toggleFullScreen} ref={videoRef} id="videofull" url={listarSer[matchedIndex].urlTrailer == undefined ? "" : listarSer[matchedIndex].urlTrailer} controls={true} width="110%" height="" />
            {/** <img src={series.urlPortada} alt="" className="imgNota" />*/}
            <div className="grid-container">
            <button onClick={handleNextVideo} className="nextvideo2">
                Next <FontAwesomeIcon icon={faArrowRight} />
              </button><br/><br/>
              <h1 className="titulonota">
                {listarSer[matchedIndex].titulo === undefined ? "" : listarSer[matchedIndex].titulo}
              </h1>
              
            </div>
            <div dangerouslySetInnerHTML={{ __html: listarSer[matchedIndex].sinopsis == undefined ? "" : listarSer[matchedIndex].sinopsis }} />
            <div dangerouslySetInnerHTML={{ __html: listarSer[matchedIndex].actores == undefined ? "" : listarSer[matchedIndex].actores }} />
            
            
            <p className="anonota">{listarSer[matchedIndex].año == undefined ? "" : listarSer[matchedIndex].año}</p>
            
            <br />
            <br />
            <br />
            <div>
            {show && (
              <div
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  width: '200px', // Ancho deseado del recuadro
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  zIndex: 9999,
                }}
              >
                <button
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  onClick={cerrarVentanaFlotante}
                >
                  X
                </button>
                <div style={{ padding: '10px' }}>
                  <h2>Patrocinador oficial</h2>
                  <img
                    src={
                      patrocinadoresPagados[numeroAleatorio]?.urlImagen == undefined
                        ? ''
                        : patrocinadoresPagados[numeroAleatorio]?.urlImagen
                    }
                    alt="Patrocinador"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            )}
          </div>
            {/** <ReactPlayer url={series.urlTrailer} className="VideoNotaCompleta" width={"110%"}/>*/}
          </main>
        )}
    </>
  );
}

function formatModelSeries(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      titulo: data.titulo,
      categorias: data.categorias,
      actores: data.actores,
      director: data.director,
      duracion: data.duracion,
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      datosTemporada: data.datosTemporada,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlPortada: data.urlPortada,
      urlTrailer: data.urlTrailer,
      seccion: data.seccion,
      estado: data.estado,
    });
  });
  return dataTemp;
}


function formatModelPatrocinadores(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      nombre: data.nombre,
      urlImagen: data.urlImagen,
      urlWeb: data.urlWeb,
      urlFacebook: data.urlFacebook,
      urlInstagram: data.urlInstagram,
      urlTwitter: data.urlTwitter,
      nivel: data.nivel,
      estado: data.estado,
      numeroApariciones: data.numeroApariciones,
      prioridadAparicion: data.prioridadAparicion
    });
  });
  return dataTemp;
}