import React from "react";
import "../css/home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc&mrntrk=pcrid_610141119732_slid__pgrid_84577172328_pgeo_1007786_x__adext__ptid_kwd-303629226711&gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbiWMzjmAHQ3jogQRJYev6a3hC0eYJaOn79VcC_yMpImEfyT-1yZRWwaAgC-EALw_wcB"><img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /></a>

        <div className="home__row">
          <Product title='War Of Lanka (Ram Chandra Series Book 4) (The Ram Chandra, 4) Paperback – February 28, 2023' price={20.20} rating={5} image = "https://m.media-amazon.com/images/I/91+T1TAxkKL.jpg"  id="book"/>
          <Product title='Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial' price={40.21} rating={4} image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg" id="airpods"/>
          <Product image="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UL480_QL65_.jpg" title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Silver" price={80.65} rating={4} id="ipad"/>
        </div>
        <div className="home__row">
          <Product title="Amoretu Women Summer Tunic Dress V Neck Casual Loose Flowy Swing Shift Dresses" image="https://m.media-amazon.com/images/I/71Baq7E2tML._MCnd_AC_UL480_FMwebp_QL65_.jpg" rating={3} price={30.30} id="women"/>
          <Product image="https://m.media-amazon.com/images/I/61pP5gObVXL._AC_UL480_QL65_.jpg" title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and" rating={4} price={19.20} id="cream"/>
        </div>
        <div className="home__row">
          <Product rating={5} title="LG UltraWide QHD 34-Inch Curved Computer Monitor 34WQ73A-B, IPS with HDR 10 Compatibility, Built-In-KVM, and USB Type-C, Black" image="https://m.media-amazon.com/images/I/813lcdih06L._AC_UL480_FMwebp_QL65_.jpg" price={340.4} id="monitor"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
