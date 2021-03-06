import React, {Component} from "react";
import "./../styles/UserProfile.css";

class UserProfile extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        const loggedIn = localStorage.getItem("token");
        console.log(loggedIn)
        return(
            <div className="user-profile">
                {loggedIn
                    ? <h3>Welcome User</h3>
                    : <h3>Please login to view your Profile</h3>
                }
            </div>
        );
    };

}

export default UserProfile;