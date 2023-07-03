import "./about.css";
import about from "../../assets/about.jpg";
import cv from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Cards";
const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__img">
            <img src={about} alt="profile_pic" />
          </div>
        </div>
        <div className="about__right">
          <h2>Aboute Me</h2>
          <div className="about__cards">
            {data.map((item) => {
              return (
                <Card key={item.id} className="about__card">
                  <span className="about__card_icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <small>{item.desc}</small>
                </Card>
              );
            })}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 2 years and serving
            clients all over the world, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Arhrib Youssef from Tangier, Benslimane. I'm a Geospatial 
            Software Engineer with a Bachelors degree in Geoinformatics. My top
            priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check out my resume below!
          </p>
          <a href={cv} download className="btn primary">
            Download CV <HiDownload />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
