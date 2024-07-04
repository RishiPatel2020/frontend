import axios from "axios";
import { BACKEND_BASE } from "../Service/Constants";
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import firebaseApp from "../Service/firebase"; // Ensure this is correctly pointing to your Firebase config

export const loginUser = async (email, password) => {
  const response = await axios.post(`${BACKEND_BASE}/login`, {
    email,
    password,
  });
  return response.data;
};

export const uploadImages = async (pictures) => {
  const storage = getStorage(firebaseApp);
  const uploadedUrls = await Promise.all(
    pictures.map(async (picture) => {
      const storageRef = ref(storage, `images/${picture.file.name}`);
      await uploadBytes(storageRef, picture.file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    })
  );
  return uploadedUrls;
};

export const signUpUser = async (dataToSubmit) => {
  const response = await axios.post(
    `${BACKEND_BASE}/signup`,
    JSON.stringify(dataToSubmit),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const forgotPassword = async (email) => {
  const response = await axios.post(`${BACKEND_BASE}/forgotPassword`, {
    email,
  });
  return response.data;
};
const applyPremium = async (token) => {
  try {
    const response = await axios.patch(`${BACKEND_BASE}/applyPremium`, null, {
      headers: {
        Authorization: token
      },
    });
    console.log("User upgraded to Premium:", response.data);
  } catch (error) {
    console.error(
      "Error upgrading to Premium:",
      error.response ? error.response.data : error.message
    );
  }
};
