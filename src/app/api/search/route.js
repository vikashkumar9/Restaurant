import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Login } from "@/lib/models/products";
import { connectionstr } from "@/lib/models/db";

export async function GET(req) {
  const queryParams = req.nextUrl.searchParams;
  const location = queryParams.get("location");
  const restaurant = queryParams.get("restaurant");
  const filter = {};
  if (location) {
    filter.city = new RegExp(location, "i");
  } else if (restaurant) {
    filter.name = new RegExp(restaurant, "i");
  }
  await mongoose.connect(connectionstr);
  const result = await Login.find(filter);
  return NextResponse.json(result);
}
