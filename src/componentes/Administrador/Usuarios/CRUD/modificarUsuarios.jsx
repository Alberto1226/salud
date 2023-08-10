import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Load } from "../../load/load";
import { actualizarUsuario } from "../../../../api/usuarios";
import { subeArchivosCloudinary } from "../../../../api/cloudinary";
import Dropzone from "../../Dropzone/Dropzone";
import "./usuarios.css";
import queryString from "query-string";

export default function ModificarUsuarios({ data, history, setShow }) {
  const idUsuario = data[0];

  const dataTemp = {
    nombreUsuario: data[1],
    apellidoUsuario: data[2],
    emailUsuario: data[5],
    contraseñaUsuario: data[6],
    rolUsuario: data[8],
    profesionUsuario: data[4],
  };

  const [formData, setFormData] = useState(initialFormValue(dataTemp));

  //Para almacenar la imagen del producto que se guardara a la bd
  const [imagenProducto, setImagenProducto] = useState(data[3]);

  //load
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  //notification
  const notify = () => toast("Wow so easy!");

  //insert
  const onSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombreUsuario || !formData.apellidoUsuario || !formData.rolUsuario || !formData.profesionUsuario) {
      toast.warning("Completa el formulario");
    } else {
      try {
        subeArchivosCloudinary(imagenProducto, "Usuarios").then(response => {
          const { data } = response;
          setLoading(true);
          // Sube a cloudinary la imagen principal del producto

          const dataTemp = {
            nombre: formData.nombreUsuario,
            apellido: formData.apellidoUsuario,
            imagen: data.secure_url,
            profesion: formData.profesionUsuario,
            email: formData.emailUsuario,
            contraseña: formData.contraseñaUsuario,
            rol: formData.rolUsuario,
          };
          actualizarUsuario(idUsuario, dataTemp).then((response) => {
            const { data } = response;
            //notificacion

            toast.success(data.mensaje);

            history({
              search: queryString.stringify(""),
            });
            setLoading(false);
            setShow(false);
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
      {loading && <Load />}
      <div className="contact-form">
        <Form onSubmit={onSubmit} onChange={onChange}>
          <div className="imagenPrincipal">
            <h4 className="textoImagenPrincipal">Sube tu imagen</h4>
            <div title="Seleccionar imagen de la categoría" className="imagenProducto">
              <Dropzone
                setImagenFile={setImagenProducto}
                imagenProductoBD={data[3]}
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
            placeholder="Rol"
            as="select"
            name="rolUsuario"
            defaultValue={formData.rolUsuario}
          >
            <option>Elige un rol</option>
            <option value="Medico" selected={formData.rolUsuario == "Medico"}>Medico</option>
            <option value="Lector" selected={formData.rolUsuario == "Lector"}>Lector</option>
          </Form.Control>
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

          <label></label>
          <input className="submit" value="Enviar" type="submit" />
        </Form>
      </div>
    </>
  );
}

function initialFormValue(data) {
  return {
    nombreUsuario: data.nombreUsuario,
    apellidoUsuario: data.apellidoUsuario,
    emailUsuario: data.emailUsuario,
    contraseñaUsuario: data.contraseñaUsuario,
    rolUsuario: data.rolUsuario,
    profesionUsuario: data.profesionUsuario,
  };
}
