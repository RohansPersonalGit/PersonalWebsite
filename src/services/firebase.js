const firebase = require("firebase");
var config = {
    apiKey: "AIzaSyDKc6_TFhdiOJqAsda5qj77ddBG2G6Z25o",
    authDomain: "socialstudent-593f2.firebaseapp.com",
    databaseURL: "https://socialstudent-593f2.firebaseio.com",
    projectId: "socialstudent-593f2",
    storageBucket: "socialstudent-593f2.appspot.com",
    messagingSenderId: "155926944573"
  };
  firebase.initializeApp(config);
  export default firebase;
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();