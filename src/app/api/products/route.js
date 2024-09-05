import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/models/db";
import mongoose from "mongoose";
import { Product } from "@/lib/models/products";

// Helper function to connect to the database only once
async function connectToDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export async function GET(req, res) {
  try {
    await connectToDB();
    const result = await Product.find();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to retrieve products", error }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, price, image, description, category } = body;

    // Input validation
    if (!name || !price || !description || !image || !category) {
      return NextResponse.json(
        { message: "Data is not submitted. Please fill all input fields." },
        { status: 400 }
      );
    }

    await connectToDB();

    const product = new Product({
      name,
      price,
      description,
      image,
      category,
      quantity: 1,
    });

    const result = await product.save();
    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Failed to save product", error }, { status: 500 });
  }
}
