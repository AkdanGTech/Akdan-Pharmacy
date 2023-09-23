import "./Form.css";

function Form() {
  function submitForm() {
    alert("Your form has been successfully submitted");
  }
  return (
    <>
      <div>
        <div className="forminput">
          <form>
            <h3>Send us a Message</h3>
            <label>Enter your name</label>
            <br></br>
            <input type="text" placeholder="" className="name" required />
            <br></br>
            <label>Enter your email</label>
            <br></br>
            <input type="email" placeholder="" className="email" required />
            <br></br>
            <label>Enter your message</label>
            <br></br>
            <textarea className="message"></textarea>
            <br></br>
            <button onClick={submitForm} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
