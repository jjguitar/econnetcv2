import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PasswordRecovery.scss';
import logo from '../assets/logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title-recovery">Password recovery</h1>
				<p className="subtitle-recovery">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" placeholder="email@example.com"className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
          <Link to="/login" className="title-recovery linkTo">
            Login
          </Link>
          <Link to="/signup" className="subtitle-recovery linkTo">
            Sign up
          </Link>
			</div>
		</div>
	);
}

export default PasswordRecovery;
