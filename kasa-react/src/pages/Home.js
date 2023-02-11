import React from "react";
import Banner from "../components/Home/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logement from "../components/Logement";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Logement />
      <Footer />
    </div>
  );
};

export default Home;
