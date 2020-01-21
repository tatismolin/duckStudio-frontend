import React, {Component} from "react";
import "./../styles/UserProfile.css";

class UserProfile extends Component{

    render(){
        const loggedIn = localStorage.getItem("token");
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