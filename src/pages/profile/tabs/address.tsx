import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Address = () => {
  return (
    <div className="max-md:w-full">
      <h1 className="text-lg font-semibold">Shipping Address</h1>
      <div className="grid gap-4 py-4 max-w-[28rem] max-md:w-full">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="street">Street address</Label>
          <Textarea
            placeholder="Enter street address"
            className="resize-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="city">City</Label>
            <Input type="city" id="city" placeholder="City" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="State" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="zipcode">Zip Code</Label>
            <Input type="zipcode" id="zipcode" placeholder="Zip Code" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="Country" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
