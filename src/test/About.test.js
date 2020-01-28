import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import About from '../components/About';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<About>', function() {

  it('should have a button', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('button')).to.have.length(1);
});

  chai.use(chaiEnzyme())

})