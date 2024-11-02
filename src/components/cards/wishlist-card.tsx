import { useMediaQuery } from "../hooks/use-media-query";
import { Button } from "../ui/button";

interface Props {
  name: string;
  image: string;
  price: number;
}

const WishlistCard = ({ name, image, price }: Props) => {
  const isTextSm = useMediaQuery("(max-width: 1120px)");
  return (
    <div className="flex items-center justify-between gap-8 bg-muted my-2 p-2 rounded-md w-full max-md:gap-4">
      <div className="w-full flex justify-between max-sm:gap-4">
        <div className="w-full flex gap-4 max-sm:gap-4">
          <img
            src={image}
            alt="product"
            className="w-20 object-cover object-top rounded-md"
          />
          <div className="flex flex-col">
            <h1 className="text-lg max-lg:text-md">
              {isTextSm
                ? `${name.slice(0, 19)}...`
                : name.length > 25
                ? `${name.slice(0, 24)}...`
                : name}
            </h1>
            <div className="items-center gap-8 max-lg:gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-2 max-sm:flex">
              <h1 className={"text-lg max-lg:text-sm"}>${price}.00</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center max-sm:flex-col-reverse">
          <Button variant={"link"} size={"sm"}>
            Remove Item
          </Button>
          <Button size={"sm"}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
