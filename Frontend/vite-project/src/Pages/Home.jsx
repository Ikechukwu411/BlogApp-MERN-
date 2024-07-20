import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import BgImage from "../assets/backgrund.png";
import Image1 from "../assets/Audiomarc, The Qwellers, Blue Pappi, Sastii & Lowfeye – Ushukela.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container box has-text-centered">
          <h1 className="is-size-3-desktop is-size-5-mobile has-text-black">
            Stay Curious.
          </h1>
          <img src={BgImage} alt="background image" width={650} className=" " />
          <p className="has-text-black is-size-4-desktop is-size5-mobile">
            Discover stories, thinking, and expertise from writers on any topic{" "}
          </p>
        </div>
        <div className="has-text-centered">
          <button className=" is-medium is-responsive bg-color-button">
            Explore More
          </button>
        </div>
      </section>
      <section className="section bg-color-sec">
        <div className="container">
          <div className="has-text-centered">
            <h2>Trending Articles</h2>
            <p>Dicover Popular and Trending Articles</p>
          </div>
          <article className="mt-2">
            <div className="columns is-desktop">
              <div className="column">
                <img src={Image1} alt="" width={100} />
              </div>
              <div className="column">
                <h3>Nasty C - Remorse ft. Just G</h3>
              </div>
            </div>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
