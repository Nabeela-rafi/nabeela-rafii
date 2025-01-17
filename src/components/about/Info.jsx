import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="uil uil-award-alt about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1+ Year Working</span>
        </div>
        <div className="about__box">
            <i className="uil uil-briefcase about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3+ projects</span>
        </div>
        <div className="about__box">
            <i className="uil uil-headphones about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info