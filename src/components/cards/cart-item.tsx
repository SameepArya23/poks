import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useMediaQuery } from "../hooks/use-media-query";

interface Props {
  name: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const CartItem = ({ name, image, color, size, quantity, price }: Props) => {
  const [quant, setQuant] = useState(quantity);
  const isTextSm = useMediaQuery("(max-width: 1120px)");
  const isInfoSm = useMediaQuery("(max-width: 1084px)");
  return (
    <div className="flex items-center justify-between gap-8 bg-muted my-2 p-2 rounded-md w-full max-md:gap-4">
      <div className="flex gap-8">
        <img
          src={image}
          alt="product"
          className="w-20 object-cover object-top rounded-md"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-lg max-lg:text-md">
            {isTextSm
              ? `${name.slice(0, 19)}...`
              : name.length > 25
              ? `${name.slice(0, 24)}...`
              : name}
          </h1>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <p>Color:</p>
              <span
                style={{ background: color }}
                className="rounded-full w-5 h-5"
              ></span>
            </div>
            {!isInfoSm && <MinusIcon size={20} className="text-color-100" />}
            <div className="flex items-center gap-2">
              <p>Size:</p>
              <p>{size}</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 max-lg:gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-sm:flex">
            <h1 className={"text-lg max-lg:text-sm"}>${price}.00</h1>
            <div className="w-max h-max flex gap-1 rounded-md border-2 border-color-100">
              <Button
                variant={"ghost"}
                className="text-sm text-color-200 max-md:p-3"
                onClick={() => setQuant(quant - 1)}
              >
                <MinusIcon size={10} />
              </Button>
              <h1 className="text-primary text-sm bg-transparent rounded-md mt-2">
                {quant}
              </h1>
              <Button
                variant={"ghost"}
                className="text-sm text-color-200 max-md:p-3"
                onClick={() => setQuant(quant + 1)}
              >
                <PlusIcon size={10} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 max-lg:gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-sm:hidden">
        <h1 className={"text-lg max-lg:text-sm"}>${price}.00</h1>
        <div className="w-max h-max flex gap-1 rounded-md border-2 border-color-100">
          <Button
            variant={"ghost"}
            className="text-sm text-color-200 max-md:p-3"
            onClick={() => setQuant(quant - 1)}
          >
            <MinusIcon size={10} />
          </Button>
          <h1 className="text-primary text-sm bg-transparent rounded-md mt-2">
            {quant}
          </h1>
          <Button
            variant={"ghost"}
            className="text-sm text-color-200 max-md:p-3"
            onClick={() => setQuant(quant + 1)}
          >
            <PlusIcon size={10} />
          </Button>
        </div>
      </div>
      <Button variant={"ghost"}>
        <Trash2 size={14} />
      </Button>
    </div>
  );
};
export default CartItem;
