import React from "react";
import "./faqs.css";
import FAQ from "./FAQ";
import faqs from "./data"
import Aos from "aos";
import "aos/dist/aos.css"
const FAQs = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section id="faqs">
      <h2>Frequently asked Questions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est quae
        omnis possimus, in ratione nulla eos!
      </p>
      <div className="container faqs__container" data-aos='fade-in'>
        {faqs.map(faq=><FAQ key={faq.id} faq = {faq} />)}
      </div>
    </section>
  );
};

export default FAQs;
