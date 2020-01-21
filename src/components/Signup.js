import React, {Component} from "react";
import "./../styles/Signup.css";

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
        fetch("http://localhost:3000/users", {
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
            username: username,
            password: password        
        }))
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