import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";

import { listarUltimaPelicula } from "../../../../../api/peliculasListar";
import { listarUltimaSerie } from "../../../../../api/series";
import { listarUltimaSerieEspecial } from "../../../../../api/seriesEspeciales";

import { Link } from "react-router-dom";

import { Recientes } from "./Recientes";

SwiperCore.use([Navigation, Pagination]);

export function SwiperEstrenos(props) {
  const { location } = props;
  const [listarPel, setListPeliculas] = useState([]);
  const [listarDoc, setListDocumentales] = useState([]);
  const [listarEsp, setListEspeciales] = useState([]);
  const [listarSeriesEsp, setListSeriesEsp] = useState([]);
  const [listarSeries, setListSeries] = useState([]);

  const [screenResolution, setScreenResolution] = useState(window.innerWidth);

  // Función para actualizar la resolución cuando cambia el tamaño de la ventana
  const updateScreenResolution = () => {
    setScreenResolution(window.innerWidth);
  };

  // Agregar un event listener para actualizar la resolución cuando cambia el tamaño de la ventana
  useEffect(() => {
    window.addEventListener('resize', updateScreenResolution);

    // Limpieza del event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', updateScreenResolution);
    };
  }, []);

  const obtenerPeliculas = () => {
    try {
      listarUltimaPelicula("peliculas")
        .then((response) => {
          const { data } = response;
          if (!listarPel && data) {
            const datosPel = formatModelPeliculas(data);
            setListPeliculas(datosPel);
          } else {
            const datosPel = formatModelPeliculas(data);
            setListPeliculas(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  const obtenerDocumentales = () => {
    try {
      listarUltimaPelicula("documentales")
        .then((response) => {
          const { data } = response;
          if (!listarDoc && data) {
            const datosPel = formatModelDocumentales(data);
            setListDocumentales(datosPel);
          } else {
            const datosPel = formatModelDocumentales(data);
            setListDocumentales(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  const obtenerEspeciales = () => {
    try {
      listarUltimaPelicula("especiales")
        .then((response) => {
          const { data } = response;
          if (!listarEsp && data) {
            const datosPel = formatModelEspeciales(data);
            setListEspeciales(datosPel);
          } else {
            const datosPel = formatModelEspeciales(data);
            setListEspeciales(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  const obtenerSeriesEspeciales = () => {
    try {
      listarUltimaSerieEspecial()
        .then((response) => {
          const { data } = response;
          if (!listarSeriesEsp && data) {
            const datosPel = formatModelSeriesEspeciales(data);
            setListSeriesEsp(datosPel);
          } else {
            const datosPel = formatModelSeriesEspeciales(data);
            setListSeriesEsp(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  const obtenerSeries = () => {
    try {
      listarUltimaSerie()
        .then((response) => {
          const { data } = response;
          if (!listarSeries && data) {
            const datosPel = formatModelSeries(data);
            setListSeries(datosPel);
            //console.log(datosPel);
          } else {
            const datosPel = formatModelSeries(data);
            setListSeries(datosPel);
            console.log(datosPel);
          }
        })
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    //obtenerPeliculas();
    //obtenerDocumentales();
    //obtenerEspeciales();
    //obtenerSeriesEspeciales();
    obtenerSeries();
  }, [location]);

  const listaMultimedia = listarPel.concat(listarDoc, listarEsp, listarSeriesEsp, listarSeries);

  const [slides, setSlides] = useState(5); // Número inicial de slides a mostrar

  useEffect(() => {
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);
    return () => {
      window.removeEventListener("resize", calculateSlidesPerView);
    };
  }, []);

  const calculateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    let slidesToShow = 3; // Número predeterminado de slides a mostrar

    if (screenWidth < 768) {
      slidesToShow = 3; // Si el ancho de la pantalla es menor a 768px, muestra solo 1 slide
    } else if (screenWidth < 1024) {
      slidesToShow = 3; // Si el ancho de la pantalla es menor a 1024px, muestra 2 slides
    }

    setSlides(slidesToShow);
  };

  return (
    <>
      <section className="main-container">
        <div className="location" id="home">
          <h4 id="home">{props.titulo}</h4>

          <div className="swiper-container">
            <Swiper
              spaceBetween={5}
              slidesPerView={slides}
              navigation
              pagination={{
                clickable: true,
              }}
            >
              {/* Agrega tus SwiperSlides aquí */}
              {listaMultimedia &&
                listaMultimedia.map((peli, index) => (
                  <SwiperSlide
                    key={peli.id}
                    className="swiper-slide"
                    //data-slide-number={index + 1}
                  >
                    {peli.tipo === "especiales" ? (
                      <Link to={`/NotaMedicaCompleta?id=${peli.id}&titulo=${peli.titulo}`}>
                        <a>
                        <Recientes className="imgcatlis" img1={screenResolution > 750 ? peli.urlPortada : peli.urlPortadaMovil} nombre={peli.nombre} des={peli.des} duracion={peli.duracion}/>
                        </a>
                      </Link>
                    ) : peli.tipo === 'documentales' ? (
                      <Link to={`/NotaMedicaCompleta?id=${peli.id}&titulo=${peli.titulo}&id2=${peli.id}`}>
                        <a>
                        <Recientes className="imgcatlis" img1={screenResolution > 750 ? peli.urlPortada : peli.urlPortadaMovil} nombre={peli.nombre} des={peli.des} duracion={peli.duracion}/>
                        </a>
                      </Link>
                    ) : peli.tipo === "peliculas" ? (
                      <Link to={`/NotaMedicaCompleta?id=${peli.id}&titulo=${peli.titulo}`}>
                        <a>
                        <Recientes className="imgcatlis" img1={screenResolution > 750 ? peli.urlPortada : peli.urlPortadaMovil} nombre={peli.nombre} des={peli.des} duracion={peli.duracion}/>
                        </a>
                      </Link>
                    ) : peli.tipo === "series" ? (
                      <Link to={`/NotaMedicaCompleta?id=${peli.id}&titulo=${peli.titulo}`}>
                        <a>
                        <Recientes className="imgcatlis" img1={screenResolution > 750 ? peli.urlPortada : peli.urlPortadaMovil} nombre={peli.titulo} des={peli.titulo} duracion={peli.duracion}/>
                        </a>
                      </Link>
                    ) : (
                      <Link to={`/NotaMedicaCompleta?id=${peli.id}&titulo=${peli.titulo}`}>
                        <a>
                        <Recientes className="imgcatlis" img1={screenResolution > 750 ? peli.urlPortada : peli.urlPortadaMovil} nombre={peli.nombre} des={peli.des} duracion={peli.duracion}/>
                        </a>
                      </Link>
                    )}
                    

                  </SwiperSlide>
                ))}
              {/* ... Agrega el resto de los slides */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

function formatModelPeliculas(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      titulo: data.titulo,
      categorias: data.categorias,
      actores: data.actores,
      director: data.director,
      duracion: data.duracion,
      tipo: "peliculas",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlVideo,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
      urlPortadaMovil: data.urlPortadaMovil
    });
  });
  return dataTemp;
}

function formatModelDocumentales(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      titulo: data.titulo,
      categorias: data.categorias,
      actores: data.actores,
      director: data.director,
      duracion: data.duracion,
      tipo: "documentales",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlVideo,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
      urlPortadaMovil: data.urlPortadaMovil
    });
  });
  return dataTemp;
}

function formatModelEspeciales(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      titulo: data.titulo,
      categorias: data.categorias,
      actores: data.actores,
      director: data.director,
      duracion: data.duracion,
      tipo: "especiales",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlVideo,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
      urlPortadaMovil: data.urlPortadaMovil
    });
  });
  return dataTemp;
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
      tipo: "series",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlTrailer,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
      urlPortadaMovil: data.urlPortadaMovil
    });
  });
  return dataTemp;
}

function formatModelSeriesEspeciales(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      titulo: data.titulo,
      categorias: data.categorias,
      actores: data.actores,
      director: data.director,
      duracion: data.duracion,
      tipo: "seriesEspeciales",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlTrailer,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
      urlPortadaMovil: data.urlPortadaMovil
    });
  });
  return dataTemp;
}
