import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import Payment from 'components/Payments';
import FlowCards from 'components/FlowCards';


const SignUp = () => {
    
    return (
        <div>
             <MetaTags>
                <title>SignUp | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags>
            <Navigation/>
            {/* Signup banner part Start */}
            <section id="about_banner">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Signup</h2>
                                <div className="bread">
                                    <Link to="/">Home</Link><span>&#62;</span><Link className="active" to="/signup">Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Signup banner part end */}

            {/* Signup part start */}
            <section id="claim_part" className="client_bg client_bg2 sign_form_part">
                <div className="container">
                <FlowCards />
                    <div className="row signup_form_pad">
                        <div className="col-lg-7 offset-lg-5">
                            <div className="main_signup">
                                <h4>Signup</h4>
                                <p>Register quickly to get all other facilities</p>
                                <form action="">
                                    <div className="signup_inner">
                                        <div className="row fast_input">
                                            <div className="col sign_input_inner">
                                                <input type="text" placeholder="your full name"/>
                                                <i className="fa fa-user"/>
                                            </div>
                                            <div className="col sign_input_inner">
                                                <input type="text" placeholder="user name"/>
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div> 
                                        <div className="sign_input_inner">
                                            <input type="email" placeholder="your e-mail here"/>
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="sign_input_inner">
                                            <input type="password" placeholder="your password here"/>
                                            <i className="fa fa-lock"></i>
                                        </div>
                                        <button type="submit">Signup</button>
                                        <p>Do you have already an account? <a href="#/">Sign in</a></p>
                                        <h6>
                                            <span>Or Register with</span>
                                            <a href="#/"><i className="fa fa-facebook-f"></i></a>
                                            <a href="#/"><i className="fa fa-google"></i></a>
                                        </h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Signup part end */}

            {/* Payment part Start */}
            <Payment/>
            {/* Payment part end */}
            {/* Footer Part */}
        <Footer/>
    </div>
    );
};

export default SignUp;