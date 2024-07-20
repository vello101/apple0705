import { Link } from 'react-router-dom';
import { ImAppleinc } from "react-icons/im";
import { GrNext } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
margin: 0 auto;
padding: 22px;
max-width: 980px;
font-size: 12px;
color: #0000008f;
a{
	color: #0000008f;
}

h3 {
    font-size: 12px;
	color: black;
}

.h3-updown-button{
display: flex;
justify-content: space-between;
}

.FaChevronUp, .FaChevronDown{
	cursor: pointer;
}

li:hover {
    text-decoration: underline;
    cursor: pointer;
}

.footer1 {
    padding: 10px;
    margin-bottom: 5px;
	a{
		text-decoration: underline;
	}
}

.footer2 {
    display: flex;
    justify-content: space-between;
    line-height: 2;
	@media only screen and (max-width: 833px) {
		display: block;
	}
}

@media only screen and (max-width: 833px) {
	.footer833 {
        display: none;
    }
}

.footer_column-section {
    margin-top: 15px;
	@media screen and (max-width:833px){
		border-bottom: 1px solid #00000029;
        margin: 0 auto;
        padding: 5px 0;
	}
}

.footer_top {
    margin-top: 0px;
}

.footer_nav {
    display: flex;
    align-items: center;
    border-top: 1px solid #00000029;
    height: 50px;
    padding: 10px 0;
}

.tel {
    padding-top: 37px;
    padding-bottom: 15px;
}

.last {
    border-top: 1px solid #00000029;
    padding-top: 15px;
    display: flex;
	@media screen and (max-width:833px) {
		display: block;
	}
}

.copyright{
    margin-right: 30px;
	@media screen and (max-width:833px){
		padding-bottom: 10px;
	}
}

.last-container {
    display: flex;
	li{
		padding: 0 5px;
		@media screen and (max-width:833px){
			padding: 0;
		}
	}
		span{
			position: relative;
    		margin-left: 5px;
    		padding-left: 10px;
			&::after{
			/* ::after (:after)
			content 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용. 
			기본값= 인라인    */
			position:absolute;
    		left: 0;
    		top: 3px;
    		content: "";
    		width: 1px;
    		height: 12px;
    		background-color: #0000008f;
			}
		}
}


