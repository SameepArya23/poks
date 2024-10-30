import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const Filters = () => {
  const categories = ["Men", "Women", "Unisex", "Hoodies", "Jeans", "Shirt"];
  const sizes = ["s", "m", "l", "xl", "xxl"];
  const [priceFilter, setPriceFilter] = useState(0);
  return (
    <div className="w-60 h-max rounded-sm border-2 border-color-50 p-3 max-md:border-0 max-md:w-full">
      <div>
        <h3 className="text-xl text-color-400 font-semibold">Categories</h3>
        <div className="mt-4 flex flex-col gap-5">
          {categories.map((item, key) => (
            <div key={key}>
              <div className="flex items-center space-x-2">
                <Checkbox id={item} />
                <label
                  htmlFor={item}
                  className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item}
                </label>
              </div>
              <Separator className="mt-3" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl text-color-400 font-semibold">Size</h3>
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
      <div className="my-4">
        <h3 className="text-xl text-color-400 font-semibold">Price</h3>
        <div className="mt-4 flex flex-col gap-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Slider
                  defaultValue={[0]}
                  onValueChange={(e) => setPriceFilter(e[0])}
                  max={1000}
                  step={1}
                />
              </TooltipTrigger>
              <TooltipContent>${priceFilter}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Filters;
