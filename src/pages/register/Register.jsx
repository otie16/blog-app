import './Register.css';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <div className="register-form">
        <label>Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your email address..."
        />
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password..."
        />
        <button className="register-button">Sign up</button>
        <p>
          Already have an account ?{" "}
          <span className="login-link">
            {" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
