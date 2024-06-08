import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"SkillBoost helped me switch careers and land my dream job in tech. The courses are top-notch!"</p>
          <h4>Jane Doe, Software Engineer</h4>
        </div>
        <div className="testimonial-item">
          <p>"The digital marketing course gave me the skills I needed to boost my company's online presence."</p>
          <h4>John Smith, Marketing Specialist</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
