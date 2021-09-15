import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: "AIzaSyBtKe1EZpLOSY4p6CTzRrg_rUpsVkb-6Hs",
            authDomain: "my-site-63e55.firebaseapp.com",
            projectId: "my-site-63e55",
            storageBucket: "my-site-63e55.appspot.com",
            messagingSenderId: "928115318445",
            appId: "1:928115318445:web:5d15b4a7aed2c74d22b024",
            measurementId: "G-XGK72JBQJ2"
        }
    )
}

export default firebase