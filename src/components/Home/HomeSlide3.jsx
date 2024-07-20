import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import styled from 'styled-components';

const HomeSlide3Block = styled.div`
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
`

const HomeSlide3 = () => {

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
        <HomeSlide3Block>
            <Slider {...settings}>
                <div className='homeslide3'>
                    <div className='card-content-info'>
                        <div className='card-content-introduce'>새로움을 입다.</div>
                        <div>새로운 색상과 기능으로 찾아온 최애 액세서리들.</div>
                    </div>
                    <img src="assets/img/image_23.jpg" alt="" width={400} height={500} />
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_24.jpg" alt="" className='homeslide3-1-img' />
                    {/* img에 클래스를 주고 width값 부여하면 일일이 각 img 조정 안해도 됨 */}
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>Apple Pencil Pro</div>
                        <p className='pencil-price'>₩195,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_25.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>iPad Pro 13(M4 모델)용 Magic Keyboard - 한국어 - 블랙</div>
                        <p className='magic-keyboard-price'> ₩519,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_28.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>MagSafe형 iPhone 15 Pro <br />파인우븐 케이스 - 에버그린</div>
                        <p className='magic-keyboard-price'> ₩85,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_34.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>MagSafe형 iPhone 파인우븐 <br/>카드지갑 - 퍼시픽 블루</div>
                        <p className='magic-keyboard-price'> ₩85,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_40.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>45mm 소프트 민트 스포츠 루프</div>
                        <p className='pencil-price'> ₩65,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_42.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>MagSafe형 iPhone 15 실리콘 <br/>케이스 - 라이트 블루</div>
                        <p className='magic-keyboard-price'> ₩69,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_49.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>Tech21 EvoArt Case (AirPods Max)</div>
                        <p className='magic-keyboard-price'>₩59,000</p>
                    </div>
                </div>

                <div className='homeslide3-1'>
                    <img src="assets/img/image_52.jpg" alt="" className='homeslide3-1-img' />
                    <div className='home-product'>
                        <span>New</span>
                        <div className='home-product-name'>45mm 선샤인 스포츠 밴드 - M/L</div>
                        <p className='pencil-price'> ₩65,000</p>
                    </div>
                </div>
            </Slider>
        </HomeSlide3Block>
    );
};

export default HomeSlide3;