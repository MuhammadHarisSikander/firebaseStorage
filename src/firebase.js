// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdwY9JEPG3cTcfpRBQd6246DHmtUAETnE",
    authDomain: "upload-file-83894.firebaseapp.com",
    databaseURL: "https://upload-file-83894-default-rtdb.firebaseio.com",
    projectId: "upload-file-83894",
    storageBucket: "upload-file-83894.appspot.com",
    messagingSenderId: "874388393550",
    appId: "1:874388393550:web:a42ea1f06f108d77f5bd1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage_bucket = getStorage(app);
export { storage_bucket }