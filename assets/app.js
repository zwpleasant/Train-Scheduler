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

// Create a firebase event for adding the data from the new trains and then populating them in the DOM.
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  // Store snapshot changes in variables
  var trnName = childSnapshot.val().name;
  var trnDest = childSnapshot.val().destination;
  // var firstTrnTime = childSnapshot.val().firstTime;
  var trnFreq = childSnapshot.val().frequency;

  // Log the values
  console.log(trnName);
  console.log(trnDest);
  // console.log(firstTrnTime);
  console.log(trnFreq);

  // Need to add in steps that will calculate the date/time fields!

  // Add the data into the DOM/html
  $("#train-table > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDest + "</td><td>" + trnFreq + "</td></tr>");
});
