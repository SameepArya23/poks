import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    component: () => JSX.Element;
    icon: any;
  }[];
  tab: {
    title: string;
    component: () => JSX.Element;
    icon: any;
  };
  setTab: React.Dispatch<
    React.SetStateAction<{
      title: string;
      component: () => JSX.Element;
      icon: any;
    }>
  >;
}

export function SidebarNav({
  className,
  items,
  tab,
  setTab,
  ...props
}: SidebarNavProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    navigate("/sign-in");
  };
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 overflow-auto no-scrollbar",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          variant={"ghost"}
          key={item.title}
          className={cn(
            tab.title === item.title ? "bg-muted" : "hover:underline",
            "justify-start"
          )}
          onClick={() => setTab(item)}
        >
          <item.icon size={16} className="mr-2" />
          {item.title}
        </Button>
      ))}
      <Button
        variant={"ghost"}
        className={cn("hover:underline", "justify-start")}
        onClick={handleLogout}
      >
        <LogOut size={16} className="mr-2" />
        Logout
      </Button>
    </nav>
  );
}
