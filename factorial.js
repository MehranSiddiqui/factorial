let check= document.querySelector('#num');
let fact = document.querySelector('#fact');
let calc=document.querySelector('#calc');
let factBase=1;
fact.addEventListener("click",()=>{
   calcFact();
})

document.addEventListener("keydown",(event)=>{
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }else if(event.key==="Enter"){
        calcFact();
      }
      
});

function calcFact(){
    let num =check.value;
    for(let i=1;i<=num;i++){
        factBase=factBase*i;
    }
    calc.innerHTML=` <span>The factorial of given Number is:<br>${factBase}</span>`;
    if(factBase!=1){
        factBase=1;
    }
}