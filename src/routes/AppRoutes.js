import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Catalogo from "../pages/usuario/Catalogo";
import Categoria from "../pages/admin/AdminCategorias";
import Departamento from "../pages/admin/AdminDepartamentos";
import Perfil from "../pages/usuario/Perfil";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
                <Route path="/categoria" element={<Categoria/>}/>
                <Route path="/departamento" element={<Departamento/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </Router>
    )
}