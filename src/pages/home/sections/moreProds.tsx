import ProductCard from "@/components/cards/productCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MoreProds = () => {
  const featured = [
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
  ];

  const latest = [
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
  
  return (
    <div className="py-12">
      <Tabs defaultValue="featured"className="flex flex-col items-center">
        <TabsList className="">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <div className="flex flex-wrap justify-center gap-8">
            {featured.map((item, idx) => (
              <ProductCard
                key={idx}
                name={item.name}
                price={item.price}
                image={item.image}
                inStock={item.inStock}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="latest">
          <div className="flex gap-8">
            {latest.map((item, idx) => (
              <ProductCard
                key={idx}
                name={item.name}
                price={item.price}
                image={item.image}
                inStock={item.inStock}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoreProds;
