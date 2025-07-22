import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><Link className='footer_link' to={''}>Phone (1)</Link></li>
            <li><Link className='footer_link' to={''}>Phone (1)</Link></li>
            <li><Link className='footer_link' to={''}>Phone (1)</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link className='footer_link' to={''}>About Us</Link></li>
            <li><Link className='footer_link' to={''}>Community</Link></li>
            <li><Link className='footer_link' to={''}>Careers at Nothing</Link></li>
            <li><Link className='footer_link' to={''}>Newsroom</Link></li>
            <li><Link className='footer_link' to={''}>Business Enquiry</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link className='footer_link' to={''}>Support Centre</Link></li>
            <li><Link className='footer_link' to={''}>Contact Us</Link></li>
            <li><Link className='footer_link' to={''}>Find a Store</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><Link className='footer_link' to={''}>Instagram</Link></li>
            <li><Link className='footer_link' to={''}>Twitter</Link></li>
            <li><Link className='footer_link' to={''}>YouTube</Link></li>
            <li><Link className='footer_link' to={''}>TikTok</Link></li>
            <li><Link className='footer_link' to={''}>Discord</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Privacy Policy | User Agreement | Region: United Kingdom</p>
      </div>
    </footer>
  )
}

export default Footer
