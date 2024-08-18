import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

function PictureUpload({ setIsValid }) {
  const [pictures, setPictures] = useState([]);
  const { answers, updateAnswer } = useContext(AnswersContext);

  useEffect(() => {
    // Initialize pictures state with the value from global state when component mounts
    if (answers.pictures) {
      setPictures(answers.pictures);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    // Validate that at least one picture is uploaded
    const isValid = pictures.length > 0;
    setIsValid(isValid);
  }, [pictures, setIsValid]);

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
      <h1 className="my-5 text-dark text-center" style={{fontWeight:"bold"}}>Upload Profile Picture</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
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
                width: "271px",
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
              Change
            </button>
          </div>
        ))}
        {pictures.length < 1 && (
          <label
            htmlFor="fileInput"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "271px",
              height: "70px", // Adjusted height to be smaller
              border: "2px dashed gray",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              padding: "10px", // Added padding for better appearance
            }}
          >
            <span style={{ marginBottom: "5px", display: "block", fontWeight: 800 }}>
              Click to upload
            </span>
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
        <p
          style={{
            fontStyle: "italic",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          Please submit a clear picture with no sunglasses, hats, filters, or
          edits. Users using fake or unclear photos will be denied.
        </p>
      </div>
    </div>
  );
}

export default PictureUpload;
