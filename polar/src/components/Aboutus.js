import './Aboutus.css';

function Aboutus() {
  return (
    <div>
      <section className="about-us">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="about-features">
            <div className="feature-item">
              <i className="fas fa-compass feature-icon"></i>
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-hiking feature-icon"></i>
              <h3>Our Passion</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-camera feature-icon"></i>
              <h3>Our Inspiration</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
        </div>

        <div className="founder-image">
          <img
            src="employee.png"
            alt="Founder"
          />
        </div>

        <h2>Meet Our Team</h2>
        <ul className="team-list">
          <li>
            <img
              src="employee.png"
              alt="John Doe"
            />
            <p>John Doe</p>
            <p>Hiking Guide</p>
          </li>
          <li>
            <img
              src="employee.png"
              alt="Jane Doe"
            />
            <p>Jane Doe</p>
            <p>Trip Coordinator</p>
          </li>
          <li>
            <img
              src="employee.png"
              alt="Bob Smith"
            />
            <p>Bob Smith</p>
            <p>Photographer</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Aboutus;
