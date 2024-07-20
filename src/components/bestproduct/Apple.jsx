import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const AppleBlock = styled.div`
    background: #fff;
    .aa {
        text-align: center;
        background: #000 url("/assets/img/a1.jpg") center no-repeat;
        background-size: 1200px 650px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        min-height: 776px;
        margin-bottom: 10px;
    }

    .cc1 {
        background: #000 url("/assets/img/a2.jpg") center right no-repeat;
        background-size: 1200px 650px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        min-height: 776px;
        border: 1px solid #fff;
        margin-bottom: 10px;
    }
    .dd1 {
        background: #fff url("/assets/img/a3.jpg") center no-repeat;
        background-size: cover;
        color: #000;
        text-align: center;
        min-height: 776px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        li {
            flex: 0 0 calc(50% - 20px);
            margin: 20px 10px;
            margin-bottom: 0px;
            height: 600px;
            background-repeat: no-repeat;
            &:nth-child(1) {
                background-image: url("/assets/img/a04.jpg");
                background-position: center;
                background-size: cover;
            }

            &:nth-child(2) {
                background-image: url("/assets/img/a05.jpg");
                background-position: center;
                background-size: cover;
            }
            &:nth-child(3) {
                background-image: url("/assets/img/a06.jpg");
                background-position: center;
                background-size: cover;
                background-color: #fff;
            }

            &:nth-child(4) {
                background-image: url("/assets/img/a07.jpg");
                background-position: center;
                background-size: 500px auto;
                background-color: #fff;
            }
            &:nth-child(5) {
                background-image: url("/assets/img/a08.jpg");
                background-position: center;
                background-size: cover;
                background-color: #fff;
            }
            &:nth-child(6) {
                background-image: url("/assets/img/a09.jpg");
                background-position: center;
                background-size: cover;
                background-color: #fff;
            }
        }
    }
`;

const BannerTitle = styled.div`
    text-align: center;
    padding-top: 47px;
    background: #000;
    color: #fff;
    font-size: 20px;
    width: 100%;
    h1 {
        font-size: 20px;
    }
    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }
    .btn2 {
        border: 1px solid rgb(0, 113, 227);
        background: transparent;
        color: rgb(0, 113, 227);
        &:hover {
            background: rgb(0, 113, 227);
            color: #fff;
        }
    }
`;

const ListTitle = styled.div`
    text-align: center;
    padding-top: 50px;
    color: #000;
    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }
    .btn2 {
        border: 1px solid rgb(0, 113, 227);
        background: transparent;
        color: rgb(0, 113, 227);
        &:hover {
            background: rgb(0, 113, 227);
            color: #fff;
        }
    }
`;
const ListTitle2 = styled.div`
    text-align: center;
    padding-top: 50px;
    color: #fff;
    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }
`;
const BannerTitle2 = styled.div`
    text-align: center;
    padding-top: 47px;
    font-size: 20px;
    width: 100%;

    h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 25px;
    }
    h3 {
        font-size: 15px;
        color: #808080;
    }

    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }
    .btn2 {
        border: 1px solid rgb(0, 113, 227);
        background: transparent;
        color: rgb(0, 113, 227);
        &:hover {
            background: rgb(0, 113, 227);
            color: #fff;
        }
    }
`;
const ListTitle3 = styled.div`
    text-align: center;
    padding-top: 50px;
    color: #fff;
    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }
    h3 {
        font-size: 15px;
        color: #ff0000;
    }
    img {
        max-height: 30px;
    }
    .btn2 {
        border: 1px solid rgb(0, 113, 227);
        background: transparent;
        color: rgb(0, 113, 227);
        &:hover {
            background: rgb(0, 113, 227);
            color: #fff;
        }
    }
`;
const ListTitle4 = styled.div`
    text-align: center;
    padding-top: 50px;
    color: #000;
    margin-bottom: 30px;

    button {
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        padding: 8px 15px;
        border-radius: 20px;
        margin: 20px 10px 0 10px;
        background: rgb(0, 113, 227);
        color: #fff;
    }

    img {
        max-height: 30px;
    }
`;
const AppleSlideBlock = styled.div`
    .mainSlide {
        position: relative;
        margin-top: 20px;
        margin-bottom: 100px;
        .appSlide {
            height: 700px;
            background-size: cover;
            background-repeat: no-repeact;
            background-position: center;
            border-left: 20px solid #fff;
            border-right: 20px solid #fff;
            &.slide1 {
                background-image: url("/assets/img/1.jpg");
            }
            &.slide2 {
                background-image: url("/assets/img/2.jpg");
            }
            &.slide3 {
                background-image: url("/assets/img/3.jpg");
            }
            &.slide4 {
                background-image: url("/assets/img/4.jpg");
            }
            &.slide5 {
                background-image: url("/assets/img/5.jpg");
            }
            &.slide6 {
                background-image: url("/assets/img/6.jpg");
            }
            &.slide7 {
                background-image: url("/assets/img/7.jpg");
            }
            &.slide8 {
                background-image: url("/assets/img/8.jpg");
            }
            &.slide9 {
                background-image: url("/assets/img/9.jpg");
            }
            &.slide10 {
                background-image: url("/assets/img/10.jpg");
            }
        }
        .slick-dots {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            li {
                display: inline-block;
                margin: 0 10px;
                button {
                    width: 17px;
                    height: 17px;
                    background: #ddd;
                    border-radius: 50%;
                    text-indent: -9999px;
                    overflow: hidden;
                }
                &.slick-active {
                    button {
                        background: #000;
                    }
                }
            }
        }
    }
`;

