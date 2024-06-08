import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why is this the academy for you</h2>
      <div className="cards">
        <div className="card">
          <div className="icon">📅</div>
          <h3>Built for Novices</h3>
          <p>Just starting? No need to worry. Let's take the first step together.</p>
        </div>
        <div className="card">
          <div className="icon">🌐</div>
          <h3>Create a habit</h3>
          <p>Pick up a new skill and learn why practice makes perfect.</p>
        </div>
        <div className="card">
          <div className="icon">💡</div>
          <h3>Learn with the best</h3>
          <p>Stuck on something? Discuss it with your peers in your virtual classroom.</p>
        </div>
        <div className="card">
          <div className="icon">🔍</div>
          <h3>Discover your niche</h3>
          <p>Learn what makes you tick and how you can use it to your benefit.</p>
        </div>
        <div className="card">
          <div className="icon">🎓</div>
          <h3>Learn from experts</h3>
          <p>Get access to guest lectures and mentorship by industry leaders.</p>
        </div>
        <div className="card">
          <div className="icon">📜</div>
          <h3>Get certified</h3>
          <p>Receive official certification on LinkedIn once you finish this course.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
