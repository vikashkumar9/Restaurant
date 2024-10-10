import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/models/db";
import mongoose from "mongoose";
import { Product } from "@/lib/models/products";

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;

  try {
    await mongoose.connect(connectionstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();
    const result = await Product.find();

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving products:", error); // Log error for debugging
    return NextResponse.json(
      { message: "Failed to retrieve products", error: error.message },
      { status: 500 }
    );
  }
}
