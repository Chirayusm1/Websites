import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Expert Instructors</h3>
          <p>Learn from industry leaders and academic experts.</p>
        </div>
        <div className="feature-item">
          <h3>Flexible Learning</h3>
          <p>Study at your own pace, anytime, anywhere.</p>
        </div>
        <div className="feature-item">
          <h3>Certification</h3>
          <p>Earn recognized certificates to boost your resume.</p>
        </div>
        <div className="feature-item">
          <h3>Community Support</h3>
          <p>Join a vibrant community of learners and professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
