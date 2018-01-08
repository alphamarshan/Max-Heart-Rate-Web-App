let yearsArray = [];
let d = new Date();
let year = d.getFullYear();

for (i = (year - 70); i <= (year - 20); i++) {
    yearsArray.push("" + i + "");
}
// Loops through birth dates from 70 years from this year to 20 years from this year, then pushes the numbers into the yearsArray array.

$('#selectYear').empty();
$.each(yearsArray, function (i, p) {
    $('#selectYear').append($('<option></option>').val(p).html(p));
});
// Empties the #selectYear dropdown menu then pushes the values of the array into the dropdown menu as selectable values

$(document).ready(function () {
    $("#buttonGet").click(function () {
        let selectedValue = $("#selectYear").val();
        // This will retrieve the user's selection as an integer and save it as the "selectedValue" variable

        let userAge = 2018 - selectedValue;
        // Calculates the user's age based on the current year

        function maxHeartRate() {
                let mhr = (Math.round(205.8 - (0.685 * userAge)));
                $("#divResult").empty();
                $("#divResult").append("<strong>" + mhr + "</strong>" + ", but potentially as low as " + (mhr - 6) + " and as high as " + (mhr + 6) + ".");
        }
        // Calculates the user's max heart rate, then uses jQuery to append the "divResult" div with the value returned

        maxHeartRate();
        // Runs the function
    });
});