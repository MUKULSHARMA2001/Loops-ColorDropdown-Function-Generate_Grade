// This function showData() execute when press button
    function showData() {
        var theSelect = ddlForm.ddlSelect;
        
        var display = document.getElementById('display');
        display.innerHTML = ('This is ' + theSelect[theSelect.selectedIndex].text+' '+'color');
    }
 