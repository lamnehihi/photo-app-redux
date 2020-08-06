import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};

function InputField(props) {
  const { 
    field,
    type, label, placeholder, disable
  } = props;
  const { name } = field;
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input 
        id={name} 
        {...field} 

        type={type}
        disabled={disable}
        placeholder={placeholder}
      ></Input>
    </FormGroup>
  );
}

export default InputField;
