// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVtUhr5jIsHaHhVj7IHhStumdZuCTcOZk",
  authDomain: "train-scheduler-a4e6f.firebaseapp.com",
  databaseURL: "https://train-scheduler-a4e6f.firebaseio.com",
  projectId: "train-scheduler-a4e6f",
  storageBucket: "train-scheduler-a4e6f.appspot.com",
  messagingSenderId: "934013468820"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Create an on click function that adds trains to the top table
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // create variables with the user input from form
  var trnName = $("#train-name-input").val().trim();
  var trnDest = $("#destination-input").val().trim();
  // var firstTrnTime = $("#first-train-input").val().trim();
  var trnFreq = $("#frequency-input").val().trim();

  // create a temporary object for holding the new train data
  var newTrn = {
    name: trnName,
    destination: trnDest,
    // firstTime: firstTrnTime,
    frequency: trnFreq
  };

  // upload the new train data to the database
  database.ref().push(newTrn);

  // console log the values that were just pushed to the database
  console.log(newTrn.name);
  console.log(newTrn.destination);
  // console.log(newTrn.firstTime);
  console.log(newTrn.frequency);

  // clear the form values after values have been stored
  $("#train-name-input").val("");
  $("#destination-input").val("");
  // $("#first-train-input").val("");
  $("#frequency-input").val("");
});
