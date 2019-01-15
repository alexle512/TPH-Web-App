import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { register } from './registerServiceWorker';
import fbConfig from './config/fbConfig'


// const store = createStoreWithFirebase(rootReducer,initialState)

// store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
//     register()
// })

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
  );

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
    register()
})