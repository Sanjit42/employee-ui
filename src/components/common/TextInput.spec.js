/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import TextInput from './TextInput';

describe('TextInput', () => {
  function setUp(error) {
    const props = {
      name: "",
      lavel: "",
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
