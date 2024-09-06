import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Login } from "@/lib/models/products";
import { loginstr } from "@/lib/models/db";

let isConnected = false;

// Connect to the database
async function connectToDatabase() {
  if (isConnected) return;
  
  try {
    await mongoose.connect(loginstr, { useNewUrlParser: true, useUnifiedTopology: true });
    isConnected = true;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();
    const result = await Login.find();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    const { username, email, password } = body;
    
    if (!username || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const login = new Login({ username, email, password });
    const result = await login.save();
    
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Error saving data" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import { loginstr } from "@/lib/db";
// import mongoose from "mongoose";￼

// import { Login } from "@/lib/model/products";

// export async function GET(req, res) {
//   await mongoose.connect(loginstr);
//   const result = await Login.find();
//   return NextResponse.json(result);
// }

// export async function POST(req, res) {
//   const body = await req.json();

//   const { username, email, password } = body;
//   console.log(body);

//   await mongoose.connect(loginstr);
//   const login = new Login({
//     username: username,
//     email: email,
//     password: password,
//   });
//   const result = await login.save();

//   return NextResponse.json({ result, success: true });
// }