import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCE7yuVo_kDWD9hKp9Ns42hl5T-UYYPCoQ",
    authDomain: "sweetome-190c5.firebaseapp.com",
    databaseURL: "https://sweetome-190c5.firebaseio.com",
    projectId: "sweetome-190c5",
    storageBucket: "sweetome-190c5.appspot.com",
    messagingSenderId: "969708400510",
    appId: "1:969708400510:web:854332957f8b75f684cd2f",
    measurementId: "G-Z3X4FMT4KV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;