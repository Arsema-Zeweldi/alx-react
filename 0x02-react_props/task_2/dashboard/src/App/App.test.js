import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';

describe('App tests', () => {
	it('renders App without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});

	it('renders Notifications without crashing', () => {
		const component = shallow(<App />);

		expect(component.contains(<Notifications />)).toBe(true);
	});

	it('renders Header without crashing', () => {
		const component = shallow(<App />);

		expect(component.contains(<Header />)).toBe(true);
	});

	it('renders Login without crashing', () => {
		const component = shallow(<App />);

		expect(component.contains(<Login />)).toBe(true);
	});

	it('renders Footer without crashing', () => {
		const component = shallow(<App />);

		expect(component.contains(<Footer />)).toBe(true);
	});
	/*
	it('should render a div with the class App-header', () => {
		const component = shallow(<App />);

		expect(component.find('.App-header')).toBeDefined();
	});
	it('should render a div with the class App-body', () => {
		const component = shallow(<App />);

		expect(component.find('.App-body')).toBeDefined();
	});
	it('should render a div with the class App-footer', () => {
		const component = shallow(<App />);

		expect(component.find('.App-footer')).toBeDefined();
	});
	*/
});
