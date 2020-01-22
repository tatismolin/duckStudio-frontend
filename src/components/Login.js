import React, {Component} from "react";
import "./../styles/Login.css";
const herokuURL = `https://duck-studio.herokuapp.com`;
const localhostURL = `http://localhost:3000`;

class Login extends Component{

    state = {
        username: " ",
        password: " "
    };

    componentDidMount = () => {
        const {user, logoutUser} = this.props;
        return(
            user !== null 
                ? logoutUser()
                : null
        );
    };

    login = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        fetch(`${localhostURL}/login`, {
        // fetch(`${herokuURL}/login`, {
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
        .then(({token, user}) => {
            localStorage.setItem("token", token)
            this.props.loginUser(user)
        })
        .then(response => {
            this.setState({
                username: username,
                password: password
            });
        }) 
        .then(this.props.history.push("/"))   
    };

    render(){
        return(
            <div className="auth-container">
                <form 
                    className="auth-form"
                    onSubmit={(event) => this.login(event)}>
                        <div className="auth-form-content">
                        <h3 className="auth-form-title">Please Login</h3>
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
                                value="LOGIN">         
                            </input>
                        </div>
                </form>
            </div>
        );
    };

}

export default Login;