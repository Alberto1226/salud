import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export function RegistroUno() {
    const [formData, setFormData] = useState(initialFormValue());
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="contentLogin">
        <div className="containerLogin">
          <div className="menu">
          {/**<img src={img} alt="" className="imglogin" /> */}
            <label>
              Únete a la plataforma de videos que promueve los destinos y
              cultura de México para el mundo
            </label>
          </div>
          <div className="connexion">
            <div className="contact-form">
              <Form >
                <h3>Registro</h3>
                <br />
                <Form.Control
                  placeholder="Nombre"
                  type="text"
                  name="nombre"
                  defaultValue={formData.nombre}
                />
                <br />
                <Form.Control
                  placeholder="Email"
                  type="email"
                  name="correo"
                  defaultValue={formData.correo}
                />
                <br />
                <Form.Control
                  placeholder="Contraseña"
                  type="password"
                  name="contraseña"
                  defaultValue={formData.contraseña}
                />
                <br />
                <Form.Control
                  placeholder="Confirmar contraseña"
                  type="password"
                  name="confirmarContraseña"
                  defaultValue={formData.confirmarContraseña}

                />
                <label>

                </label>
                <input className="submit" value="Enviar" type="submit" />
              </Form>
            </div>

            <hr />
            <div>

              <Link to="/login">
                <input className="submit" value="Regresar" type="submit" />
              </Link>
              <label>
              © 2022-2023 Todos los Derechos Reservados por saludChanel®
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function initialFormValue() {
    return {
      nombre: "",
      correo: "",
      contraseña: "",
      confirmarContraseña: ""
    }
  }