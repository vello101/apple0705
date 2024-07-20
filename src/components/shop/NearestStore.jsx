import React from 'react';
import KakaoMap from "@/components/shop/KakaoMap";
import styled from 'styled-components';
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const NearestStoreBlock=styled.div`
    background: #f5f5f7;

`



const NearestStore = () => {
    return (
        <NearestStoreBlock>
            <Header/>
            <KakaoMap />
            <Footer/>
        </NearestStoreBlock>
    );
};

export default NearestStore;