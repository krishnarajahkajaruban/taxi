import React, { useState } from 'react';
import './Home.css';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = date => {
        setSelectedDate(date);
    };

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
                                <div className="from-group mb-4">
                                    <div className='relative'>
                                        <label htmlFor="from" className='home-book-input-label'>From</label>
                                        <input className="form-control txt-field home-book-input mb-0" type="text" name="from" placeholder="Search Location" />

                                        {/* <div className='search-result-data-area custom'>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                            <div className='search-result-data'>Location 1</div>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="from-group mb-4">
                                    <div className='relative'>
                                        <label htmlFor="from" className='home-book-input-label'>To</label>
                                        <input className="form-control txt-field home-book-input mb-0" type="text" name="to" placeholder="Search Location" />
                                        {/* <div className='search-result-data-area custom'>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                        <div className='search-result-data'>Location 1</div>
                                    </div> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type='button' className="btn btn-default btn-lg btn-block text-center text-uppercase make-reserve-btn" data-toggle="modal" data-target="#exampleModal">SUBMIT</button>
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
                                    <img className="img-fluid" src="img/b1.jpg" alt="" />
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
                                    <img className="img-fluid" src="img/b2.jpg" alt="" />
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

            {/* booking modal here */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content dark-theme">
                        <div class="modal-header dark-theme">
                            <h5 class="modal-title text-orange" id="exampleModalLabel">Booking</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className='text-danger'>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body dark-theme">
                            {/* selected locations here */}
                            <div className="selected-location-area">
                                <div className="row">
                                    <div className="col-6">
                                        <div className='selected-location'>
                                            <h6 className='text-orange'>From : </h6>
                                            <h6 className='text-white sub-text'>Jaffna</h6>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className='selected-location'>
                                            <h6 className='text-orange'>To : </h6>
                                            <h6 className='text-white sub-text'>India</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            {/* driver details here */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="">
                                        <table className="table table-borderd bg-white modal-table dark-theme">
                                            <thead>
                                                <tr className='bg-black'>
                                                    <th>No.</th>
                                                    <th>Driver Name</th>
                                                    <th>Mobile Number</th>
                                                    <th>Amount</th>
                                                    <th>Rating</th>
                                                    <th className='text-center'>Select</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01.</td>
                                                    <td>P.Vincent</td>
                                                    <td>0770550456</td>
                                                    <td>100 LKR</td>
                                                    <td className='verical-align-middle'>
                                                        <div className="current-rating">
                                                            <i className='fa fa-star rate'></i>
                                                            <i className='fa fa-star rate'></i>
                                                            <i className='fa fa-star rate'></i>
                                                            <i className='fa fa-star'></i>
                                                            <i className='fa fa-star'></i>
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        <button className='btn no-radius view-btn btn-success'>
                                                            <i className='fa fa-check mr-2'> Select</i>
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            {/* booking form here */}
                            <div className="row">
                                <div className="col-12">
                                    <form action="">
                                        <div className='book-form-area'>
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='form-label absolute text-orange'>Pickup Location</label>
                                                        <input type="text" className='form-control dark-theme' placeholder='Enter your pickup location' />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='form-label absolute text-orange'>Date & Time</label>
                                                        <div className='w-100 date-picker-custom'>
                                                            <DatePicker
                                                                className='form-control dark-theme'
                                                                placeholderText='Select Date and Time'
                                                                selected={selectedDate}
                                                                onChange={handleChange}
                                                                showTimeSelect
                                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*  */}

                        </div>
                        <div class="modal-footer dark-theme">
                            <button type="button" class="btn no-radius btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn no-radius btn-orange">Book</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default Home;
