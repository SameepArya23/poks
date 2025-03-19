import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routesConfig";
import { Toaster } from "sonner";
import { useAppStore } from "./store";
import { useEffect } from "react";

function App() {
  const { getCurrentUser } = useAppStore();
  useEffect(() => {
    getCurrentUser();
  },[]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  );
}

export default App;
