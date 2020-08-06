import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'Constants/global';
import images from 'Constants/image';


PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId" >
          Title
        </Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow awesome...">
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">
          Category
        </Label>
        <Select
          id="categoryId"
          name="categoryId"

          placeholder="What your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        >
        </Select>
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">
          Photo
        </Label>
        <div><Button type="button" outline color="primary">Random a photo</Button></div>
        <div>
          <img src={images.COLORFUL_BG} width="200px" height="200px"></img>
        </div>
      </FormGroup>

      <FormGroup>
        <Button type="button" color="primary">Add to album</Button>
      </FormGroup>

    </Form>
  );
}

export default PhotoForm;