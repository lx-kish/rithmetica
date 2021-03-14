import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const setUp = (props = {}) => {
    return shallow(<App {...props} />);
}

describe('LogOut page test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render MainPage component without errors', () => {
        const wrapper = component.find('MainPage');
        expect(wrapper.length).toBe(1);
    });
})