import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleOnEditClick = () => {
    if (onEditClick) {
      onEditClick(photo);
    }
  };

  const handleOnRemoveClick = () => {
    if (onRemoveClick) {
      onRemoveClick(photo);
    }
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__action">
          <div>
            <Button
              type="button"
              size="sm"
              color="light"
              outline
              onClick={handleOnEditClick}
            >
              Edit
            </Button>
          </div>

          <div>
            <Button
              type="button"
              size="sm"
              color="danger"
              outline
              onClick={handleOnRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
