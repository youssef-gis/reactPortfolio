import './services.css'
import data from "./data" 
import Card from './../../components/Cards';

const Services = () => {
  return (
    <section id="services">
        <h2>My Services</h2>
        <div className="container services__container" data-aos='fade-up' >
        {data.map(item=>{
          return(
            <Card key={item.id} className="services light" >         

                <div className="services__icon">{item.icon}</div>
                <div className="services__details">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
          
            </Card>
          )
        })}
        </div>
    </section>
  )
}

export default Services