import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MobileNavigation from "./mobile-navigation";
import { HeaderNavigationMenu } from "./navigations";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <div className="w-full px-10 flex justify-between items-center">
        <h1 className="logo-txt">PAYOAKS</h1>
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <div className="flex items-center gap-6">
                  <Input
                    id="search"
                    placeholder="Search products"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="search"
                    autoCorrect="off"
                  />
                  <Button variant={"ghost"} className="py-0 px-2">
                    <Icons.cart />
                  </Button>
                  <Button variant={"ghost"} className="py-0 px-2">
                    <Icons.account />
                  </Button>
                </div>
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <MobileNavigation />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-around items-center">
      <h1 className="logo-txt">PAYOAKS</h1>
      <HeaderNavigationMenu />
      <div className="flex items-center gap-6">
        <Input
          style={{ maxWidth: "15rem" }}
          id="search"
          placeholder="Search products"
          type="text"
          autoCapitalize="none"
          autoComplete="search"
          autoCorrect="off"
        />
        <Button variant={"ghost"} className="py-0 px-2">
          <Icons.cart />
        </Button>
        <Button variant={"ghost"} className="py-0 px-2">
          <Icons.account />
        </Button>
      </div>
    </div>
  );
};

export default Header;
