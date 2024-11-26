import { Inter } from "next/font/google";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Login  Next App",
  description: "Generated by create Login next app",
};

export default function LoginLayout({ children }) {
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
