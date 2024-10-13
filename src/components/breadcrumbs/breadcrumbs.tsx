import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FC } from "react";

interface pathProps {
  pathname: string;
  path: string;
}

const Breadcrumbs: FC<{ paths: pathProps[] }> = ({ paths }) => {
  return (
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((item, key) =>
            paths.length - 1 != key ? (
              <div className="flex items-center gap-2" key={key}>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-md" href={item.path}>
                    {item.pathname}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
            ) : (
              <BreadcrumbItem key={key}> 
                <BreadcrumbPage className="text-md">
                  {item.pathname}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )
          )}
        </BreadcrumbList>
      </Breadcrumb>
  );
};

export default Breadcrumbs;
