import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWWISRSGVR2kW07ki-7lLxOcEBAFMmc8k",
    authDomain: "quiz2-2cb82.firebaseapp.com",
    projectId: "quiz2-2cb82",
    storageBucket: "quiz2-2cb82.appspot.com",
    messagingSenderId: "121811104086",
    appId: "1:121811104086:web:5c8f81ce361161db2ee6f7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);