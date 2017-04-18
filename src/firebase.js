import * as firebase from 'firebase'

const config = {
   apiKey: "AIzaSyAG4QYZZlLaZCDBi8S3t1-SaIV_c2iNnNY",
   authDomain: "goalmanager-c309d.firebaseapp.com",
   databaseURL: "https://goalmanager-c309d.firebaseio.com",
   projectId: "goalmanager-c309d",
   storageBucket: "goalmanager-c309d.appspot.com",
   messagingSenderId: "292580174097"
 };

export const firebaseApp = firebase.initializeApp(config)
