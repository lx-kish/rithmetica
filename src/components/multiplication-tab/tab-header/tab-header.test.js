import React from 'react';
import { shallow } from 'enzyme';

import TabHeader from './tab-header.component';

const setUp = (props = {}) => {
    return shallow(<TabHeader {...props} />);
}

describe('TabHeader component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <div></div> tag with class="tab__line--header" without errors', () => {
        const wrapper = component.find('.tab__line--header');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <div></div> tag with class="tab__heading-cell" without errors', () => {
        const wrapper = component.find('.tab__heading-cell');
        expect(wrapper.length).toBe(11);
    });

    it('Should render <div></div> tag with class="tab__heading-cell--side" without errors', () => {
        const wrapper = component.find('.tab__heading-cell--side');
        expect(wrapper.length).toBe(2);
    });

    it('Should render <div></div> tag with class="tab__empty-cell" without errors', () => {
        const wrapper = component.find('.tab__empty-cell');
        expect(wrapper.length).toBe(9);
    });
})