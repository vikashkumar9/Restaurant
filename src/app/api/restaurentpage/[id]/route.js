import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Login, Product } from "@/lib/models/products";
import { loginstr, connectionstr } from "@/lib/models/db";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    await mongoose.connect(loginstr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const loginData = await Login.findById(id);

    return NextResponse.json(loginData);
  } catch (error) {
    console.error("GET request error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
