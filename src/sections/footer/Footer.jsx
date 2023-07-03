import "./footer.css";
import { links, socials } from "./data";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
  
          <ul className="footer__menu">
            {links.map((l) => (
              <li key={l.id}>
                <a href={l.link}>{l.title}</a>
              </li>
            ))}
          </ul>
    
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              link={social.link}
              href={social.link}
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>20223 Youssef Portfolio &copy; All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
