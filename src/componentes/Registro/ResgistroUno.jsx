import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Dropzone from "../Administrador/Dropzone/Dropzone";
import { subeArchivosCloudinary } from "../../api/cloudinary";
import { registraUsuarios } from "../../api/usuarios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function RegistroUno() {
  const [formData, setFormData] = useState(initialFormValue());
  const [loading, setLoading] = useState(false);

  //Para almacenar la imagen del producto que se guardara a la bd
  const [imagenProducto, setImagenProducto] = useState(null);

  // Para definir el enrutamiento
  const enrutamiento = useNavigate();

  const cancelarRegistro = () => {
    enrutamiento("/login");
  };

  //insert
  const onSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombreUsuario || !formData.apellidoUsuario || !formData.profesionUsuario) {
      toast.warning("Completa el formulario");
    } else {
      try {
        // Sube a cloudinary la imagen principal del producto
        subeArchivosCloudinary(imagenProducto, "usuarios").then(response => {
          const { data } = response;
          setLoading(true);

          const dataTemp = {
            nombre: formData.nombreUsuario,
            apellido: formData.apellidoUsuario,
            imagen: data.secure_url,
            profesion: formData.profesionUsuario,
            email: formData.emailUsuario,
            contraseña: formData.contraseñaUsuario,
            estado: "true",
            rol: "Lector",
            verificacion: ""
          };
          registraUsuarios(dataTemp).then((response) => {
            const { data } = response;
            //notificacion

            toast.success(data.mensaje);

            setLoading(false);
            cancelarRegistro();
            //cancelarRegistro()
          });
        }).then(e => {
          console.log(e)
        })
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <Form onSubmit={onSubmit} onChange={onChange}>
                <div className="imagenPrincipal">
                  <h4 className="textoImagenPrincipal">Sube tu imagen</h4>
                  <div title="Seleccionar imagen de la categoría" className="imagenProducto">
                    <Dropzone
                      setImagenFile={setImagenProducto}
                    />
                  </div>
                </div>
                <br />
                <Form.Control
                  placeholder="Nombre"
                  type="text"
                  name="nombreUsuario"
                  defaultValue={formData.nombreUsuario}
                />
                <br />
                <Form.Control
                  placeholder="Apellido"
                  type="text"
                  name="apellidoUsuario"
                  defaultValue={formData.apellidoUsuario}
                />
                <br />

                <Form.Control
                  placeholder="Email"
                  type="text"
                  name="emailUsuario"
                  defaultValue={formData.emailUsuario}
                />
                <br />

                <Form.Control
                  placeholder="Contraseña"
                  type="text"
                  name="contraseñaUsuario"
                  defaultValue={formData.contraseñaUsuario}
                />
                <br />

                <Form.Control
                  placeholder="Profesion"
                  type="text"
                  name="profesionUsuario"
                  defaultValue={formData.profesionUsuario}
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
    nombreUsuario: "",
    apellidoUsuario: "",
    emailUsuario: "",
    contraseñaUsuario: "",
    rolUsuario: "",
    profesionUsuario: "",
  }
}