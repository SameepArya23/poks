import ProductCard from "@/components/cards/productCard";
import { uuid } from "@/utils/generateUids";

const products = [
  {
    uid: uuid(),
    name: "Ketch Printed fit & flare",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST1k48e1f1hQulLtwFHepVX9ctzjW-UT5SQZ6eeqWw0HKvdikg6iwvgJbKrp2o0RXnSBilKvANu780dUKX65MGOXwSoczYpW11SSt0PJHuxTLJMRZ9RKMU&usqp=CAE",
    price: 9,
    inStock: true,
  },
  {
    uid: uuid(),
    name: "Men Checks Shirt Navy Blue",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuEp8to37dsY9kxeAcUtqOYk1lo7iIsWeK3M7hiBfcXPfPrPmmxa4ER_AJUSbOraW_XnQOckhC6irrd-4js4aNdxGwO4tvuNVb2ixumlzI",
    price: 12,
    inStock: true,
  },
  {
    uid: uuid(),
    name: "Libas Woman Pink Floral Printed Kurta",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR30U2Wdgh0cMvovcc94IwoPqK1X1H1KvlHwzep05EAq5-usxUXkNMtkCK5LqqbOV_PyyqN7CesyyoKu8W0Lr8vjrjdzNQkqIT7AV2VKgE2&usqp=CAE",
    price: 10,
    inStock: false,
  },
  {
    uid: uuid(),
    name: "Casual Men Printed Shirt",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOIGFlyRZeZ0epiUuOaat15OgAjPdxyL2X-yHN6spZGffbPXPqECETTgAARRlVrw9KJnMulN1jr3sZe_Z_G29w_PeQ1yWdG360nxTczO_Ra5eba0nEvv4lOg&usqp=CAE",
    price: 6,
    inStock: true,
  },
];

const SimilarProducts = () => {
  return (
    <section className="p-8 flex flex-col items-start gap-10">
      <div>
        <h3 className="text-2xl font-bold text-color-500">
          You might also like
        </h3>
        <h5 className="text-sm text-color-100">SIMILAR PRODUCTS</h5>
      </div>
      <div className="flex gap-8">
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
    </section>
  );
};

export default SimilarProducts;
