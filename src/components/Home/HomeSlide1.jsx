import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeSlide1Block = styled.div`
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
//초보자는 styled.component보다 css먼저 익숙해지는 것이 필요
const HomeSlide1 = () => {
    
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
        <HomeSlide1Block>
            <Slider {...settings}>
                <Link to="/15pro">
                <div className='homeslide slide1'>
                    <div className='card-content-info infoblack'>
                        <h3>IPHONE 15 PRO </h3>
                        <div className='card-content-introduce'>티타늄</div>
                        <div><b>₩1,550,000</b>부터</div>
                    </div>
                    <img src="assets/img/image_9.jpg" alt="" width={400} height={500} />
                    {/* 위와 같이 반복되는 코드들이 보이면 간결하게 줄이는 것을 고민 필요 */}
                </div>
                </Link>
                <div className='homeslide slide2'>
                    <div className='card-content-info infoblack'>
                        <h3>IPAD PRO </h3>
                        <div className='card-content-introduce'>불가능이란 얇다. </div>
                        <div><b>₩1,499,000</b>부터</div>
                    </div>
                    <img src="assets/img/image_10.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide3'>
                    <div className='card-content-info'>
                        <h3>MACBOOK AIR </h3>
                        <div className='card-content-introduce'>어디서나 종횡무진할 수 있도록.  </div>
                        <div><b>₩1,390,000</b>부터</div>
                    </div>
                    <img src="assets/img/image_11.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide4'>
                    <div className='card-content-info'>
                        <h3>IPAD AIR </h3>
                        <div className='card-content-introduce'>새바람이 불다.  </div>
                        <div><b>₩899,000</b>부터</div>
                    </div>
                    <img src="assets/img/image_12.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide5'>
                    <div className='card-content-info infoblack'>
                        <h3>APPLE PENCIL PRO </h3>
                        <div className='card-content-introduce'>새롭게 써 내려가는 창의성의 <br />미래.  </div>
                        <div><b>₩195,000</b>부터</div>
                    </div>
                    <img src="/assets/img/image_13.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide6'>
                    <div className='card-content-info infoblack'>
                        <h3>APPLE WATCH SERIES 9 </h3>
                        <div className='card-content-introduce'>보다 똑똑. 보다 또렷. 보다 강력.  </div>
                        <div><b>₩599,000</b>부터</div>
                    </div>
                    <img src="/assets/img/image_14.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide7'>
                    <div className='card-content-info'>
                        <h3>IPHONE 15 </h3>
                        <div className='card-content-introduce'>새로움 물씬  </div>
                        <div><b>₩1,250,000</b>부터</div>
                    </div>
                    <img src="/assets/img/image_15.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide8'>
                    <div className='card-content-info'>
                        <h3>APPLE WATCH ULTRA 2 </h3>
                        <div className='card-content-introduce'>한 차원 높은 모험.  </div>
                        <div><b>₩1,149,000</b>부터</div>
                    </div>
                    <img src="/assets/img/image_16.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide9'>
                    <div className='card-content-info'>
                        <h3>MACBOOK PRO </h3>
                        <div className='card-content-introduce'>비교 불가 성능. 시선 강탈 매력.  </div>
                        <div><b>₩2,390,000</b>부터</div>
                    </div>
                    <img src="/assets/img/image_17.jpg" alt="" width={400} height={500} />
                </div>
                <div className='homeslide slide10'>
                    <div className='card-content-info'>
                        <h3>APPLE WATCH SE </h3>
                        <div className='card-content-introduce'>부담 없이 빠져들다.</div>
                        <div><b>₩329,000</b>부터</div>
                    </div>
                    <img src="assets/img/image_18.jpg" alt="" width={400} height={500} />
                </div>
            </Slider>
        </HomeSlide1Block>
    );
};

export default HomeSlide1;