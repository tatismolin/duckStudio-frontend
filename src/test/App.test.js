import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

 it("renders without crashing", () => {
     const div = document.createElement("div");
     ReactDOM.render(<App></App>, div);
     ReactDOM.unmountComponentAtNode(div);
 });

















































// import React from "react";
// import {shallow} from "enzyme";
// import {expect} from "chai";

// import App from "../App";
// import Default from "../components/Default";
// import Login from "../components/Login";



// describe("<App>", () => {
//     it("contains a <Default/> component", () => {
//         const wrapper = shallow(<App />);
//         expect(wrapper.find(Default)).to.have.length(0);
//     });
//     it("should have an initial user state equals null", function () {
//         const wrapper = shallow(<App/>);
//         expect(wrapper.state().user).to.equal(null);
//     });
//     it("should have an initial addedItems state equals empty array", function () {
//         const wrapper = shallow(<App/>);
//         expect(wrapper.state().addedItems).to.equal([]);
//     });
//     it("should have props for user", function () {
//         const wrapper = shallow(<App/>);
//         expect(wrapper.props().user).to.be.undefined;
//       });
// });