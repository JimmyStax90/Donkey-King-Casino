import { Link } from "react-router-dom";
const PaymentMethod =()=> {
    
    return(
        <div>
              {/* Payment part Start */}
    <section id="payment_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 pl-md-0">
                    <div className="subcrib">
                        <h3>Subscribe for Offers</h3>
                        <form action="#" className="pay_form">
                            <input type="email" placeholder="Your e-mail here"/>
                            <button className="pay_butt" type="submit">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 pr-md-0 offset-lg-1">
                    <div className="pay_meth">
                        <h3>Payment Method</h3>
                        <Link to="https://www.donkswap.com/#/swap"><img src="images/Black and Gold Casino Chip (1) (1).png" alt="paycard1"/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
                    {/* Payment part end */}
        </div>
    );
 
}

export default PaymentMethod;