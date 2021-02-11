 /*var val=[1,2,3,4,5,6,7,8,9,0];
 dis(val); 
function dis(val) 
{ 
    var dis=val;
    console.log(dis);
 return dis;
} 

function solve(){
    var x = console.log(result.value);
    var y = eval(x) 
    console.log(result.value = y);
}
function clr() 
         { 
            console.log(result.value = "");
 
         } */
        function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         }
         