import { Separator } from "@/components/ui/separator";
import { Heart, Key, ShoppingCart, Truck, UserRound } from "lucide-react";
import { useState } from "react";
import { SidebarNav } from "./side-nav";
import Orders from "../tabs/orders";
import Wishlist from "../tabs/wishlist";
import Address from "../tabs/address";
import Password from "../tabs/password";
import Account from "../tabs/account";

const sidebarNavItems = [
  {
    title: "Orders",
    component: Orders,
    icon: ShoppingCart,
  },
  {
    title: "Wishlist",
    component: Wishlist,
    icon: Heart,
  },
  {
    title: "Address",
    component: Address,
    icon: Truck,
  },
  {
    title: "Password",
    component: Password,
    icon: Key,
  },
  {
    title: "Account Detail",
    component: Account,
    icon: UserRound,
  },
];

export default function ProfileLayout() {
  const [tab, setTab] = useState<{
    title: string;
    component: () => JSX.Element;
    icon: any;
  }>(sidebarNavItems[0]);
  return (
    <div className="w-full">
      <Separator className="mt-2 mb-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav tab={tab} setTab={setTab} items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <tab.component />
        </div>
      </div>
    </div>
  );
}
