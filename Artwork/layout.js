import { Inter } from "next/font/google";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Upload Artwork  Next App",
  description: "Generated by create Upload Artwork next app",
};

export default function ArtworkLayout({ children }) {
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