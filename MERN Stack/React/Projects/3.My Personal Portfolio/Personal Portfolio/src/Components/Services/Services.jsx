import React from 'react'
import ServicesIcon from '../../assets/ServicesIcon.png'
import NextButton from '../../assets/NextButton.png'
import services_data from '../../assets/Services_data.js'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>

      <div className="services-title">
        <h1>My Services</h1>
        <img src={ServicesIcon} alt="" />
      </div>

      <div className="services-container">

        {services_data.map((service, index) => {
          return (

            <div key={index} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_description}</p>

              <div className="read-more">
                <p>Read more</p>
                <img src={NextButton} alt="" />
              </div>

            </div>

          )
        })}




      </div>

    </div>
  )
}

export default Services
