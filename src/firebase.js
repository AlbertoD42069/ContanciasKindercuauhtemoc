import {initializeApp} from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyDPUulEmx6VEeO59OjAvjNsCwaxKGzSLqU",
    authDomain: "contanciaskinder.firebaseapp.com",
    projectId: "contanciaskinder",
    storageBucket: "contanciaskinder.appspot.com",
    messagingSenderId: "691585421981",
    appId: "1:691585421981:web:71eec08c79188a91b1ba74",
    measurementId: "G-XKBT6Q8NLF"
  };
  const appFirebase =  initializeApp(firebaseConfig);
  export const app= appFirebase;
