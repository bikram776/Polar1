import "./Contactform.css";

function Contactform() {
  return (
    <main className="main-content">
      <section className="contact-form-section">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, please don't hesitate to reach out.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
      <section className="address-section">
        <h2>Our Address</h2>
        <p>123 Hiking Trail, Mountain View, A.P 792102</p>
        <p>Phone: +911234567891</p>
        <p>
          Email:{" "}
          <a href="mailto:info@polarwebsite.com">info@polarwebsite.com</a>
        </p>
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Contactform;
