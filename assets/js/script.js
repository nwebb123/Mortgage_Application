function roundUp(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
function calcMortgage() {
    //this variable is linking our table function to our index.html table
    let tableOutput = document.getElementById("tableBody");

    let amountLoaned = document.getElementById("inputAmount").value;      

    let numOfMonths = document.getElementById("inputMonths").value;            

    let interestRate = document.getElementById("inputRate").value;             

    let base = (1 + (interestRate / 1200));

    // 1) Total Monthly Payment (The payment amount)
    let totalMonthlyPayment = amountLoaned * (interestRate / 1200) / (1 - (Math.pow(base, -numOfMonths)));
    totalMonthlyPayment = totalMonthlyPayment.toFixed(2);
    document.getElementById("dashMonthlyPayment").innerHTML = `Your monthly payment = $${totalMonthlyPayment}`;


    // 2) Table that lists the month (1-total number of payments)


    let previousRemainingBalance = amountLoaned;

    let arrayInterest = [];
    let arrayPrincipal = [];
    let remainingBalance = [];
    let arrayTotalInterest = [];
    let totalInterest = 0;
    let totalPrincipal = 0;

    for (let i = 0; i < numOfMonths; i++) {
        arrayInterest.push(roundUp(previousRemainingBalance * (interestRate / 1200)));
        arrayPrincipal.push((roundUp(totalMonthlyPayment - arrayInterest[i])));
        remainingBalance.push((roundUp(previousRemainingBalance - arrayPrincipal[i])));
        previousRemainingBalance = remainingBalance[i];
        totalInterest = roundUp(totalInterest + arrayInterest[i]);
        arrayTotalInterest.push(totalInterest);
        totalPrincipal = Math.round(totalPrincipal + arrayPrincipal[i]);

        console.log(
            "Principal =", arrayPrincipal[i],
            ", Interest =", arrayInterest[i],
            "Total Interest=", totalInterest,
            "Balance =", remainingBalance[i],
            "\n\n"
        );
    }
    console.log("Total Principal =", totalPrincipal);
    console.log("Total Interest =", roundUp(totalInterest));
    console.log("Total Cost =", roundUp(totalPrincipal + totalInterest));

    //Total Princial Output
    document.getElementById("dashPrincipal").innerHTML = ` $${totalPrincipal}`;

    //Total Interest Output
    document.getElementById("dashInterest").innerHTML = ` $${totalInterest}`;

    //Total Cost Output
    document.getElementById("dashCost").innerHTML = ` $${(totalPrincipal + totalInterest)}`;


    //populating our table with the data
    populateTable(numOfMonths, totalMonthlyPayment, arrayPrincipal, arrayInterest, arrayTotalInterest, remainingBalance, tableOutput);


};

function populateTable(months, monthlyPayment, principals, interests, totalInterests, balances, table) {           //representing arrays;
    for (let i = 0; i < months; i++) {
        let row = table.insertRow(i);           //Insert the row into the table

        let month = row.insertCell(0);          //Here is how the table will be populated
        let payment = row.insertCell(1);
        let principal = row.insertCell(2);
        let interest = row.insertCell(3);
        let totalInterest = row.insertCell(4);
        let balance = row.insertCell(5);

        month.innerHTML = i + 1;
        payment.innerHTML = monthlyPayment;
        principal.innerHTML = principals[i];
        interest.innerHTML = interests[i];
        totalInterest.innerHTML = totalInterests[i];
        balance.innerHTML = balances[i];

    }
}

function clearIt() {
    document.getElementById("inputAmount").value = "";
    document.getElementById("inputMonths").value = "";
    document.getElementById("inputRate").value = "";
}





document.getElementById("calcBtn").addEventListener("click", calcMortgage);










