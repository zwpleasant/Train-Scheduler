// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVtUhr5jIsHaHhVj7IHhStumdZuCTcOZk",
  authDomain: "train-scheduler-a4e6f.firebaseapp.com",
  databaseURL: "https://train-scheduler-a4e6f.firebaseio.com",
  projectId: "train-scheduler-a4e6f",
  storageBucket: "",
  messagingSenderId: "934013468820"
};

firebase.initializeApp(config);

// Create a varialble to reference the database
var database = firebase.database();
