
    // function convert() execute when we press button and show grade based on marks
      function convert() {
        var numeric = parseInt(numericGrade.value);
        let grade;
        if (numeric >90) {
          grade = "A";
        } else if (numeric >80) {
          grade = "B";
        } else if (numeric >70) {
          grade = "C";
        } else if (numeric >60) {
          grade = "D";
        } else {
          grade = "E";
        }
        console.log(grade);
        display.innerText = "YOUR GRADE IS" + "  " + grade;
        }
      
