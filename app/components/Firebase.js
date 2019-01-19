import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAeLEsi-o-9StHoNHlB_F-m9UvOjQyUVz8",
  authDomain: "mp-app-4aef4.firebaseapp.com",
  databaseURL: "https://mp-app-4aef4.firebaseio.com",
  projectId: "mp-app-4aef4",
  storageBucket: "mp-app-4aef4.appspot.com",
  messagingSenderId: "626722821589"
};

firebase.initializeApp(config);

export default firebase;
