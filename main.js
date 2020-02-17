

function hello(){
   var total = document.getElementById("total").value;
   var tipRate = document.getElementById("rate").value;

   if(total && tipRate != 0){
       tip = total * tipRate/100
       totalAndTax =  parseInt(total) + parseInt(tip)
       tax =  total * 5.5/100
       grandTotal = parseInt(total) + parseInt(tip) + parseFloat(tax)
       document.getElementById('tip').innerHTML = "$" + tip;
        document.getElementById('tax').innerHTML = "$" + tax;
        document.getElementById('grandTotal').innerHTML = "$" + grandTotal;
   }else{
       alert("Please enter the correct inputs")
   }

}
