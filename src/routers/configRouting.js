// Rutas generales del sistema
import { Dashboard } from "../pages/Dashboard/dashboard";
import { Home } from "../pages/Home/home";
import Categorias from "../componentes/Administrador/Categorias/CRUD/insert";
import Patrocinadores from "../componentes/Administrador/Patrocinadores/CRUD/patrocinadores";
import Usuarios from "../componentes/Administrador/Usuarios/CRUD/usuarios";
import Series from "../componentes/Administrador/NotasMedicas/CRUD/series";

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
    },
    {
        path: "/Usuarios",
        page: Usuarios
    },
    {
        path: "/Series",
        page: Series
    }
]
