import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyC83gHVgJqz1POzWaxBtn1KK2u43GTRJKU",
    authDomain: "altotech-434c6.firebaseapp.com",
    databaseURL: "https://altotech-434c6.firebaseio.com",
    projectId: "altotech-434c6",
    storageBucket: "altotech-434c6.appspot.com",
    messagingSenderId: "40843153544",
    appId: "1:40843153544:web:0e82098177e27dd738cf3d",
    measurementId: "G-THJDW7TBZS",
  });

const db = firebase.database().ref('/Data');

export default db