import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

const Password = () => {
  return (
    <div className="max-md:w-full">
      <h1 className="text-lg font-semibold">Account Details</h1>
      <div className="mt-2 grid gap-4 py-4 max-w-[20rem] max-md:w-full">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="newPassword">New Password</Label>
          <Input type="newPassword" id="newPassword" placeholder="New Password" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" placeholder="Confirm Password" />
        </div>
        <Button size={"sm"} className="w-max">
          <Save size={12} className="mr-1" />
          Save Password
        </Button>
      </div>
    </div>
  );
};

export default Password;
