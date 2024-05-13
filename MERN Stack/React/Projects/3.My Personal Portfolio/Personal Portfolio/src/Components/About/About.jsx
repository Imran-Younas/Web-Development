import React from 'react'
import DP from '../../assets/DP.jpg'
import AboutMeIcon from '../../assets/About Icon.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={AboutMeIcon} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={DP} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Hey I'm web deveploper have experience of HTML, CSS, JavaScript, React etc</p>
            <p>I have also experince of Data analysis to find good pattern from old data visualize the data and predict value using Machine Learning</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '45%' }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: '40%' }} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{ width: '35%' }} /></div>
          </div>

        </div>
      </div>

      <div className="about-achivements">
        <div className='about-achivement'>
          <h1>Intro to Cloud Comupting</h1>
          <p>Coursera Certificate</p>
          {/* <hr /> */}
        </div>

        <div className='about-achivement'>
          <h1>HTML, CSS & JavaScript</h1>
          <p>Coursera Certificate</p>
          {/* <hr /> */}
        </div>

        <div className='about-achivement'>
          <h1>React.js</h1>
          <p>Coursera Certificate</p>
          {/* <hr /> */}
        </div>

      </div>

    </div>
  )
}

export default About
