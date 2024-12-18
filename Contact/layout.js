import { Inter } from "next/font/google";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Contact  Next App",
  description: "Generated by create Contact next app",
};

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
