// This function myFunction execute when press button
function myFunction() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    document.getElementById("demo").innerHTML = 'My name is'+' ' + x +' '+y;
  }