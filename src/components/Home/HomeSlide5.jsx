import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import styled from 'styled-components';

const HomeSlide5Block = styled.div`
.homeslide {
    position: relative; /*자식에 absolute 줬으니 부모는 relative  */
    border-radius: 20px;
    padding: 10px;
    img{
        border-radius: 20px;
        box-shadow: 2px 4px 12px #00000014;
        &:hover{
            transform: scale(1.02);
            transition: all 0.3s;
        }
    }
}

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

.slick-prev { left:-10px;  z-index:9999;  }
.slick-next { right:10px;  } 

.homeslide:hover .card-content-info{
font-size: 1.02rem;
transition: all 0.3s;
}

.card-content-info{
    position: absolute; /* 이미지 위에 텍스트 올라감 */
    top:40px; left: 40px;   /* 조상 요소 위치를 기준으로 top, bottom, left, right에서 얼마만큼 떨어질 지 결정한다. */
    z-index: 1;
    h3{
        font-size: 12px;
        color: #6e6e73;
    }
}

.card-content-introduce{
    margin: 7px 0;
    font-size: 24px;
    font-weight: 600;
}

.infoblack{
    color: white;
    h3{
        color: white !important;
    }
}
`

const HomeSlide5 = () => {

    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
          <IoIosArrowDropleftCircle
            className={className}
            onClick={onClick}
          />
        );
      };
      
      const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
          <IoIosArrowDroprightCircle
            className={className}
            onClick={onClick}
          />
        );
      };

    const settings = {
        variableWidth: true,
        infinite: false,
        arrows: true,
        prevArrow : <CustomPrevArrow />,
        nextArrow : <CustomNextArrow />,
    };

    return (
        <HomeSlide5Block>
            <Slider {...settings}>
            <div className='homeslide slide1'>
                    <div className='card-content-info infoblack'>
                        <h3>APPLE TV+</h3>
                        <div className='card-content-introduce'>Apple 기기를 구입하면 Apple TV+가 <br/>3개월 무료.°  </div>
                    </div>
                    <img src="assets/img/image_78.jpg" alt="" width={480} height={500} />
                </div>

                <div className='homeslide slide3'>
                    <div className='card-content-info'>
                        <div className='card-content-introduce'>네 가지 Apple 서비스. 한 번의 <br/>간편한 가입.</div>
                    </div>
                    <img src="assets/img/image_79.jpg" alt="" width={480} height={500} />
                </div>

                <div className='homeslide slide3'>
                    <div className='card-content-info'>
                        <div className='card-content-introduce'>보다 오래 안심할 수 있도록.</div>
                        <div>이제 AppleCare+가 우발적인 손상에 대한 수리 <br/>서비스를 횟수 제한 없이 제공합니다.</div>
                    </div>
                    <img src="assets/img/image_80.jpg" alt="" width={480} height={500} />
                </div>

                <div className='homeslide slide3'>
                    <div className='card-content-info'>
                        <div className='card-content-introduce'>앱 하나로 집안 전체를 관리하는 <br/>방법을 알아보세요.</div>
                    </div>
                    <img src="assets/img/image_81.jpg" alt="" width={480} height={500} />
                </div>
            </Slider>
        </HomeSlide5Block>
    );
};

export default HomeSlide5;