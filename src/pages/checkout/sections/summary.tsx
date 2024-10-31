import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cartProds } from "@/pages/cart/sections/user-cart";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[35%] bg-muted p-4 rounded-md flex flex-col gap-4 max-lg:w-full">
      <h1 className="text-lg">Your Order</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-2">
          {cartProds.length > 2 ? (
            <>
              {cartProds.slice(0, 2).map((item, idx) => (
                <img
                  key={idx}
                  src={item.image}
                  alt="cart-item"
                  className="w-10 h-10 rounded-sm object-cover object-top"
                />
              ))}
              <p className="text-md text-color-100">+{cartProds.length - 2}</p>
            </>
          ) : (
            cartProds.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt="cart-item"
                className="w-10 h-10 rounded-sm object-cover object-top"
              />
            ))
          )}
        </div>
        <Button variant={"outline"} onClick={() => navigate("/cart")}>
          Edit cart
        </Button>
      </div>
      <div className="flex justify-between">
        <p className="text-md text-color-100">Subtotal:</p>
        <p className="text-md text-color-500">$ 90.00</p>
      </div>
      <div className="flex justify-between">
        <p className="text-md text-color-100">Shipping:</p>
        <p className="text-md text-color-500">Free</p>
      </div>
      <div className="flex justify-between">
        <p className="text-md text-color-100">Tax:</p>
        <p className="text-md text-color-500">$ 3.00</p>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between">
        <p className="text-md text-color-100">Total:</p>
        <p className="text-md text-color-500">$ 100.00</p>
      </div>
      <Button>Place Order</Button>
    </div>
  );
};

export default Summary;
