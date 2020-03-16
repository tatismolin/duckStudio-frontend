import React, {Component} from "react";
import "./../styles/Signup.css";
const herokuURL = `https://duck-studio.herokuapp.com`;
const localhostURL = `http://localhost:3000`;

class Signup extends Component{

    state = {
        username: " ",
        password: " ",
        passwordValidation: " "
    };

    handleIncorrectSignup = () => {
        window.alert("Passwords don't match. Please try again!"); 
        this.props.history.push("/signup");
    };

    signup = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        const passwordValidation = formData.get("passwordValidation");
        fetch(`${localhostURL}/users`, {
        // fetch(`${herokuURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                passwordValidation: passwordValidation       
            })
        })
        .then(response => response.json())
        .then(this.setState({
            username: "",
            password: password,
            passwordValidation: passwordValidation      
        }))
        .then(setTimeout(() => {
            return this.state.password === this.state.passwordValidation
                ? this.props.history.push("/login")
                : this.handleIncorrectSignup()
        }, 1000)
        )
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
             <div className="auth-container">
                <form 
                    className="auth-form"
                    onSubmit={(event) => this.signup(event)}>
                        <div className="auth-form-content">
                        <h3 className="auth-form-title">Please Signup</h3>
                            <input 
                                className="auth-form-input"
                                type="text" 
                                name="username" 
                                placeholder="Username"
                                required>
                            </input>

                            <input 
                                className="auth-form-input"
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                required>
                            </input>

                            <input 
                                className="auth-form-input"
                                type="password" 
                                name="passwordValidation" 
                                placeholder="Confirm Password"
                                required>
                            </input>

                            <button 
                                className="auth-form-button"
                                type="submit">
                                SIGNUP         
                            </button>
                        </div>
                </form>
            </div>
        );
    };

}

export default Signup;