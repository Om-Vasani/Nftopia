import Image from "next/image";
import Link from "next/link";
import './Footer.css'

export default function Footer() {

   return (

      <footer class="site-footer">
         <div class="container-7">
            <div class="row-7">
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="footer-content">
                     <Image
                        className="images-7"
                        src="/Group 2.png"
                        alt="Next.js Image"
                        width={150}
                        height={80}
                        priority
                     />
                     <p class="text-justify page">
                        We provide one-stop solutions for all IT <br />
                        items; your bliss is just a click away. Star <br />
                        Tech trusts in quality client We provide <br />
                        one-stop solutions for all IT items; your <br />
                        bliss is just a click away. Star Tech trusts <br />
                        in quality client
                     </p>
                  </div>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">Marketplace</h6>
                  <ul class="footer-links">
                     <li><Link href="/">Proper Guidelines</Link></li>
                     <li><Link href="/About">Buy Products</Link></li>
                     <li><Link href="/Locations">Compare Us</Link></li>
                     <li><Link href="/Gallery">Career</Link></li>
                     <li><Link href="/Contact">Build Ecommerce</Link></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">Marketplace</h6>
                  <ul class="footer-links">
                     <li><Link href="/Artwork">3D Artworks</Link></li>
                     <li><Link href="/About">Photography</Link></li>
                     <li><Link href="/Locations">Flat Illustration</Link></li>
                     <li><Link href="/Gallery">Painting</Link></li>
                     <li><Link href="/Contact">Intro Videos</Link></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">Insight Community</h6>
                  <ul class="footer-links">
                     <li><Link href="/">Global Partners</Link></li>
                     <li><Link href="/About">Forum</Link></li>
                     <li><Link href="/Locations">Virtual World</Link></li>
                     <li><Link href="/Gallery">Community</Link></li>
                     <li><Link href="/Contact">Brand Assets</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}