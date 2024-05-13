import React from 'react'
import './Hero.css'
import DP from '../../assets/DP.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={DP} alt="" />
      <h1> <span>I'm Imran Younas,</span>  Web developer and Data Scientist from Pakistan</h1>
      <p>I am Computer Scientist have a skills of web deveplopment (frontend), Data Science, Data Analysis, Artifical Intiligence, Machine Learning </p>

      <div className='hero-action'>
        <div className='hero-connect'>Connect Me</div>
        <div className='hero-resume'>My Resume</div>
      </div>

    </div>


  )
}

export default Hero
