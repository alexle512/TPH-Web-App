import React from 'react'
import ReactDOM from 'react-dom'
// import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.min.css'
// import './bootstrap-4.0.0-beta.2-dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './components/config/fbConfig'
import { register } from './registerServiceWorker';


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    ) 
)

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
    register()
})

