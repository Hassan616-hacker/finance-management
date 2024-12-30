import React from "react";
import "./styles2.css";

const Login = () => {
  return (
    <section className="main login">
      <div className="container">
        <div className="content">
          <h2>Login to Your Account</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="btn">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="/register" className="register-link">Register here</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
