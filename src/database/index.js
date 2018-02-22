import firebase from 'firebase';
import * as keys from '../config/keys.js';

const config = {
  apiKey: `${keys.apiKey}`,
  authDomain: `${keys.authDomain}`,
  databaseURL: `${keys.databaseURL}`,
  projectId: `${keys.projectId}`,
  messagingSenderId: `${keys.messagingSenderId}`,
  storageBucket: ''
};
firebase.initializeApp(config);

export default firebase;
