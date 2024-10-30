import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";

export const categories = [
  {
    name: "Hoodies",
    cover:
      "https://i.pinimg.com/564x/14/ca/df/14cadfce069dee218901266f4275a466.jpg",
    desc: "Premium, cozy hoodie with a modern design, perfect for everyday comfort and style.",
  },
  {
    name: "Sweatshirts",
    cover:
      "https://i.pinimg.com/736x/85/2b/d2/852bd25002e07da98640892d8b36c230.jpg",
    desc: "Comfortable sweatshirt with a classic fit, perfect for layering or casual wear.",
  },
  {
    name: "Jackets",
    cover:
      "https://i.pinimg.com/564x/15/c7/40/15c740b3bf835b2330409fe28b33534a.jpg",
    desc: "Stylish and durable jacket designed for warmth and versatility, ideal for any occasion.",
  },
  {
    name: "Overshirts",
    cover:
      "https://i.pinimg.com/564x/35/73/fa/3573fa5b8924352103ca940c12d4362f.jpg",
    desc: "Trendy overshirt crafted for a relaxed fit, ideal for layering and versatile styling.",
  },
];

export function HeaderNavigationMenu() {
  const [url] = React.useState(
    "https://i.pinimg.com/736x/dd/18/c2/dd18c267e80d2e3fe2f48b21bc826003.jpg"
  );
  const [index, setIndex] = React.useState<{
    name: string;
    cover: string;
    desc: string;
  } | null>(null);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/home"
            className={navigationMenuTriggerStyle()}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem onMouseLeave={() => setIndex(null)}>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className={`row-span-4 overflow-hidden rounded-md`}>
                <img src={index?.cover ?? url} alt={index?.name} className="w-full h-full object-cover object-center rounded-md" />
              </li>
              {categories.map((item, idx) => (
                <ListItem
                  key={idx}
                  href={"/products"}
                  title={item.name}
                  onMouseEnter={() => setIndex(item)}
                >
                  {item.desc}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
