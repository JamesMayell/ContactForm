import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API_PATH = 'http://localhost:3000/react-contact-form/api/contact/index.php';

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
