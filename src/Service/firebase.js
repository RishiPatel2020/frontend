// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQx6p_yUYPPG-j9duKDT3pZ0CdYtPdvVA",
  authDomain: "image-storage-e6872.firebaseapp.com",
  projectId: "image-storage-e6872",
  storageBucket: "image-storage-e6872.appspot.com",
  messagingSenderId: "977000749076",
  appId: "1:977000749076:web:c6b226eb080635f6e9af01",
  measurementId: "G-0M7E6DCFDQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
