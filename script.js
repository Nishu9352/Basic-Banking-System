let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
    var enterName = document.getElementById("enterName").Value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if(enterAmount > 20000){
        alert("Insufficient Balance.")

    }else{
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
        document.getElementById("myaccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        

            var createTag = document.createElement("li");
            var textNode = document.createTextNode('$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.');
            createPTag.appendChild(textNode);
            var element = document.getElementById("transaction-history-body");
            element.insertBefore(createPTag, element.firstChild );
    }
}