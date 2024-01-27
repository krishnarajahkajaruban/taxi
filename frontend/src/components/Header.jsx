import React, { useState, useEffect } from 'react';
import axios from  'axios';

export const Header = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState();
   
    

    const getProtectedData = async (accessToken) => {
        try {
          const response = await axios.get('http://localhost:8002/protected', {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json'
            }
          });
          return response.data;
        } catch (error) {
            throw error;
        }
      };

    useEffect(()=>{
        const storedToken = JSON.parse(localStorage.getItem('token'));
        if (storedToken) {
          setToken(storedToken);
        } 
    },[])

    useEffect(() => {
        if (token) {
          const fetchData = async () => {
            try {
              const user = await getProtectedData(token);
              console.log(user);
              setUser(user);
              
            } catch (error) {
              console.log(error);
              
            }
          };
    
          fetchData();
        }
      }, [token]);

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
                            {/* <li><a href="gallery.html">Gallery</a></li>
                            <li className="menu-has-children"><a href="">Blog</a>
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
                            </li>
                            <li><a href="elements.html">Elements</a></li> */}
                            <li><a href="/contact-us">Contact</a></li>
                            {!user && <li><a href="/log-in" className="btn header-login-btn">LOGIN</a></li>}
                            {user && <li>
                                <a href="/Dashboard" className='profile-btn'>
                                    <i className='fa fa-user'></i>
                                </a>
                            </li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header