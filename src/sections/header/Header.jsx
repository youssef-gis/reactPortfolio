import React from "react";
import "./header.css";
import data from "./data";
import Profile from "../../assets/header.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={Profile} alt="Header Profile" />
        </div>
        <h3 data-aos="fade-up">Youssef Arhrib</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>
        <div className="header__cta" >
          <a href="#contact" className="btn primary" data-aos="fade-up">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light" data-aos="fade-up">
            My Work
          </a>
        </div>
        <div className="header__social" data-aos="fade-up">
          {data.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
