import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

function PictureUpload() {
  const [pictures, setPictures] = useState([]);
  const { answers, updateAnswer } = useContext(AnswersContext);

  useEffect(() => {
    // Initialize pictures state with the value from global state when component mounts
    if (answers.pictures) {
      setPictures(answers.pictures);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const generateUniqueId = () => {
    // Generate a unique ID using the current timestamp
    return `picture-${Date.now()}`;
  };

  const handlePictureChange = (event) => {
    const files = event.target.files;
    const newPictures = [];
    for (let i = 0; i < Math.min(files.length, 2); i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      const id = generateUniqueId(); // Generate a unique ID for the picture
      newPictures.push({ id, file, url });
    }
    setPictures((prevPictures) => [...prevPictures, ...newPictures]);
    updateAnswer("pictures", [...pictures, ...newPictures]); // Update global state
  };

  const handleRemovePicture = (id) => {
    const newPictures = pictures.filter((picture) => picture.id !== id);
    setPictures(newPictures);
    updateAnswer("pictures", newPictures); // Update global state
  };

  return (
    <div>
      <h2 className="my-5">Upload Pictures</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {pictures.map((picture) => (
          <div
            key={picture.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={picture.url}
              alt={`Uploaded ${picture.id}`}
              style={{
                width: "200px",
                height: "200px",
                margin: "5px",
                objectFit: "cover",
              }}
            />
            <button
              onClick={() => handleRemovePicture(picture.id)}
              style={{ width: "150px" }}
              className="button"
            >
              Remove
            </button>
          </div>
        ))}
        {pictures.length < 2 && (
          <label
            htmlFor="fileInput"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              border: "2px dashed gray",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <span style={{ marginBottom: "5px" }}>Click to upload</span>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              multiple
              style={{ display: "none" }}
            />
          </label>
        )}
      </div>
    </div>
  );
}

export default PictureUpload;
