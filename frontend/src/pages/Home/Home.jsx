import React from 'react';
import './Home.css';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

const Home = () => {

    return (
        <>
            <Layout />
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-between">
                        <div className="banner-content col-lg-6 col-md-6 ">
                            <h6 className="text-white ">Need a ride? just call</h6>
                            <h1 className="text-uppercase">
                                076000000
                            </h1>
                            <p className="pt-10 pb-10 text-white">
                                Whether you enjoy city breaks or extended holidays in the sun, you can always improve your travel experiences by staying in a small.
                            </p>
                            <a href="#" className="primary-btn text-uppercase">Call for taxi</a>
                        </div>
                        <div className="col-lg-4  col-md-6 header-right">
                            <h4 className="pb-30 home-text-title">Book Your Texi Online!</h4>
                            <form className="form">
                                <div className="from-group">
                                    <input className="form-control txt-field" type="text" name="name" placeholder="Your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your name'" />
                                    <input className="form-control txt-field" type="email" name="email" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" />
                                    <input className="form-control txt-field" type="tel" name="phone" placeholder="Phone number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone number'" />
                                </div>
                                <div className="form-group">
                                    <div className="default-select" id="default-select">
                                        <select className='form-control'>
                                            <option value="" disabled selected hidden>From Destination</option>
                                            <option value="1">Destination One</option>
                                            <option value="2">Destination Two</option>
                                            <option value="3">Destination Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="default-select" id="default-select2">
                                        <select className='form-control'>
                                            <option value="" disabled selected hidden>To Destination</option>
                                            <option value="1">Destination One</option>
                                            <option value="2">Destination Two</option>
                                            <option value="3">Destination Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group dates-wrap">
                                        {/* <input type="date" className="dates form-control" placeholder="Date & time" type="text" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><span className="lnr lnr-calendar-full"></span></span>
                                        </div> */}
                                        <input type="date" className='form-control' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default btn-lg btn-block text-center text-uppercase make-reserve-btn">Make reservation</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-about-area section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 about-left">
                            <img className="img-fluid" src="img/about-img.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 about-right">
                            <h1>Globally Connected
                                by Large Network</h1>
                            <h4>We are here to listen from you deliver exellence</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                            <a className="text-uppercase primary-btn" href="#">Get Details</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-area pb-120">
                <div className="container">
                    <div className="row section-title">
                        <h1>What Services we offer to our clients</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 single-service">
                            <span className="lnr lnr-car"></span>
                            <a href="#"><h4>Taxi Service</h4></a>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                            </p>
                        </div>
                        <div className="col-lg-4 single-service">
                            <span className="lnr lnr-briefcase"></span>
                            <a href="#"><h4>Office Pick-ups</h4></a>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                            </p>
                        </div>
                        <div className="col-lg-4 single-service">
                            <span className="lnr lnr-bus"></span>
                            <a href="#"><h4>Event Transportation</h4></a>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-gallery-area section-gap">
                <div className="container">
                    <div className="row section-title">
                        <h1>Image Gallery that we like to share</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 single-gallery">
                            <a href="img/g1.jpg" className="img-gal"><img className="img-fluid" src="img/g1.jpg" alt="" /></a>
                            <a href="img/g4.jpg" className="img-gal"><img className="img-fluid" src="img/g4.jpg" alt="" /></a>
                        </div>
                        <div className="col-lg-4 single-gallery">
                            <a href="img/g2.jpg" className="img-gal"><img className="img-fluid" src="img/g2.jpg" alt="" /></a>
                            <a href="img/g5.jpg" className="img-gal"><img className="img-fluid" src="img/g5.jpg" alt="" /></a>
                        </div>
                        <div className="col-lg-4 single-gallery">
                            <a href="img/g3.jpg" className="img-gal"><img className="img-fluid" src="img/g3.jpg" alt="" /></a>
                            <a href="img/g6.jpg" className="img-gal"><img className="img-fluid" src="img/g6.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-area section-gap">
                <div className="container">
                    <div className="row section-title">
                        <h1>Client’s Reviews</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Cody Hines</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Chad Herrera</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Andre Gonzalez</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Jon Banks</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Landon Houston</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-review">
                                <h4>Nelle Wade</h4>
                                <p>
                                    Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                                </p>
                                <div className="star">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-calltoaction-area relative">
                <div className="container">
                    <div className="overlay overlay-bg"></div>
                    <div className="row align-items-center section-gap">
                        <div className="col-lg-8">
                            <h1>Experience Great Support</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="col-lg-4 btn-left">
                            <a href="#" className="primary-btn">Reach Our Support Team</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-blog-area section-gap">
                <div className="container">
                    <div className="row section-title">
                        <h1>Latest News from our Blog</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-latest-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src="img/b1.jpg" alt=""/>
                                </div>
                                <ul className="tags">
                                    <li><a href="#">Travel</a></li>
                                    <li><a href="#">Life Style</a></li>
                                </ul>
                                <a href="#">
                                    <h4>Portable latest Fashion for young women</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
                                </p>
                                <p className="date">31st January, 2018</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-latest-blog">
                                <div className="thumb">
                                    <img className="img-fluid" src="img/b2.jpg" alt=""/>
                                </div>
                                <ul className="tags">
                                    <li><a href="#">Travel</a></li>
                                    <li><a href="#">Life Style</a></li>
                                </ul>
                                <a href="#">
                                    <h4>Portable latest Fashion for young women</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
                                </p>
                                <p className="date">31st January, 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;
