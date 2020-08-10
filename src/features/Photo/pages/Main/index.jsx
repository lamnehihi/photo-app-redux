import React from "react";
import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Banner from "components/Banner";
import images from "Constants/image";
import { useSelector, useDispatch } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photo);
  console.log("list of photos", photos);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnPhotoEditClick = (photo) => {
    console.log("Edit:", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handleOnPhotoRemoveClick = (photo) => {
    console.log("remove:", photo);

    const action = removePhoto(photo);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 😍" backgroundUrl={images.PINK_BG} />

      <Container className="text-center pt-5">
        <Link to="/photos/add">add new photo</Link>
      </Container>

      <PhotoList
        photos={photos}
        onPhotoEditClick={handleOnPhotoEditClick}
        onPhotoRemoveClick={handleOnPhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;
