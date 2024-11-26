import Image from "next/image";
import Link from "next/link";
import "./Blog.css";

export default function Blog() {

   return (
      <>
         <div className="container-14">
            <h1>Blog</h1>
         </div>
         <h2 className="Today">Today Highlights</h2>
         <div className="row">
            <div className="card">
               <div className="row-1">
                  <Image
                     className="images-1"
                     src="/Rectangle 113.png"
                     alt="Next.js Image"
                     width={135}
                     height={135}
                     property
                  />
                  <div className="card-body">
                     <h3>how to buy and sell NFTS <br /> in 2023</h3>
                     <p className="december">DECEMBER 10, 2022</p>
                     <p className="whether">
                        Whether or not you are aware of it, supply chain processes <br />
                        affect you. Learn how NFTs can ease the supply chain pain <br />
                        points and improve the industry.
                     </p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="row-1">
                  <Image
                     className="images-1"
                     src="/Rectangle 114.png"
                     alt="Next.js Image"
                     width={135}
                     height={135}
                     property
                  />
                  <div className="card-body">
                     <h3>the best aI art generator tools <br /> for elevating your NFT game</h3>
                     <p className="december">DECEMBER 10, 2022</p>
                     <p className="whether">
                        Whether or not you are aware of it, supply chain processes <br />
                        affect you. Learn how NFTs can ease the supply chain pain <br />
                        points and improve the industry.
                     </p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="row-1">
                  <Image
                     className="images-1"
                     src="/Rectangle 115.png"
                     alt="Next.js Image"
                     width={135}
                     height={135}
                     property
                  />
                  <div className="card-body">
                     <h3>the best aI art generator tools <br /> for elevating your NFT game</h3>
                     <p className="december">DECEMBER 10, 2022</p>
                     <p className="whether">
                        Whether or not you are aware of it, supply chain processes <br />
                        affect you. Learn how NFTs can ease the supply chain pain <br />
                        points and improve the industry.
                     </p>
                  </div>
               </div>
            </div>
            <div className="card">
               <div className="row-1">
                  <Image
                     className="images-1"
                     src="/Rectangle 116.png"
                     alt="Next.js Image"
                     width={135}
                     height={135}
                     property
                  />
                  <div className="card-body">
                     <h3>how to buy and sell NFTS <br /> in 2023</h3>
                     <p className="december">DECEMBER 10, 2022</p>
                     <p className="whether">
                        Whether or not you are aware of it, supply chain processes <br />
                        affect you. Learn how NFTs can ease the supply chain pain <br />
                        points and improve the industry.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-1">
            <div className="row-1">
               <div className="card-1">
                  <h3 className="Best">The Best AI Art Generator Tools For Elevating <br /> Your NFT Game</h3>
                  <p className="wherther">
                     Whether or not you are aware of it, supply chain processes affect you. Learn how <br />
                     NFTs can ease the supply chain pain points and improve the industry. Whether <br />
                     or not you are aware of it, supply chain processes affect you. Learn how NFTs can <br />
                     ease the supply chain pain points and improve the industry. Whether or not you <br />
                     are aware of it, supply chain processes affect you. Learn how NFTs can ease the <br />
                     supply chain pain points and improve supply chain processes affect you. Learn <br />
                     how NFTs can ease the supply chain pain points and improve the industry. <br />
                     Whether or not you are aware of it, supply chain processes affect you. Learn how <br />
                     NFTs can ease the supply chain pain points and improve the industry.
                  </p>
               </div>
               <div className="card-1">
                  <Image
                     className="images-2"
                     src="/Rectangle 123.png"
                     alt="Next.js Image"
                     width={500}
                     height={250}
                     property
                  />
               </div>
            </div>
         </div>
      </>
   );
}