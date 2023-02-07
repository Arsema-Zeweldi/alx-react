import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('rendering components', () => {
	it('renders NotificationItem component without crashing', () => {
		const wrapper = shallow(<NotificationItem />);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders html with type="default" value="test" props', () => {
		const wrapper = shallow(<NotificationItem />);

		wrapper.setProps({ type: 'default', value: 'test' });
		expect(wrapper.html()).toEqual(
			'<li data-notification-type="default">test</li>'
		);
	});

	it('renders correct html with  html="<u>test</u>" props', () => {
		const wrapper = shallow(<NotificationItem />);

		wrapper.setProps({ html: '<u>test</u>' });
		expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
	});
});