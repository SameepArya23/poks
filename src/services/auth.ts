import { useApi } from "@/api/apiHooks";

interface Auth {
  login: loginPayload;
  register: registerPayload;
}

type loginPayload = { username: string; password: string };

type registerPayload = {
  username: string;
  password: string;
  role: string;
  email: string;
};

export const login = async (payload: Auth["login"]) => {
  const { data } = await useApi().post("login", payload);
  return data;
};

export const register = async (payload: Auth["register"]) => {
  const { data } = await useApi().post("register", payload);
  return data;
};

export const logout = async () => {
  const { data } = await useApi().post("logout");
  return data;
};
