import Link from "next/link"
import "./Signup.css"

export default function Signup(){

  return(

    <>
    
      <h1>Sign Up</h1>

      <div className="container-24">
        <div className="container-41">
            <h2>Create Account</h2>
            <p className="account">
            It's easy to create an account for Non-fungible tokens and sale your any items <br/> 
            independently online securely in the world.
            </p>
            <div className="container-2">
            <div className="row">
            <div>
              <label className="username">First Name</label><br/>
              <input className="Username" type="Your First Name" name="Your First Name" placeholder="Your First Name"/>
            </div>
            <div>
              <label className="username">Last Name</label><br/>
              <input className="Username" type="Your Last Name" name="Your Last Name" placeholder="Your Last Name"/>
            </div>
            <div>
              <label className="username">Gender</label><br/>
              <input className="Username" type="Gender" name="Gender" placeholder="Gender"/>
            </div>
            <div>
            <label className="username">Email</label><br/>
            <input className="Username" type="Your Email" name="Your Email" placeholder="Your Email"/>
            </div>
            <div>
              <label className="username">Username</label><br/>
              <input className="Username" type="Username" name="Username" placeholder="Username"/>
            </div>
            <div>
              <label className="username">Password</label><br/>
              <input className="Username" type="Password" name="Password" placeholder="Password"/>
            </div>
            </div>
            </div>
            <button className="Sign">Sign In Account</button>
            <p>Already Have An Account? <Link href="/Login" className="Signup">Sign In</Link></p>
        </div>
      </div>
    </>
  )
}