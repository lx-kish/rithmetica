import React from 'react';
import { shallow } from 'enzyme';

import TabLine from './tab-line.component';

const setUp = (props = {}) => {
    return shallow(<TabLine {...props} />);
}

describe('TabLine component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <div></div> tag with class="tab__line" without errors', () => {
        const wrapper = component.find('.tab__line');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <div></div> tag with class="tab__heading-cell" without errors', () => {
        const wrapper = component.find('.tab__heading-cell');
        expect(wrapper.length).toBe(2);
    });
    
    it('Should render <TabEmptyCell /> component without errors', () => {
        const wrapper = component.find('TabEmptyCell');
        expect(wrapper.length).toBe(9);
    });
        
    it('Should render <TabCell /> component without errors', () => {
        const wrapper = component.find('TabCell');
        expect(wrapper.length).toBe(9);
    });
})