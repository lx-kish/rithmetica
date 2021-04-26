import React from 'react';
import { shallow } from 'enzyme';

import EmptyLine from './tab-empty-line.component';

const setUp = (props = {}) => {
    return shallow(<EmptyLine {...props} />);
}

describe('EmptyLine component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <div></div> tag with class="tab__line--empty-stick" without errors', () => {
        const wrapper = component.find('.tab__line--empty-stick');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <div></div> tag with class="tab__heading-cell" without errors', () => {
        const wrapper = component.find('.tab__heading-cell');
        expect(wrapper.length).toBe(1);
    });
})