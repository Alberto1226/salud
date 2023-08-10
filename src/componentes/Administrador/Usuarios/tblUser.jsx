import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { listarUsuarios } from "../../../api/usuarios";
import Modal from "react-bootstrap/Modal";
import ModificarUsuarios from "./CRUD/modificarUsuarios";
import EliminarUsuarios from "./CRUD/eliminarUsuarios";
import { withRouter } from "../../../utils/withRouter";
//listar categorias
//listar categorias

function TblUsers(props) {
  const { location, history } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    setShow(true);
    setSelectedRowData(rowData);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (rowData) => {
    setShow2(true);
    setSelectedRowData(rowData);
  };
  const [listarPatro, setListPatro] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const obtenerUsuarios = () => {
    try {
      listarUsuarios()
        .then((response) => {
          const { data } = response;

          if (!listarPatro && data) {
            setListPatro(formatModelUsuarios(data));
          } else {
            const datosPatro = formatModelUsuarios(data);
            setListPatro(datosPatro);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  useEffect(() => {
    obtenerUsuarios();
  }, [location]);
  // recargar

  // Configurando animacion de carga
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  const cargarDatos = () => {
    const timeout = setTimeout(() => {
      setRows(listarPatro);
      setPending(false);
    }, 0);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "nombre",
      label: "NOMBRE",
    },
    {
      name: "apellido",
      label: "Apellido",
    },
    {
      name: "imagen",
      label: "IMAGEN",
    },
    {
      name: "profesion",
      label: "PROFESION",
    },
    {
      name: "email",
      label: "EMAIL",
    },
    {
      name: "contraseña",
      label: "CONTRASEÑA",
    },
    {
      name: "estado",
      label: "STATUS",
      options: {
        customBodyRender: (value) => {
          const estado = value;
    
          let estiloTexto = "";
          let estadoTexto = "";
    
          if (estado=="true") {
            estiloTexto = "activo"; 
            estadoTexto = "Activo";
          } else {
            estiloTexto = "inhabilitado"; 
            estadoTexto = "Inhabilitado";
          }
    
          return (
            <div className={estiloTexto}>
              {estadoTexto}
            </div>
          );
        },
      },
    },
    {
        name: "rol",
        label: "ROL",
      },
    {
      name: "Acciones",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button className="btnup">
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => handleShow(tableMeta.rowData)}
                />
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modificar Pelicula</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModificarUsuarios data={selectedRowData} history={history} setShow={setShow} />
                  </Modal.Body>
                </Modal>
              </button>

              <button className="btndel">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleShow2(tableMeta.rowData)}
                />
                <Modal
                  show={show2}
                  onHide={handleClose2}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Eliminar Pelicula</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <EliminarUsuarios data={selectedRowData} history={history} setShow={setShow2}/>
                  </Modal.Body>
                </Modal>
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <>
      <MUIDataTable
        title={"Lista Usuarios"}
        data={listarPatro}
        columns={columns}
        options={options}
      />
    </>
  );
}

function formatModelUsuarios(data) {
  const dataTemp = [];
  data.forEach((data) => {
    dataTemp.push({
      id: data._id,
      nombre: data.nombre,
      apellido: data.apellido,
      imagen: data.imagen,
      profesion: data.profesion,
      email: data.email,
      contraseña: data.contraseña,
      estado: data.estado,
      rol: data.rol,
    });
  });
  return dataTemp;
}

export default withRouter(TblUsers);
