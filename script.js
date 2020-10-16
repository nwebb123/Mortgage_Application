
function calcMortgage() {
    let amountBorrowed = document.getElementById("inpLoan").value;         //for example: 250K
    let downPayment = document.getElementById("inpDown").value;            //for example, 20%
    let APR = document.getElementById("inpAPR").value;                    //percentage, for example: 5%
    let term = document.getElementById("inpTerm").value;                   //for example: 15 or 30 years



    let principal = amountBorrowed - ((downPayment * .01) * amountBorrowed);    //Amount borrowed - down payment made

    let MIR = (APR * .01) / 12;         //Monthly Interest Rate

    let NMP = term * 12;                //Number of Monthly Payments

    let Mortgage = principal * (MIR * (1 + MIR) ** NMP) / ((1 + MIR) ** (NMP - 1));

};

   document.getElementById(output).innerHTML = Mortgage;













    