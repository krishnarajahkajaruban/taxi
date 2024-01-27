import React from 'react';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

const Services = () => {

    return (
        <>
            <Layout />
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Services
                            </h1>
                            <p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/services"> Services</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-area section-gap">
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
            <Footer />
        </>
    )
}

export default Services;