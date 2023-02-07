import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from '../utils/utils';

describe('Footer tests', () => {
    it('renders Footer component without crashing', () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.exists()).toEqual(true);
    });

    it('renders Copyright', () => {
        const wrapper = shallow(<Footer />)

        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
    });
});