"use client";
import React, { useState } from "react";
import LoginForm from "@/components/login/LoginForm";

const handleLogindata =(logindata)=>{
  console.log(logindata)
}
const handleRegistrationdata=(registrationdata)=>{
console.log("rgistrationdata",registrationdata)
}
const Login = () => {

  return (
    <div>
    <LoginForm addLogindata={handleLogindata} addRgistrationdata={handleRegistrationdata}/>
    
    </div>
  );
};

export default Login;
