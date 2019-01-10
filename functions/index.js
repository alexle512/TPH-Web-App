const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(config)
firebase.initializeApp(functions.config().firebase)


var config = {
    apiKey: "AIzaSyCeNDaN2QTtwnAsF1HQ2fvdDDxTRoN55eY",
    authDomain: "tph-app-907cd.firebaseapp.com",
    databaseURL: "https://tph-app-907cd.firebaseio.com",
    projectId: "tph-app-907cd",
    storageBucket: "tph-app-907cd.appspot.com",
    messagingSenderId: "955009984574"
  };


const createNotification = (notification => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
        content: "Added a new note",
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {

        const newUser = doc.data()
        const notification = {
            content: 'Joined',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)

    })

})