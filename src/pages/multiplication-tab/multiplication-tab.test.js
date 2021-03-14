import React from 'react';
import { shallow } from 'enzyme';

import MultiplicationTab from './multiplication-tab.page';

const setUp = (props = {}) => {
    return shallow(<MultiplicationTab {...props} />);
}

describe('MultiplicationTab page test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render Header component without errors', () => {
        const wrapper = component.find('Header');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Tab component without errors', () => {
        const wrapper = component.find('Tab');
        expect(wrapper.length).toBe(1);
    });


    it('Should render Footer component without errors', () => {
        const wrapper = component.find('Footer');
        expect(wrapper.length).toBe(1);
    });
})