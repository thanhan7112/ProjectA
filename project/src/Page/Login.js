import React from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import { Paper } from "@material-ui/core";
import Form from "../common/Form";

class Login extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      const { data } = await login(this.state.data);
      window.localStorage.setItem("token", data);
      window.location = "/";
    } catch (error) {
      const errors = { ...this.state.errors };
      errors.email = error.response.data;
      errors.password = error.response.data;
      this.setState({ errors });
    }
  };
  render() {
    return (
      <form
        style={{ marginLeft: "42%", marginTop:'10rem' }}
        onSubmit={this.handleSubmit}
        className="full_screen"
      >
        <div elevation={3} className="form" style={{paddingBottom:'0.8rem'}}>
          <div className="form_hading" style={{paddingBottom:'2rem'}}>Login</div>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmitBtn("Login")}
        </div>
        <div style={{ margin: "10px 0" }}>
          Don't have an account? <Link to="/signup">Signup </Link>
        </div>
      </form>
    );
  }
}

export default Login;
