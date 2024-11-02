import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import carouselbanner1 from "../../../assets/Black and White Clean Fashion Landscape Banner.png";
import carouselbanner2 from "../../../assets/Grey Modern New Collection Photo Collage Fashion Promotion Banner.png";
import carouselbanner3 from "../../../assets/Black White Bold Simple Fashion Product Promotion Landscape Banner.png";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const images = [
  {
    image: carouselbanner1,
    heading: "Fresh Arrivals Online",
    caption: "Discover Our Newest Collection Today.",
  },
  {
    image: carouselbanner2,
    heading: "Check out our new collection!",
    caption: "Discover Our Newest Collection Today.",
  },
  {
    image: carouselbanner3,
    heading: "Get upto 50% off",
    caption: "Discover Our Newest Collection Today.",
  },
];

const ImgCarousel = () => {
  const [isHover, setIsHover] = useState(false);
  const isSm = useMediaQuery("(max-width: 640px)");
  const navigate = useNavigate();
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-full relative"
    >
      <CarouselContent
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {images.map((item, index) => (
          <CarouselItem style={{ maxHeight: "40rem" }} key={index}>
            {isHover && (
              <div className="w-full h-full px-36 flex flex-col justify-center items-start gap-1 bg-backdrop absolute top-1/2 -translate-y-1/2 z-10 max-sm:px-16">
                <h2 className="text-secondary text-4xl max-sm:text-2xl">
                  {item.heading}
                </h2>
                <p className="text-secondary max-sm:text-sm">{item.caption}</p>
                <Button
                  size={isSm ? "sm" : "default"}
                  className="flex gap-1 align-center mt-1"
                  onClick={()=>navigate("/products")}
                >
                  View collection <ArrowRight className="w-4" />
                </Button>
              </div>
            )}
            <img
              src={item.image}
              alt={item.image}
              className="w-full h-full object-cover object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};

export default ImgCarousel;
