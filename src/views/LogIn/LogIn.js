import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
// import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import LogInForm from './LogInForm.js'

export default function LogIn() {
    return (
        <>
            <div className="account">
                <div className="account__wrapper">
                    <div className="account__card">
                        <div className="account__head">
                            <h3 className="account__title">Welcome to
                                <span className="account__logo"> Curious
                                <span className="account__logo-accent">Reactor</span>
                                </span>
                            </h3>
                            <h4 className="account__subhead subhead">Please log in or register to start survay</h4>
                        </div>
                        <LogInForm />
                        <div className="account__or">
                            <p>Or Easily Log In Using</p>
                        </div>
                        <div className="account__social">
                            <Link
                                className="account__social-btn account__social-btn--facebook"
                                to="/dashboard"
                            >
                                <FacebookIcon />
                            </Link>
                            <Link
                                className="account__social-btn account__social-btn--google"
                                to="/dashboard"
                            >
                                <GitHubIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles

