// Darshan Rides Firebase Messaging Service Worker

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyB_Uvk4_RAlASmsbXD3p27-c3BI375S4-Y",
  authDomain: "darshan-rides.firebaseapp.com",
  projectId: "darshan-rides",
  storageBucket: "darshan-rides.firebasestorage.app",
  messagingSenderId: "474963567773",
  appId: "1:474963567773:web:be0eb8f210b803c121e074",
  measurementId: "G-RBZMJ9FD70"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
