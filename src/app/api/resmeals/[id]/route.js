import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/models/db";
import mongoose from "mongoose";
import { Product } from "@/lib/models/products";

async function connectToDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export async function GET(req, { params }) {
  const productId = params.id;

  try {
    await connectToDB();

    const result = await Product.find({ restoid: productId });

    // Check if the result is an empty array
    if (result.length === 0) {
      return NextResponse.json(
        { message: "No products found for this restaurant ID" },
        { status: 204 } // 204 No Content
      );
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving product:", error); // Log error for debugging
    return NextResponse.json(
      { message: "Failed to retrieve product", error: error.message },
      { status: 500 }
    );
  }
}
