import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Banner from "../header/banner";
import { useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Footer from "../footer/footer";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <ScrollArea className="h-screen w-full rounded-md border">
        <Banner />
        <Header />
        <Outlet />
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Layout;
