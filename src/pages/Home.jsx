import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import Layout from "../layouts/Layout";
import PopularCategories from "../common/PopularCategories";
import Image1 from "../assets/images/1771592080.webp";
import Hero from "../common/Hero";
import { Link } from "react-router-dom";
import Image from "../assets/images/1771592556.jpg";
import { FaStar } from "react-icons/fa";
import PopularDishes from "../common/PopularDishes";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Hero */}
        <Hero />

        {/* categoty */}
        <PopularCategories  title="Explore Popular Categories"/>

        {/* Popular dish */}
        <PopularDishes title="Popular Dishes"/>

        

      </Layout>
    </>
  );
};

export default Home;
