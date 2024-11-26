import Image from "next/image";
import Link from "next/link";
import "./Explore.css";

export default function Explore() {

   return (
      <>
         <div className="container-17">
            <Link href="/Art">
               <h1 className="ExploreArt">Explore Artworks</h1>
            </Link>
         </div>
         <div className="container-27">
            <div className="row">
               <Image
                  className="images-2"
                  src="/Group 131.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 132.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-133"
                  src="/Group 133.png"
                  alt="Next.js Image"
                  width={380}
                  height={470}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 134.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-135"
                  src="/Group 135.png"
                  alt="Next.js Image"
                  width={350}
                  height={465}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 136.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 137.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 138.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               <Image
                  className="images-2"
                  src="/Group 139.png"
                  alt="Next.js Image"
                  width={345}
                  height={515}
                  property
               />
               
            </div>
         </div>
      </>
   );
}