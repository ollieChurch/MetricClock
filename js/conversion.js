const fromSI = "time";
const fromMetric = "number";
let conversionType;
let convertFromMetric;

let userInput;

let numberInput;
let convertedDecimal;
let convertedHour;
let convertedMinutes;

let dateString;
let d;
let conversionHours;
let conversionMinutes;
let fractionHours;
let fractionMinutes;

let convertedTime;

$("#conversionOutput").css("height", ($("#timeInput").height()));

function changeForm(conversionType) {
    $("#timeInput").attr("type", conversionType);
    $("#conversionForm").css("visibility", "visible");
    $("#conversionOutput").html("");
    $("#timeInput").css("height", ($("#conversionOutput").height()));
    
    if (conversionType == fromMetric) {
        $("#timeInput").attr("min", 0.01);
        $("#timeInput").attr("max", 10);
        $("#timeInput").attr("step", 0.01);
        convertFromMetric = true;
    } else {
        $("#timeInput").attr("step", 60);
        convertFromMetric = false;
    }
}

function resetOutput () {
    $("#conversionOutput").html("");
    $("#timeInput").val("");
}

function convertTime () {
    userInput = $("#timeInput").val();
    $("#conversionOutput").css("font-size", "50px");
    
    if (convertFromMetric === true) {
        if (userInput > 10) {
            $("#timeInput").val(10);
        } else if (userInput.length >= 4 && userInput < 0.01) {
            $("#timeInput").val(0.01);
        } else if (userInput !== "") {
            numberInput = parseFloat(userInput);

            convertedDecimal = (numberInput/10)*24;
            convertedHour = parseInt(convertedDecimal);
            
            if (convertedHour > 0) {
                convertedMinutes =((convertedDecimal%convertedHour)*60).toFixed(0);
            } else {
                convertedMinutes = parseInt(convertedDecimal*60);
            }
            
            convertedHour = (convertedHour === 24 ? 0 : convertedHour);
            
            convertedHour = ( convertedHour < 10 ? "0" : "" ) + convertedHour;
            convertedMinutes = ( convertedMinutes < 10 ? "0" : "" ) + convertedMinutes;
            
            convertedTime = convertedHour + ":" + convertedMinutes;
        }
    } else {
        dateString = "November 23, 1992 " + userInput;
        d = new Date(dateString);
        conversionHours = d.getHours();
        conversionMinutes = d.getMinutes();
        
        fractionHours = ((10 / 24)*conversionHours);
        fractionMinutes = ((10 / 24)*(conversionMinutes / 60));
        
        convertedTime = (fractionHours + fractionMinutes).toFixed(2);
        convertedTime = (convertedTime < 0.01 ? 10.00 : convertedTime);
    }

    $("#conversionOutput").html(convertedTime);
}