import React, {Component} from "react";

class Signup extends Component{

    state = {
        user: {}
    };

    signup = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch("http://localhost:3000/users", {
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
        .then(user => this.setState({
            user: user     
        }))
    };

    render(){
        return(
            <div>
                <form 
                    className="signup-form"
                    onSubmit={this.signup}>
                        <h1>Please Signup</h1>

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