import { useForm, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseZodFormProps<TSchema extends ZodType> = {
  schema: TSchema;
};

export const useZodForm = <TSchema extends ZodType>({
  schema,
}: UseZodFormProps<TSchema>): UseFormReturn<z.infer<TSchema>> => {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
  });
};
