import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Review = () => {
  const [rate, setRate] = useState<number | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Write a revew</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Give us a review</DialogTitle>
          <DialogDescription>
            Please review our product. Tell us what we can improve...
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fullname">Full name</Label>
            <Input id="fullname" value="John Doe" className="col-span-3" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="review">Review</Label>
            <Textarea
              placeholder="Write your review..."
              className="resize-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <span className="flex items center gap-1">
              {Array(5)
                .fill(null)
                .map((_, idx) =>
                  rate && idx - 1 < rate ? (
                    <StarFilledIcon
                      key={idx}
                      className="text-primary"
                      onClick={() => setRate(idx)}
                    />
                  ) : (
                    <StarFilledIcon
                      key={idx}
                      className="text-transparent stroke-primary"
                      onClick={() => setRate(idx)}
                    />
                  )
                )}
            </span>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" className="w-full">
              Submit Your Review
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Review;
