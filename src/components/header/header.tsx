import { Icons } from "../Icons";
import { Input } from "../ui/input";
import { HeaderNavigationMenu } from "./navigations";

const Header = () => {
  return (
    <div
      className="w-full flex justify-around items-center"
    >
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
        <Icons.cart />
        <Icons.account />
      </div>
    </div>
  );
};

export default Header;
