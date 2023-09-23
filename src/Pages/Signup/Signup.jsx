import "./Signup.css";

const Signup = () => {
  function submit() {
    alert("You have successfully Signup");
  }
  return (
    <>
      <div>
        <div className="sign">
          <h3>Sign Up Form</h3>
          <label>Enter your Name</label>
          <br></br>
          <input type="text" className="sname" required />
          <br></br>
          <label>Enter your Phone number</label>
          <br></br>
          <input type="number" className="snumber" required />
          <br></br>
          <label>Enter your Date of Birth</label>
          <br></br>
          <input type="date" className="sdate" required />
          <br></br>
          <label for="email" className="semail">Enter your Email
          </label>
          <br></br>
          <input type="email" className="semail" placeholder="" required />
          <br></br>
          <label>Enter your Password</label>
          <br></br>
          <input type="password" className="spassword" placeholder="" required />
          <br></br>
          <a href="www.linkedin.com/in/daniel-akinyoyenu">click the box to accept terms and condition</a>
          <br></br>
          <input type="checkbox" className="scheckbox" />
          <br></br>
          <button onClick={submit} className="btn">Register</button>
          <hr></hr>
          <hr></hr>
        </div>
      </div>
    </>
  );
};
export default Signup;
