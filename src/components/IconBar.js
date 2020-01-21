import React from "react";
import "./../styles/IconBar.css";

function IconBar(){

    return(
        <div className="icon-bar">
            <a href="#" className="facebook"><i className="fa fa-facebook"><img alt="facebook" className="sm-icon" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"></img></i></a>
            <a href="#" className="twitter"><i className="fa fa-twitter"><img alt="twitter" className="sm-icon" src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"></img></i></a>
            <a href="#" className="instagram"><i className="fa fa-instagram"><img alt="instagram" className="sm-icon" src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"></img></i></a>
            <a href="#" className="pinterest"><i className="fa fa-pinterest"><img alt="pinterest" className="sm-icon" src="https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01/8f6f59264a094af0b46e9f6c77dff83e.webp"></img></i></a>
        </div>
    );

}

export default  IconBar;
