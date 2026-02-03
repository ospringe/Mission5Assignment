$("#calcBtn").click(function () {
    // Declaring variables
    let hours = 0;
    let rate = 234;
    let total = 0;

    // Retrieving input from the page
    hours = $("#hoursInput").val();
    rate = $("#rateInput").val();

    // Convert hours to a number
    hours = Number(hours);

    // Validation: must be a positive number
    if (isNaN(hours) || hours <= 0) {
        $("#hoursError").show();
        $("#totalOutput").val("");
        return;
    }

    // If valid, hide error and calculate
    $("#hoursError").hide();
    
    // Calculating total cost and outputting it to the page
    total = hours * rate;
    $("#totalOutput").val(total);
})