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
        window.scrollTo(0, 0);
        const {user, logoutUser} = this.props;
        return(
            user !== null 
                ? logoutUser()
                : null
        );
    };

    handleIncorrectLogin = () => {
        window.alert("Incorrect username or password. Please try again!"); 
        this.props.history.push("/login");
    };

    login = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        // fetch(`${localhostURL}/login`, {
        fetch(`${herokuURL}/login`, {
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
        .then(setTimeout(() => {
            return localStorage.getItem("token")
                ? this.props.history.push("/") 
                : this.handleIncorrectLogin()
        }, 1000)
        )
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
                                type="username"
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
                            <button 
                                className="auth-form-button"
                                type="submit"> 
                                LOGIN        
                            </button>
                        </div>
                </form>
            </div>
        );
    };

}

export default Login;