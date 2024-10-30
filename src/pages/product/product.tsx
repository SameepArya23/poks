import { useLocation } from "react-router-dom";

import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ProductControls from "./sections/productControls";
import DetailsReview from "./sections/details&Review";
import SimilarProducts from "./sections/similarProducts";

const Product = () => {
  const { state } = useLocation();
  return (
    <div className="flex flex-col items-center">
      <section className="py-2 self-start px-32 py-2 max-lg:px-26 max-md:px-6 max-sm:px-6">
        <Breadcrumbs
          paths={[
            { path: "/", pathname: "Home" },
            { path: "/products", pathname: "Products" },
            { path: "", pathname: state?.name },
          ]}
        />
      </section>
      <ProductControls />
      <DetailsReview />
      <SimilarProducts />
    </div>
  );
};

export default Product;
