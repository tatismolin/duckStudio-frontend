import React from "react";
import "./../styles/IconBar.css";
import "./../styles/Footer.css";

function IconBar(){

    return(
        <div className="icon-bar">
            <a href="https://www.facebook.com/pg/BigDuckUS/community/?mt_nav=0msite_tab_async=0" className="facebook"><i className="fa fa-facebook"><img alt="facebook" className="sm-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"></img></i></a>
            <a href="https://twitter.com/rubberducksrylw" className="twitter"><i className="fa fa-twitter"><img alt="twitter" className="sm-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png"></img></i></a>
            <a href="https://www.instagram.com/giveducks/" className="instagram"><i className="fa fa-instagram"><img alt="instagram" className="sm-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png"></img></i></a>
            <a href="https://www.pinterest.com/tatismolin/duck-studio/" className="pinterest"><i className="fa fa-pinterest"><img alt="pinterest" className="sm-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Pinterest_colored_svg-256.png"></img></i></a>
        </div>
    );

}

export default  IconBar;