import { create } from "zustand";
import { createAuthSlice, AuthState } from "./slices/AuthSlice";

// Explicitly define AppState type
interface AppState extends AuthState {}

// Create Zustand store with middleware
export const useAppStore = create<AppState>()(
      (...args) => ({
        ...createAuthSlice(...args),
      }),
);
