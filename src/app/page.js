"use client"
import Login from "./login/page";
export default function Home() {
  return (
    <main >
      <div className="bg-[url('/loginbg.jpeg')] bg-cover bg-center h-screen flex items-center justify-center">

      <Login/>
      </div>
      </main>
  );
}
