import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyAVuMobFaaCFHKqXnu56ZeZjY3ebz0cI3o",
    authDomain: "fun-foods-friends-ebf72.firebaseapp.com",
    databaseURL: "https://fun-foods-friends-ebf72.firebaseio.com",
    projectId: "fun-foods-friends-ebf72",
    storageBucket: "fun-foods-friends-ebf72.appspot.com",
    messagingSenderId: "955295202565"
  };
  firebase.initializeApp(config);
  
export default firebase;