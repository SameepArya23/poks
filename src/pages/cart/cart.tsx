import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import UserCart from "./sections/user-cart";
import Summary from "./sections/summary";

const Cart = () => {
  return (
    <div className="flex flex-col mb-4">
      <section className="py-2 self-start px-32 py-2 max-lg:px-26 max-md:px-6 max-sm:px-6">
        <h1 className="text-3xl text-color-400 font-semibold my-2">Cart</h1>
        <Breadcrumbs
          paths={[
            { path: "/", pathname: "Home" },
            { path: "", pathname: "Cart" },
          ]}
        />
      </section>
      <div className="flex items-center gap-8 px-32 py-2 max-lg:px-20 max-md:px-6 max-sm:px-6 max-lg:gap-4 max-lg:flex-col">
        <UserCart />
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
