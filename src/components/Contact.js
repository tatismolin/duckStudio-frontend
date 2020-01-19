import React from "react";
import ContactForm from "./ContactForm";

function Contact(){

    return(
        <div className="contact" id="contact">
            <iframe 
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.9139739412776!2d-104.95512878444416!3d39.7415832043458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7eb2dc309a9d%3A0x1825252045d94b7f!2s2900%20E%2016th%20Ave%2C%20Denver%2C%20CO%2080206!5e0!3m2!1sen!2sus!4v1578678725599!5m2!1sen!2sus" 
                width="70%" 
                height="auto" 
                title="map" 
                frameborder="0" 
                style={{border: "0"}} 
                allowfullscreen="">     
            </iframe>
            <ContactForm />
        </div>
    );

}

export default Contact;
