// src/hooks/useUsuario.js
import { useAuth } from "react-oidc-context";
import { Cliente } from "../Models/Cliente";
import { Administrador } from "../Models/Admin";

export function useUsuario() {
  const auth = useAuth();

  if (!auth?.user) return null;

  // 🔐 Extraemos los tokens disponibles
  let { profile, id_token, access_token, expires_at } = auth.user;

  // 🧠 Fallback automático para modo local o pruebas
  // Si no hay id_token (a veces pasa en local), usa access_token
  if (!id_token && access_token) {
    console.warn("⚠️ id_token no disponible, usando access_token como fallback temporal.");
    id_token = access_token;
  }

  const tokens = { id_token, access_token, expires_at };

  // 👥 Roles
  const grupos = profile["cognito:groups"] || ["cliente"];

  // Retornamos la instancia correspondiente
  if (grupos.includes("admin")) return new Administrador(profile, tokens);
  return new Cliente(profile, tokens);
}
