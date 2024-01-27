import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [allBookings, setAllBookings] = useState([]);
    const [bookingUserDetail, setBookinguserDetail] = useState();

     //for show success message for payment
     function showSuccessMessage(message) {
        Swal.fire({
            title: 'Rating Updated!',
            text: message,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
        });
    }

    //for show error message for payment
    function showErrorMessage(message) {
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK',
        });
    }

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
        } else {
          setLoading(false); // No token, so stop loading
          navigate('/log-in'); // Navigate to login page
        }
    },[])

    useEffect(() => {
        if (token) {
          const fetchData = async () => {
            try {
              const user = await getProtectedData(token);
              console.log(user);
              setUser(user);
              setLoading(false)
            } catch (error) {
              console.log(error);
              setLoading(false)
            }
          };
    
          fetchData();
        }
      }, [token]);

      const GetBookings = async (endPoint) => {
        try {
            const response = await axios.get(`http://localhost:8002/${endPoint}`, {
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
    
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                if (user?.role === "Driver") {
                    const bookings = await GetBookings(`booking/${user.id}`);
                    console.log(bookings);
                    setAllBookings(bookings)
                }else if (user?.role === "Customer") {
                    const bookings = await GetBookings(`bookings-customer/${user.id}`);
                    console.log(bookings);
                    setAllBookings(bookings)
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };
    
        fetchBookings();
    }, [user]);

    const handleBookingUser = (userDetail, type) => {
        setBookinguserDetail({
            userDetail,
            type
        })
    }
    
    const renderStars = (numStars) => {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(<i key={i} className='fa fa-star rate'></i>);
        }
        for (let i = numStars; i < 5; i++) {
            stars.push(<i key={i} className='fa fa-star'></i>);
        }
        return stars;
    };

    const handleRating = (id, num) => {
        console.log(id, num)
        
            const driverId = id
            const ratingNum = num
        
        axios.patch(`http://localhost:8002/update-driver-rating`, {driverId, ratingNum} , {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        .then(res=>{
            console.log(res.data)
            showSuccessMessage();
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
            showErrorMessage();
        })
    }

    return (
        <>
        {loading ? <p>Loading...</p> : 
        (user ? <>
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
                                                    <h6 className='text-secondary sub-text'>{user.userName}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row p-2">
                                                <div className="col-5">
                                                    <h6 className=''>E-Mail</h6>
                                                </div>
                                                <div className="col-7">
                                                    <h6 className='text-secondary sub-text'>{user.email}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row p-2">
                                                <div className="col-5">
                                                    <h6 className=''>Mobile</h6>
                                                </div>
                                                <div className="col-7">
                                                    <h6 className='text-secondary sub-text'>{user.phoneNum}</h6>
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
                                                        {allBookings.map((book, index)=>{
                                                            const userDetail = book?.customerDetatls || book?.driverDetails
                                                            const userType = (book?.customerDetatls) ? "Customer" : (book?.driverDetails) ? "Driver" : null
                                                            return (
                                                                <tr>
                                                                    <td>{index+1}.</td>
                                                                    <td>{book?.bookingDetails?.date}</td>
                                                                    <td>{book?.bookingDetails?.time}</td>
                                                                    <td>{book?.bookingDetails?.from}</td>
                                                                    <td>{book?.bookingDetails?.to}</td>
                                                                    <td>{book?.bookingDetails?.money}</td>
                                                                    <td className='text-center'>
                                                                        {/* <span className="booking-status pending">Pending</span> */}
                                                                        <span className="booking-status completed">{book?.bookingDetails?.status}</span>
                                                                    </td>
                                                                    <td className='text-center'>
                                                                        <button className='btn view-btn' data-toggle="modal" data-target="#exampleModal"
                                                                        onClick={()=>handleBookingUser(userDetail, userType)}>
                                                                            <i className='fa fa-eye'></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                        

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
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-orange" id="exampleModalLabel">{bookingUserDetail?.type} Information</h5>
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
                                                <h6 className=''>UserName</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>{bookingUserDetail?.userDetail?.userName}</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-5">
                                                <h6 className=''>E-Mail</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>{bookingUserDetail?.userDetail?.email}</h6>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-5">
                                                <h6 className=''>Mobile</h6>
                                            </div>
                                            <div className="col-7">
                                                <h6 className='text-secondary sub-text'>{bookingUserDetail?.userDetail?.phoneNum}</h6>
                                            </div>
                                        </div>
                                        {bookingUserDetail?.type === "Driver" &&<hr />}
                                        {bookingUserDetail?.type === "Driver" &&
                                           
                                                <div className="row">
                                                    <div className="col-5">
                                                        <h6 className=''>Availability</h6>
                                                    </div>
                                                    <div className="col-7">
                                                    {(bookingUserDetail?.userDetail?.availability) ? <h6 className='text-success sub-text'>Available</h6> :
                                                    <h6 className='text-warning sub-text'>Not Available</h6>}
                                                        
                                                    </div>
                                                </div>}
                                                {bookingUserDetail?.type === "Driver" &&<hr />}
                                            {bookingUserDetail?.type === "Driver" &&    <div className="row">
                                                <div className="col-5">
                                                    <h6 className=''>Current Rating</h6>
                                                </div>
                                                <div className="col-7">
                                                    <div className="current-rating">
                                                    {renderStars(bookingUserDetail?.userDetail?.rating)}
                                                    </div>
                                                </div>
                                            </div>}

                                        </div>
                                    </div>
                                    {bookingUserDetail?.type === "Driver" &&<hr />}
                                    {bookingUserDetail?.type === "Driver" &&<div className="row pl-2 pr-2">
                                        <div className="col-12 col-md-6 my-auto">
                                            <h6 className='mb-0'>Rating</h6>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group mt-2">
                                                <div class="rating">
                                                    <input value="5" name="rate" id="star5" type="radio" 
                                                    onChange={()=>handleRating(bookingUserDetail?.userDetail?.id,5)}/>
                                                    <label title="text" for="star5"></label>
                                                    <input value="4" name="rate" id="star4" type="radio" 
                                                    onChange={()=>handleRating(bookingUserDetail?.userDetail?.id, 4)}/>
                                                    <label title="text" for="star4"></label>
                                                    <input value="3" name="rate" id="star3" type="radio"
                                                    onChange={()=>handleRating(bookingUserDetail?.userDetail?.id, 3)}/>
                                                    <label title="text" for="star3"></label>
                                                    <input value="2" name="rate" id="star2" type="radio"
                                                    onChange={()=>handleRating(bookingUserDetail?.userDetail?.id, 2)} />
                                                    <label title="text" for="star2"></label>
                                                    <input value="1" name="rate" id="star1" type="radio"
                                                    onChange={()=>handleRating(bookingUserDetail?.userDetail?.id, 1)} />
                                                    <label title="text" for="star1"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                  
                                    
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </> : <p>loading</p>
            )}
        
        </>
        
    )
}

export default Dashboard;