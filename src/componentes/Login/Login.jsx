import "./Login.css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function Login() {
    const [formData, setFormData] = useState(initialFormValue);
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const togglePasswordVisiblity = () => {
        setMostrarPassword((val) => !val);
      };
  return (
    <>
      <div class="contentLogin">
        <div class="containerLogin">
          <div class="menu">
            {/**<img src={img} alt="" className="imglogin" /> */}
            <label>
              Únete a la plataforma de videos que promueve la Salud en México para el mundo
            </label>
          </div>

          <div class="connexion">
            <Form >
              <div class="contact-form">
                <label>Inicio de sesión</label>
                <Form.Control
                  placeholder="Usuario"
                  name="usuario"
                  defaultValue={formData.usuario}
                  type="text"
                />
                <br />
                <div className="flex items-center mb-6">
                  <Form.Control
                    placeholder="Contraseña"
                    type={mostrarPassword ? "text" : "password"}
                    name="password"
                    defaultValue={formData.password}
                  />
                  <FontAwesomeIcon
                    title="Mostrar contraseña"
                    className="cursor-pointer py-2 -ml-6"
                    icon={!mostrarPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisiblity}
                  />
                </div>
                <label>Ingresar con Google / Facebook</label>
                
                
                <label>
                  ¿Olvidaste la contraseña?
                  <Link to="/recuperarPass">
                    <a class="a">Haz click aquí</a>
                  </Link>
                </label>
                <input class="submit" value="Entrar" type="submit" />
              </div>

              <hr />
              <div>
                <h3>¿Todavía sin cuenta?</h3>
                <Link to="/Registro">
                  <input class="submit" value="Crear tu cuenta" type="submit" />
                </Link>

                <Link to="/">
                  <input class="submit" value="Home" type="submit" />
                </Link>
                <label>
                  © 2022-2023 Todos los Derechos Reservados por saludChanel®
                </label>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}


function initialFormValue() {
    return {
      usuario: "",
      password: "",
    };
  }