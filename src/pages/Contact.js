import React from 'react';
//import MetaTags from 'react-meta-tags';
import { Link  } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import FlowCards from 'components/FlowCards';


const Contact = () => {
    // const location = useLocation(); // once ready it returns the 'window.location' object
    // const [url, setUrl] = useState(null);
    // useEffect(() => {
    //     setUrl(location.pathname);
    // }, [location]);
    return (
        <div>
            {/* <MetaTags>
                <title>Contact Us | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags> */}
            <Navigation />
            {/* Contact banner part Start */}
            <section id="about_banner" className="contact_banner">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Contact Us</h2>
                                <div className="bread">
                                    <Link to="/" >Home</Link><span>&#62;</span><Link to="/contact" className='active'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact banner part end */}

            {/* Contact main part start */}
            <section id="contact_page">
                <div className="container">
                    <FlowCards />
                </div>
                <div className="container p-md-0 mt-5 contact-mobile-view">
                    <div className="row cont_mar">
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="address_text">
                                    <h3>Location</h3>
                                    <p>Sacramento, California 95817 United States</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                    <i className="fa fa-volume-control-phone"></i>
                                </div>
                                <div className="address_text">
                                    <h3>Phone</h3>
                                    <p>N/A <br/>
                                        N/A</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cont_address">
                                <div className="con_icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="address_text">
                                    <h3>Email</h3>
                                    <p>support@donkeykingeg.com<br/>
                                        marketing@donkswap.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact main part End */}
            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            {/* Footer Part */}
            <Footer/>
        </div>
    );
};

export default Contact;