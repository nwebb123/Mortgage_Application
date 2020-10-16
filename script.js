
    function calcMortgage() {



        let amountLoaned = document.getElementById("inpLoan").value;      //for example: 250K

        let term = document.getElementById("inpTerm").value;             //for example: 15 or 30 years

        let APR = document.getElementById("inpAPR").value;             //percentage, for example: 5%

        let numOfMonths = term * 12;                                    //Number of Monthly Payments

       




        let totalMonthlyPayment = (amountLoaned * (APR / 1200)) / (1 - (1 + (APR / 1200) ** numOfMonths));

        let remainingBalance = amountLoaned;

        let interestPayment = remainingBalance * (APR / 1200);

        let principalPayment = totalMonthlyPayment - interestPayment;

        /*At the end of each month*/ let remainingBalance = remainingBalance - principalPayment;




        






    };

  












    