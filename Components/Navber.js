import Image from "next/image";
import Link from "next/link";
import './Navber.css';

export default function Navber() {

   return (
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
   );
}