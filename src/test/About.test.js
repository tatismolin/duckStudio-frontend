import React from "react";
import ReactDOM from "react-dom";
import About from "../components/About";

import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

 it("renders without crashing", () => {
     const div = document.createElement("div");
     ReactDOM.render(<About />, div);
 });

 it("renders About correctly", () => {
    const {getByTestId} = render(<About className="about"/>);
    expect(getByTestId("about")).toHaveTextContent("h1");
});

it("matches snapshot", () => {
    const tree = renderer.create(<About className="about" />).toJSON();
    expect(tree).toMatchSnapshot();
});





































// import React from 'react';
// import { configure, shallow, render} from 'enzyme';
// import chai, { expect } from 'chai';
// import About from '../components/About';
// import chaiEnzyme from 'chai-enzyme';

// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('<About>', function() {

//   it('should have a button', () => {
//     const wrapper = shallow(<About />);
//     expect(wrapper.find('button')).to.have.length(1);
// });

//   chai.use(chaiEnzyme())

// })