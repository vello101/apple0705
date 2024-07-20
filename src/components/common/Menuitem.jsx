import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, onMouseEnter, onMouseLeave, isActive }) => {
    //{ }로 감싸주면 객체의 key에 해당하는 값만 보내준다.
    // { }없이 props만 있으면 객체 자체가 넘어간다.

    return (
        <li className={`menu-item`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <span className='menu-item-span'>
                {
                    item.category === "스토어" ? <Link to='/'>{item.category}</Link> :
                        <Link to='https://gr-apple.vercel.app'>{item.category}</Link>
                }
                {isActive && (
                    <SubMenu subCategory={item.subCategory} />
                )}
                {/* <SubMenu subCategory={item.subCategory} /> */}
            </span>
        </li>
    );
};

const SubMenu = ({ subCategory }) => {

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
        <div className='dropdown'>
            <div className='dropdown__container'>
                {subCategory.map((subItem, index) => (
                    <div key={index} className='sub-menu'>
                        <h3>{subItem.title}</h3>
                        <ul className='sub-menu-content'>
                            {subItem.contents.map((content, contentIndex) => (
                                <li key={contentIndex}
                                    className={`sub-list-content ${pickClassName(subItem.title)} `}>
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MenuItem;
