import React from "react";
import Sections from "../components/Home/Sections";
import Header from "../components/common/Header";
import HeaderRenewal from "../components/common/HeaderRenewal";
import Footer from '../components/common/Footer';
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import Button from "../components/Home/Button";

const Home = () => {

    return (
        <div className="page">
            <Header/>
            {/* <HeaderRenewal /> */}
            <main>
                <Sections />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Button />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
