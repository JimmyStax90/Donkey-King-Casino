import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';


const Erorr = () => {
    return (
        <div>
            <Navigation/>
            {/* Error 404 part start */}
            <section id="claim_part" className="client_bg client_bg2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="error_page_main">
                                <img src="images/DKEG Logo.jpg" className="img-fluid" alt="08_404_Page"/>
                                <div className="error_btn">
                                    <Link to="/">Go Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Error 404 part end */}
            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            {/* Footer Part */}
            <Footer/>
        </div>
    );
};

export default Erorr;