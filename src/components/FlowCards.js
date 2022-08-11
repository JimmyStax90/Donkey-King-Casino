import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const FlowCards = () => {
  var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
  };
  return (
   <div>
        <div className="row flow_sha text-center d-none d-md-block">
                <div className="col-lg-12">
                    <div className="game_flow">
                        <div className="row m-0">
                            <div className="col-md-4 border_shadow">
                                <div className="game_text">
                                    <h2><span>0</span><span>1</span></h2>
                                    <h3>Register</h3>
                                    <p>Create Your Account</p>
                                </div>
                            </div>
                            <div className="col-md-4 border_shadow">
                                <div className="game_text">
                                    <h2>02</h2>
                                    <h3>Connect Your Wallet</h3>
                                    <p>Buy Casino Chips w/ DonkSwap Token ($DST)</p>
                                </div>
                            </div>
                            <div className="col-md-4 border_shadow">
                                <div className="game_text">
                                    <h2>03</h2>
                                    <h3>Enjoy</h3>
                                    <p>Play Your Favorite Casino Games on the web or on your phone/tablet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="row flow_sha d-md-none">
                <div class="col-lg-12">
                    <div class="game_flow">
                        {/* <div class="row flow_slider"> */}
						<Slider {...settings}>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2><span>0</span><span>1</span></h2>
                                    <h3>Register</h3>
                                    <p>Create Your Account</p>
                                </div>
                            </div>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2>02</h2>
                                    <h3>Connect Your Wallet</h3>
                                    <p>Buy Casino Chips w/ DonkSwap Token ($DST)</p>
                                </div>
                            </div>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2>03</h2>
                                    <h3>Enjoy</h3>
                                    <p>Play Your Favorite Casino Games on the web or on your phone/tablet</p>
                                </div>
                            </div>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2><span>0</span><span>1</span></h2>
                                    <h3>Register</h3>
                                    <p>Create Your Account</p>
                                </div>
                            </div>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2>03</h2>
                                    <h3>Enjoy</h3>
                                    <p>Play Your Favorite Casino Games on the web or on your phone/tablet</p>
                                </div>
                            </div>
                            <div class="col-lg-12 border_shadow">
                                <div class="game_text">
                                    <h2>03</h2>
                                    <h3>Enjoy</h3>
                                    <p>Play Your Favorite Casino Games on the web or on your phone/tablet</p>
                                </div>
                            </div>
							</Slider>
                        {/* </div> */}
                    </div>
                </div>
            </div>
   </div>
  );
}

export default FlowCards;