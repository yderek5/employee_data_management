// Initialize Firebase

  var config = {
    apiKey: "AIzaSyAZqQkMxlQWIktbgz7ocCaa7j7arwy31Lc",
    authDomain: "emplo-90681.firebaseapp.com",
    databaseURL: "https://emplo-90681.firebaseio.com",
    projectId: "emplo-90681",
    storageBucket: "emplo-90681.appspot.com",
    messagingSenderId: "674071590354"
  };

    firebase.initializeApp(config);

var database = firebase.database();
var employeeTestName;
var employeeCount = 0;

database.ref('users/').on("value", function(snapshot) {
	allEmployees = snapshot.val();
  employeeCount = allEmployees.length;

  showEmployees(allEmployees);
  console.log(employeeCount);
},function(e){
	console.log(e);
});


$(document).ready(function(){
    $("#enterBtn").on("click", function(event)
    {
      event.preventDefault();

      var name = $("#name").val().trim();
      var role = $("#role").val().trim();
      var startDate = $("#startDate").val().trim();
      var monthlyRate = $("#monthlyRate").val().trim();

      console.log(name, role, startDate, monthlyRate);


      addEmployee(name,role,startDate,monthlyRate);


    });

 });


var addEmployee = function(name,role,startDate,monthlyRate){
  database.ref('users/' + employeeCount).set({
      name: name,
      role: role,
      startDate: startDate,
      rate: monthlyRate
  });
};
var showEmployees = function(employees){
  $("tbody").empty();
  for(i=0;i<employees.length;i++){
    var name = employees[i].name;
    var rate = employees[i].rate;
    var role = employees[i].role;
    var startDate = employees[i].startDate;



      var newRow = $("<tr>");

      var newName = $("<td>").text(name);
      var newRole = $("<td>").text(role);
      var newStartDate = $("<td>").text(startDate);
      var newMonthsWorked = $("<td>").text("");
      var newMonthlyRate = $("<td>").text(rate);
      var newTotalBilled = $("<td>").text("");

      newRow.append(newName);
      newRow.append(newRole);
      newRow.append(newStartDate);
      newRow.append(newMonthsWorked);
      newRow.append(newMonthlyRate);
      newRow.append(newTotalBilled);

      $("tbody").append(newRow);



  }


};


// database.ref('users/' + employeeCount).set({
// 	name: "Leo",
// 	role: "Student",
// 	startDate: "01/01/2000",
// 	rate: "$10"
// })
