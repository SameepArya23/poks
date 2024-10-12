import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  MinusIcon,
  MoreHorizontalIcon,
  StarIcon
} from "lucide-react";
import { useState } from "react";
import Review from "../modals/review";

const reviews = [
  {
    name: "Emily Davis",
    date: "1 week ago",
    rating: 4,
    comment:
      "This company always goes above and beyond to satisfy their customers.",
  },
  {
    name: "Daniel Smith",
    date: "2 months ago",
    rating: 5,
    comment: "I can't believe how affordable and high-quality this item is!",
  },
  {
    name: "Benjamin Clark",
    date: "23 April",
    rating: 3,
    comment: "These guys know their stuff, and it shows in their products.",
  },
  {
    name: "Jessica Brown",
    date: "5 days ago",
    rating: 5,
    comment: "Fantastic service and excellent products. Highly recommend!",
  },
  {
    name: "Michael Johnson",
    date: "1 month ago",
    rating: 4,
    comment: "Very good quality, but shipping took longer than expected.",
  },
  {
    name: "Sarah Williams",
    date: "2 weeks ago",
    rating: 3,
    comment:
      "Decent product, but not quite what I expected based on the description.",
  },
  {
    name: "David Lee",
    date: "3 months ago",
    rating: 5,
    comment:
      "Best purchase I've made in a while! Will definitely come back for more.",
  },
  {
    name: "Sophia Green",
    date: "2 days ago",
    rating: 4,
    comment: "Good quality and fast delivery, but a bit overpriced.",
  },
  {
    name: "John White",
    date: "6 months ago",
    rating: 2,
    comment:
      "The product did not meet my expectations, and customer support was slow.",
  },
  {
    name: "Olivia King",
    date: "4 weeks ago",
    rating: 4,
    comment:
      "Solid product overall. Happy with my purchase, but there is room for improvement.",
  },
];

const DetailsReview = () => {
  const [tab, setTab] = useState<"details" | "reviews">("details");
  const [load, setLoad] = useState(false);

  const arrLength = load ? reviews : reviews.slice(0, 3);
  return (
    <section className="w-full flex gap-8 my-12">
      <div className="">
        <Button
          variant={"ghost"}
          className={`w-48 flex justify-start items-center gap-2 bg-${
            tab == "details" && "muted"
          }`}
          onClick={() => setTab("details")}
        >
          <MoreHorizontalIcon size={16} /> Details
        </Button>
        <Button
          variant={"ghost"}
          className={`w-48 flex justify-start items-center gap-2 bg-${
            tab == "reviews" && "muted"
          }`}
          onClick={() => setTab("reviews")}
        >
          <StarIcon size={16} /> Reviews
        </Button>
      </div>
      {tab == "details" ? (
        <div className="w-full">
          <h1 className="text-xl font-semibold">Details</h1>
          <p className="text-md">
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.
          </p>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-xl font-semibold">Reviews</h1>
          <span className="flex items-center gap-1">
            <h1 className="text-xl font-semibold">4.2</h1>
            <MinusIcon className="text-color-100" />
            <p className="text-color-100 text-sm">54 Reviews</p>
          </span>
          <div className="my-5 flex justify-between">
            <Review />
            <Select>
              <SelectTrigger className="max-w-[180px]">
                <SelectValue placeholder="SORT BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Time">Time</SelectItem>
                <SelectItem value="Rating (Low to High)">
                  Rating (Low to High)
                </SelectItem>
                <SelectItem value="Rating (High to Low)">
                  Rating (High to Low)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div>
            {arrLength.map((item, idx) => (
              <div className="w-full flex items-start gap-4 mt-6" key={idx}>
                <Avatar>
                  <AvatarFallback className="text-[#4078FF] bg-[#F0F1FF]">
                    {item.name
                      .split(" ")
                      .map((item) => item.slice(0, 1).toLocaleUpperCase())}
                  </AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <div className="w-full flex justify-between">
                    <p className="text-color-500 text-lg">{item.name}</p>
                    <span className="flex items center gap-1">
                      {Array(5)
                        .fill(null)
                        .map((_, idx) =>
                          idx + 1 < item.rating ? (
                            <StarFilledIcon
                              key={idx}
                              className="text-primary"
                            />
                          ) : (
                            <StarFilledIcon
                              key={idx}
                              className="text-transparent stroke-primary"
                            />
                          )
                        )}
                    </span>
                  </div>
                  <p className="text-color-100 text-sm">{item.date}</p>
                  <p className="text-color-200 text-md">{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button variant={"outline"} onClick={() => setLoad(!load)}>
              {load ? "Hide Reviews" : "Show More Reviews"}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailsReview;
