import { useAuth } from "react-oidc-context";
import Usuario from "../Models/Usuario";

export const useUsuario = () => {
  const auth = useAuth();

  if (!auth.user) return null;

  const profile = auth.user.profile;
  const idToken = auth.user.id_token;
  const accessToken = auth.user.access_token;

  return new Usuario(profile, idToken, accessToken);
};
