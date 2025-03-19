import { StateCreator } from "zustand";

// authSlice.ts
export interface AuthState {
  user: any;
  getCurrentUser: () => void;
  access: string | null;
  refresh: string | null;
}
export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  user: null,
  access: null,
  refresh: null,
  getCurrentUser: () => {
    const stringUserObj = localStorage.getItem("user");
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");
    const user = stringUserObj ? JSON.parse(stringUserObj) : null;
    set(() => ({ user: user, access: accessToken, refresh: refreshToken }));
  },
});
