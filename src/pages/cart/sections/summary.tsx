import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[35%] bg-muted p-4 rounded-md flex flex-col gap-4 max-lg:w-full">
      <h1 className="text-lg">Order summary</h1>
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
      <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      <Button variant={"link"} onClick={() => navigate("/products")}>
        Continue shopping
      </Button>
    </div>
  );
};

export default Summary;
