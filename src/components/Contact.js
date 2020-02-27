import React from "react";
import "./../styles/Contact.css";
import ContactForm from "./ContactForm";

function Contact(){

    return(
        <div className="contact">
            <iframe 
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6135.470794073841!2d-104.95466192175935!3d39.74559421779502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c79527dc2f88f%3A0x409292cfbe1667d0!2sCity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1579632612621!5m2!1sen!2sus"
                width="70%" 
                height="auto" 
                title="map" 
                frameBorder="0" 
                style={{border: "0"}} 
                allowFullScreen="">     
            </iframe>
            <ContactForm />
        </div>
    );

}

export default Contact;
