let chart;
function f(x){return "₹"+Math.round(x).toLocaleString("en-IN")}
function calculate(){
let P=+sip.value,r=+rate.value/1200,n=+years.value*12;
let FV=P*(((1+r)**n-1)/r)*(1+r);
let inv=P*n,ret=FV-inv;
invEl=document.getElementById("inv");retEl=document.getElementById("ret");tot=document.getElementById("tot");
invEl.textContent=f(inv);retEl.textContent=f(ret);tot.textContent=f(FV);
const ctx=document.getElementById("c");
if(chart)chart.destroy();
chart=new Chart(ctx,{type:"doughnut",data:{labels:["Investment","Returns"],datasets:[{data:[inv,ret]}]}});
}
calculate();