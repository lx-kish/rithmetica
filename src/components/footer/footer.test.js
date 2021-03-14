import React from 'react';
import { shallow } from 'enzyme';

import Footer from './footer.component';

const setUp = (props = {}) => {
    return shallow(<Footer {...props} />);
}

describe('Footer component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <footer></footer> without errors', () => {
        const wrapper = component.find('footer');
        expect(wrapper.length).toBe(1);
    });
})