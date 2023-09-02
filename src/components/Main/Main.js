import React from 'react';
//components
import Navbar from "../Navbar/Navbar"
import Slide from '../Slide/Slide';
import NavigationButoons from '../NavigationButtons/NavigationButoons';



const Main = () => {
    return (
        <div>
            <Navbar />
            <Slide />
            <NavigationButoons />
        </div>
    );
};

export default Main;