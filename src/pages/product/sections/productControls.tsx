import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";

import { Icons } from "@/components/Icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Share from "../modals/share";

const ProductControls = () => {
  const { state } = useLocation();
  const [quant, setQuant] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const colors = ["#A3BEF8", "#FFD58A", "#83B18B"];
  const sizes = ["s", "m", "l", "xl", "xxl"];
  return (
    <section className="py-2 flex gap-x-56">
      <div className="overflow-hidden rounded-md">
        <img
          src={state?.image}
          alt=""
          className="w-[26rem] h-[36rem] object-cover object-center rounded-md"
        />
      </div>
      <div>
        <div className="flex gap-20">
          <h1 className="text-2xl font-semibold">{state?.name}</h1>
          <Share />
        </div>
        <div className="flex gap-2">
          <span className="flex justify-center items-center bg-muted text-color-300 text-lg rounded-full px-3 py-0 text-xs">
            <StarFilledIcon fontSize={18} /> 4.2 - 54 Reviews
          </span>
          <span className="flex justify-center items-center border-2 border-color-100 rounded-full px-3 py-0 text-xs text-success">
            IN STOCK
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <h1 className="text-xl font-semibold">{state?.price}$</h1>
        </div>
        <div className="mt-8">
          <h1 className="text-md text-color-100">AVAILABLE COLORS</h1>
          <ToggleGroup type="single" className="justify-start mt-2">
            {colors.map((color, key) => (
              <ToggleGroupItem
                className="w-8 h-8 p-0 rounded-full data-[state=on]:border-color-300 data-[state=on]:border-2"
                value={`${color}`}
                aria-label={`Toggle ${color}`}
                key={key}
              >
                <span
                  className={`w-6 h-6 rounded-full`}
                  style={{ background: color }}
                ></span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="mt-8">
          <h1 className="text-md text-color-100">SELECT SIZE</h1>
          <ToggleGroup
            type="single"
            variant={"outline"}
            className="justify-start mt-2"
          >
            {sizes.map((size, key) => (
              <ToggleGroupItem
                className="data-[state=on]:border-color-300 data-[state=on]:border-2"
                value={`${size}`}
                aria-label={`Toggle ${size}`}
                key={key}
              >
                <span>{size.toLocaleUpperCase()}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="mt-8">
          <h1 className="text-md text-color-100">QUANTITY</h1>
          <div className="w-max flex items-center gap-2 mt-2 rounded-md border-2 border-muted">
            <Button
              variant={"ghost"}
              className="text-xl text-color-200"
              onClick={() => setQuant(quant - 1)}
            >
              <MinusIcon size={14} />
            </Button>
            <h1 className="text-primary text-lg bg-transparent px-4 py-1 rounded-md z-10">
              {quant}
            </h1>
            <Button
              variant={"ghost"}
              className="text-xl text-color-200"
              onClick={() => setQuant(quant + 1)}
            >
              <PlusIcon size={14} />
            </Button>
          </div>
          <div className="w-max flex items-center gap-2 mt-8">
            <Button
              className="w-full px-16 flex justify-center items-center gap-2"
              onClick={() => setQuant(quant + 1)}
            >
              Add to cart <ShoppingCart size={16} />
            </Button>
            <Button onClick={() => setIsWishlisted(!isWishlisted)}>
              {isWishlisted ? <Icons.heartFilled /> : <Icons.heart />}
            </Button>
          </div>
          <h1 className="text-sm text-color-100 mt-2">
            — Free shipping on orders $100+
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProductControls;
