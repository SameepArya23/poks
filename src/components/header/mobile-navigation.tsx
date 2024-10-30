import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { categories } from "./navigations";
import { useNavigate } from "react-router-dom";
import { DrawerClose } from "../ui/drawer";

const MobileNavigation = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const showCategories = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="w-full flex justify-center">
        <DrawerClose>
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={() => navigate("/home")}
          >
            Home
          </Button>
        </DrawerClose>
        <Button
          variant={"ghost"}
          className="w-full flex items-center"
          onClick={showCategories}
        >
          Categories{" "}
          <ChevronDown
            className={`ml-2 transition-all ${show && "rotate-180"}`}
            size={15}
          />
        </Button>
        <DrawerClose>
          <Button variant={"ghost"} className="w-full">
            About
          </Button>
        </DrawerClose>
        <DrawerClose>
          <Button variant={"ghost"} className="w-full">
            Contact
          </Button>
        </DrawerClose>
      </div>
      <div
        className={`flex flex-wrap justify-center gap-6 mt-6 transition-all ${
          !show ? "translate-x-24 opacity-0 h-0" : "translate-x-0 opacity-1"
        }`}
      >
        {categories.map((item, idx) => (
          <div className="relative w-32 h-40 rounded-md" key={idx}>
            <img
              src={item.cover}
              alt="category-cover"
              className="w-full h-full object-cover object-center rounded-md"
            />
            <DrawerClose
              className="absolute top-0 left-0 bg-[#000000ba] w-full h-full rounded-md flex justify-center items-center text-white z-2"
              onClick={() => navigate("/products")}
            >
              {item.name}
            </DrawerClose>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
