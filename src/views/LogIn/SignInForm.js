import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            signedIn: false

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
        const { signedIn, username, password } = this.state;


        Auth.signIn({
            username: username,
            password: password,
            attributes: {
                email: email,
                phone_number: phone_number
            }
        })
            .then(() => console.log('signed in'))
            .catch(err => console.log(err));

        Auth.confirmSignIn(username)
            .then(() => console.log('confirmed signed up'))
            .catch(err => console.log(err));

        this.setState({
            signedIn: true
        });

    }

    render() {
        const { signedIn } = this.state;
        if (signedIn) {
            <h1>You have signed in!</h1>
        }
        else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type='text' name='username' onChange={this.handleChange} />
                        <label>Password</label>
                        <button>Sign In</button>
                    </form>
                </div>
            )
        }
    }
}
