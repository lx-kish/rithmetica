import React from 'react';
import { shallow } from 'enzyme';

import TabCell from './tab-cell.component';

const setUp = (props = {}) => {
    return shallow(<TabCell {...props} />);
}

describe('TabCell component test set', () => {

    const props = {line: 3, value: 9};

    let component;
    beforeEach(() => {
        component = setUp(props);
    });

    it('Should render <div></div> tag with class="component" without errors', () => {
        const wrapper = component.find('.component');
        expect(wrapper.length).toBe(1);
    });
})