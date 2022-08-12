import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";

const SimpleSlider = () => {
  var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
  };
  return (
    <Slider {...settings}>
                
                    <div className="game_img">
                        <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_1"/>
                        <div className="game_overly">
                            <h3>Donkey King Slots</h3>
                            <a href="#/">Play Now</a>
                        </div>
                    </div>
               
                    <div className="game_img">
                        <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_2"/>
                        <div className="game_overly">
                            <h3>Donkey King Hold 'Em</h3>
                            <a href="#/">Play Now</a>
                        </div>
                    </div>
               
                    <div className="game_img">
                        <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_3"/>
                        <div className="game_overly">
                            <h3>Donkey King Blackjack</h3>
                            <a href="#/">Play Now</a>
                        </div>
                    </div>
              
                    <div className="game_img">
                        <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_2"/>
                        <div className="game_overly">
                            <h3>Donkey King Craps</h3>
                            <a href="#/">Play Now</a> 
                        </div>
                    </div>
                
    </Slider>
  );
}

export default SimpleSlider;