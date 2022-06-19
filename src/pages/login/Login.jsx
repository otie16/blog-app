import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <div className="login-form">
        <label>Email</label>
        <input
          type="text"
          className="login-input"
          placeholder="Enter your email address..."
        />
        <label>Password</label>
        <input
          type="password"
          className="login-input"
          placeholder="Enter your password..."
        />
        <button className="login-button">Login</button>
        <p>
          Don't have an account ?{" "}
          <span className="reg-link">
            <Link className="link" to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
