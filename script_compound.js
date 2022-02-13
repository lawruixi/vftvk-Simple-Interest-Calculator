window.onload = (event) =>{
    //Set the rate label to correct value.
    on_rate_range_changed();
}

function compute(){
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value / 2;
    let years = document.getElementById("years").value;

    let final_principal = principal;

    for(let i = 0; i < years; i++){
        final_principal *= (1 + (rate / 100));
    }

    let year = new Date().getFullYear() + parseInt(years);

    let results_p = document.getElementById("results_p");
    results_p.innerHTML =
        "If you deposit <mark>" + principal + "</mark>,<br>"
    + "at an interest rate of <mark>" + rate.toFixed(2) + "%</mark>,<br>"
    + "you will receive an amount of <mark>" + final_principal.toFixed(2) + "</mark><br>"
    + "in the year <mark>" + year + "</mark>";

    results_p.innerHTML =
        "If you deposit <mark>" + principal + "</mark>,<br>"
    + "at an interest rate of <mark>" + rate.toFixed(2) + "%</mark>,<br>"
    + "you will receive an amount of <mark>" + final_principal.toFixed(2) + "</mark><br>"
    + "in the year <mark>" + year + "</mark>";

}


function on_rate_range_changed(){
    let rate = document.getElementById("rate").value;
    let rate_string = (rate / 2).toFixed(2) + "%"
    document.getElementById("rate_label").innerHTML = rate_string;
}
