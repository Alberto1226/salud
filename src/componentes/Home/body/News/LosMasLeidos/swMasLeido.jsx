import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";


import { listarSeriesMasVistas } from "../../../../../api/series";
import { Link } from "react-router-dom";
import { MasLeidos } from "./MasLeidos";


SwiperCore.use([Navigation, Pagination]);

export function SwiperMasVistosSer(props) {
  const { location } = props;
  const [listarSer, setListSeries] = useState([]);

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

  const obtenerSeries = () => {
    try {
        listarSeriesMasVistas()
        .then((response) => {
          const { data } = response;

          if (!listarSer && data) {
            setListSeries(formatModelSeries(data));
            console.log(data);
          } else {
            const datosSer = formatModelSeries(data);
            setListSeries(datosSer);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  useEffect(() => {
    obtenerSeries();
  }, [location]);

  console.log(listarSer)

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
    let slidesToShow = 5; // Número predeterminado de slides a mostrar

    if (screenWidth < 768) {
      slidesToShow = 3; // Si el ancho de la pantalla es menor a 768px, muestra solo 1 slide
    } else if (screenWidth < 1024) {
      slidesToShow = 5; // Si el ancho de la pantalla es menor a 1024px, muestra 2 slides
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
              spaceBetween={1}
              slidesPerView={slides}
              navigation
              pagination={{
                clickable: true,
              }}
            >
              {/* Agrega tus SwiperSlides aquí */}
              {listarSer &&
                listarSer.map((serie, index) => (
                  <SwiperSlide
                    className="swiper-slide"
                    //data-slide-number={index + 1}
                    key={serie.id}
                  >
                    <Link to={`/NotaMedicaCompleta?id=${serie.id}&titulo=${serie.titulo}`} >
                    <MasLeidos
                      img1={screenResolution > 750 ? serie.urlPortada : serie.urlPortadaMovil}
                      nombre={serie.titulo}
                      con={serie.contador}
                      des={serie.sinopsis}
                    />
                    </Link>
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

function formatModelSeries(data) {
    // Clonamos el arreglo de datos original para no modificarlo directamente.
  const dataClone = [...data];

  // Ordenamos los datos en función del campo 'contador' de mayor a menor.
  dataClone.sort((a, b) => b.contador - a.contador);


  const dataTemp = dataClone.map((data) => ({
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
    seccion: data.seccion,
    estado: data.estado,
    contador: data.contador,
    urlPortadaMovil: data.urlPortadaMovil
  }));

    return dataTemp;
  }