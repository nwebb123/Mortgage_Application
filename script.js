
    function calcMortgage() {

        //List of variables (Declarations)

        let amountLoaned = document.getElementById("inpLoan").value;      //for example: 250K

        let term = document.getElementById("inpTerm").value;             //for example: 15 or 30 years

        let APR = document.getElementById("inpAPR").value;             //percentage, for example: 5%

        let numOfMonths = term * 12;                                    //Number of Monthly Payments

        let base = (1 + (APR / 1200))

        




        //Total Monthly Payment
        let totalMonthlyPayment = amountLoaned * (APR / 1200) / (1 - (Math.pow(base, -numOfMonths)));

        document.getElementById("output1").innerHTML = `Your Monthly Payment = $${Math.round(totalMonthlyPayment)}`;

        //Remaining Balance
        let remainingBalance = amountLoaned[i];


        //Principal Payment
        let principalPayment = totalMonthlyPayment - interestPayment;

        document.getElementById("output2").innerHTML = `Principal Payment = $${(totalPrincipal)}`;


        //Total principal
        let totalInterest = amountLoaned ;

        document.getElementById("output3").innerHTML = `Total Monthly Payment = $${(totalInterest)}`;


        //Total Cost
        let principalPayment = "";

        document.getElementById("output4").innerHTML = `Total Cost of Loan = $${(principalPayment)}`;

        

        //Table that Indicates the Months, payments, principals, interest, total interest to date, and remaining balance
        for (i = 0; i <= 12; i++)
            //need to print out 


        /*let remainingBalance = amountLoaned;

        let interestPayment = remainingBalance * (APR / 1200);

        let principalPayment = totalMonthlyPayment - interestPayment;
        
        let remainingBalance = remainingBalance - principalPayment; */

    };

  












    