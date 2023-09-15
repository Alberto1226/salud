//Routes
import { FooterDash } from '../../componentes/Administrador/Dash/Fooder';
import { BodyDash } from '../../componentes/Administrador/Dash/Body';
import { MenuDash } from '../../componentes/Administrador/Dash/Menu';
import { HeaderDash } from '../../componentes/Administrador/Dash/Header';
import { obtenerUsuario } from "../../api/usuarios";
import {
  getTokenApi,
  obtenidusuarioLogueado,
  logoutApi,
} from "../../api/auth";
import { Error } from '../Error404/error';
import { useState, useEffect } from "react";
import { listarSeries } from '../../api/series';
import { NavBar } from '../../componentes/Home/NavBar/NavBar';

export function Dashboard() {
  const [tipoUsuario, setTipoUsuario] = useState();

  const obtenerDatosUsuario = () => {
    try {
      obtenerUsuario(obtenidusuarioLogueado(getTokenApi())).then(response => {
        const { data } = response;
        setTipoUsuario(data.rol);
      }).catch((e) => {
        if (e.message === 'Network Error') {
          //console.log("No hay internet")
          console.log("Conexión al servidor no disponible");
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  const [listarSer, setListSeries] = useState([]);

  const obtenerSeries = () => {
    try {
      listarSeries()
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
        .catch((e) => { });
    } catch (e) { }
  };

  useEffect(() => {
    obtenerSeries();
  }, []);

  return (
    <>
      {
        (tipoUsuario == "administrador" || tipoUsuario == "Medico") ?
          (
            <>
              {/*<NavBar listarSeries={listarSer}/>*/}
              <HeaderDash />
              <MenuDash />
              <BodyDash />
              <FooterDash />
            </>
          ) :
          (
            <>
              <Error />
            </>
          )
      }
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
      tipo: "series",
      sinopsis: data.sinopsis,
      calificacion: data.calificacion,
      datosTemporada: data.datosTemporada,
      año: data.año,
      disponibilidad: data.disponibilidad,
      masVisto: data.masVisto,
      recomendado: data.recomendado,
      urlVideo: data.urlTrailer,
      urlPortada: data.urlPortada,
      seccion: data.seccion,
      estado: data.estado,
    });
  });
  return dataTemp;
}