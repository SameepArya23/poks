import { SuspenseLoader } from "@/components/spinner/suspenseLoader";
import { FC, ReactNode, Suspense } from "react";

const SuspenseContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense fallback={<SuspenseLoader />}>{children}</Suspense>;
};

export default SuspenseContainer;
