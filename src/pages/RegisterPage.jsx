import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './registerPage.css';

const RegisterPage = () => {
  return (
    <motion.div
      className='registerPage'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="register_container">
        <div className="register">
          <h5>Sign Up</h5>
          <form>
            <input type="email" placeholder='Email address' />
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By signing up, you have read our
                <Link className='privacy_policy'> Privacy Policy</Link> and consent to receiving Nothing marketing communications.
              </p>
            </div>
            <div className="continue_with">
              <button><i className="ri-google-fill"></i> Continue with Google</button>
              <button><i className="ri-apple-fill"></i> Continue with Apple</button>
            </div>
          </form>
          <button className='login_btn'>Sign Up</button>
        </div>
        <div className="register_text">
          <Link className='login_link' to={'/login'}>Login</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
