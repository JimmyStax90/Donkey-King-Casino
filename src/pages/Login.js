import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import Payment from 'components/Payments';
import FlowCards from 'components/FlowCards';

const Login = () => {
    return (
        <div>
            <Navigation/>
            {/* Login banner part Start */}
            <section id="about_banner">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Login</h2>
                                <div className="bread">
                                    <Link to="/">Home</Link><span>&#62;</span><Link className="active" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Login banner part end */}

            {/* Login part start */}
            <section id="claim_part" className="client_bg client_bg2 sign_form_part login_form_part">
                <div className="container">
                <FlowCards />
                    <div className="row signup_form_pad log_form_pad">
                        <div className="col-lg-7 offset-lg-5">
                            <div className="main_signup login_main">
                                <h4>Log in</h4>
                                <p>Log in quickly to get all other facilities</p>
                                <form action="">
                                    <div className="signup_inner log_inner">
                                        <div className="sign_input_inner">
                                            <input type="email" placeholder="your e-mail here"/>
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="sign_input_inner">
                                            <input type="password" placeholder="your password here"/>
                                            <i className="fa fa-lock"></i>
                                        </div>
                                        <button type="submit">Log in</button>
                                        <a href="javascript:void(0);">Forget password</a>
                                        <p className="log_acc_yet">Don’t you have any account yet? <a href="javascript:void(0);">Sign in</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login part end */}
            <Payment/>
            {/* Footer Part */}
        <Footer/>
    </div>
    );
};

export default Login;