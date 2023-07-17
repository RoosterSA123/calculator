function calculateResult() {
    // Get the selected option values
    var option0 = document.getElementById('option0').value;
    var option1 = document.getElementById('option1').value;
    var option2 = document.getElementById('option2').value;
    var option3 = document.getElementById('option3').value;
    var option4 = document.getElementById('option4').value;
    var option5 = document.getElementById('option5').value;
    var option6 = document.getElementById('option6').value;
    var option7 = document.getElementById('option7').value;
    var option8 = document.getElementById('option8').value;
    var option9 = document.getElementById('option9').value;
    var option10 = document.getElementById('option10').value;
    var option11 = document.getElementById('option11').value;
    var option12 = document.getElementById('option12').value;
    var option13 = document.getElementById('option13').value;
    var option14 = document.getElementById('option14').value;
    var option15 = document.getElementById('option15').value;
    var option16 = document.getElementById('option16').value;
    var option17 = document.getElementById('option17').value;
    var option18 = document.getElementById('option18').value;
    var option19 = document.getElementById('option19').value;
    var option20 = document.getElementById('option20').value;

    // Perform the calculation based on the selected options
    var result = (+option1 + +option2 + +option3 + +option4 + +option5 + +option6 + +option7 + +option8 + +option9 + +option10 + +option11 + +option12 + +option13 + +option14 + +option15  + +option16  + +option17  + +option18  + +option19  + +option20) * +option0;

    // Display the result
    document.getElementById('result').innerHTML = "Complexity Score: " + result;
 
    // Calculate the cost based on the result score
    var cost;

    if (result < 50) {
        cost = 10000; projecttimeline = "4 Weeks"; assessment = "2 Weeks"; deployment = "2 Weeks"; migration = "Self Migration"; basecost = 600;
    } else if (result < 100) {
        cost = 12500; projecttimeline = "6 Weeks"; assessment = "2 Weeks"; deployment = "2 Weeks"; migration = "2 Weeks"; basecost = 1200;
    } else if (result < 150) {
        cost = 15000; projecttimeline = "8 Weeks"; assessment = "2 Weeks"; deployment = "2 Weeks"; migration = "4 Weeks"; basecost = 2000;
    } else if (result < 200) {
        cost = 17500; projecttimeline = "10 Weeks"; assessment = "2 Weeks"; deployment = "3 Weeks"; migration = "5 Weeks"; basecost = 2600;
    } else if (result < 250) {
        cost = 20000; projecttimeline = "12 Weeks"; assessment = "3 Weeks"; deployment = "4 Weeks"; migration = "5 Weeks"; basecost = 3200;
    } else if (result < 300) {
        cost = 22500; projecttimeline = "14 Weeks"; assessment = "4 Weeks"; deployment = "5 Weeks"; migration = "5 Weeks"; basecost = 5000;
    } else {
        cost = 25000; projecttimeline = "16 Weeks"; assessment = "4 Weeks"; deployment = "6 Weeks"; migration = "6 Weeks"; basecost = "Contact Us";
    }
    
// Display the costs
    //document.getElementById('basecost').innerHTML = "Cloud Cost: $" + basecost;
    document.getElementById('basecost').innerHTML = "Cloud Costs: $" + basecost;
    document.getElementById('cost').innerHTML = "Managed Infr Costs: $" + cost;
    document.getElementById('totalcost').innerHTML = "Monthly Costs: $" + (cost + +basecost);

// Display the ProjectTimeline details

    document.getElementById('projecttimeline').innerHTML = projecttimeline;
    document.getElementById('assessment').innerHTML = assessment;
    document.getElementById('deployment').innerHTML = deployment;
    document.getElementById('migration').innerHTML = migration;

}
function updateSliderValue() {
    var sliderValue = document.getElementById('option0').value;
    document.getElementById('sliderValue').innerHTML = sliderValue;
}

// Tabs
        // Function to open a specific tab
        function openTab(event, tabName) {
            // Hide all tab content
            var tabcontent = document.getElementsByClassName("tabcontent");
            for (var i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Remove the "active" class from all tab links
            var tablinks = document.getElementsByClassName("tablinks");
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the selected tab content and mark the button as active
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.className += " active";
        }

