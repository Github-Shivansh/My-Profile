import React, { Component } from 'react'
import { FaFacebookMessenger, FaLinkedin, FaGithub } from 'react-icons/fa'
import axios from 'axios'
import $ from 'jquery'
export class ContactView extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    data = {}
    componentDidMount() {
        $('#contact_form').click(function (e) {
            e.preventDefault();
            var formData = new FormData(this);
            // if (localStorage.getItem('user_email')) {
            //     alert('you cannot send message multiple times');
            //     return false;
            // }
            localStorage.setItem('user_email', $('#user_email').val());
            axios({
                method: 'POST',
                url: 'https://encryptor-api.herokuapp.com/sendmail/',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(function (response) {
                if (response.error) alert(response.error_msg);
                else alert(response.message);
            })
            e.preventDefault();
        })
    }

    render() {
        return (
            <form id="contact_form" data-aos="zoom-in" data-aos-duration="2000" className="ContactForm">
                <h1>Contact Me</h1>
                <div className="contact_icon_container">
                    <FaLinkedin size="1.5em" className="contact_icon contact_linkedin" color="blue" />
                    <FaGithub size="1.5em" className="contact_icon contact_github"/>
                </div>
                <p>For any extra information. Send me message </p>
                <div>

                </div>
                <div className="InputFields">
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="Name"
                    />
                    <input
                        id='user_email'
                        type="email"
                        name="from"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        placeholder="Email"
                    />

                    <textarea
                        id="contact_form_textarea"
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                        placeholder="Message"
                    />
                    <button class="btn" type="submit">
                        <FaFacebookMessenger size="1em" color="white" />  Send Message
                    </button>
                </div>
            </form>
        )
    }
}
export default ContactView
