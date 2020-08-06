import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "Constants/global";
import images from "Constants/image";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
  };

  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        //do something here...
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow awesome..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  alt="img"
                  src={images.COLORFUL_BG}
                  width="200px"
                  height="200px"
                ></img>
              </div>
            </FormGroup>

            <FormGroup>
              <Button type="button" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