`
const Footer = () => {
	//const products = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV 및 홈", "AirTag", "액세서리"]
	const copyProducts = [{	//배열 안에 객체를 만들어주는 이유->주소창에 한글이 출력안 됨.
		id: 0,
		label: "Store",
		path: "http://localhost:5173/"
	},
	{
		id: 1,
		label: "Mac",
		path: ""
	},
	{
		id: 2,
		label: "iPad",
		path: ""
	},
	{
		id: 3,
		label: "iPhone",
		path: ""
	},
	{
		id: 4,
		label: "Watch",
		path: ""
	},
	{
		id: 5,
		label: "AirPods",
		path: ""
	},
	{
		id: 6,
		label: "TV 및 홈",
		path: "/"
	},
	{
		id: 7,
		label: "AirTag",
		path: "/"
	},
	{
		id: 8,
		label: "액세서리",
		path: "/"
	}]

	const [isOpen, setIsOpen] = useState({
		section1: false,
		section2: false,
		section3: false,
		section4: false,
		section5: false,
		section6: false,
		section7: false,
		section8: false,
		section9: false
	});
	// 모바일 메뉴 열림 상태 추가
	const mobile = useMediaQuery({ maxWidth: 833 })
	const toggleSection = (section) => {
		setIsOpen({
			...isOpen,
			[section]: !isOpen[section]
		});
	};


	return (
		<FooterBlock>
			<div className='footer1'>
				<p>사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호</p>
				<p>대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로 517</p>
				<p>대표전화 : 080-330-8877 | 팩스 : 02-6928-0000</p>
				<br />
				<p>⁺ Apple Music 무료 체험 혜택은 신규 가입자에게만 적용됩니다. 무료 체험 기간이 끝나면 월 월 8,900원에 이용할 수 있습니다.
					본 프로모션은 한정된 기간 동안 신규 가입자에게만 적용되며, 신규 가입자는 적용 대상 기기를 iOS 15 또는 iPadOS 15 이후 버전이 설치된
					Apple 기기에 연결해야 합니다. 무료 체험 혜택은 적용 대상 기기 페어링 이후 3개월 안에 신청할 수 있습니다.
					적용 대상 기기를 이미 소유하고 있는 경우 오디오 제품을 구입하지 않아도 혜택을 받을 수 있습니다. 멤버십은 매월 자동으로 갱신되며,
					해지 시 종료됩니다. 제한 사항 및 기타 <a href="https://www.apple.com/kr/promo/">약관</a>이 적용됩니다.</p>
				<br />
				<p>° Apple TV+ 무료 체험 혜택은 신규 가입자 및 조건에 부합하는 재가입자에게만 적용됩니다.
					무료 체험 기간이 끝나면 월 월 6,500원에 이용할 수 있습니다. 본인 또는 가족 구성원이 구입한 기기 수에 상관없이,
					무료 체험 혜택은 Apple ID당 한 번 또는 본인이 ‘가족 공유’ 그룹의 구성원일 경우 그룹당 한 번만 제공됩니다.
					본인 또는 가족 구성원이 이미 Apple TV+ 3개월 또는 1년 무료 체험 혜택을 이용한 경우에는 이 혜택을 이용할 수 없습니다.
					무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에 신청할 수 있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시 종료됩니다.
					특정 제한 사항 및 기타 <a href="https://www.apple.com/kr/promo/">약관</a>이 적용됩니다.</p>
				<br />
				<p>1. 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다.
					Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상 판매 견적은 예상 금액이며 실제 보상 판매 금액은
					예상 금액보다 낮을 수 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다.
					일부 기기는 보상 판매 대상이 아닙니다.
					기기를 보상 판매 하려면 민법상 성년이어야 합니다.보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나
					Apple Store Gift Card로 받을 수 있습니다.
					최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다.
					부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며,
					매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다.일부 매장은 추가 요구 사항이 있을 수 있습니다.
					Apple의 보상 판매 파트너는 보상 판매 거래를 거부, 취소하거나 보상 판매 수량을 제한할 권리를 보유합니다.
					적용 가능 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다.
					규제 및 제한이 적용될 수 있습니다.</p>
				<br />
				<p>2. <strong>이용 약관</strong> 위 할부 서비스는 Apple Online Store, Apple
					전화 판매 및 Apple 리테일 매장에서 구입하는 경우에만 이용할 수 있습니다. </p>
				<p>할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다.
					모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는
					경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오.
					할부 조건, 수수료, 청구액 등은 신용 카드 발급사에 문의하십시오. 청구액은 카드 명세서에 표시됩니다.
					할부 서비스를 이용하려면 한국 거주자여야 합니다. 할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는
					현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다.
					해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는
					할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다.</p>
				<p>이 정보는 2021년 03월 16일 기준 최신 정보입니다.</p>
				<br />
				<p>3. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은
					매장 내 Apple 스페셜리스트에게 문의하거나 080-330-8877에 전화로 문의하시기 바랍니다.</p>
				<br />
				<p>보다 오래 안심할 수 있도록. 이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.</p>
			</div>
			<nav className='footer_nav'>
				<ImAppleinc style={{ fontSize: 16 }} />
				<GrNext style={{ margin: "0 10px" }} />
				Apple Store 온라인
			</nav>
			<div className='footer2'>
				<div className='footer_column'>
					<div className='footer_column-section footer_top'>
						<div className="h3-updown-button">
							<h3>쇼핑 및 알아보기</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section1')}>
									{isOpen.section1 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							{copyProducts.map((product) => {
								return (
									<li key={product.id}><Link to={product.path} className={{ color: "#000000b8" }}>{product.label}</Link></li>
								)
							})}
						</div>
						<ul>
							{mobile && isOpen.section1 && (
								copyProducts.map((product) => (
									<li key={product.id}><Link to={product.path} className={{ color: "#000000b8" }}>{product.label}</Link></li>
								))
							)}
						</ul>
					</div>
					<div className='footer_column-section'>
						<div className="h3-updown-button">
							<h3>Apple 지갑</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section2')}>
									{isOpen.section2 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>지갑</li>
						</div>
						<ul>
							{mobile && isOpen.section2 && (
								<li>지갑</li>
							)}
						</ul>
					</div>
				</div>

				<div className='footer_column'>
					<div className='footer_column-section footer_top'>
					<div className="h3-updown-button">
							<h3>계정</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section3')}>
									{isOpen.section3 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>Apple ID 관리</li>
							<li>Apple Store 계정</li>
							<li>iCloud.com</li>
						</div>
						<ul>
							{mobile && isOpen.section3 && (
								<ul>
									<li>Apple ID 관리</li>
									<li>Apple Store 계정</li>
									<li>iCloud.com</li>
								</ul>
							)}
						</ul>

					</div>
					<div className='footer_column-section'>
					<div className="h3-updown-button">
							<h3>엔터테인먼트</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section4')}>
									{isOpen.section4 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>Apple One</li>
							<li>Apple TV+</li>
							<li>Apple Music</li>
							<li>Apple Arcade</li>
							<li>Apple Podcasts</li>
							<li>Apple Books</li>
							<li>App Store</li>
						</div>
						<div>
							{mobile && isOpen.section4 && (
								<ul>
									<li>Apple One</li>
									<li>Apple TV+</li>
									<li>Apple Music</li>
									<li>Apple Arcade</li>
									<li>Apple Podcasts</li>
									<li>Apple Books</li>
									<li>App Store</li>
								</ul>
							)}
						</div>
					</div>
				</div>
				<div className='footer_column'>
					<div className='footer_column-section footer_top'>
					<div className="h3-updown-button">
							<h3>Apple Store</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section5')}>
									{isOpen.section5 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>매장 찾기</li>
							<li>Genius Bar</li>
							<li>Today at Apple</li>
							<li>Apple 캠프</li>
							<li>Apple Store 앱</li>
							<li>인증 리퍼비쉬 제품</li>
							<li>Apple Trade In</li>
							<li>할부 방식</li>
							<li>주문 상태</li>
							<li>쇼핑 도움말</li>
						</div>
						<div>
							{mobile && isOpen.section5 && (
								<ul>
									<li>매장 찾기</li>
									<li>Genius Bar</li>
									<li>Today at Apple</li>
									<li>Apple 캠프</li>
									<li>Apple Store 앱</li>
									<li>인증 리퍼비쉬 제품</li>
									<li>Apple Trade In</li>
									<li>할부 방식</li>
									<li>주문 상태</li>
									<li>쇼핑 도움말</li>
								</ul>
							)}
						</div>
					</div>
				</div>
				<div className='footer_column'>
					<div className='footer_column-section footer_top'>
					<div className="h3-updown-button">
							<h3>비즈니스</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section6')}>
									{isOpen.section6 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>Apple과 비즈니스</li>
							<li>비즈니스를 위한 제품 쇼핑하기</li>
						</div>
						<div>
							{mobile && isOpen.section6 && (
								<ul>
									<li>Apple과 비즈니스</li>
									<li>비즈니스를 위한 제품 쇼핑하기</li>
								</ul>
							)}
						</div>
					</div>
					<div className='footer_column-section'>
					<div className="h3-updown-button">
							<h3>교육</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section7')}>
									{isOpen.section7 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>Apple과 교육</li>
							<li>초중고용 제품 쇼핑하기</li>
							<li>대학 생활을 위한 제품 쇼핑하기</li>
						</div>
						<div>
							{mobile && isOpen.section7 && (
								<ul>
									<li>Apple과 교육</li>
									<li>초중고용 제품 쇼핑하기</li>
									<li>대학 생활을 위한 제품 쇼핑하기</li>
								</ul>
							)}
						</div>
					</div>
				</div>
				<div className='footer_column'>
					<div className='footer_column-section footer_top'>
					<div className="h3-updown-button">
							<h3>Apple의 가치관</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section8')}>
									{isOpen.section8 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>손쉬운 사용</li>
							<li>환경</li>
							<li>개인정보 보호</li>
							<li>공급망</li>
						</div>
						<div>
							{mobile && isOpen.section8 && (
								<ul>
									<li>손쉬운 사용</li>
									<li>환경</li>
									<li>개인정보 보호</li>
									<li>공급망</li>
								</ul>
							)}
						</div>
					</div>
					<div className='footer_column-section'>
					<div className="h3-updown-button">
							<h3>Apple 정보</h3>
							{mobile && (
								<nav className='updown-button' onClick={() => toggleSection('section9')}>
									{isOpen.section9 ? <FaChevronUp className='FaChevronUp' /> : <FaChevronDown className='FaChevronDown' />}
								</nav>
							)}
						</div>
						<div className='footer833'>
							<li>Newsroom</li>
							<li>Apple 리더십</li>
							<li>채용 안내</li>
							<li>윤리 및 규정 준수</li>
							<li>이벤트</li>
							<li>일자리 창출</li>
							<li>Apple 연락처</li>
						</div>
						<div>
							{mobile && isOpen.section9 && (
								<ul>
									<li>Newsroom</li>
									<li>Apple 리더십</li>
									<li>채용 안내</li>
									<li>윤리 및 규정 준수</li>
									<li>이벤트</li>
									<li>일자리 창출</li>
									<li>Apple 연락처</li>
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>

			<p className='tel'>다양한 쇼핑 방법: Apple Store를 방문하거나, 리셀러를 찾아보거나, 080-330-8877번으로 전화하세요.</p>
			<div className='last'>
				<div className='copyright'>Copyright © 2024 Apple Inc. 모든 권리 보유</div>
				<ul className='last-container'>
					<li>개인정보 처리방침</li><span></span>
					<li>약관</li><span></span>
					<li>판매 및 환불</li><span></span>
					<li>법적 고지</li><span></span>
					<li>사이트 맵</li>
				</ul>
			</div>
		</FooterBlock>
	);
};

export default Footer;