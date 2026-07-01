import { z } from "zod";
import { formatPriceIntoDecimal } from "./utils";

export const currencyValidator = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatPriceIntoDecimal(Number(value))),
    "Invalid currency format",
  );

// Schema for validating product insertion
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  brand: z.string().min(3, "Brand must be at least 3 characters long"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currencyValidator,
  stock: z.coerce.number(),
});
