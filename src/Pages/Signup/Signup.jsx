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
          <label>Enter your Name</label><br/>
          <input type="text" className="sname" required /><br/>
          <label>Enter your Phone number</label><br/>
          <input type="number" className="snumber" required /><br/>
          <label>Enter your Date of Birth</label><br/>
          <input type="date" className="sdate" required /><br/>
          <label for="email" className="semail">Enter your Email
          </label><br/>
          <input type="email" className="semail" placeholder="" required /><br/>
          <label>Enter your Password</label><br/>
          <input type="password" className="spassword" placeholder="" required /><br/>
          <a href="www.linkedin.com/in/daniel-akinyoyenu">click the box to accept terms and condition</a><br/>
          <input type="checkbox" className="scheckbox" /><br/>
          <button onClick={submit} className="btn">Register</button><br/>
        </div>
      </div>
      <br/>
    </>
  );
};
export default Signup;
