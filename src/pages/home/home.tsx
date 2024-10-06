import Features from "./sections/features";
import ImgCarousel from "./sections/imgCarousel";
import MoreProds from "./sections/moreProds";
import ShopNow from "./sections/shopNow";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ImgCarousel />
      <Features />
      <ShopNow />
      <MoreProds />
    </div>
  );
};

export default Home;
