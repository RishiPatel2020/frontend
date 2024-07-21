import axios from "axios";
import { BACKEND_BASE } from "../Service/Constants";
import { getDownloadURL, getStorage, uploadBytes, ref } from "firebase/storage";
import firebaseApp from "../Service/firebase"; // Ensure this is correctly pointing to your Firebase config
import { setLocalStorageItem, getLocalStorageItem } from "./Session";

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

// Function to get profile ID
export const getProfileId = async () => {
  try {
    // Check if profile ID is already in local storage
    const existingProfileID = getLocalStorageItem("PID");

    if (existingProfileID && existingProfileID !== "Unknown") {
      // Return existing profile ID if available
      return existingProfileID;
    }

    // If profile ID is not in local storage, fetch from the backend
    const response = await axios.get(`${BACKEND_BASE}/getProfileId`);
    const { nextProfileID } = response.data;

    if (nextProfileID) {
      // Store the new profile ID in local storage
      const profileIDString = nextProfileID.toString();
      setLocalStorageItem("PID", profileIDString);
      return nextProfileID;
    }

    // Return "Unknown" if no profile ID is found
    setLocalStorageItem("PID", "Unknown");
    return "Unknown";
  } catch (error) {
    console.error("Error fetching profile ID:", error);
    setLocalStorageItem("PID", "Unknown");
    return "Unknown";
  }
};

// Function to register an analytics event
export const sendAnalytics = async (screenId, action) => {
  try {
    // Ensure profile ID is available
    const profileID = getLocalStorageItem("PID") || "Unknown";

    // Create the event data object
    const eventData = {
      screenId,
      action,
      profileID,
    };

    // Send the event data to the backend without waiting for a response
    axios
      .post(`${BACKEND_BASE}/analytics`, eventData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        console.error("Error registering analytics event:", error);
      });
  } catch (error) {
    console.error("Error preparing analytics event:", error);
  }
};
