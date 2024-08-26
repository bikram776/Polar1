
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
        <div className='section-container'>
        <section className='sec one'>
            <h2>Polar</h2>
            <div className='social'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-x-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-instagram"></i>
            </div>
        </section>
        <section className='sec two'>
            <section className='event'>
              <h3>Events</h3>
              <ul>
                <li><a href='#'>Hiking</a></li>
                <li><a href='#'>Camping</a></li>
                <li><a href='#'>Navigation</a></li>
              </ul>
            </section>
            <section className='community'>
              <h3>Community</h3>
              <ul>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Support Group</a></li>
              </ul>
            </section>
            <section className='help'>
              <h3>Help</h3>
              <ul>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Support</a></li>
              </ul>
            </section>
            <section className='other'>
              <h3>Others</h3>
              <ul>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>License</a></li>
                <li><a href='#'>Terms of Service</a></li>
              </ul>
            </section>
        </section>
        </div>
    </footer>
  );
};

export default Footer;