import React, { useLayoutEffect } from 'react';
import MetaTags from 'react-meta-tags';
// import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import Navigation from './navbar/Navigation';
import Footer from 'components/Footer/Footer';
import PaymentMethod from 'components/PaymentMethod';
import FlowCards from 'components/FlowCards';
import Accordion from 'react-bootstrap/Accordion';
const rendererCountDown = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return   <div className="col-lg-7 col-12">
      <div className="coundown cou_mar">
          <span className="coun_down">{hours}</span>
          <p>Hours</p>
      </div>
      <div className="coundown">
          <span className="coun_down2">{minutes}</span>
          <p>Mins</p>
      </div>
      <div className="coundown">
          <span className="coun_down3">{seconds}</span>
          <p>Secs</p>
      </div>
  </div>;
    
  };
  const handleClick = event => {
    Array.from(document.querySelectorAll('.add_border')).forEach(function(el) { 
        el.classList.remove('add_border');
    });
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('add_border');

    // 👇️ add class on click
    event.currentTarget.classList.add('add_border');

  };
const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div>
            <MetaTags>
                <title>Home | Donkey King Casino</title>
                <meta name="description" content="Donkey King Casino" />
                <meta property="og:title" content="Donkey King Casino" />
                <meta property="og:image" content="../logo.png" />
          </MetaTags>
            <Navigation/>
            <section id="banner_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 pl-md-0">
                            <div className="banner_img">
                                <img src="/images/Welcome to DKC.png" alt="index_banner"/>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 col-xl-5 col-md-12 col-12 pr-md-0 offset-lg-1 offset-xl-1 d-none d-lg-block">
                            <div className="banner_text text-center text-md-left">
                                
                                <div className="text-center">
                                    <Link to="#/">Play Now </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Banner part end */}
            {/* Game part start */}
            <section id="game_part">
                <div className="container text-center">
                    <FlowCards />
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="game_head">
                                <span>Games</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="game_img">
                                <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_1"/>
                                <div className="game_overly">
                                    <h3>Donkey King Slots</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="game_img">
                                <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_2"/>
                                <div className="game_overly">
                                    <h3>Donkey King Hold 'EM</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="game_img">
                                <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_3"/>
                                <div className="game_overly">
                                    <h3>Donkey King Blackjack</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-none col-sm-6 col-md-4">
                            <div className="game_img">
                                <img src="images/DKEG Logo.jpg" className="img-fluid w-100" alt="about_3"/>
                                <div className="game_overly">
                                    <h3>Donkey King Horse Racing</h3>
                                    <a href="#/">Play Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Game part end */}
            {/* Claim part start */}
            <section id="claim_part">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-12 col-md-5 pl-md-0">
                            <div className="claim_img">
                                <img src="images/Free Spin - 538x622.jpeg" className="img-fluid" alt="claim_part"/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 col-md-7 col-lg-6 pr-md-0 offset-lg-1">
                            <div className="claim_text">
                                <h2>Unlock Free Spin</h2>
                                <p className="d-sm-none d-md-block">Click below to claim your free spin on Donkey King Slots.
                                    <span>Refer a friend to join Donkey King Casino and earn an additional free spin.</span></p>
                                <p className="d-none d-sm-block d-md-none">Click below to claim your free spin on Donkey King Slots.
                                    <span>Refer a friend to join Donkey King Casino and earn an additional free spin.</span></p>
                                <div className="clm_btn">
                                    <a href="#/">Claim Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Claim part end */}
            {/* Membership part start */}
            <section id="pricing_part">
                <div className="container text-center p-md-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="pricing_head">
                                <h2>Account Registration</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 pri_page_in price_main">
                            <div className="pricing_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Free Plan</h3>
                                <h4>0.00</h4>
                                <p>$BNB/Per Month</p>
                                <ul>
                                    <li>Unlimited Play</li>
                                    <li>No Chip Limit</li>
                                    {/* <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li> */}
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
                                    <li></li> */}
                                    <li></li>
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
                                    <li></li> */}
                                    <li></li>
                                </ul>
                                <a href="#/">N/A</a>
                            </div>
                        </div>
                        <div className="col-sm-6 d-none d-sm-block d-md-none price_main">
                            <div className="pricing_inner">
                                <div className="pricing_inner_head">
                                    <h2>Featured</h2>
                                </div>
                                <h3>Prepaid Plan</h3>
                                <h4>19.99</h4>
                                <p>USD/Per Month</p>
                                <ul>
                                    <li>Editable Game Timer</li>
                                    <li>Upto 10 Plyers at a Time</li>
                                    <li>Etitable Score Averaging</li>
                                    <li>Printable Result Page</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                                <a href="#/">Choose Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Membership part end */}
            {/* Tounament part Start */}
            <section id="tounament_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 pl-md-0">
                            <div className="touna_head_left">
                                <h3>Frequently Ask Questions
                                    <div className="effect2">
                                        <img src="images/shape.png" alt="shape"/>
                                    </div>
                                </h3>

                                <Accordion defaultActiveKey="0" className="touna_left_inner">
                                    <Accordion.Item eventKey="0" className="add_border" onClick={handleClick}>
                                        <Accordion.Header >
                                            <span>01. How do I get started?</span>
                                            <i className="fa fa-caret-down"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <p>Start by creating your account. After creating your account, connect your wallet and buy Donkey King Chips with your $DST.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" onClick={handleClick}>
                                        <Accordion.Header>
                                            <span>02. Why do I need to create an account to play?</span>
                                            <i className="fa fa-caret-down"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <p>Account creation is required to insure that everyone that plays is a real person. This will also allow us to provide free rewards to our loyal users.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" onClick={handleClick}>
                                        <Accordion.Header>
                                            <span>03. What if I start to play too much and I lose a lot of my $DST?</span>
                                            <i className="fa fa-caret-down"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>We strongly encourage all of our users to excercise restraint if you feel like you are playing too much. Our goal is to create a safe and fun space to gamble with our favorite token. We do not want you to lose it all.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" onClick={handleClick}>
                                        <Accordion.Header>
                                            <span>04. Is there an app that I can download to play?</span>
                                            <i className="fa fa-caret-down"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <p>Yes! Donkey King Casino can be found in the Apple and Android app stores under Donkey King.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-5 pr-md-0 jhamela">
                            <div className="touna_head_left">
                                <h3>Today’s Tournaments
                                    <div className="effect3">
                                        <img src="images/shape.png" alt="shape"/>
                                    </div>
                                </h3>
                            </div>
                            <div className="row pad_today">
                                <div className="col-lg-5">
                                    <div className="coun_text">
                                        <h4>Time Remaining:</h4>
                                    </div>
                                </div>
                                <Countdown
                                    date={Date.now() + 100000000}
                                    renderer={rendererCountDown}
                                />
                            
                            </div>
                            <div className="tun_scroll">
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>01. Rozina Khan</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>02. Gozina Hezzez</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>03. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>04. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>05. Omer Rinki</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>06. Aaron Jack</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>07. Jarvis Malcolm</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>08. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>09. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>10. Omer Rinki</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>11. Rozina Khan</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll1.png" alt="scroll1"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>12. Gozina Hezzez</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll2.png" alt="scroll2"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>13. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll3.png" alt="scroll3"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>14. Redwan Rizaj</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll4.png" alt="scroll4"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row scl_pad">
                                    <div className="col-lg-5 col-5">
                                        <div className="toun_scroll_name tun_border">
                                            <h5>15. Omer Rinki</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-2 text-center">
                                        <div className="toun_scroll_flag tun_border"><img src="images/scroll5.png" alt="scroll5"/></div>
                                    </div>
                                    <div className="col-lg-5 col-5 text-right">
                                        <div className="toun_scroll_name tun_border">
                                            <p>$365.25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Tounament part end */}
            {/* Payment part Start */}
            <PaymentMethod/>
            {/* Payment part end */}
            <Footer/>
        </div> 
    );
};

export default Home;
