/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import TextInput from './SelectInput';

configure({ adapter: new Adapter() });

describe('SelectInput', () => {
  function setUp(error) {
    const props = {
      name: "gender",
      label: "Gender",
      onChange: () => {},
      value: ['Male'],
      defaultOption: "Select Gender",
      options: ['Male', 'female'],
      errors: {error}
    };

    return shallow(<TextInput {...props}/>);
  }

  it('should input have multi fields', () => {
    let wrapper = setUp();
    expect(wrapper.find('select').props().name).toEqual("gender");
    expect(wrapper.find('select').props().className).toEqual("form-control");
  });
});
