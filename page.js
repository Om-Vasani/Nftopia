import Image from "next/image";
import Link from "next/link";
import "./Home.css";
export default function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
         <div class="container-fluid">
            <Link class="navbar-brand" href="#">
               <Image
                  className="images"
                  src="/Group 2.png"
                  alt="Next.js Image"
                  width={80}
                  height={50}
                  priority
               />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
               aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                     <Link class="nav-link " aria-current="page" href="/">HOME</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Explore">EXPLORE</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Creators">CREATORS</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Blog">BLOG</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Contact">CONTACT US</Link>
                  </li>
                  <Link href="/Login">
                     <button className="Login">LOG IN</button>
                  </Link>
               </ul>
            </div>
         </div>
      </nav>
      <div className="container">
        <h1>Discover Digital Artworks <br />
          & Collect Best NFTs</h1>
        <p>
          There is eno ugh digital artworks available online to help you <br />
          put together crypto currency website.
        </p>
        <Link href="/Explore">
          <button className="Explore">Explore Now</button>
        </Link>
      </div>
      <h4>Set Your Wallet</h4>
      <p className="Here">Here are a few reasons why you should choose Oction</p>
      <div className="row">
        <Image
          className="images-2"
          src="/Group 13 (1).png"
          alt="Next.js Image"
          width={150}
          height={150}
          priority
        />
        <Image
          className="images-2"
          src="/Group 14.png"
          alt="Next.js Image"
          width={150}
          height={150}
          priority
        />
        <Image
          className="images-2"
          src="/Group 15.png"
          alt="Next.js Image"
          width={150}
          height={150}
          priority
        />
        <Image
          className="images-2"
          src="/Group 16.png"
          alt="Next.js Image"
          width={150}
          height={150}
          priority
        />
        <Image
          className="images-2"
          src="/Group 17.png"
          alt="Next.js Image"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="container-2">
        <h4>Live Bids</h4>
        <div className="row-2">
          <Image
            className="images-41"
            src="/Group 41.png"
            alt="Next.js Image"
            width={355}
            height={490}
            priority
          />
          <Image
            className="images-42"
            src="/Group 42.png"
            alt="Next.js Image"
            width={350}
            height={465}
            priority
          />
          <Image
            className="images-43"
            src="/Group 43.png"
            alt="Next.js Image"
            width={355}
            height={465}
            priority
          />
        </div>
      </div>
      <h4>browse by category</h4>
      <div className="container-3">
        <div className="row-3">
          <Image
            className="images-68"
            src="/Group 68.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
          <Image
            className="images-3"
            src="/Group 67.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
          <Image
            className="images-3"
            src="/Group 66.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
          <Image
            className="images-69"
            src="/Group 69.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
          <Image
            className="images-3"
            src="/Group 70.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
          <Image
            className="images-3"
            src="/Group 71.png"
            alt="Next.js Image"
            width={330}
            height={320}
            priority
          />
        </div>
      </div>
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
                     <li><Link href="/">3D Artworks</Link></li>
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
    </>
  );
}
