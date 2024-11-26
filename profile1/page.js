import Image from "next/image";
import Link from "next/link";
import "./profile.css"

export default function profile1(){

   return(
      <>
        
         <div className="container-20">
           <h1>Profile</h1>
         </div>
         <div className="card">
           <div className="row">
               <Image
               className="images-1"
               src="/Rectangle 61.png"
               alt="next.js images"
               width={275}
               height={275}
               property
               />
               <div className="card-body">
               <h2>Stive Machman</h2>
               <h5>@stive.lio</h5>
               <p className="Lorem">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate <br/> 
               libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit <br/> 
               amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br/> 
               interdum, ac aliquet odio mattis.
               </p>
               <button className="Message">Message To</button>
               </div>
           </div>
         </div>
         <div className="container-1">
            <div className="row-1">
               <Image
               className="Group-211"
               src="/Group 222.png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
               <Image
               className="Group-211"
               src="/Group 223.png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
               <Image
               className="Group-211"
               src="/Group 224.png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
               <Image
               className="Group-211"
               src="/Group 222 (1).png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
               <Image
               className="Group-211"
               src="/Group 223 (1).png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
               <Image
               className="Group-211"
               src="/Group 224 (1).png"
               alt="next.js images"
               width={330}
               height={375}
               priority
               />
            </div>
         </div>
         <div>
            <ul>
               <div className="row-3">
               <li>
                  <Link href="/profile1">1</Link>
               </li><br/>
               <li>
                  <Link href="/profile2">2</Link>
               </li><br/>
               <li>
                  <Link href="/profile3">3</Link>
               </li><br/>
               <li>
                  <Link href="/profile4">4</Link>
               </li><br/>
               </div>
            </ul>
         </div>
      </>
   );
}