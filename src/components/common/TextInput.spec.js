/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('TextInput', () => {
  function setUp(error) {
    const props = {
      name: "",
      label: "",
      onChange: () => {},
      placeholder: "",
      value: "",
      error: error
    };
    return shallow(<TextInput {...props}/>);
  }

  it('should input have multi fields', () => {
    let wrapper = setUp();
    expect(wrapper.find('input').props().type).toEqual("text");
    expect(wrapper.find('input').props().className).toEqual("form-control");
  });

  it('should throw error if error is present', () => {
    let wrapper = setUp(["name length must be greater than 0"]);
    // console.log(wrapper.find('div').node.props.children[1].props.children[1].props.children.props.className,'-------------------------');
    // console.log(wrapper.find('div').node.props.children[1].props.children[1].props.children.props.children,'-------------------------');
  });
});
