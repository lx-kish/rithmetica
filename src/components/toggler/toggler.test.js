import React from 'react';
import { shallow } from 'enzyme';

import Toggler from './toggler.component';

const setUp = (props = {}) => {
    return shallow(<Toggler {...props} />);
}

describe('Toggler component test set', () => {

    const content = {
        toggleBox: {
            className: 'add-subtract-toggle__box'
        },
        label: {
            htmlFor: 'addition-subtraction',
            span: {
                left: {
                    className: 'header__description',
                    text: 'addition',
                },
                right: {
                    className: 'header__description',
                    text: 'subtraction',
                }
            }
        },
        input: {
            type: 'checkbox',
            className: 'add-subtract-toggle__input',
            id: 'addition-subtraction',
        }
    };

    let component;
    beforeEach(() => {
        component = setUp(content);
    });

    it('Should render <div></div> tag without errors', () => {
        const wrapper = component.find('div');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <label></label> tag without errors', () => {
        const wrapper = component.find('label');
        expect(wrapper.length).toBe(1);
    });

    it('Should render <span></span> tag without errors', () => {
        const wrapper = component.find('span');
        expect(wrapper.length).toBe(2);
    });

    it('Should render <input></input> tag without errors', () => {
        const wrapper = component.find('input');
        expect(wrapper.length).toBe(1);
    });
})