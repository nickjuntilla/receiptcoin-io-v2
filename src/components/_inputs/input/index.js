// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Field, InputField, FormLabels, Label, Error } from './styles';

class Input extends Component {
  render() {
    const {
      label,
      error,
      placeholder,
      value,
      name,
      onChange,
      onSubmit,
      capitalize,
      required,
      type
    } = this.props;

    return (
      <Field onSubmit={onSubmit}>
        <FormLabels>
          <Label>{label}</Label>
          <Error>{error}</Error>
        </FormLabels>
        <InputField
          type={type}
          required={required}
          capitalize={capitalize}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Field>
    );
  }
}

export default Input;
