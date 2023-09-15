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

  return (
    <>
      {
        (tipoUsuario == "administrador" || tipoUsuario == "Medico") ?
          (
            <>
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