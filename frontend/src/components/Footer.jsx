import React from 'react';
import './index.css'

export const Footer = () => {
    return (
        <footer className="footer-area section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Brand Assets</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Features</h6>
                            <ul>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Brand Assets</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Resources</h6>
                            <ul>
                                <li><a href="#">Guides</a></li>
                                <li><a href="#">Research</a></li>
                                <li><a href="#">Experts</a></li>
                                <li><a href="#">Agencies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div className="single-footer-widget">
                            <h6>Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Newsletter</h6>
                            <p>Stay update with our latest</p>
                            <div className="" id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">
                                    <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
                                    <button className="click-btn btn btn-default"><span className="lnr lnr-arrow-right"></span></button>
                                    <div className='footer-input'>
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                    </div>

                                    <div className="info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="mt-80 mx-auto footer-text col-lg-12">
                        {/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                    </p>
                </div>
            </div>
            <img className="footer-bottom" src="../img/footer-bottom.png" alt="" />
        </footer>
    )
}

export default Footer;