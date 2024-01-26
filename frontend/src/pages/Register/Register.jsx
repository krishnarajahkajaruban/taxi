import React from 'react';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

const Register = () => {

    return (
        <>
            <Layout />
            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Sign Up
                            </h1>
                            <p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/sign-up">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='login-section section-gap'>
                <div className="container">
                    <div className="row login-form-section">
                        <div className="col-12 col-md-6 col-lg-4 mx-auto login-form-area">
                            <div className="">
                                <h4 className='text-center mb-4'>REGISTER</h4>
                                <hr />
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="email" className='form-label'>E-mail</label>
                                        <input name="email" placeholder="Enter your email" className="common-input mb-20 form-control login-input" required="" type="email" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mobile" className='form-label'>Mobile Number</label>
                                        <input name="mobile" placeholder="Enter your mobile number" className="common-input mb-20 form-control login-input" required="" type="text" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="role" className='form-label'>Select Role</label>

                                        <div className="radio-inputs">
                                            <label className="radio">
                                                <input type="radio" name="role" value="Customer" checked={true} />
                                                <span className="name">Customer</span>
                                            </label>

                                            <label className="radio">
                                                <input type="radio" name="role" value="Driver" />
                                                <span className="name">Driver</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="alert-msg text-left"></div>
                                        <button className="btn login-btn">SUBMIT</button>
                                        <div className='dont-acc-text'>You already have an account,&nbsp;
                                            <a href="/log-in">Login</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Register;