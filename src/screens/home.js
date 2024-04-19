import React from "react";

// import Toolbar from "../components/toolbar";
import Navbar from '../components/navbar';
import Toolbar2 from "../components/toolbar2";
import Corousel from "../components/corousel";
import Banner from "../components/banner";
import CategoryArea from "../components/categoryArea";
import ProductsArea from "../components/productsArea";
import NavHome from "../components/navContact/navHome";
let Home=()=>{

    return(
        <>
        <Toolbar2/>
        <Navbar/>
        <NavHome/>
        <Corousel/>
        <Banner/>
        <CategoryArea/>
        <ProductsArea/>
       
        </>
    )
}

export default Home