// get the withdraw button adding add event listener
document.getElementById("withdraw-button").addEventListener("click", function(){
    // get the input value 
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawInputValue  = withdrawInput.value;
    let convert = parseFloat(withdrawInputValue);
    withdrawInput.value = "";

  
    // calculate withdraw money and add withdraw card
    
    // get balance money 
    let balance = document.getElementById("balance");
    let balanceValue = balance.innerText;
    let convertBalance = parseFloat(balanceValue);
    
    if(convert > convertBalance) {
        return alert("Your balance is not available");
    }
      // get the withdraw money card 
      let withdrawMoney = document.getElementById("withdraw-money");
      let withdrawMoneyValue = withdrawMoney.innerText;
      let convertNumber = parseFloat(withdrawMoneyValue);
      let sum = convert + convertNumber;
      let adding = withdrawMoney.innerText = sum;
      
    // calculate withdraw money input and balance money 
    let calculate = convertBalance - convert;
    balance.innerText = calculate;
    
    
    
})