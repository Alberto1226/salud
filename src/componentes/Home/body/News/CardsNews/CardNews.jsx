//css
import './CardNews.css';
//img
import img1 from "../../../../../assets/img/cards/doc1.png";
import img2 from "../../../../../assets/img/cards/doc2.png";
//componentes
import { listarSeries } from "../../../../../api/series";
//
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export function CardsNews(props) {
  const [listarSer, setListSeries] = useState([]);
  const { location, history } = props;
  //const [selectedRowData, setSelectedRowData] = useState(null);

  const obtenerSeries = () => {
    try {
      listarSeries()
        .then((response) => {
          const { data } = response;

          if (!listarSer && data) {
            setListSeries(formatModelSeries(data));
            //console.log(data);
          } else {
            const datosSer = formatModelSeries(data);
            setListSeries(datosSer);
            //console.log(datosSer);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  useEffect(() => {
    obtenerSeries();
  }, [location]);

  return (
    
    <>
      <div className="content-wrapper2">
      {listarSer &&
        listarSer.map((series) => (
          
        <div className="news-card" key={series.id}>
          
          <a href="#" className="news-card__card-link" />
          <img
            src={series.urlPortada}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">{series.titulo}</h2>
            <div className="news-card__post-date">{series.año}</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
              
              {series.sinopsis
                .split(" ")
                .slice(0, 50)
                .join(" ")
                .concat(series.sinopsis.split(" ").length > 50 ? "..." : "")}
            
              </p>
              <Link to={`/NotaMedicaCompleta?id=${series.id}`}>
              <a  className="news-card__read-more">
                Leer Mas <i className="fas fa-long-arrow-alt-right" />
              </a>
              </Link>
            </div>
          </div>
          
        </div>
       
        ))}
       
      </div>
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
      seccion: data.seccion,
      estado: data.estado,
    });
  });
  return dataTemp;
}