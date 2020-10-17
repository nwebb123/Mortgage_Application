
    function calcMortgage() {

        //List of variables (Declarations)

        let amountLoaned = document.getElementById("inpLoan").value;      //for example: 250K

        let term = document.getElementById("inpTerm").value;             //for example: 15 or 30 years

        let APR = document.getElementById("inpAPR").value;             //percentage, for example: 5%

        let numOfMonths = term * 12;                                    //Number of Monthly Payments

        let base = (1 + (APR / 1200))

        


        // 1) Table that lists the month (1-total number of payments)
            //for (i = 0; i <= 12; i++)
            let paymentArray


        // 2) Total Monthly Payment (The payment amount)
        let totalMonthlyPayment = amountLoaned * (APR / 1200) / (1 - (Math.pow(base, -numOfMonths)));

        document.getElementById("output2").innerHTML = `Your monthly payment = $${Math.round(totalMonthlyPayment)}`;

        // 3) The principal paid this month
        let principalPayment = totalMonthlyPayment - interestPayment;

        document.getElementById("output3").innerHTML = `The principal paid this month = $${Math.round(principalPayment)}`;


        // 4) The Interest paid this month
        let interestPayment = remainingBalance * (APR / 1200);
        document.getElementById("output4").innerHTML = `The interest paid this month = $${Math.round(interestPayment)}`;

        // 5) The total interst paid to date
        let interestTotal = principalPayment * interestPayment * term;
        document.getElementById("output5").innerHTML = `The total interest paid to date = $${Math.round(interestTotal)}`;

        // 6) The remaining loan balance at the end of the month
        let remainingbalanceBalance = amountLoaned;
        document.getElementById("output6").innerHTML = `The remaining loan balance = $${Math.round(remainingLoanBalance)}`;

        

        

    };

  












    