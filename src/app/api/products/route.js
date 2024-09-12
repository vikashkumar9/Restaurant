import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/models/db";
import mongoose from "mongoose";
import { Product } from "@/lib/models/products";

let isConnected = false;


async function connectToDatabase() {
  if (isConnected) return;
  
  try {
    await mongoose.connect(connectionstr, { useNewUrlParser: true, useUnifiedTopology: true });
    isConnected = true;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
}

// export async function GET(req, res) {
//   try {
//     await connectToDatabase();
//     const result = await Product.find();
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Failed to retrieve products", error }, { status: 500 });
//   }
// }

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, price, image, description, category,restoid } = body;
   console.log(body)
    // Input validation
    if (!name || !price || !description || !image || !category) {
      return NextResponse.json(
        { message: "Data is not submitted. Please fill all input fields." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const product = new Product({
      name,
      price,
      description,
      image,
      category,
      quantity: 1,
      restoid,
    });

    const result = await product.save();
    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Failed to save product", error }, { status: 500 });
  }
}

