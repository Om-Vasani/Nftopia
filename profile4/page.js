import Image from "next/image";
import Link from "next/link";
import "./profile.css"

export default function profile4(){

   return(
      <>
        
         <div className="container-23">
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
         <div className="container-31">
            <div className="row-1">
            <Image
               className="images-2"
               src="/Group 240.png"
               alt="next.js images"
               width={125.15}
               height={125.15}
               property
               />
               <div className="card-body-1">
                  <h4>Juliyan Asans</h4>
                  <h6>@jasans</h6>
                  <p className="Juliyan">06/20/2021 | 9:58am</p>
               </div>
               <Image
               className="images-3"
               src="/Rectangle 77.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 78.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <div className="card-body-31">
                  <h4 className="Statu">Status:<Link href="" className="accepted">Accepted</Link></h4>
                  <h6  className="status">3.58 ETH</h6>
                  <p className="Status">352.342 USD</p>
               </div>
            </div>
         </div>
         <div className="container-32">
            <div className="row-1">
            <Image
               className="images-2"
               src="/Group 241.png"
               alt="next.js images"
               width={125.15}
               height={125.15}
               property
               />
               <div className="card-body-1">
                  <h4>Naresh Hasmia</h4>
                  <h6>@jasans</h6>
                  <p className="Juliyan">06/20/2021 | 9:58am</p>
               </div>
               <Image
               className="images-3"
               src="/Rectangle 79.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 80.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 81.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 82.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <div className="card-body-32">
                  <h4 className="Statu">Status:<Link href="" className="pending">Pending</Link></h4>
                  <h6  className="status">3.58 ETH</h6>
                  <p className="Status">352.342 USD</p>
               </div>
            </div>
         </div>
         <div className="container-33">
            <div className="row-1">
            <Image
               className="images-2"
               src="/Group 242.png"
               alt="next.js images"
               width={125.15}
               height={125.15}
               property
               />
               <div className="card-body-1">
                  <h4>Juliyan Asans</h4>
                  <h6>@jasans</h6>
                  <p className="Juliyan">06/20/2021 | 9:58am</p>
               </div>
               <Image
               className="images-3"
               src="/Rectangle 83.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 84.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <div className="card-body-31">
                  <h4 className="Statu">Status:<Link href="" className="accepted">Accepted</Link></h4>
                  <h6  className="status">3.58 ETH</h6>
                  <p className="Status">352.342 USD</p>
               </div>
            </div>
         </div>
         <div className="container-34">
            <div className="row-1">
            <Image
               className="images-2"
               src="/Group 243.png"
               alt="next.js images"
               width={125.15}
               height={125.15}
               property
               />
               <div className="card-body-1">
                  <h4>Juliyan Asans</h4>
                  <h6>@jasans</h6>
                  <p className="Juliyan">06/20/2021 | 9:58am</p>
               </div>
               <Image
               className="images-3"
               src="/Rectangle 85.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 87.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <Image
               className="images-3"
               src="/Rectangle 86.png"
               alt="next.js images"
               width={77}
               height={77}
               property
               />
               <div className="card-body-33">
                  <h4 className="Statu">Status:<Link href="" className="pending">Pending</Link></h4>
                  <h6  className="status">3.58 ETH</h6>
                  <p className="Status">352.342 USD</p>
               </div>
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