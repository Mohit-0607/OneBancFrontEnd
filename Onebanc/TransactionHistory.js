function changestate(){
    var cancel = document.getElementById('cancel');
    alert("You want to cancel the request! ");
    cancel.innerHTML = "cancelled";
    cancel.style.background = "none";
    cancel.style.border = 0;
}

function pay(){
    var cancel = document.getElementById('payment');
    alert("Are you sure you want to pay\n Your account balance gets debited!!");
    cancel.innerHTML = "Paid<br>TransactionID<br>TI0000000";
    cancel.style.background = "none";
    cancel.style.border = 0;
    cancel.style.fontSize = "15px"
    cancel.style.margin = "20px"
    
}

function decline(){
    var cancel = document.getElementById('payment');
    alert("Are you sure you want to decline the payment !!!");
    cancel.innerHTML = "Declined";
    cancel.style.background = "none";
    cancel.style.border = 0;
    cancel.style.fontSize = "15px"
    cancel.style.margin = "20px"
}
