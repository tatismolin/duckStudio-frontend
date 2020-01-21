import React, {Component} from "react"
import "./../styles/ContactForm.css";
import * as emailjs from "emailjs-com";
import {Form, FormGroup, Input } from "reactstrap";

class ContactForm extends Component{

  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, message} = this.state;
    let templateParams = {
      from_name: email,
      to_name: "tatismolin@gmail.com",
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_WMps7TVt",
      templateParams,
      "user_S1UiB1OzlC5DfZFyO8PsW"
    );
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  handleChange = (param, event) => {
      this.setState({
        [param]: event.target.value 
      });
  };

  render(){
    const {name, email, message} = this.state;
    return (
      <div className="contact-form">
        <div className="contact-form-content">
          <h1 className="contact-form-title">Contact Us</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicName">
              <Input
                type="text"
                name="name"
                value={name}
                className="contact-form-input"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Please enter your name"
                required
              />
            </FormGroup>

            <FormGroup controlId="formBasicEmail">
              <Input
                type="email"
                name="email"
                value={email}
                className="contact-form-input"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Please enter your email"
                required
              />
            </FormGroup>
            
            <FormGroup controlId="formBasicMessage">
              <Input
                type="textarea"
                name="message"
                className="contact-form-text-area"
                value={message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>

            <button
              className="contact-form-send-button" 
              type="submit">
                SEND EMAIL
            </button>
          </Form>
        </div>
      </div>
    );
  };

}

export default ContactForm;