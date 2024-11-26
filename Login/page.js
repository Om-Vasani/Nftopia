import Link from "next/link"
import "./Login.css"

export default function login(){

  return(

    <>
    
      <h1>Log In</h1>

      <div className="container-18">
        <div className="container-1">
            <h2>Sign In Account</h2>
            <label>Email</label><br/>
            <input type="Your Email" name="Your Email" placeholder="Your Email"/>
            <div className="container-2">
            <div className="row">
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
            <p>Not Yet Registered?<Link href="/Signup" className="Signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}