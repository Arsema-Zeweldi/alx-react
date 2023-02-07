import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App() {
	return (
		<React.Fragment>
			<Notifications />
			<div className='App'>
				<Header />
				<Login />
				{isLoggedIn ? <CourseList /> : <Login />}
				<Footer />
			</div>
		</React.Fragment>
	);
}

App.defaultProps = {
	isLoggedIn: false,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;