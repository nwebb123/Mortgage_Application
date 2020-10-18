function roundUp(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
    function calcMortgage() {

        //List of variables (Declarations)

        let amountLoaned = document.getElementById("inputAmount").value;      //for example: 250K

        let numOfMonths = document.getElementById("inputMonths").value;             //for example: 15 or 30 years

        let interestRate = document.getElementById("inputRate").value;             //percentage, for example: 5%


        let base = (1 + (interestRate / 1200));

        
        // 1) Total Monthly Payment (The payment amount)
        let totalMonthlyPayment = amountLoaned * (interestRate / 1200) / (1 - (Math.pow(base, -numOfMonths)));

        document.getElementById("dashMonthlyPayment").innerHTML = `Your monthly payment = $${Math.round(totalMonthlyPayment)}`;


        // 2) Table that lists the month (1-total number of payments)


        let previousRemainingBalance = amountLoaned;

        let arrayInterest = [];
        let arrayPrincipal = [];
        let remainingBalance = [];
        let totalInterest = 0;
        let totalPrincipal = 0;

        for (let i = 0; i < numOfMonths; i++) {
            arrayInterest.push(roundUp(previousRemainingBalance * (interestRate / 1200)));
            arrayPrincipal.push((roundUp(totalMonthlyPayment - arrayInterest[i])));
            remainingBalance.push((roundUp(previousRemainingBalance - arrayPrincipal[i])));
            previousRemainingBalance = remainingBalance[i];
            totalInterest = roundUp(totalInterest + arrayInterest[i]);
            totalPrincipal = roundUp(totalPrincipal + arrayPrincipal[i]);

            console.log("Principal =", arrayPrincipal[i], ", Interest =", arrayInterest[i], "Total Interest=", totalInterest, "Balance =", remainingBalance[i], "\n\n");


          

          
        }
        console.log("Total Principal =", roundUp(totalPrincipal));
        console.log("Total Interest =", roundUp(totalInterest));
        console.log("Total Cost =", roundUp(totalPrincipal + totalInterest));

        //Total Princial Output
        document.getElementById("dashPrincipal").innerHTML = ` $${totalPrincipal}`;

        //Total Interest Output
        document.getElementById("dashInterest").innerHTML = ` $${totalInterest}`;

        //Total Cost Output
        document.getElementById("dashCost").innerHTML = ` $${(totalPrincipal + totalInterest)}`;

        // 3) The principal paid this month
        //let principalPayment = totalMonthlyPayment - interestPayment;

        //document.getElementById("dashPrincipal").innerHTML = `The principal paid this month = $${Math.round(principalPayment)}`;

       

        // 4) The Interest paid this month
        //let interestPayment = remainingBalance * (interestRate / 1200);
        //document.getElementById("dashInterest").innerHTML = `The interest paid this month = $${Math.round(interestPayment)}`;


        // 5) The total interst paid to date
        //let interestTotal = principalPayment * interestPayment * term;
        //document.getElementById("").innerHTML = `The total interest paid to date = $${Math.round(interestTotal)}`;

        // 6) The remaining loan balance at the end of the month
        //let remainingbalanceBalance = amountLoaned;
        //document.getElementById("").innerHTML = `The remaining loan balance = $${Math.round(remainingLoanBalance)}`;


        // 7) Total Interest Paid
        //let totalInterestPaid = ;



        // 8) Total Cost
        //let totalCost = ;

};

function clearIt() {
    document.getElementById("inputAmount").value="";
    document.getElementById("inputMonths").value="";
    document.getElementById("inputRate").value="";
}



  

document.getElementById("calcBtn").addEventListener("click", calcMortgage);










    