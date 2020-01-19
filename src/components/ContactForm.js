import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    // subject: '',
    message: '',
  }
handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = this.state

    let templateParams = {
      from_name: email,
      to_name: "tatismolin@gmail.com",
    //   subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_WMps7TVt',
       templateParams,
      'user_S1UiB1OzlC5DfZFyO8PsW'
     )
     this.resetForm()
 }
resetForm = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
        <div className="contact-form">
            <div className="form-content">
          <h1 className="form-title">Contact Us</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
<FormGroup controlId="formBasicName">
              {/* <Label className="text-muted">Name</Label> */}
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="form-input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Please enter your name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              {/* <Label className="text-muted">Email address</Label> */}
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="form-input"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Please enter your email"
              />
            </FormGroup>
{/* <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup> */}
<FormGroup controlId="formBasicMessage">
              {/* <Label className="text-muted">Message</Label> */}
              <Input
                type="textarea"
                name="message"
                className="form-text-area"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <button className="form-send-button" type="submit">
              SEND EMAIL
            </button>

          </Form>
        </div>
        </div>
    )
  }
}

export default ContactForm;