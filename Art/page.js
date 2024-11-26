import Image from "next/image";
import Link from "next/link";
import "./Art.css"

export default function Art(){

   return(
      <>
        
         <div className="container-10">
           <h1 className="Arts">Arts</h1>
         </div>
         <div className="container-1">
            <div className="row-1">
            <Image
               className="Group"
               src="/Group 212 (2).png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 166 (1).png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 155 (1).png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 214.png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 215.png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 213.png"
               alt="next.js images"
               width={380}
               height={470}
               priority
               />
               <Image
               className="Group"
               src="/Group 214 (1).png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 215 (1).png"
               alt="next.js images"
               width={350}
               height={465}
               priority
               />
               <Image
               className="Group"
               src="/Group 213 (1).png"
               alt="next.js images"
               width={280}
               height={465}
               priority
               />
            </div>
         </div>
         <div>
            <ul>
               <div className="row-3">
                  <li>
                     <Link href="/Art">1</Link>
                  </li><br/>
                  <li>
                     <Link href="/Artwork">2</Link>
                  </li><br/>
               </div>
            </ul>
         </div>
         
      </>
   );
}