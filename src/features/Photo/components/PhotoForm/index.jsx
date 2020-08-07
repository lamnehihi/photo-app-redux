import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "Constants/global";
import images from "Constants/image";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from 'yup';

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
    photo: "",
  };

  const validationSchema = Yup.object().shape({

    categoryId: Yup.number().required("This field is required!").nullable(),

    photo: Yup.string().required("This field is required!"),

    title: Yup.string().required("This field is required!"),
  });

  return (
    <Formik 
      onSubmit = { values => console.log('submit: ', values) }
      validationSchema={validationSchema}
      initialValues={initialValues}>
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

            <FastField 
              name="photo"
              label="Photo"
              component={RandomPhotoField}
            />

            <FormGroup>
              <Button type="submit" color="primary">
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