const Apple = () => {
    const mainSettings = {
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "250px", // 보여질슬라이드수(생략가능)
        arrows: false,
    };

    return (
        <AppleBlock>
            <div className="aa">
                <BannerTitle>
                    <h1> iPad Pro</h1>
                    <h2> 놀라우리만치 얇다. 엄청나게 강력하다.</h2>
                    <button>더 알아보기</button>
                    <button className="btn2">구입하기</button>
                </BannerTitle>
            </div>

            <div className="cc">
                <div className="cc1">
                    <BannerTitle>
                        <h1 className="cc2"> iPhone 15 pro</h1>
                        <h2 className="cc3">티타늄. 초강력. 초경량. 초프로.</h2>
                        <button>더 알아보기</button>
                        <button className="btn2">구입하기</button>
                    </BannerTitle>
                </div>
            </div>
            <div className="dd">
                <div className="dd1">
                    <BannerTitle2>
                        <h1>Apple Intelligence</h1>
                        <h2>우리 모두를 위한 AI.</h2>
                        <br />
                        <h3>올 하반기 베타(미국 영어)로 제공될 예정입니다.¹</h3>
                        <button>더 알아보기</button>
                    </BannerTitle2>
                </div>
            </div>
            <ul className="list">
                <li>
                    <ListTitle>
                        <h2>
                            AI 구동도
                            <br /> Mac의 스피드로
                        </h2>
                        <button>업무용 MAC에 대해 알아보기</button>
                    </ListTitle>
                </li>
                <li>
                    <ListTitle>
                        <h2>iPhone 15</h2>
                        <h3>새로운 카메라.새로운 디자인.새로움이 물씬.</h3>
                        <button>더알아보기</button>
                        <button className="btn2">구입하기</button>
                    </ListTitle>
                </li>
                <li>
                    <ListTitle3>
                        <h2>
                            <img src="/assets/img/appleLogo2.png" alt="" />
                            WATCH
                        </h2>
                        <h3>SERIES 9</h3>
                        <h2>보다 똑똑. 보다 또렷. 보다 강력.</h2>
                        <button>더알아보기</button>
                        <button className="btn2">더알아보기</button>
                    </ListTitle3>
                </li>
                <li>
                    <ListTitle>
                        <h2>MacBook Air</h2>
                        <h3>날렵하게.강력하게.M3답게.</h3>
                        <button>더알아보기</button>
                        <button className="btn2">구입하기</button>
                    </ListTitle>
                </li>
                <li>
                    <ListTitle>
                        <img src="/assets/img/a00.png" alt="" />
                        <h3>두 가지 사이즈. 더 빠른 칩. 무엇이든 거뜬하게.</h3>
                        <button>더알아보기</button>
                        <button className="btn2">구입하기</button>
                    </ListTitle>
                </li>
                <li>
                    <ListTitle4>
                        <h2>
                            <img src="/assets/img/appleLogo.png" alt="" />
                            Trade ln
                        </h2>

                        <h3>iPhone 11 이상의 모델을 보상 판매하면</h3>
                        <h3> &#8361;200,000-&#8361;950,000</h3>
                        <h3>상당의 크레딧이.²</h3>
                        <button>견적확인하기</button>
                    </ListTitle4>
                </li>
            </ul>
            <AppleSlideBlock>
                <div className="mainSlide">
                    <Slider {...mainSettings}>
                        <div className="appSlide slide1"></div>
                        <div className="appSlide slide2"></div>
                        <div className="appSlide slide3"></div>
                        <div className="appSlide slide4"></div>
                        <div className="appSlide slide5"></div>
                        <div className="appSlide slide6"></div>
                        <div className="appSlide slide7"></div>
                        <div className="appSlide slide8"></div>
                        <div className="appSlide slide9"></div>
                        <div className="appSlide slide10"></div>
                    </Slider>
                </div>
            </AppleSlideBlock>
        </AppleBlock>
    );
};

export default Apple;
