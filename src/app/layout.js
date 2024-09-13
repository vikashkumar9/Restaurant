
import { Inter } from "next/font/google";
import "./globals.css";
import MealsFooter from "@/components/Footer/MealsFooter";
import UserHeader from "@/components/Userheader/UserHeader";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(

  { children }


) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        {/* <UserHeader/> */}
        {children} 
        <MealsFooter/>
        </body>
       
    </html>
  );
}
