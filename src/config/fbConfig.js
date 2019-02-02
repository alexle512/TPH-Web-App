import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true}
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCeNDaN2QTtwnAsF1HQ2fvdDDxTRoN55eY",
    authDomain: "tph-app-907cd.firebaseapp.com",
    databaseURL: "https://tph-app-907cd.firebaseio.com",
    projectId: "tph-app-907cd",
    storageBucket: "tph-app-907cd.appspot.com",
    messagingSenderId: "955009984574"
  };
  
firebase.initializeApp(config)
firebase.firestore().settings(settings)

export default firebase;