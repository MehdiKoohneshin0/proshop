import "dotenv/config";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "ProShop2";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "nextjs practice";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_COUNT =
  Number(process.env.NEXT_PUBLIC_LATEST_PRODUCTS_COUNT) || 4;
