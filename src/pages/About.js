import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import SimpleSlider from 'components/Sliders';
import FlowCards from 'components/FlowCards';


const About = () => {
    return (
        <div>
            <Navigation />
            {/* About banner part Start */}
            <section id="about_banner">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>About Us</h2>
                                <div className="bread">
                                    <Link to="/">Home</Link><span>&#62;</span><Link className="active" to="/about">About</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About banner part end */}

            {/* About video part start */}
            <section id="claim_part" className="client_bg">
                <div className="container">
                    <FlowCards />
                    <div className="row abou_clie">
                        <div className="col-md-5 pl-md-0">
                            <div className="claim_img">
                                <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="claim_part"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 pr-md-0 offset-lg-1">
                            <div className="about_play">
                                <p className="d-none d-lg-block">Donkey King Entertainment Group developed this Casino to be a safe space for crypto investors to play their favorite casino games without having to use fiat currency. Donkey King Casino is a first of its kind on the Binance Smart Chain. Here you will find our staple games have been developed from scratch to add a level of authenticity you won't find at other crypto casinos.
                                    <span>Donkey King Entertainment Group is a team of fully doxed developers who set out on a mission to bring safety and security back to the Binance Smart Chain. In the casino you will be able to play with DonkSwap Token which is our native currency. We are always going to be looking for ways to upgrade and enhance your experience. Do not hesitate to reach out to us on Telegram with any questions, concerns or suggestions.</span></p>
                                <p className="d-lg-none">Donkey King Entertainment Group developed this Casino to be a safe space for crypto investors to play their favorite casino games without having to use fiat currency. Donkey King Casino is a first of its kind on the Binance Smart Chain. Here you will find our staple games have been developed from scratch to add a level of authenticity you won't find at other crypto casinos.
                                    <span>Donkey King Entertainment Group is a team of fully doxed developers who set out on a mission to bring safety and security back to the Binance Smart Chain. In the casino you will be able to play with DonkSwap Token which is our native currency. We are always going to be looking for ways to upgrade and enhance your experience. Do not hesitate to reach out to us on Telegram with any questions, concerns or suggestions.</span></p>
                                <Link className="paly_1st" to="#">Play Now</Link>
                                <Link className="play_but venobox" data-autoplay="true" data-vbtype="video" to=""><i className="fa fa-play"></i><span>Watch Demo</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About video part end */}
            {/* About Game part start */}
            <section id="game_part" className="about_page_game">
                <div className="container text-center p-md-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="game_head abt_game_head">
                                <span>Games</span>
                            </div>
                        </div>
                    </div>
                    <SimpleSlider/>
                </div>
            </section>

            {/* About Game part end */}

            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            {/* Footer Part */}
            <Footer/>
        </div>
    );
};

export default About;