import React from "react";
import ProductDetail from "@/components/productDetail_b/ProductDetail";
import ProductDetailBView from "@/views/ProductDetailBView";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const ProductDetailView = () => {
    return (
        <div>
            <Header/>
            <ProductDetailBView />
            <ProductDetail />
            <Footer/>
        </div>
    );
};

export default ProductDetailView;
