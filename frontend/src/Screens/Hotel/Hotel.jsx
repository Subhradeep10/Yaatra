import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916376.jpg?k=ff291586457ab6b889496acc0027ff213f28ba6e9f958c64922ad806dc4982cd&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916394.jpg?k=f3efbd5a135d8dd46fb3a146bcc3025e48d7335bd921ad533945b798b22c35fb&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916379.jpg?k=80d9d9de74971a9246482f2d6a55704121ad474d1bfc4b3b55c80a39ae3db26b&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916399.jpg?k=48dd47b86d691f3566878e553083cec1853efdc30f57b853e9642cbc97a6c2cc&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916383.jpg?k=abf58107dd91567ba3f5bf38be9ce0b2196c4153b1b872bac3c7440f81c19ca0&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916385.jpg?k=4954db8c4c5459abda5d7a12426e82d6c8ae6252448fb2525d077da21dab0ae2&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hyatt Regency Kolkata</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>JA-1 Sector III, Salt Lake City, 700098 Kolkata, India</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 5,000 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Get the celebrity treatment with world-class service at Hyatt
                Regency Kolkata
              </h1>
              <p className="hotelDesc">
                Located in Kolkata's business district of Salt Lake City, 0.6 mi
                away from Apollo Hospital, Hyatt Regency features modern rooms,
                an outdoor swimming pool and 6 food and beverage options. Free
                private parking is available. Relaxing massage can be enjoyed at
                the hotel's spa. Decorated with a calming color palette,
                air-conditioned rooms are equipped with a flat-screen TV with
                satellite channels, a mini-bar and desk. The private bathroom
                comes with a rain shower and a bathtub. Free toiletries and a
                hairdyer are provided for added convenience. Tour and day trip
                information can be obtained at the travel desk. Other facilities
                includes a 24-hour front desk, business center and shops. Wi-Fi
                is available at an extra charge. Guchhi serves signature North
                Indian dishes, while Italian cuisine can be savored at La
                Cucina. The Hyatt also has a bakery and an all-day dining
                restaurant. Alcoholic and nonalcoholic beverages can be enjoyed
                at the bar or by the pool. Room service is available. It is a
                20-minute drive to Kolkata City and Netaji Subhash Chandra Bose
                International Airport from Hyatt Regency. Howrah Railway Station
                is 9 mi away. Couples in particular like the location – they
                rated it 8.5 for a two-person trip. Hyatt Regency Kolkata has
                been welcoming Booking.com guests since Oct 5, 2012 Hotel
                chain/brand: Hyatt Regency
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Top Location: Highly rated by recent guests{" "}
                <span style={{ fontWeight: 700 }}>(8.6)</span>
              </span>
              <h2>
                <b>₹ 5,000</b> per night
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
