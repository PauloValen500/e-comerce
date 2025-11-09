import React from "react";
import { useUsuario } from "../../hooks/useUsuario";

export default function Perfil() {
  const usuario = useUsuario();

  if (!usuario) return <p>Cargando sesión...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil del usuario</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.telefono}</p>
      <p><strong>Rol:</strong> {usuario.esAdmin() ? "Administrador" : "Cliente"}</p>
    </div>
  );
}
