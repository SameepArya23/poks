import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

interface Props {
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  // uid: string;
}

const ProductCard = ({ name, price, image, inStock }: Props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quant, setQuant] = useState(0);
  return (
    <Card className="p-2 cursor-pointer max-w-64">
      <CardContent className="group p-0 overflow-hidden rounded-md relative">
        <img
          src={image}
          alt={""}
          className="w-full h-72 object-cover object-center rounded-md transition-all group-hover:scale-105"
        />
        <div className="w-full p-2 flex gap-1 absolute -bottom-4 transition-all ease opacity-0 group-hover:bottom-0 group-hover:opacity-100">
          {quant == 0 ? (
            <Button
              className="w-full z-10 flex justify-center items-center gap-2"
              onClick={() => setQuant(quant + 1)}
            >
              Add to cart <ShoppingCart size={16} />
            </Button>
          ) : (
            <div className="w-full flex justify-center items-center gap-2">
              <Button
                className="w-full z-10 text-md"
                onClick={() => setQuant(quant - 1)}
              >
                -
              </Button>
              <h1 className="text-color-100 text-lg bg-primary px-4 py-1 rounded-md z-10">{quant}</h1>
              <Button
                className="w-full z-10 text-md"
                onClick={() => setQuant(quant + 1)}
              >
                +
              </Button>
            </div>
          )}
          <Button
            className="py-0 px-3 z-10 flex justify-center items-center gap-2"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? <Icons.heartFilled /> : <Icons.heart />}
          </Button>
        </div>
        <div className="w-full h-full z-0 absolute inset-0 bg-primary transition-all ease opacity-0 group-hover:opacity-30"></div>
      </CardContent>
      <CardFooter className="p-3">
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-lg font-semibold mb-2">
                  {name.length > 25 ? name.slice(0, 25) + "..." : name}
                </p>
              </TooltipTrigger>
              {name.length > 25 && (
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
          <div className="flex gap-2">
            {inStock ? (
              <span className="flex justify-center items-center border-2 border-color-100 rounded-full px-3 py-0 text-xs text-success">
                IN STOCK
              </span>
            ) : (
              <span className="flex justify-center items-center border-2 border-color-100 rounded-full px-3 py-0 text-xs text-destructive">
                OUT OF STOCK
              </span>
            )}
            <p className="text-lg text-color-300 font-semibold">${price}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
