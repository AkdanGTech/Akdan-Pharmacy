import "./Login.css";



function Login () {

  function Submit() {
   alert("You have successfully Login");
  }
  return (
    <>
      <div>
        <div className="Logininput">
          <label for="email" className="email">
            Enter your email:: 
          </label>
          <input type="email" className="lemail" placeholder="" required /><br/>
          <label>Enter your password</label>
          <label>
            <input
              type="password"
              className="lpassword"
              placeholder=""
              required
            />
            </label><br/>
            <input type="checkbox" className="lcheckbox" /><br/>
            <a href="www.linkedin.com/in/daniel-akinyoyenu">click the box to accept terms and condition</a><br/>
          <button onClick={Submit} className="btn">
            Login
          </button><br/>
        </div>
      </div>
    </>
  );
};
export default Login;
