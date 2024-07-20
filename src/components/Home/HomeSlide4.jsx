import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import styled from 'styled-components';

const HomeSlide4Block = styled.div`
    .homeslide3 {
    position: relative;
    /*자식에 absolute 줬으니 부모는 relative  */
    border-radius: 20px;
    padding: 10px;
    margin-right: 10px;
    img{
        border-radius: 20px;
        box-shadow: 2px 4px 12px #00000014;
        &:hover{
            transform: scale(1.02);
            transition: 0.3s ease;
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

.homeslide3-1 {
    position: relative;
    /*자식에 absolute 줬으니 부모는 relative  */
    margin-top: 10px;
    margin-right: 20px;
    background: white;
    width: 313px !important;
    height: 500px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 2px 4px 12px #00000014;
    span{
        color: #b64400;
        font-size: 12px;
        font-weight: 600;
    }
    &:hover{
        transform: scale(1.02);
        transition: 0.3s ease;
    }
}

.homeslide3-1-img {
    padding-top: 40px;
    width: 100%;
}

.home-product {
    padding-top: 30px;
}

.pencil-price {
    margin-top: 44px;
    font-size: 14px;
}

.magic-keyboard-price {
    font-size: 14px;
    padding-top: 20px;
}

.home-product-name {
    font-weight: 600;
}

.homeslide3:hover .card-content-info {
    font-size: 1.02rem;
    transition: 0.3s ease;
}

.card-content-info {
    position: absolute;
    /* 이미지 위에 텍스트 올라감 */
    top: 40px;
    left: 40px;
    /* 조상 요소 위치를 기준으로 top, bottom, left, right에서 얼마만큼 떨어질 지 결정한다. */
    z-index: 1;
    h3{
        font-size: 12px;
        color: #6e6e73;
    }
}

.card-content-introduce {
    margin: 7px 0;
    font-size: 24px;
    font-weight: 600;
}
`

const HomeSlide4 = () => {

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
        <HomeSlide4Block>
            <Slider {...settings}>
            <div className='homeslide3'>
                    <div className='card-content-info'>
                        <div className='card-content-introduce'>Apple Music 3개월 무료 이용 <br/>혜택.  </div>
                        <div>해당 Apple 기기 구입 시 혜택 제공.⁺</div>
                    </div>
                    <img src="assets/img/image_60.jpg" alt="" width={400} height={500} />
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_62.jpg" alt="" className='homeslide3-1-img' />
                    {/* img에 클래스를 주고 width값 부여하면 일일이 각 img 조정 안해도 됨 */}
                    <div className='home-product'>
                        <span>무료 각인</span>
                        <div className='home-product-name'>AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)</div>
                        <p className='magic-keyboard-price'>₩359,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_63.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                    <span>무료 각인</span>
                        <div className='home-product-name'>AirPods Max - 실버</div>
                        <p className='magic-keyboard-price'> ₩769,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_69.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                    <span>무료 각인</span>
                        <div className='home-product-name'>AirPods(3세대) Lightning 충전 <br/>케이스 모델</div>
                        <p className='magic-keyboard-price'>₩259,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_70.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                    <span>무료 각인</span>
                        <div className='home-product-name'>Beats Studio Buds + 진정한 무선 <br/>노이즈 캔슬링 이어버드 — 투명</div>
                        <p className='magic-keyboard-price'>₩229,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_73.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                    <span>무료 각인</span>
                        <div className='home-product-name'>Beats Solo Buds — 진정한 무선 <br/>이어버드 — 클리어 레드</div>
                        <p className='magic-keyboard-price'> ₩269,000</p>
                    </div>
                </div>
            </Slider>
        </HomeSlide4Block>
    );
};

export default HomeSlide4;