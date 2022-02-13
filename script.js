window.onload = (event) =>{
    //Set the rate label to correct value.
    on_rate_range_changed();
}

function compute(){
    //Validate the amount text field.
    let principal_textfield = document.getElementById("principal");
    if(principal_textfield.value == ""){
        alert("Amount must be a valid number.");
        principal_textfield.focus();
        return;
    }

    if(principal_textfield.value <= 0){
        alert("Amount must be a positive number.");
        principal_textfield.focus();
        return;
    }

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value / 2;
    let years = document.getElementById("years").value;

    let simple_interest = principal * (rate / 100) * years;

    let year = new Date().getFullYear() + parseInt(years);

    let results_p = document.getElementById("results_p");

    results_p.innerHTML =
        "If you deposit <mark>" + principal + "</mark>,<br>"
    + "at an interest rate of <mark>" + rate.toFixed(2) + "%</mark>,<br>"
    + "you will receive an amount of <mark>" + simple_interest.toFixed(2) + "</mark><br>"
    + "in the year <mark>" + year + "</mark>";

}

function on_principal_value_changed(e){
    if (e.shiftKey === true ) {
        if (e.which == 9) {
            return true;
        }
        return false;
    }
    if (e.which > 57) {
        return false;
    }
    if (e.which==32) {
        return false;
    }
    return true;
}


function on_rate_range_changed(){
    let rate = document.getElementById("rate").value;
    let rate_string = (rate / 2).toFixed(2) + "%"
    document.getElementById("rate_label").innerHTML = rate_string;
}
