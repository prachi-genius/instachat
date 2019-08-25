import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBWEZQDEqanPPf5rOeJSkSShiErmii21ps",
    authDomain: "iamin-99aa4.firebaseapp.com",
    databaseURL: "https://iamin-99aa4.firebaseio.com",
    projectId: "iamin-99aa4",
    storageBucket: "",
    messagingSenderId: "576870807135",
    appId: "1:576870807135:web:ba1dd5d98532a0e6"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire
  