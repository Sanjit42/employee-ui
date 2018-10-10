/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import EmployeeForm from './EmployeeForm';

describe('EmployeeForm', () => {
  function setUp(saving) {
    const props = {
      employee: {},
      homeOffices: [],
      gender: [],
      onChange: () => {},
      onSave: () => {},
      saving: saving,
      errors: {}
    };
    return shallow(<EmployeeForm {...props}/>);
  }

  it('should render form', () => {
    let wrapper = setUp(false);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should render input', () => {
    let wrapper = setUp(false);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').props().className).toEqual('btn btn-primary');
    expect(wrapper.find('input').props().name).toBe('submit');
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('should save button is labeled "Saving.." when saving', () => {
    let wrapper = setUp(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });

  it('should render TextInput', () => {
    let wrapper = setUp(false);
    expect(wrapper.find('TextInput').length).toBe(3);
  });

  it('should render SelectInput', () => {
    let wrapper = setUp(true);
    expect(wrapper.find('SelectInput').length).toBe(2);
    expect(wrapper.find('SelectInput').length).not.toBe(3);
  });

  it('should handle onClick event', () => {
    let mockCall = jest.fn();

    let wrapper = shallow(<EmployeeForm homeOffices={['Pune']} employee={{}} onChange={mockCall} gender={['']} onSave={mockCall}/>);
    wrapper.find('input').simulate('click');
    expect(mockCall).toHaveBeenCalled();
  });
});
