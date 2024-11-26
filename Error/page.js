import Image from "next/image";
import "./Error.css"
import Link from "next/link";

export default function Error(){

   return(
      <>
         <div className="container-11">
           <h1 className="Error">404 Error</h1>
         </div>
         <div className="container-12">
            <Image
            className="Error-1"
            src="/OBJECTS.png"
            alt="Next js Images"
            width={620}
            height={475}
            priority
            />
            <h2>Ooops! Page not Found</h2>
            <p>Maybe this page has broken or not created. Come back to the Homepage</p>
            <Link href="/">
               <button className="Homepage">Back To Home Page</button>
            </Link>
         </div>
      </>
   );
}