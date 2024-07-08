import axios from "axios";
import { BACKEND_BASE } from "../Service/Constants";
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import firebaseApp from "../Service/firebase"; // Ensure this is correctly pointing to your Firebase config
import { getLocalStorageItem } from "./Session";

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

export const applyPremium = async () => {
  const token = getLocalStorageItem("token"); // Retrieve token from local storage

  const response = await axios.post(
    `${BACKEND_BASE}/applyPremium`,
    null, // No request body needed for this endpoint
    {
      headers: {
        Authorization: token, // Include token in Authorization header
      },
    }
  );
  return response.data;
};

export const updatePassword = async (currentPassword, newPassword) => {
  const response = await axios.post(
    `${BACKEND_BASE}/updatePassword`,
    {
      currentPassword,
      newPassword,
    },
    {
      headers: {
        Authorization: getLocalStorageItem("token"), // Get token from local storage
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
