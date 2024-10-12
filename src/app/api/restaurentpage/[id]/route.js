import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Login, Product } from "@/lib/models/products";
import { connectionstr } from "@/lib/models/db";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    await mongoose.connect(connectionstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const restaurent = await Login.findById(id);
    const meals = await Product.find({ restoid: id });
    return NextResponse.json({ restaurent, meals });
  } catch (error) {
    console.error("GET request error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
