import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Save, UserPen } from "lucide-react";
import { useState } from "react";

const Account = () => {
  const name = "Sameep Arya";
  const email = "sameeparya02@gmail.com";
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-md:w-full">
      <h1 className="text-lg font-semibold">Account Details</h1>
      {!isEdit ? (
        <div className="mt-2 flex flex-col gap-4 py-4 max-w-[20rem] max-md:w-full">
          <div className="w-full flex items-center gap-1.5">
            <Avatar>
              <AvatarFallback className="text-[#4078FF] bg-[#F0F1FF]">
                {name
                  .split(" ")
                  .map((item) => item.slice(0, 1).toLocaleUpperCase())}
              </AvatarFallback>
            </Avatar>
            <p className="text-lg font-semibold text-color-400">{name}</p>
          </div>
          <div className="w-full flex items-center gap-1.5 px-3">
            <Mail size={18} className="mr-2" />
            <p className="text-lg font-semibold text-color-400">{email}</p>
          </div>
          <Button size={"sm"} className="w-max" onClick={() => setIsEdit(true)}>
            <UserPen size={12} className="mr-1" />
            Edit
          </Button>
        </div>
      ) : (
        <div className="mt-2 grid gap-4 py-4 max-w-[20rem] max-md:w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="fullname">Full Name</Label>
            <Input type="fullname" id="fullname" placeholder="Full Name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" />
          </div>
          <Button size={"sm"} className="w-max" onClick={() => setIsEdit(false)}>
            <Save size={12} className="mr-1" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default Account;
