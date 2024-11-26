import Image from "next/image";
import Link from "next/link";
import "./Artwork.css"

export default function Art(){

  return(
    <>
        
      <div className="container-10">
        <Link href="/Art">
        <h1 className="UploadArtwork">Upload Artwork</h1>
        </Link>
      </div>
      <div className="container-2">
          <div className="row">
            <div>
              <label className="Name">Artwork Name</label><br/>
              <input className="name" type="Artwork Name" name="Artwork Name" placeholder="Artwork Name"/>
            </div>
            <div>
              <label className="Category">Category</label><br/>
              <input className="category" type="Illustrations" name="Illustrations" placeholder="Illustrations"/>
            </div>
            <div>
              <label className="Price">Price</label><br/>
              <input className="price" type="Price" name="Price" placeholder="Price"/>
            </div>
            <div>
            <label className="Time">Auction Time</label><br/>
            <input className="time" type="05 / 03 / 2021 - 05 / 05 / 2021  " name="05 / 03 / 2021 - 05 / 05 / 2021  " placeholder="05 / 03 / 2021 - 05 / 05 / 2021 "/>
            </div>
            <div>
              <label className="Currency">Currency</label><br/>
              <input className="currency" type="Select Currency" name="Select Currency" placeholder="Select Currency"/>
            </div>
            <div>
              <label className="Royalty">Royalty</label><br/>
              <input className="royalty" type="Percentage" name="Percentage" placeholder="Percentage"/>
            </div>
            <div>
              <label className="description">Description</label><br/>
              <input type="text" className="Description" name="Write Description" placeholder="Write Description" />
            </div>
            </div>
            <button className="Upload">Upload Now</button>
      </div>
    </>
  );
}