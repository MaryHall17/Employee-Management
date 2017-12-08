
  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBvR72yR3YHOJ2eZySRtEhuV70rrpzm4TU",
  //   authDomain: "employeedatamanagement-f4a39.firebaseapp.com",
  //   databaseURL: "https://employeedatamanagement-f4a39.firebaseio.com",
  //   projectId: "employeedatamanagement-f4a39",
  //   storageBucket: "employeedatamanagement-f4a39.appspot.com",
  //   messagingSenderId: "1035319251259"
  // };
  // firebase.initializeApp(config);

  // //reference to database
  // var database = firebase.database();

  // //Initial variables

  // var currentEmployees
$(document).ready(function() {
   $("#awesomeButton").on('click', function(event){
    event.preventDefault();

    alert("Button got pushed!");

    var employeeName = $("#empName").val().trim();
    var role = $("#role").val().trim();

    console.log(employeeName);
    console.log(role);
  }); 
 });

