import React from 'react';
import { shallow } from 'enzyme';

import Tab from './tab.component';

const setUp = (props = {}) => {
    return shallow(<Tab {...props} />);
}

describe('Tab component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <main></main> tag without errors', () => {
        const wrapper = component.find('main');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <section></section> tag without errors', () => {
        const wrapper = component.find('section');
        expect(wrapper.length).toBe(1);
    });
    
    it('Should render <TabHeader /> component without errors', () => {
        const wrapper = component.find('TabHeader');
        expect(wrapper.length).toBe(2);
    });
        
    it('Should render <TabLine /> component without errors', () => {
        const wrapper = component.find('TabLine');
        expect(wrapper.length).toBe(9);
    });
})