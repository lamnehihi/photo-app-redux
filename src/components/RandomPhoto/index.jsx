import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          name={name}
          outline
          color="primary"
          onClick={handleRandomPhotoClick}
          onBlur={onRandomButtonBlur}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__image">
        {
          <img
            src={`${imageUrl}`}
            alt="Oops...something wrong! please click again"
            onError={handleRandomPhotoClick}
          />
        }
      </div>
    </div>
  );
}

export default RandomPhoto;
