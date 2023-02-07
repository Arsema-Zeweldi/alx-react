import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header tests', () => {
	it('renders Login component without crashing', () => {
		const wrapper = shallow(<Login />);

		expect(wrapper.exists).toEqual(true);
	});

    it('renders 2 input and 2 label tags', () => {
		const component = shallow(<Login />);

        expect(wrapper.find('input')).toHaveLength(2);
		expect(wrapper.find('label')).toHaveLength(2);
	});
});