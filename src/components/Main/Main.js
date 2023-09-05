import React from 'react';
//components
import Navbar from "../Navbar/Navbar"
import Slide from '../Slide/Slide';
import NavigationButoons from '../NavigationButtons/NavigationButoons';
import ProductSection from '../productSection/ProductSection';
import Footer from '../Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Slide />
            <NavigationButoons />
            <ProductSection />
            <Footer />
        </div>
    );
};

export default Main;