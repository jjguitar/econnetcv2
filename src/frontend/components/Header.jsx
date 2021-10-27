import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/avatar.png';

const Header = (cart) => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	// const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
      <ul>
					<li>
						<Link to="/experiences">Experiencias</Link>
					</li>
					<li>
						<a href="/">Procesos</a>
					</li>
					<li>
						<a href="/">Asignaciones</a>
					</li>
				</ul>
			</div>
      <p className="nav-logo">
        <Link to='/'>
          Econnect
        </Link>
      </p>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						jhon@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img className="nav-avatar" src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 ? <div>{cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(Header);
