import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Button, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "Constants/global";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValues: {},
};

function PhotoForm(props) {
  const { onSubmit, initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    categoryId: Yup.number().required("This field is required!").nullable(),

    photo: Yup.string().required("This field is required!"),

    title: Yup.string().required("This field is required!"),
  });

  const handleOnSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    return;
  };
  return (
    <Formik
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {(formikProps) => {
        //do something here...
        const { values, errors, touched, isSubmitting } = formikProps;
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
              {isAddMode ? (
                <div>
                  <Button type="submit" color="primary">
                    Add to album
                  </Button>
                  {isSubmitting && <Spinner size="sm" color="primary" />}
                </div>
              ) : (
                <div>
                  <Button type="submit" color="success">
                    Edit to album
                  </Button>
                  {isSubmitting && <Spinner size="sm" color="success" />}
                </div>
              )}
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
