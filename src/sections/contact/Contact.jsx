import "./contact.css";
import contact from "./data";

const Contact = () => {
  return (
    <section id="contact">
      <h3 style={{textAlign:"center"}} >Get in touch</h3>
      <p>Feel free to contact me for any work or suggestions below</p>
      <div className="container contact__container" data-aos='fade-up' >
        {contact.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
