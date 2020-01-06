import React, {Component} from "react";

class Signup extends Component{

    state = {
        username: " ",
        password: " "
    };

    signup = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            })
        })
        .then(response => response.json())
        .then(this.setState({
            username: formData.get("username"),
            password: formData.get("password")        
        }))
    };

    // updateUsername = (event) => {
    //     this.setState({
    //       username: event.target.value
    //     })  
    // };
    
    // updatePassword = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // };

    render(){
        return(
            <div>
                <form 
                    className="signup-form"
                    onSubmit={(event) => this.signup(event)}>
                        <h1>Please Signup</h1>

                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            // onChange={(event) => this.updateUsername(event)}
                            // value={this.state.username}
                            required>
                        </input>

                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            // onChange={(event) => this.updatePassword(event)}
                            // value={this.state.password}
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