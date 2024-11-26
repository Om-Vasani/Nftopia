import Image from "next/image";
import Link from "next/link";
import "./Contact.css";

export default function Contact() {

   return (
      <>
         <div className="container-15">
            <Link href="/Team">
            <h1 className="Contact">Contact</h1>
            </Link>
         </div>
         <form>
            <h2>Get Into Touch</h2>
            <p>
               Please feel free to contact with us for any kinds of inquiries and information. Our support <br />
               team always available to help the clients.
            </p>
            <input type="text" name=" Your First Name" placeholder=" Your First Name" />
            <input type="text" name=" Your Last Name" placeholder=" Your Last Name" />
            <input type="text" name=" Your Phone " placeholder=" Your Phone " />
            <input type="text" name="email address" placeholder="email address" />
            <input type="text" className="message" name="your message" placeholder="your message" /><br />
            <button className="create">Create Account</button>
         </form>
         <div>
         <iframe className="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.48171446!2d60.9691763862997!3d19.725163578221917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1718442062448!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </>
   );
}