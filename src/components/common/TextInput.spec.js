import React from 'react';
import {expect} from 'chai';
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
      errors: {error}
    };
    return shallow(<TextInput {...props}/>);
  }

  it('should input have multi fields', () => {
    let wrapper = setUp();
    expect(wrapper.find('input').props().type).to.equal("text");
    expect(wrapper.find('input').props().className).to.equal("form-control");
  });

  // it.only('should throw error if error is present', () => {
  //   let wrapper = setUp("");
  //   console.log(wrapper.find('div').node.props.children,'-------------------------');
  // });
});
