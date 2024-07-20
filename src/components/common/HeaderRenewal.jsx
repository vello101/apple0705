import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import drop from './dropdown-content.json'
import navJson from "./nav.json"
// Icons
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
// CSS
import styles from "./header.module.scss";
import styled from "styled-components";

const SubMenu = styled.div`

.sub-menu {
    padding: 50px 0;
    padding-right: 50px;
    h3{
    color: #6e6e73;
    padding-bottom: 20px;
    font-size: 12px;
    }
}
`

function HeaderRenewal() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(0);
    //console.log(drop)
    const pickClassName = (title) => {
        switch (title) {
            case '쇼핑하기':
            case 'Mac 살펴보기':
            case 'iPad 살펴보기':
            case 'iPhone 살펴보기':
            case 'Watch 살펴보기':
            case 'AirPods 살펴보기':
            case 'TV 및 홈 살펴보기':
            case '엔터테인먼트 살펴보기':
            case '액세서리 쇼핑하기':
            case '지원 상황 살펴보기':
                return 'special-content';
        }
    };
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__nav}>
                    <Link to="/apple" className={styles.header__nav__link}>
                        <img src="/assets/icons/apple.svg" alt="" className={styles.logo} />
                        <FaApple fontSize={18} />
                    </Link>
                    {navJson.map((item, index) => {
                        return (
                            <Link to={item.path} key={item.label} className={`${styles.header__nav__link}`} onMouseEnter={() => setIsShow(index + 1)}>
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
                <div className={styles[`header__nav__btn-box`]}>
                    <button className={styles.btn}>
                        <CiSearch fontSize={16} />
                    </button>
                    <button className={styles.btn}>
                        <IoBagOutline fontSize={16} />
                    </button>
                    <button className={styles.btn} onClick={() => navigate("/login")}>
                        <CiLogin fontSize={16} />
                    </button>
                </div>
            </header>
            {isShow &&
                <div className={styles.container}>
                    <div className={styles.container__dropdown}>
                        {
                            drop[isShow - 1].subCategory.map((item, index) => (
                                <SubMenu key={index} className='sub-menu'>
                                    <h3>{item.title}</h3>
                                    <ul className='sub-menu-content'>
                                        {item.contents.map((content, contentIndex) => (
                                            <li key={contentIndex}
                                                className={`sub-list-content ${pickClassName(item.title)} `}>
                                                {content}
                                            </li>
                                        ))}
                                    </ul>
                                </SubMenu>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );

}

export default HeaderRenewal