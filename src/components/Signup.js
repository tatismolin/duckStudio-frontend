import React, {Component} from "react";
import "./../styles/Signup.css";
const herokuURL = `https://duck-studio.herokuapp.com`;
const localhostURL = `http://localhost:3000`;

class Signup extends Component{

    state = {
        username: " ",
        password: " "
    };

    signup = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        fetch(`${localhostURL}/users`, {
        // fetch(`${herokuURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(this.setState({
            username: "",
            password: ""        
        }))
        .then(this.props.history.push("/login"))   

    };

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
                                name="password" 
                                placeholder="Confirm Password"
                                required>
                            </input>

                            <input 
                                className="auth-form-button"
                                type="submit" 
                                value="SIGNUP">         
                            </input>
                        </div>
                </form>
            </div>
        );
    };

}

export default Signup;