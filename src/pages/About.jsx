import React from "react";
import "../styles/main.css"; 
import "../styles/about.css"; // new CSS file for About page

function About() {
  return (
    <div className="about_page">
      <div className="about_container">
        <h1>About BookingClone</h1>

        <p className="about_intro">
          BookingClone is your ultimate platform to search, filter, and book hotels with ease.  
          Designed with React and Vite, and integrated with Razorpay for secure payments,  
          we provide a seamless and modern booking experience.
        </p>

        {/* Our Mission */}
        <section className="about_section">
          <h2>Our Mission</h2>
          <p>
            To make hotel booking simple, fast, and reliable for users,  
            offering a user-friendly interface, accurate hotel details, and secure transactions.
          </p>
        </section>

        {/* How It Works */}
        <section className="about_section">
          <h2>How It Works</h2>
          <ul>
            <li>Search hotels by city, check-in/check-out dates, and number of guests</li>
            <li>Filter results by price, rating, and amenities</li>
            <li>View detailed hotel information including photos, reviews, and facilities</li>
            <li>Book your hotel and make secure payment through Razorpay</li>
            <li>Receive booking confirmation instantly</li>
          </ul>
        </section>

        {/* Features */}
        <section className="about_section">
          <h2>Features</h2>
          <ul>
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>Easy search and filter options</li>
            <li>Secure payment gateway integration</li>
            <li>Detailed hotel pages with images and amenities</li>
            <li>Booking confirmation and success page</li>
          </ul>
        </section>

        {/* Our Team */}
        <section className="about_section">
          <h2>Our Team</h2>
          <div className="team_cards">
            <div className="team_card">
              <h3>Mahes</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="team_card">
              <h3>Janani</h3>
              <p>Backend Developer</p>
            </div>
            <div className="team_card">
             <h3>Kaviya</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;