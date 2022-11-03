import React from 'react';
import MetaTags from 'react-meta-tags';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import FlowCards from 'components/FlowCards';


const Games = () => {
    return (
        <div>
            <MetaTags>
                <title>Games | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags>
            <Navigation />
            {/* Game banner part Start */}
            <section id="about_banner" className="game_banner">
                <div className="container">
                    <div className="row  text-center">
                        <div className="col-lg-12">
                            <div className="about_menu">
                                <h2>Games</h2>
                                <div className="bread">
                                    <a href="index.html">Home</a><span>&#62;</span><a className="active" href="game.html">Games</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Game banner part end */}

            {/* Game part start */}
            <section id="claim_part" className="client_bg client_bg2">
            <div className="container">
                    <FlowCards />
                    
                    </div>
                    <div className="row main_game">
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin game_margin2">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="about_1"/>
                                <div className="game_overly">
                                    <h3>Donkey King Slots</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin game_margin2">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="about_2"/>
                                <div className="game_overly">
                                    <h3>Donkey King Horse Racing</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img2 game_margin2">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="about_3"/>
                                <div className="game_overly">
                                    <h3>Donkey King Keno</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games4"/>
                                <div className="game_overly">
                                    <h3>Donkey King Roulette</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games5"/>
                                <div className="game_overly">
                                    <h3>Donkey King Craps</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games6"/>
                                <div className="game_overly">
                                    <h3>Donkey King Hold Em</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games7"/>
                                <div className="game_overly">
                                    <h3>Donkey King Blackjack</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games8"/>
                                <div className="game_overly">
                                    <h3>Donkey King Fruit Slots</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="game_img game_img_pad">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="03_Games9"/>
                                <div className="game_overly">
                                    <h3>Donkey King Omaha</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-none d-sm-block d-md-none">
                            <div className="game_img">
                                <img src="images/DKEG Logo No BG.png" className="img-fluid w-100" alt="about_3"/>
                                <div className="game_overly">
                                    <h3>Donkey King Lucky Wheel</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        
            {/* Game part end */}

            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
    
            {/* Footer Part */}
            <Footer />
        </div>
    );
};

export default Games;
