import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Slider1Block = styled.div`
    .slide {
        height: 648px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &.product-slide1 {
            background-image: url("/assets/img/image1.jpg");
        }
        &.product-slide2 {
            background-image: url("/assets/img/image2.jpg");
        }
    }
/* 
    .slick-arrow {
        position: absolute;
        transform: translateY(-50%);
        z-index: 9999;
        color: gray;
        display: flex;
        width: 50px;
        height: 50px;
        &.slick-prev {
            top: 50%;
            transform: translateY(-50%);
        }
        &.slick-next {
            right: 10px;
            top: 50%;
            transform: translateX(-50%);
        }
    } */

.slick-arrow {
  position: absolute;
  top: 50%;
  font-size: 70px;
  color: #bbbbbf;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.slick-arrow:hover{
  opacity: 1;
}

.slick-prev { left:10px;  z-index:9999;  }
.slick-next { right:10px;  } 
    .slick-dots {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        li {
            margin: 0 5px;
            display: inline-block;
            button {
                color: black;
                width: 10px;
                height: 10px;
                background: gray;
                border-radius: 50%;
                text-indent: -9999px;
            }
        }
    }
`;

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return <IoIosArrowDropleft className={className} onClick={onClick} />;
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return <IoIosArrowDropright className={className} onClick={onClick} />;
};

const Slider1 = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider1Block>
            <Slider {...settings}>
                <div className="slide product-slide1"></div>
                <div className="slide product-slide2"></div>
            </Slider>
        </Slider1Block>
    );
};

export default Slider1;
