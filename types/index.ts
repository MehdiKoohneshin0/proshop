import { insertProductSchema } from "@/lib/validator";
import { z } from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  price: number;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
