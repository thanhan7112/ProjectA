import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { register } from "../services/userService";
import { Paper } from "@material-ui/core";
import Form from "../common/Form";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

class Signup extends Form {
    state = { data: { name: "", email: "", password: "" }, errors: {} };

    doSubmit = async () => {
        try {
            await register(this.state.data);
            this.props.navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <form style={{marginLeft:'42%', marginTop:'10rem'}}
                onSubmit={this.handleSubmit}
                className="full_screen"
            >
                <div elevation={3} className="form">
                    <div className="form_hading" style={{paddingBottom:'2rem'}}>Signup</div>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSubmitBtn("Signup")}
                </div>
                <div style={{ margin: "10px 0" }}>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </form>
        );
    }
}

export default withRouter(Signup);
