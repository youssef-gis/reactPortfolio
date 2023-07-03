import React from 'react'
import Card from './../../components/Cards';


const Testimonial = ({testimonial}) => {
  return (
    <Card className="light" >
         <p>{testimonial.quote}</p>
         <div className="testimonial__client">
            <div className="testimonial__client-picture">
                <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className="testimonial__client-info">
                <h5>{testimonial.name}</h5>
                <small>{testimonial.profession}</small>
            </div>
         </div>
    </Card>
  )
}

export default Testimonial