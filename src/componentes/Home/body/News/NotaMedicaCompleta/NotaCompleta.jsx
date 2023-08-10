import { NavBar } from "../../../NavBar/NavBar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import ReactPlayer from "react-player";
//Api
import { listarSeries } from "../../../../../api/series";
//css

import "./NotaCompleta.css";
export function NotaMedicaCompleta(props) {
  const locations = useLocation();
  const { id } = queryString.parse(locations.search);

  const { location } = props;
  const [listarSer, setListSeries] = useState([]);

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

            //console.log(data);
            const filteredSer = datosSer.filter((data) => data.id === id);
            setListSeries(filteredSer);
            console.log(filteredSer);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  useEffect(() => {
    obtenerSerie();
  }, [location]);
  return (
    <>
      <NavBar />
      {listarSer &&
        listarSer.map((series) => (
          <main className="main" key={series.id}>
            <img src={series.urlPortada} alt="" className="imgNota" />
            <h1 className="titulonota">{series.titulo}</h1>
            <div dangerouslySetInnerHTML={{ __html: series.sinopsis }} />
            <div dangerouslySetInnerHTML={{ __html: series.actores }} />
            
            <p className="anonota">{series.año}</p>
            <br />
            <br />
            <br />
           
            <ReactPlayer url={series.urlTrailer} className="VideoNotaCompleta" width={"110%"}/>
          </main>
        ))}
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
