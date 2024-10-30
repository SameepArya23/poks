import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ProductCard from "@/components/cards/productCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Filters from "./section/filters";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FilterIcon } from "lucide-react";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex flex-col items-center py-2">
      <section className="py-2 self-start px-32 max-md:px-10">
        <Breadcrumbs
          paths={[
            { path: "/", pathname: "Home" },
            { path: "/products", pathname: "Products" },
          ]}
        />
      </section>
      <section className="py-2 w-full flex justify-start gap-12">
        {!isMobile && <Filters />}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4 px-32 max-md:px-10">
            <p className="text-md text-color-100">Showing 1-9 of 36 results.</p>
            <div className="flex items-center gap-5">
              <Select>
                <SelectTrigger className="max-w-32">
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
              {isMobile && (
                <Drawer>
                  <DrawerTrigger>
                    <FilterIcon size={18} />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Filters</DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Filters />
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>
          <div className="flex justify-center flex-wrap">
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
