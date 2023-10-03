import "./Products.css";
import Panadol from "../Products/imag/panadol.jpeg";
import Panadolbiru from "../Products/imag/panadol biru.jpeg";
import Biooil from "../Products/imag/bio oil.jpeg";
import Blackmore from "../Products/imag/black more.jpeg";
import Caplang from "../Products/imag/cap lang.png";
import Holistcare from "../Products/imag/holistcare.jpeg";
import Imboost from "../Products/imag/imboost.jpeg";
import Mixagrip from "../Products/imag/mixagrip.jpeg";
import Combi from "../Products/imag/obh combi.jpeg";





const Products = () => {
  return (
    <>
      <div>
      <br/>
        <h2>Our Products</h2>
        <div>
          <div className="responsive">
            <div className="col-xs-6">
              <img src={Panadol} alt="panadol" />
              <a href="#Products">
                <img src={Biooil} alt="panadol" target="_blank" />
              </a>
              <a href="#Products">
                <img src={Panadolbiru} alt="panadol" target="_blank" />
              </a>
              <img src={Blackmore} alt="panadol" target="_blank" />
              <img src={Caplang} alt="panadol" target="_blank" />
              <img src={Holistcare} alt="panadol" target="_blank" />
              <img src={Imboost} alt="panadol" target="_blank" />
              <img src={Mixagrip} alt="panadol" target="_blank" />
              <img src={Combi} alt="panadol" target="_blank" />
              <img src={Blackmore} alt="panadol" target="_blank" />
              <img src={Caplang} alt="panadol" target="_blank" />
              <img src={Holistcare} alt="panadol" target="_blank" />
              <img src={Imboost} alt="panadol" target="_blank" />
              <img src={Mixagrip} alt="panadol" target="_blank" />
              <img src={Combi} alt="panadol" target="_blank" /><br/>
              <button onClick={Products} className="btn-cart">Add to cart</button>
              <button onClick={Products} className="btn-details">Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
