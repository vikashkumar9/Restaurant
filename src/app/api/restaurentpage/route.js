import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Login } from "@/lib/models/products";
import { loginstr } from "@/lib/models/db";

export async function GET(req) {
  try {
    await mongoose.connect(loginstr);
    const result = await Login.find();
    return NextResponse.json(result);
  } catch (error) {
    console.error("GET request error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
