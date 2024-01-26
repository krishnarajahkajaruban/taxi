import React from 'react';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

import './Dashboard.css';

const Dashboard = () => {

    return (
        <>
            <Layout />
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Dashboard
                            </h1>
                            <p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/dashboard"> Dashboard</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='login-section section-gap'>
                <div className="container">
                    <div className="row login-form-section">
                        <div className="col-12 login-form-area">
                            <div className="">
                                <h4 className='text-center mb-4'>PROFILE</h4>
                                <hr />
                                <div className="row">
                                    <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                                        <div className='user-icon'>
                                            <i className='fa fa-user'></i>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="row p-2">
                                            <div className="col-5">
                                                <h6 className=''>User Name</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>Piragash</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row p-2">
                                            <div className="col-5">
                                                <h6 className=''>E-Mail</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>piragash@gmail.com</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row p-2">
                                            <div className="col-5">
                                                <h6 className=''>Mobile</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>07704564854</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 login-form-area mt-4">
                            <div className="">
                                <h4 className='text-center mb-4'>BOOKINGS</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            <table className="table table-borderd bg-white">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Date</th>
                                                        <th>Time</th>
                                                        <th>From</th>
                                                        <th>To</th>
                                                        <th>Amount</th>
                                                        <th className='text-center'>Status</th>
                                                        <th className='text-center'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01.</td>
                                                        <td>20.01.2024</td>
                                                        <td>10:30 AM</td>
                                                        <td>Jaffna</td>
                                                        <td>Palali</td>
                                                        <td>100 LKR</td>
                                                        <td className='text-center'>
                                                            {/* <span className="booking-status pending">Pending</span> */}
                                                            <span className="booking-status completed">Completed</span>
                                                        </td>
                                                        <td className='text-center'>
                                                            <button className='btn view-btn' data-toggle="modal" data-target="#exampleModal">
                                                                <i className='fa fa-eye'></i>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-orange" id="exampleModalLabel">Driver Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body bg-gray">
                            <div className="row">
                                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                                    <div className='user-icon'>
                                        <i className='fa fa-user'></i>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <div className="row">
                                        <div className="col-5">
                                            <h6 className=''>User Name</h6>
                                        </div>
                                        <div className="col-7">
                                            <h6 className='text-secondary sub-text'>Piragash</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-5">
                                            <h6 className=''>E-Mail</h6>
                                        </div>
                                        <div className="col-7">
                                            <h6 className='text-secondary sub-text'>piragash@gmail.com</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-5">
                                            <h6 className=''>Mobile</h6>
                                        </div>
                                        <div className="col-7">
                                            <h6 className='text-secondary sub-text'>07704564854</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-5">
                                            <h6 className=''>Availability</h6>
                                        </div>
                                        <div className="col-7">
                                            <h6 className='text-success sub-text'>Available</h6>
                                            {/* <h6 className='text-warning sub-text'>Not Available</h6> */}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-5">
                                            <h6 className=''>Current Rating</h6>
                                        </div>
                                        <div className="col-7">
                                            <div className="current-rating">
                                                <i className='fa fa-star rate'></i>
                                                <i className='fa fa-star rate'></i>
                                                <i className='fa fa-star rate'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr />
                            <div className="row pl-2 pr-2">
                                <div className="col-12 col-md-6 my-auto">
                                    <h6 className='mb-0'>Rating</h6>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group mt-2">
                                        <div class="rating">
                                            <input value="5" name="rate" id="star5" type="radio" />
                                            <label title="text" for="star5"></label>
                                            <input value="4" name="rate" id="star4" type="radio" />
                                            <label title="text" for="star4"></label>
                                            <input value="3" name="rate" id="star3" type="radio"/>
                                            <label title="text" for="star3"></label>
                                            <input value="2" name="rate" id="star2" type="radio" />
                                            <label title="text" for="star2"></label>
                                            <input value="1" name="rate" id="star1" type="radio" />
                                            <label title="text" for="star1"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;