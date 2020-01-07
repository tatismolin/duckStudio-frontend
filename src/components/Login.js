import React, {Component} from "react";


class Login extends Component{

    state = {
        username: " ",
        password: " "
    };

    componentDidMount = () => {
        const {user, logoutUser} = this.props;
        localStorage.removeItem("token")
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
        fetch("http://localhost:3000/login", {
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
        .then(response => this.setState({
            username: username,
            password: password
        }))    
    };

    render(){
        return(
            <div>
                <form 
                    className="login-form"
                    onSubmit={(event) => this.login(event)}>
                        <h3>Please Login</h3>

                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            required>
                        </input>

                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            required>
                        </input>

                        <input 
                            type="submit" 
                            value="Login">         
                        </input>
                </form>
            </div>
        );
    };

}

export default Login;