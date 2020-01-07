import React, {Component} from "react";

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
            <div>
                <form 
                    className="signup-form"
                    onSubmit={(event) => this.signup(event)}>
                        <h3>Please Signup</h3>

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
                            value="Signup">         
                        </input>
                </form>
            </div>
        );
    };

}

export default Signup;