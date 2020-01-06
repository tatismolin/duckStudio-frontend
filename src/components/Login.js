import React, {Component} from "react";


class Login extends Component{

    state = {
        user: {}
    };

    login = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            })
        })
        .then(response => response.json())
        .then(({token}) => {
            localStorage.setItem("token", token)
            console.log("here is token", localStorage.getItem("token"))
        })
        .then(user => this.setState({
            user: user   
        }))    
    };

    render(){
        return(
            <div>
                <form 
                    className="login-form"
                    onSubmit={this.login}>
                        <h1>Please Login</h1>

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