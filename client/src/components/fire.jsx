import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
   apiKey: "AIzaSyBT7R5LTwlOMvMMuHJNJhN2DqmYhBbn160",
   authDomain: "whatsonfortoday-90275.firebaseapp.com",
   databaseURL: "https://whatsonfortoday-90275.firebaseio.com",
   projectId: "whatsonfortoday-90275",
   storageBucket: "whatsonfortoday-90275.appspot.com",
   messagingSenderId: "865128996042"
 };
const fire = firebase.initializeApp(config);
export default fire;
