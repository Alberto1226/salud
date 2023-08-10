import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { Load } from "../../load/load";
import TblUsers from "../tblUser";
import { registraUsuarios } from "../../../../api/usuarios";
import { subeArchivosCloudinary } from "../../../../api/cloudinary";
import Dropzone from "../../Dropzone/Dropzone";
import "./usuarios.css";
import { withRouter } from "../../../../utils/withRouter";
import queryString from "query-string";

function Usuarios({ history }) {
  const [formData, setFormData] = useState(initialFormValue());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //load
  const [loading, setLoading] = useState(true);

  //Para almacenar la imagen del producto que se guardara a la bd
  const [imagenProducto, setImagenProducto] = useState(null);

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
            rol: formData.rolUsuario,
            verificacion: ""
          };
          registraUsuarios(dataTemp).then((response) => {
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

  console.log(formData);

  return (
    <>
      {loading && <Load />}
      <div class="bg-white">
        <Button variant="primary" onClick={handleShow} className="btnadd">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <h1 class="text-center">Listado de Usuarios</h1>
        <TblUsers />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Insertar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
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
  };
}

export default withRouter(Usuarios);
