import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ProductCard from "@/components/cards/productCard";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const products = [
  {
    name: "MANIAC Men Oversized Shirt with Flap Pockets For Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwlWswxYxwrTahKyjRCT1uzALP3j5DIJ9JTiV9fVF6OHwjsfSwgWKm1rlbxzxyLqPSx_4Xq9calPemcm2KBLJdT1EFjXBIlurqU2RbuEA&usqp=CAE",
    price: 9,
    inStock: true,
  },
  {
    name: "Leriya Fashion Textured Shirts for Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSsEbgGeNfI7j8yc2cZsIDAiDjImY2IFgIbqyDuv4Kbyp8aYnHRLdTvMffi4CrSyRZfT4G7rsDah_A0UwMclHNYo8rwK4Ig9U6cqxPZ84",
    price: 12,
    inStock: true,
  },
  {
    name: "Patagonia Fjord Flannel Shirt",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxGfE9uXY6iLoNi-3MSbBdCyNpJvg6gT-t-k-EW1lOo3R0GxOFhYljUJF_y661h7TDhYEd-3OX5elPHtl7Z_JJSTdGY5Tp5waC2JmQRdwUag6j-ewPmChDmw",
    price: 10,
    inStock: false,
  },
  {
    name: "Lymio Casual Shirt for Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv4Rch-HluOEVhOSoRdZiREaBRgz5JWrtONWQNezz0c_DTCA3aeJamk9jqcMtWU8YmvCAis8MoGOQKQwNJ8huq9ke1tPEMMRdF37-EsSo",
    price: 6,
    inStock: true,
  },
  {
    name: "Ketch Printed fit & flare",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST1k48e1f1hQulLtwFHepVX9ctzjW-UT5SQZ6eeqWw0HKvdikg6iwvgJbKrp2o0RXnSBilKvANu780dUKX65MGOXwSoczYpW11SSt0PJHuxTLJMRZ9RKMU&usqp=CAE",
    price: 9,
    inStock: true,
  },
  {
    name: "Men Checks Shirt Navy Blue",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuEp8to37dsY9kxeAcUtqOYk1lo7iIsWeK3M7hiBfcXPfPrPmmxa4ER_AJUSbOraW_XnQOckhC6irrd-4js4aNdxGwO4tvuNVb2ixumlzI",
    price: 12,
    inStock: true,
  },
  {
    name: "Libas Woman Pink Floral Printed Kurta",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR30U2Wdgh0cMvovcc94IwoPqK1X1H1KvlHwzep05EAq5-usxUXkNMtkCK5LqqbOV_PyyqN7CesyyoKu8W0Lr8vjrjdzNQkqIT7AV2VKgE2&usqp=CAE",
    price: 10,
    inStock: false,
  },
  {
    name: "Casual Men Printed Shirt",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOIGFlyRZeZ0epiUuOaat15OgAjPdxyL2X-yHN6spZGffbPXPqECETTgAARRlVrw9KJnMulN1jr3sZe_Z_G29w_PeQ1yWdG360nxTczO_Ra5eba0nEvv4lOg&usqp=CAE",
    price: 6,
    inStock: true,
  },
  {
    name: "MANIAC Men Oversized Shirt with Flap Pockets For Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwlWswxYxwrTahKyjRCT1uzALP3j5DIJ9JTiV9fVF6OHwjsfSwgWKm1rlbxzxyLqPSx_4Xq9calPemcm2KBLJdT1EFjXBIlurqU2RbuEA&usqp=CAE",
    price: 9,
    inStock: true,
  },
  {
    name: "Leriya Fashion Textured Shirts for Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSsEbgGeNfI7j8yc2cZsIDAiDjImY2IFgIbqyDuv4Kbyp8aYnHRLdTvMffi4CrSyRZfT4G7rsDah_A0UwMclHNYo8rwK4Ig9U6cqxPZ84",
    price: 12,
    inStock: true,
  },
  {
    name: "Patagonia Fjord Flannel Shirt",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxGfE9uXY6iLoNi-3MSbBdCyNpJvg6gT-t-k-EW1lOo3R0GxOFhYljUJF_y661h7TDhYEd-3OX5elPHtl7Z_JJSTdGY5Tp5waC2JmQRdwUag6j-ewPmChDmw",
    price: 10,
    inStock: false,
  },
  {
    name: "Lymio Casual Shirt for Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv4Rch-HluOEVhOSoRdZiREaBRgz5JWrtONWQNezz0c_DTCA3aeJamk9jqcMtWU8YmvCAis8MoGOQKQwNJ8huq9ke1tPEMMRdF37-EsSo",
    price: 6,
    inStock: true,
  },
  {
    name: "Ketch Printed fit & flare",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST1k48e1f1hQulLtwFHepVX9ctzjW-UT5SQZ6eeqWw0HKvdikg6iwvgJbKrp2o0RXnSBilKvANu780dUKX65MGOXwSoczYpW11SSt0PJHuxTLJMRZ9RKMU&usqp=CAE",
    price: 9,
    inStock: true,
  },
  {
    name: "Men Checks Shirt Navy Blue",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuEp8to37dsY9kxeAcUtqOYk1lo7iIsWeK3M7hiBfcXPfPrPmmxa4ER_AJUSbOraW_XnQOckhC6irrd-4js4aNdxGwO4tvuNVb2ixumlzI",
    price: 12,
    inStock: true,
  },
  {
    name: "Libas Woman Pink Floral Printed Kurta",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR30U2Wdgh0cMvovcc94IwoPqK1X1H1KvlHwzep05EAq5-usxUXkNMtkCK5LqqbOV_PyyqN7CesyyoKu8W0Lr8vjrjdzNQkqIT7AV2VKgE2&usqp=CAE",
    price: 10,
    inStock: false,
  },
  {
    name: "Casual Men Printed Shirt",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOIGFlyRZeZ0epiUuOaat15OgAjPdxyL2X-yHN6spZGffbPXPqECETTgAARRlVrw9KJnMulN1jr3sZe_Z_G29w_PeQ1yWdG360nxTczO_Ra5eba0nEvv4lOg&usqp=CAE",
    price: 6,
    inStock: true,
  },
];

const Listing = () => {
  const categories = ["Men", "Women", "Unisex", "Hoodies", "Jeans", "Shirt"];
  const sizes = ["s", "m", "l", "xl", "xxl"];
  const [priceFilter, setPriceFilter] = useState(0);
  return (
    <div className="flex flex-col items-center px-32 py-2">
      <section className="py-2 self-start">
        <Breadcrumbs
          paths={[
            { path: "/", pathname: "Home" },
            { path: "/products", pathname: "Products" },
          ]}
        />
      </section>
      <section className="py-2 w-full flex justify-start gap-12">
        <div className="w-60 h-max rounded-sm border-2 border-color-50 p-3">
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
        <div className="w-full">
          <div className="flex justify-between mb-4">
            <p className="text-md text-color-100">Showing 1-9 of 36 results.</p>
            <Select>
              <SelectTrigger className="max-w-[180px]">
                <SelectValue placeholder="SORT BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Latest">Latest</SelectItem>
                <SelectItem value="Price (Low to High)">
                  Price (Low to High)
                </SelectItem>
                <SelectItem value="Price (High to Low)">
                  Price (High to Low)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-8 flex-wrap">
            {products.map((item, idx) => (
              <ProductCard
                key={idx}
                name={item.name}
                price={item.price}
                image={item.image}
                inStock={item.inStock}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
