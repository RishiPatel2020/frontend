import React, { useState } from "react";

function PictureUpload() {
  const [pictures, setPictures] = useState([]);

  const handlePictureChange = (event) => {
    const files = event.target.files;
    const newPictures = [];
    for (let i = 0; i < Math.min(files.length, 2); i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      newPictures.push({ file, url });
    }
    setPictures((prevPictures) => [...prevPictures, ...newPictures]);
  };

  const handleRemovePicture = (index) => {
    const newPictures = [...pictures];
    newPictures.splice(index, 1);
    setPictures(newPictures);
  };

  return (
    <div>
      <h2 className="my-5">Upload Pictures</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {pictures.map((picture, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={picture.url}
              alt={`Uploaded ${index + 1}`}
              style={{
                width: "200px",
                height: "200px",
                margin: "5px",
                objectFit: "cover",
              }}
            />
            <button
              onClick={() => handleRemovePicture(index)}
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

// import React, { useState } from "react";

// function PictureUpload() {
//   const [pictures, setPictures] = useState([]);

//   const handlePictureChange = (event) => {
//     const files = event.target.files;
//     const newPictures = [];
//     for (let i = 0; i < Math.min(files.length, 2); i++) {
//       const file = files[i];
//       const url = URL.createObjectURL(file);
//       newPictures.push({ file, url });
//     }
//     setPictures((prevPictures) => [...prevPictures, ...newPictures]);
//   };

//   const handleRemovePicture = (index) => {
//     const newPictures = [...pictures];
//     newPictures.splice(index, 1);
//     setPictures(newPictures);
//   };

//   return (
//     <div>
//       <h2 className="my-5">Upload Pictures</h2>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         {pictures.map((picture, index) => (
//           <div key={index} style={{ display: "flex", flexDirection: "column" }}>
//             <img
//               src={picture.url}
//               alt={`Uploaded ${index + 1}`}
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 margin: "5px",
//                 objectFit: "cover",
//               }}
//             />
//             <div className="row text-center">
//               <button
//                 onClick={() => handleRemovePicture(index)}
//                 className="button text-center"
//                 style={{ width: "150px" }}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//         {pictures.length < 2 && (
//           <label
//             htmlFor="fileInput"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "200px",
//               height: "200px",
//               border: "2px dashed gray",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             <span style={{ marginBottom: "5px" }}>Click to upload</span>
//             <input
//               id="fileInput"
//               type="file"
//               accept="image/*"
//               onChange={handlePictureChange}
//               multiple
//               style={{ display: "none" }}
//             />
//           </label>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PictureUpload;
