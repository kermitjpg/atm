let newLine = "\r\n";

let balance = 1000;

let text = "1-Balance viewing" + newLine
    + "2-Withdraw money" + newLine
    + "3-Deposit" + newLine
    + "4-Cancel" + newLine
    + "Please select action.";

alert(text);


let choice = prompt(text);
switch (choice) {
    case "1":
        alert("Balance : " + balance);
        break;


    case "2":
        let draw = Number(prompt("Enter the amont you want to withdraw"));
        if (draw < balance) {
            // success
            alert("Available balance : " + balance);
        } else {
            alert("Invalid balance" + newLine
                + "Your Balance : " + balance + " " + "Draw : " + draw);
            break;
        }

    case "3":
        let depositAmount = Number(prompt("Enter the amount to deposit"));
        balance = balance + depositAmount;
        alert("Current balance : " + balance);
        break;

    case "4":
        alert("Signed out of the system");
        break;


    default:
        alert("Please enter a number between 1 and 4");
        break;
}

