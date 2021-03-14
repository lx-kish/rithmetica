import React from 'react';
import { shallow } from 'enzyme';

import Header from './header.component';

const setUp = (props = {}) => {
    return shallow(<Header {...props} />);
}

describe('Header component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <header></header> tag without errors', () => {
        const wrapper = component.find('header');
        expect(wrapper.length).toBe(1);
    });
    
    it('Should render <h1></h1> tag without errors', () => {
        const wrapper = component.find('h1');
        expect(wrapper.length).toBe(1);
    });
    
    it('Should render <h3></h3> tag without errors', () => {
        const wrapper = component.find('h3');
        expect(wrapper.length).toBe(2);
    });
        
    it('Should render <div></div> tag with class="collapsible__part" when props.display equal "true"', () => {
        const wrapper = setUp({display: true}).find('.collapsible__part');
        expect(wrapper.length).toBe(1);
    });
            
    it('Should not render <div></div> tag with class="collapsible__part" when props.display equal "false"', () => {
        const wrapper = setUp({display: false}).find('.collapsible__part');
        expect(wrapper.length).toBe(0);
    });
})