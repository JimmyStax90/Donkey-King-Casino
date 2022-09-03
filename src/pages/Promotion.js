import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import FlowCards from 'components/FlowCards';

const Promotion = () => {
    return (
        <div>
             <MetaTags>
                <title>Permotion | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags>
            <Navigation />
 
            {/* Promotion banner part Start */}

            <section id="about_banner" className="promo_part">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Promotion</h2>
                                <div className="bread">
                                    <Link to="/">Home</Link><span>&#62;</span><Link className="active" to="/promotion">Promotion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Promotion banner part end */}

            {/* Promotion Coins part Start */}
            <section id="promotion_banner">
                <div className="container">
                    <FlowCards />
                </div>
                <div className="container new_user_banner pro_banner">
                    <div className="row m-0">
                        <div className="col-lg-2 col-md-3 offset-lg-3 offset-md-2 p-md-0">
                            <div className="prom_banner_left">
                                {/* <h3></h3> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 pl-md-0 offset-md-2">
                            <div className="promo_banner_text">
                                <h1>New Users</h1>
                                <h2>Unlock Your<span>Free Spin</span></h2>
                                <a href="#/">Claim Free Spin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Promotion Coins part end */}

            {/* Promotion player part Start */}
            <section id="promo_player_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 col-md-12">
                            <div className="pro_player_offer">
                                <div className="pro_offer_inner pro_offer1">
                                    <img src="images/BnG_Slots-NoBG.png" className="img-fluid w-100" alt="promo_shape1"/>
                                    <div className="overly">
                                        {/* <h4></h4>
                                        <h3></h3>
                                        <p></p> */}
                                    </div>
                                </div>
                                <div className="pro_offer_inner pro_offer2">
                                    <img src="images/BnG_Slots-NoBG.png" className="img-fluid w-100" alt="promo_shape1"/>
                                    <div className="overly">
                                        {/* <h4></h4>
                                        <h3></h3>
                                        <p></p> */}
                                    </div>
                                </div>
                                <div className="pro_offer_inner pro_offer3">
                                    <img src="images/BnG_Slots-NoBG.png" className="img-fluid w-100" alt="promo_shape1"/>
                                    <div className="overly">
                                        {/* <h4></h4>
                                        <h3></h3>
                                        <p></p> */}
                                    </div>
                                </div>
                                <div className="pro_offer_inner pro_offer4">
                                    <img src="images/BnG_Slots-NoBG.png" className="img-fluid w-100" alt="promo_shape1"/>
                                    <div className="overly">
                                        {/* <h4></h4>
                                        <h3></h3>
                                        <p></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="pro_player_text">
                                <h2>New User Promotion:</h2>
                                <p><span>When you first create your account you will become eligible for one free spin on Donkey King Slots!</span> <span>Click on 'Claim Free Spin' to obtain your reward.</span> <span>Contact us via our Help Desk if you have any questions or concerns.</span> <span>Limit one free spin per user.</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotion player part end */}

            {/* Promotion bonus part Start */}
            <section id="prom_bonus_part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 pr-md-0">
                            <div className="promo_bonus_text">
                                <h2>Future Rewards and Promotions</h2>
                                <p>
                                    <span>Stay tuned for future promotions, raffles and drawings that will involve all Donkey King Casino users. </span>
                                    <span>Apart from our new user promotion, we have plans to offer promotions up to once a week. We want to reward our loyal holders for using our casino.</span>
                                    <span>Starting in 2023 we will reward everyone that holds over 100 billion $DST with a percentage of our casino profits. These rewards will be paid out in either BNB or BUSD, quarterly.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Promotion bonus part end */}
            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            {/* Footer part */}
            <Footer/>
        </div>
    );
};
export default Promotion;
