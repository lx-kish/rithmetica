import React from 'react';
import { shallow } from 'enzyme';

import TabEmptyCell from './tab-empty-cell.component';

const setUp = (props = {}) => {
    return shallow(<TabEmptyCell {...props} />);
}

describe('TabEmptyCell component test set', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render <div></div> tag with class="tab__empty-cell" without errors', () => {
        const wrapper = component.find('.tab__empty-cell');
        expect(wrapper.length).toBe(1);
    });
})