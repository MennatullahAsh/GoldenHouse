import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import img1 from '../Utilis/images/1.jpg'
import img2 from '../Utilis/images/3.jpg'
import img3 from '../Utilis/images/4.jpg'
import img4 from '../Utilis/images/5.jpg'

const images = [
    img1,
    img2,
    img1,
    img3,
    img4,
    img1,
];

function Hero() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000, 
        dots: true,
        infinite: true,
        speed: 2000, 
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sliderStyle = {
        width: "100%",
        height: "100vh",
    };

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover", 
    };

    return (
        <div className="hero">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={sliderStyle}>
                        <img src={image} alt={`Image ${index}`} style={imgStyle} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Hero;
