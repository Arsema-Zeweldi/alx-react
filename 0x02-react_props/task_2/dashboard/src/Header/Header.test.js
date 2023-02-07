import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header tests', () => {
	it('renders Header component without crashing', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper.exists()).toEqual(true);
	});

    it('renders img and h1', () => {
		const component = shallow(<Header />);

        expect(wrapper.exists('img')).toEqual(true);
		expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
	});
});