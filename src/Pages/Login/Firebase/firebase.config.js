import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_project_Id,
    storageBucket:process.env.REACT_APP_storage_Bucket,
    messagingSenderId:process.env.REACT_APP_messaging_SenderId,
    appId:process.env.REACT_APP_appId
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth;