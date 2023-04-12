import React from "react";
import dish1 from "../../images/dish1.png";
import dish2 from "../../images/dish2.png";
import dish3 from "../../images/dish3.png";
import cv from "../../images/cv.png";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="head">
        <p className="title-here">Title here</p>
        <p className="detail-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <button className="button-order">
          <Link to="/ProductCart" style={{ color: "white" }}>
            Order now
          </Link>
        </button>
      </div>
      <div className="popular-menu">
        <div className="popular-text1">popular menu</div>
        <div className="popular-text2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          repudiandae perferendis corporis omnis? Placeat, incidunt quis earum
          impedit laboriosam in numquam illum, quas modi porro debitis, delectus
          a eum amet!
        </div>
        <div className="menu">
          <div className="detail-menu">
            <img src={dish1} />
            <div className="menu-text1">Title here</div>
            <div className="menu-text2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </div>
          </div>
          <div className="detail-menu">
            <img src={dish2} />
            <div className="menu-text1">Title here</div>
            <div className="menu-text2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </div>
          </div>
          <div className="detail-menu">
            <img src={dish3} />
            <div className="menu-text1">Title here</div>
            <div className="menu-text2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="order-detail">
        <div>
          <img src={dish1} style={{ width: "fit-content" }} />
        </div>
        <div className="dish1">
          <div className="dish1-text1">Title here</div>
          <div className="dish1-text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis
            quod minus fugit modi fugiat dolores necessitatibus optio sapiente
            nihil?
          </div>
          <button className="button-order">
            <Link to="/ProductCart" style={{ color: "white" }}>
              Order now
            </Link>
          </button>
        </div>
      </div>
      <div className="statistics">
        <div className="statistics-text1">Statistics</div>
        <div className="statistics-text2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          iusto! Itaque corrupti recusandae magni officiis ex?{" "}
        </div>
        <div className="detail-static">
          <div className="radius">123 store</div>
          <div className="radius">100 menu</div>
          <div className="radius">200 chef</div>
        </div>
      </div>
      <div className="order-detail">
        <div>
          <div className="dish1-text1">Title here</div>
          <div className="dish1-text2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis
            quod minus fugit modi fugiat dolores necessitatibus optio sapiente
            nihil?
          </div>
          <button className="button-order">
            <Link to="/ProductCart" style={{ color: "white" }}>
              Order now
            </Link>
          </button>
        </div>
        <div className="dish1">
          <img src={dish2} style={{ width: "fit-content" }} />
        </div>
      </div>
      <div
        className="frazier"
        style={{ backgroundImage: "url(/images/Back.png)" }}
      >
        <div className="overlay" />
        <img src={cv} style={{ zIndex: 1 }} />
        <div className="statistics-text2" style={{ zIndex: 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
          odit soluta sit totam voluptatibus ipsum perspiciatis a. At ad
          blanditiis id unde fuga rem cum officiis molestias quidem odio.
        </div>
        <div className="statistics-text1" style={{ zIndex: 1 }}>
          Phoebe Frazier
        </div>
      </div>
      <div className="subcribe">
        <div className="statistics-text12">Title here</div>
        <div className="statistics-text22">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          aliquid hic assumenda inventore beatae perferendis exercitationem
          aperiam sequi?
        </div>
        <div>
          <input type="text" placeholder="Your Email" />
          <button className="subcribe2">subcribe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
