$(document).ready(() => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClLk-tb0gJPMMJ8PPvbLeOA9B3ehnv8m4",
    authDomain: "timesheet-ab559.firebaseapp.com",
    databaseURL: "https://timesheet-ab559.firebaseio.com",
    projectId: "timesheet-ab559",
    storageBucket: "timesheet-ab559.appspot.com",
    messagingSenderId: "1068905010063"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  // button on-click logic
  $("#addEmployee").on("click", function() {
    // pull the values from the input fields
    // and assign them to variables
    let name = $("#ee-name").val().trim();
    let role = $("#ee-role").val().trim();
    let startDate = moment($("#start-date").val().trim()).format("DD MM gg");
    let rate = $("#ee-rate").val().trim();

    let today = moment().format("X");
    let monthsWorked = moment().diff(moment($("#start-date").val().trim(), "DD/MM/YY"), "Months");
    let totalBilled = rate * monthsWorked;

    // console.log(name);
    // console.log(role);
    // console.log(startDate);
    // console.log(rate);
    // console.log(monthsWorked);
    // console.log(totalBilled);

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate,
      monthsWorked: monthsWorked,
      totalBilled: totalBilled
    });

  });

  database.ref().on("value", function(snapshot) {
    console.log(snapshot);
    // get data from the most recently added employee from the database
    // create html elements via jQuery and append those along with the
    // data to the table element.
  });

});