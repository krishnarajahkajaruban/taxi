import React, { useEffect, useState } from 'react';
import './Home.css';
import Layout from '../../components/Layout';
import { Footer } from '../../components/Footer';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [user, setUser] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const [toLocations, setToLocations] = useState([]);
    const [fromLocations, setFromLocations] = useState([]);

    const [filteredLocations, setFilteredLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    const [filteredToLocations, setFilteredToLocations] = useState([]);
    const [selectedToLocation, setSelectedToLocation] = useState('');

    const [routeDetail, setRouteDetail] = useState([]); 
    const [showDateAndTime, setShowDateAndTime] = useState(false);

    const [extractedDate, setExtractedDate] = useState('');
    const [extractedTime, setExtractedTime] = useState('');
    const [pickUpLocation, setPickUpLocation] = useState("");
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [driverId, setDriverId] = useState("");
    const [money, setMoney] = useState("");
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    
    const handleChange = date => {
        setSelectedDate(date);
    };

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
    },[token])

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

    useEffect(() => {
        const dateTime = new Date(selectedDate);
        const extractedDate = dateTime.toDateString(); // Extracting date
        const extractedTime = dateTime.toLocaleTimeString(); // Extracting time
    
        setExtractedDate(extractedDate);
        setExtractedTime(extractedTime);
      }, [selectedDate]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if(inputValue){
            setSelectedLocation(inputValue); // Update selectedLocation state
            const filtered = fromLocations.filter(location =>
                location.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredLocations(filtered);
        }else{
            setSelectedLocation("")
        }
        
    };

    // Function to handle click on filtered location
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        setFilteredLocations([]);
    };

    const handleToInputChange = (event) => {
        const inputValue = event.target.value;
        if(inputValue){
            setSelectedToLocation(inputValue); // Update selectedLocation state
            const filtered = toLocations.filter(location =>
                location.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredToLocations(filtered);
        }else{
            setSelectedToLocation("")
        }
        
    };

    // Function to handle click on filtered location
    const handleToLocationClick = (location) => {
        setSelectedToLocation(location);
        setFilteredToLocations([]);
    };

    useEffect(()=>{

        axios.get("http://localhost:8002/find-from-routes")
        .then(res=>{
            console.log(res.data)
            setFromLocations(res.data);
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get("http://localhost:8002/find-to-routes")
        .then(res=>{
            console.log(res.data)
            setToLocations(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])

    const handleRouteDetail = () => {

        axios.get(`http://localhost:8002/route-detail/${selectedLocation}/${selectedToLocation}`)
        .then(res=>{
            console.log(res.data);
            setRouteDetail(res.data);
        })
        .catch(err=>{
            console.log(err)
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

    const handleBooking = () => {
        const bookingData = {
            driverId,
            time:extractedTime,
            date:extractedDate,
            customerId:user.id,
            from,
            to,
            money,
            pickUpLocation

        }

        axios.post("http://localhost:8002/create-new-booking", bookingData, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err)
        })

    }

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
                                        <input className="form-control txt-field home-book-input mb-0" type="text" name="from" placeholder="Search Location" 
                                        value={selectedLocation} 
                                        onChange={handleInputChange} />

                                        <div className='search-result-data-area custom'>
                                        {filteredLocations.map((location, index) => (
                                            <div
                                                key={index}
                                                className='search-result-data'
                                                onClick={() => handleLocationClick(location)}
                                            >
                                                {location}
                                            </div>
                                        ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="from-group mb-4">
                                    <div className='relative'>
                                        <label htmlFor="from" className='home-book-input-label'>To</label>
                                        <input className="form-control txt-field home-book-input mb-0" type="text" name="to" placeholder="Search Location" 
                                        value={selectedToLocation} 
                                        onChange={handleToInputChange} />

                                        <div className='search-result-data-area custom'>
                                        {filteredToLocations.map((location, index) => (
                                            <div
                                                key={index}
                                                className='search-result-data'
                                                onClick={() => handleToLocationClick(location)}
                                            >
                                                {location}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type='button' className="btn btn-default btn-lg btn-block text-center text-uppercase make-reserve-btn" data-toggle="modal" data-target="#exampleModal"
                                    onClick={handleRouteDetail}>SUBMIT</button>
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
                                            <h6 className='text-white sub-text'>{selectedLocation}</h6>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className='selected-location'>
                                            <h6 className='text-orange'>To : </h6>
                                            <h6 className='text-white sub-text'>{selectedToLocation}</h6>
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
                                                    {user?.role === "Customer" &&<th className='text-center'>Select</th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {routeDetail.map((rout, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}.</td>
                                                    <td>{rout?.driver?.userName}</td>
                                                    <td>{rout?.driver?.phoneNum}</td>
                                                    <td>{rout?.money}</td>
                                                    <td className='verical-align-middle'>
                                                        <div className="current-rating">
                                                            {renderStars(rout?.driver?.rating)}
                                                        </div>
                                                    </td>
                                                    <td className='text-center'>
                                                        {user?.role === "Customer" && <button
                                                            className='btn no-radius view-btn btn-success'
                                                            onClick={() => {
                                                                setSelectedRowIndex(index);
                                                                setShowDateAndTime(true);
                                                                setDriverId(rout?.driver?.id);
                                                                setTo(rout?.to);
                                                                setFrom(rout?.from);
                                                                setMoney(rout?.money);
                                                            }}
                                                            disabled={selectedRowIndex === index} // Disable if this row is selected
                                                        >
                                                            <i className='fa fa-check mr-2'>Select</i>
                                                        </button>}
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            {/* booking form here */}
                            {showDateAndTime &&
                            <div className="row">
                                <div className="col-12">
                                    <form action="">
                                        <div className='book-form-area'>
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='form-label absolute text-orange'>Pickup Location</label>
                                                        <input type="text" className='form-control dark-theme' placeholder='Enter your pickup location'
                                                        value={pickUpLocation}
                                                        onChange={(e)=>setPickUpLocation(e.target.value)} />
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
                            </div>}
                            {/*  */}

                        </div>
                        <div class="modal-footer dark-theme">
                        {!(user?.role === "Customer") &&<h5 class="btn no-radius btn-orange"
                        onClick={()=>navigate("/log-in")}>Please login as Customer to Book....</h5>}
                            <button type="button" class="btn no-radius btn-secondary" data-dismiss="modal">Close</button>
                            {user?.role === "Customer" &&<button type="button" class="btn no-radius btn-orange"
                            onClick={()=>handleBooking()}>Book</button>}
                            
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </>
    )
}

export default Home;
