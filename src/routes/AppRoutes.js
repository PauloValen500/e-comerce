// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Catalogo from "../pages/usuario/Catalogo";
import Categoria from "../pages/admin/AdminCategorias";
import Departamento from "../pages/admin/AdminDepartamentos";
import Perfil from "../pages/usuario/Perfil";
import RequireAuth from "../Components/RequireAuth";
import SignInRedirect from "../pages/auth/SignInRedirect";
import SignUpRedirect from "../pages/auth/SignUpRedirect";
import SignOutRedirect from "../pages/auth/SignOutRedirect";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInRedirect />} />
        <Route path="/login"  element={<SignInRedirect />} /> {/* alias */}
        <Route path="/signup" element={<SignUpRedirect />} />
        <Route path="/logout" element={<SignOutRedirect />} />

        {/* Protegidas */}
        <Route path="/catalogo" element={<RequireAuth><Catalogo /></RequireAuth>} />
        <Route path="/perfil"   element={<RequireAuth><Perfil /></RequireAuth>} />

        {/* Solo admin */}
        <Route path="/categoria"    element={<RequireAuth groups={["admin"]}><Categoria /></RequireAuth>} />
        <Route path="/departamento" element={<RequireAuth groups={["admin"]}><Departamento /></RequireAuth>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
