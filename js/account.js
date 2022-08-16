// get depositbutton 
document.getElementById("deposit-button").addEventListener("click", function(){
    // get deposit input
    let depositInput = document.getElementById("deposit-input");
    let depositInputValue = depositInput.value;
    let convertinput = parseFloat(depositInputValue)
    console.log(depositInputValue);
    depositInput.value = "";

    // get depositMoney card 
    let depositMoney = document.getElementById("deposit-money")
    let depositeMoneyValue = depositMoney.innerText;
    let convertNumber = parseFloat(depositeMoneyValue);
    let calculate = convertNumber+convertinput;
    let add = depositMoney.innerText = calculate;

    // calculate deposite money and balance money and also add in balance money
    let balance = document.getElementById("balance");
    let balanceValue = balance.innerText;
    let convert = parseFloat(balanceValue);
    balance.innerText = add + convert;

});