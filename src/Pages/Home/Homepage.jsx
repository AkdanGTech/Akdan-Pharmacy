import "./Homepage.css";
import Banner from "../Products/imag/banner.png";
import Icon from "../Products/imag/icon-resep-obat.png";

function Homepage() {
  return (
    <>
      <div className="Home-text">
        <img src={Banner} alt="prescription" className="banner" />
        <h2>One-stop for your health goods</h2>
        <h4>buy drugs with or without a prescription</h4>
        </div>
        <div>
          <img src={Icon} alt="reset" className="resep" />
          <h2>already have a prescription?</h2>
        </div>
        <br></br>

    </>
  );
}
export default Homepage;
