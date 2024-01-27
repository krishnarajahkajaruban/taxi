import React from 'react';

export const Header = () => {

    return (
        <header id="header">
            <div className="header-top">
            </div>
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <a href="/"><img className='header-logo' src="img/lanka-cabz-logo.png" alt="" title="" /></a>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu nav-menu-ul">
                            <li className="menu-active"><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>

                            {/* <li className="menu-has-children"><a href="">Blog</a>
                                <ul>
                                    <li><a href="blog-home.html">Blog Home</a></li>
                                    <li><a href="blog-single.html">Blog Single</a></li>
                                    <li className="menu-has-children"><a href="">Level 2</a>
                                        <ul>
                                            <li><a href="#">Item One</a></li>
                                            <li><a href="#">Item Two</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}

                            <li><a href="/contact-us">Contact</a></li>
                            <li><a href="/log-in" className="btn header-login-btn">LOGIN</a></li>
                            <li className="menu-has-children">
                                <a href="#" className='profile-btn'>
                                    <i className='fa fa-user'></i>
                                </a>
                                <ul>
                                    <li><a href="/Dashboard" className='text-white'><i className='fa fa-dashboard mr-1'></i> DASHBOARD</a></li>
                                    <li><a href="" className='text-danger'><i className='fa fa-sign-out mr-1'></i> LOGOUT</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header