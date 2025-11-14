import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Catalogo from "../pages/usuario/Catalogo";
import AdminCategorias from "../pages/admin/AdminCategorias";
import AdminDepartamentos from "../pages/admin/AdminDepartamentos";
import UserCategoria from "../pages/usuario/UserCategoria";
import UserDepartamento from "../pages/usuario/UserDepartamento";
import UserProductosHombre from "../pages/usuario/UserProductosHombre";
import UserProductosMujer from "../pages/usuario/UserProductosMujer";
import ProductosCategoria from "../pages/usuario/ProductoCategoria";   
import Perfil from "../pages/usuario/Perfil";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
                <Route path='/categoria' element={<UserCategoria/>}/>
                <Route path='/departamento' element={<UserDepartamento/>}/>
                <Route path='/admin/categorias' element={<AdminCategorias/>}/>
                <Route path='/admin/departamentos' element={<AdminDepartamentos/>}/>
                <Route path='/productos/hombre' element={<UserProductosHombre/>}/>
                <Route path='/productos/mujer' element={<UserProductosMujer/>}/>
                <Route path="/productos/categoria" element={<ProductosCategoria/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </Router>
    )
}