"use server";

import { prisma } from "@/db/prisma-instance";
import { convertToPlainObject } from "../utils";

// Get Latest Products
export async function getLatestProducts(count: number) {
  const data = await prisma.product.findMany({
    take: count,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
}
