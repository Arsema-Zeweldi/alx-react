import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});

	it('renders ul', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('ul').children()).toHaveLength(3);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
		expect(wrapper.find('ul').childAt(0).html()).toEqual(
			'<li data-notification-type="default">New course available</li>'
		);
		expect(wrapper.find('ul').childAt(1).html()).toEqual(
			'<li data-notification-type="urgent">New resume available</li>'
		);
		expect(wrapper.find('ul').childAt(2).html()).toEqual(
			`<li data-urgent=\"true\">${getLatestNotification()}</li>`
		);
	});

	it('renders three list items', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('ul').children()).toHaveLength(3);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		})
	});

	it('renders correct text', () => {
		const component = shallow(<Notifications displayDrawer={true} />);

		expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
	});

	it('displays menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.menuItem').exists()).toBe(true);
		expect(wrapper.find('div.menuItem').html()).toEqual(
			'<div class="menuItem"><p>Your notifications</p></div>'
		);
	});

	it('does not display notifications when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.Notifications').exists()).toBe(false);
	});

	it('does not display menuItem when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.menuItem').exists()).toBe(true);
	});

	it('displays Notifications when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.Notifications').exists()).toBe(true);
	});
});
