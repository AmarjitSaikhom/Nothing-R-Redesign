import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './loginPage.css';

const LoginPage = () => {
  return (
    <motion.div
      className='loginPage'
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="login_container">
        <div className="login_text">
          <Link className='signUp_link' to={'/register'}>Sign Up</Link>
        </div>
        <div className="login">
          <h5>Login</h5>
          <form>
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
            <div className="continue_with">
              <button><i className="ri-google-fill"></i> Continue with Google</button>
              <button><i className="ri-apple-fill"></i> Continue with Apple</button>
            </div>
          </form>
          <p>By logging in, you agree to our <Link className='privacy_policy'>Privacy Policy.</Link></p>
          <button className='login_btn'>Login</button>
          <p>Don’t have an account yet? <Link className='link_tag' to={'/register'}>Sign up</Link></p>
          <p>Forgot your password? <Link className='link_tag'>Click here</Link></p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginPage;
