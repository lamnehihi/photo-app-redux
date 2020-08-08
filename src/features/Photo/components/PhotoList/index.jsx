import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Row, Col } from "reactstrap";

PhotoList.propTypes = {
  photos: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photo: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

function PhotoList(props) {
  const { photos, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <Row className="photo-list m-5">
      {photos.map((photo) => (
        <Col key={photo.id} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
