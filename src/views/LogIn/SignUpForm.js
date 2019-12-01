import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            confirmationCode: '',
            signedUp: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const { singedUp, username, password, email, phone_number, confirmationCode } = this.state;

        if (!signedUp) {
            Auth.singedUp({
                username: username,
                password: password,
                attributes: {
                    email: email,
                    phone_number: phone_number
                }
            })
                .then(() => console.log('signed up'))
                .catch(err => console.log(err))

            this.setState({
                signedUp: true
            });
        }
        else {
            Auth.confirmSignUp(username, confirmationCode)
                .then(() => console.log('confirmed signed up'))
                .catch(err => console.log(err));

        }

    }

    render() {
        const { signedUp } = this.state;
        if (signedUp) {
            <form>
                <label>Username</label>
                <input type='text' name='username' onChange={this.handleChange} />
                <label>Confirmation Code</label>
                <input type='text' name='confirmationCode' onChange={this.handleChange} />
            </form>
        }
        else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type='text' name='username' onChange={this.handleChange} />
                        <label>Password</label>
                        <input type='text' name='password' onChange={this.handleChange} />
                        <label>Email</label>
                        <input type='text' name='email' onChange={this.handleChange} />
                        <label>Phone Number</label>
                        <input type='text' name='phone_number' onChange={this.handleChange} />

                        <button>Sign up</button>



                    </form>
                </div>
            )
        }

    }
}
