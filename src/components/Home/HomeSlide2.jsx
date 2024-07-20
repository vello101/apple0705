import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import styled from 'styled-components';

const HomeSlide2Block = styled.div`
    .homeslide2 {
    position: relative;
    /*자식에 absolute 줬으니 부모는 relative  */
    border-radius: 20px;
    padding: 10px;
    img{
        border-radius: 20px;
        box-shadow: 2px 4px 12px #00000014;
        &:hover{
            transform: scale(1.02);
            transition: 0.3s ease;
            }
        }
    }

.cci2 {
    font-size: 16px;
    padding-top: 10px;
}

.session {
    font-size: 20px;
    font-weight: 600;
}

.homeslide2:hover .card-content-info2 {
    font-size: 1.02rem;
    transition: 0.3s ease;
}

.card-content-info2 {
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

.card-content-introduce{
    margin: 7px 0;
    font-size: 24px;
    font-weight: 600;
}

.card-content-introduce2 {
    margin: 7px 0;
    font-size: 24px;
    font-weight: 600;
}

.hs2{
    padding-bottom: 20px;
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
const HomeSlide2 = () => {

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
        <HomeSlide2Block>
            <Slider {...settings}>
                <div className='homeslide2'>
                    <div className='card-content-info2'>
                        <h3>APPLE 스페셜리스트  </h3>
                        <div className='card-content-introduce'>스페셜리스트와 함께하는 일대일 쇼핑.<br />
                            온라인에서도 매장에서도.</div>
                    </div>
                    <img src="assets/img/image_19.jpg" alt="" width={480} height={500} />
                </div>

                <div className='homeslide2'>
                    <div className='card-content-info2'>
                        <h3>TODAY AT APPLE</h3>
                        <div className='card-content-introduce'>Apple Store의 무료 세션에 참여해 보세요.</div>
                        <div className='cci2'>최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을
                            <br />알아보세요.</div>
                    </div>
                    <img src="assets/img/image_20.jpg" alt="" width={480} height={500} />
                </div>

                <div className='cards2'>
                    <div className='homeslide2 hs2'>
                        <div className='card-content-info2'>
                            <div className='session'>무료 온라인 개인 맞춤 세션에서 새 기기를
                                <br />설정하는 방법을 배워보세요.</div>
                        </div>
                        <img src="assets/img/image_21.jpg" alt="" width={480} height={240} />
                    </div>

                    <div className='homeslide2'>
                        <div className='card-content-info2'>
                            <div className='session'>Genius Bar에서 직접 
                                <br/>전문가의 도움을 받을 <br/>수 있습니다.</div>
                        </div>
                        <img src="assets/img/image_22.jpg" alt="" width={480} height={240} />
                    </div>
                </div>
            </Slider>
        </HomeSlide2Block>
    );
};

export default HomeSlide2;