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
import DashboardLayout from "../Components/DashboardLayout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Públicas (landing y callbacks de auth) */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInRedirect />} />
        <Route path="/login" element={<SignInRedirect />} /> {/* alias */}
        <Route path="/signup" element={<SignUpRedirect />} />
        <Route path="/logout" element={<SignOutRedirect />} />

        {/* Área protegida con layout (sidebar + hamburguesa) */}
        <Route
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
          {/* Usuario autenticado */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/perfil" element={<Perfil />} />

          {/* Solo admin (chequeo extra de grupos) */}
          <Route
            path="/categoria"
            element={
              <RequireAuth groups={["admin"]}>
                <Categoria />
              </RequireAuth>
            }
          />
          <Route
            path="/departamento"
            element={
              <RequireAuth groups={["admin"]}>
                <Departamento />
              </RequireAuth>
            }
          />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}