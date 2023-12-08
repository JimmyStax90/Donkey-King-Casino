import { Link } from 'react-router-dom';
import React from 'react';
//import MetaTags from 'react-meta-tags';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import FlowCards from 'components/FlowCards';

const Membership = () => {
    // const location = useLocation(); // once ready it returns the 'window.location' object
    // const [url, setUrl] = useState(null);
    // useEffect(() => {
    //     setUrl(location.pathname);
    // }, [location]);
    return (
        <div>
            {/* <MetaTags>
                <title>Membership | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags> */}
            <Navigation/>
            {/* Membership banner part Start */}
            <section id="about_banner" className="member_banner">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Account Registration</h2>
                                <div className="bread">
                                    <Link to="/">Home</Link><span>&#62;</span><Link className='active' to="/membership">Membership Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            {/* Membership banner part end */}
            {/* Membership part start */}

            <section id="pricing_page">
                <div className="container text-center">
                    <FlowCards />
                    <br/><br/><br/><br/>
                    <div className="row pri_page pri_page_tow">
                        <div className="col-lg-4 col-sm-6 pri_page_in  price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Free Plan</h3>
                                <h4>0.00</h4>
                                <p>$BNB/Per Month</p>
                                <ul>
                                    <li>Unlimited Play</li>
                                    <li>No Chip Limit</li>
                                  
                                </ul>
                                <a href="#/">Select</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Monthly Plan</h3>
                                <h4>0.00</h4>
                                <p>$BNB/Per Month</p>
                                <ul>
                                    <li>Coming in 2023</li>
                                    {/* <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li> */}
                                </ul>
                                <a href="#/">N/A</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner pri_page_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Yearly Plan</h3>
                                <h4>0.00</h4>
                                <p>$BNB/Per Month</p>
                                <ul>
                                    <li>Coming in 2023</li>
                                    {/* <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li> */}
                                </ul>
                                <a href="#/#/">N/A</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership part end */}
            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            {/* Footer Part  */}
        <Footer/>
    </div>
    );
};

export default Membership;