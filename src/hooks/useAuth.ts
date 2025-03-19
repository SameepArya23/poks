import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { login, logout, register } from "../services/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("access", data.data.accessToken);
      localStorage.setItem("refresh", data.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      queryClient.setQueryData(["authUser"], data.user);
      toast.success(data.message);
    },
    onError: (data: AxiosError<{ message?: string }>) => {
      if (data.status === 404) {
        toast.error(data.response?.data?.message);
      }
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data: AxiosError<{ errors?: any[]; message?: string }>) => {
      if (data.status === 422) {
        const key =
          data.response?.data?.errors &&
          Object.keys(data.response?.data?.errors[0])[0];
        const msg =
          data.response?.data?.errors &&
          key &&
          data.response?.data?.errors[0][key];
        toast.error(msg);
      }
      if(data.status == 409){
        toast.error(data.response?.data?.message);
      }
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      queryClient.setQueryData(["authUser"], null);
    },
  });
};
