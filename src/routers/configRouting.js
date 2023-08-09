// Rutas generales del sistema
import { Dashboard } from "../pages/Dashboard/dashboard";
import { Home } from "../pages/Home/home";
import Categorias from "../componentes/Administrador/Categorias/CRUD/insert";
import Patrocinadores from "../componentes/Administrador/Patrocinadores/CRUD/patrocinadores";

export default [
    {
        path: "/Dashboard",
        page: Dashboard
    },
    {
        path: "/",
        page: Home
    },
    {
        path: "/Categorias",
        page: Categorias
    },
    {
        path: "/Patrocinadores",
        page: Patrocinadores
    }
]
