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

export async function GET(req, content) {
  const productId = content.params.id;

  try {
    await connectToDB();

    const result = await Product.find({ restoid: productId });
    if (!result) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to retrieve product", error },
      { status: 500 }
    );
  }
}

// PUT: Update a product by ID
export async function PUT(req, content) {
  const productId = content.params.id;

  try {
    const body = await req.json();
    await connectToDB();

    const result = await Product.findByIdAndUpdate(productId, body, {
      new: true,
    });

    if (!result) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update product", error },
      { status: 500 }
    );
  }
}

// DELETE: Remove a product by ID
export async function DELETE(req, content) {
  const productId = content.params.id;

  try {
    await connectToDB();
    const result = await Product.findByIdAndDelete(productId);

    if (!result) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete product", error },
      { status: 500 }
    );
  }
}
