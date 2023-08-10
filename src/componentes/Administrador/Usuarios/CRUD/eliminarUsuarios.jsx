import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Load } from "../../load/load";
import { eliminarUsuario } from "../../../../api/usuarios";
import queryString from "query-string";

export default function EliminarUsuarios({ data, history, setShow }) {

  const dataTemp = {
    nombreUsuario: data[1],
    apellidoUsuario: data[2],
    emailUsuario: data[5],
    contraseñaUsuario: data[6],
    rolUsuario: data[8],
    profesionUsuario: data[4],
  };

  const [formData, setFormData] = useState(initialFormValue(dataTemp));
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

    try {
      setLoading(true);
      // Sube a cloudinary la imagen principal del producto
      eliminarUsuario(data[0]).then((response) => {
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
    } catch (e) {
      console.log(e);
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
          <br />
          <Form.Control
            placeholder="Nombre"
            type="text"
            name="nombreUsuario"
            defaultValue={formData.nombreUsuario}
            disabled
          />
          <br />
          <Form.Control
            placeholder="Apellido"
            type="text"
            name="apellidoUsuario"
            defaultValue={formData.apellidoUsuario}
            disabled
          />
          <br />

          <Form.Control
            placeholder="Rol"
            as="select"
            name="rolUsuario"
            defaultValue={formData.rolUsuario}
            disabled
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
            disabled
          />
          <br />

          <Form.Control
            placeholder="Contraseñ"
            type="text"
            name="contraseñaUsuario"
            defaultValue={formData.contraseñaUsuario}
            disabled
          />
          <br />

          <Form.Control
            placeholder="Profesion"
            type="text"
            name="profesionUsuario"
            defaultValue={formData.profesionUsuario}
            disabled
          />

          <label></label>
          <input className="submit" value="Eliminar" type="submit" />
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
