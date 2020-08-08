import React from "react";
import "./AddEdit.scss";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, editPhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photo.find((photo) => photo.id === +photoId)
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          console.log("submit", values);
          const action = addPhoto(values);
          dispatch(action);
          history.push("/photos");
        } else {
          console.log("edit", values);
          const action = editPhoto(values);
          dispatch(action);
          history.push("/photos");
        }
        resolve(true);
      }, 1500);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing Photos 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
