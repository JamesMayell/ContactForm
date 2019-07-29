import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// API localhost location

const API_PATH = 'http://localhost:8080/react-contact-form/api/contact/index.php';

// initial state form input values, changing input will set state to the current input value.

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            tnumber: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    // form submit handler method using axios

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };

    // basic react form. with bindings Make amendments here to change form fields.

    render() {
        return (
            <div className="App">
                <p>Contact Me</p>
                <div>
                    <form action="#">
                        <label>Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name..."
                               value={this.state.name}
                               onChange={e => this.setState({ name: e.target.value })}
                        />

                        <label>Email Address</label>
                        <input type="text" id="email" name="email" placeholder="Your Email..."
                               value={this.state.email}
                               onChange={e => this.setState({ email: e.target.value })}
                        />
                        
                        <label>Telephone Number</label>
                        <input type="text" id="tnumber" name="tnumber" placeholder="Your telephone number..."
                               value={this.state.tnumber}
                               onChange={e => this.setState({ tnumber: e.target.value })}
                        />

                        <label>Message</label>
                        <input type="text" id="message" name="message" placeholder="A short message..."
                               value={this.state.message}
                               onChange={e => this.setState({ message: e.target.value })}
                        />

                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    </form>
                </div>
            </div>
        );
    }


}


export default App;
