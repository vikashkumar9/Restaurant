import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { UserLogin } from "@/lib/models/products";
import { connectionstr } from "@/lib/models/db";

export async function GET(req) {
  try {
    await mongoose.connect(connectionstr);
    const result = await UserLogin.find();
    return NextResponse.json(result);
  } catch (error) {
    console.error("GET request error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  let result;
  let success = false;

  try {
    const body = await req.json();
    await mongoose.connect(connectionstr);

    if (body.login) {
      
      result = await  UserLogin .findOne({
        email: body.email,
        password: body.password,
      });
      if (result) {
        success = true;
      }
    } else {
      
      const { name, email, password, location, city, contact } = body;
      const login = new  UserLogin ({
        name,
        email,
        password,
        location,
        city,
        contact,
      });
      result = await login.save();
      success = true;
    }

    return NextResponse.json({ result, success });
  } catch (error) {
    console.error("POST request error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
