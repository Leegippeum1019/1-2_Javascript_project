// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuz4A-YN9-hZXemSXJ0MIvADk23zNLnGw",
  authDomain: "jsproject-9ebf7.firebaseapp.com",
  databaseURL: "https://jsproject-9ebf7-default-rtdb.firebaseio.com",
  projectId: "jsproject-9ebf7",
  storageBucket: "jsproject-9ebf7.firebasestorage.app",
  messagingSenderId: "595770505966",
  appId: "1:595770505966:web:033f9ab267afc4b27991ff"
};

firebase.initializeApp(firebaseConfig);
const dbService = firebase.firestore();

db.collection('users').doc('user_id_1').set({
  name: 'John Doe',
  school: 'Example University',
  department: 'Computer Science',
  entrance: 2020,
  intro: 'Hello, I love coding!'
}).then(() => {
  console.log('User added successfully!');
}).catch((error) => {
  console.error('Error adding user:', error);
});