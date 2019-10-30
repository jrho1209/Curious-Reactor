import React, { PureComponent } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import CheckBox from '../../components/CheckBox/CheckBox.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogInForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }


  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { showPassword } = this.state;

    return (

      <form noValidate autoComplete="off">
        {/* //username */}
        <div className="login__input">
          <TextField
            id="outlined-full-width"
            label="Username"
            style={{ margin: 0 }}
            placeholder="Name"
            // helperText=""
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        {/* password */}
        <div className="login__input">
          <TextField
            id="outlined-password-input"
            label="Password"
            // className={classes.textField}
            fullWidth
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        </div>

        <Link to="/admin/dashboard">
          <Button variant="outlined" color="primary"> Sign in </Button>
        </Link>
        <Link to="/admin/dashboard">
          <div className="login__button">
            <Button variant="outlined"> Register to Survey </Button>
          </div>
        </Link>
      </form>

      // <form className="form">
      //   <div className="form__form-group">
      //     <span className="form__form-group-label">Username</span>
      //     <div className="form__form-group-field">
      //       <div className="form__form-group-icon">
      //         <AccountCircleIcon />
      //       </div>
      //       <input
      //         name="name"
      //         type="text"
      //         placeholder="Name"
      //       />
      //     </div>
      //   </div>

      //   <div className="form__form-group">
      //     <span className="form__form-group-label">Password</span>
      //     <div className="form__form-group-field">
      //       <div className="form__form-group-icon">
      //         <VpnKeyIcon />
      //       </div>
      //       <input
      //         name="password"
      //         type={showPassword ? 'text' : 'password'}
      //         placeholder="Password"
      //       />
      //       <button
      //         className={`form__form-group-button${showPassword ? ' active' : ''}`}
      //         onClick={e => this.showPassword(e)}
      //         type="button"
      //       ><VisibilityIcon />
      //       </button>
      //     </div>
      //     <div className="account__forgot-password">
      //       <a href="/">Forgot a password?</a>
      //     </div>
      //   </div>
      //   <div className="form__form-group">
      //     <div className="form__form-group-field">
      //       <CheckBox name="remember_me" label="Remember me" value="on" onChange={() => {}} />
      //     </div>
      //   </div>
      //   <Link className="btn btn-primary account__btn account__btn--small" to="/admin/dashboard">Sign In</Link>
      //   <Link className="btn btn-outline-primary account__btn account__btn--small" to="/admin/dashboard">Create Account</Link>
      // </form>
    );
  }
}

export default LogInForm;
