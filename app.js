/*  step 1 */
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '' ;
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
/*  step 2  */
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}
/* step 3 */
document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        // console.log(number);
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
});



/* verify pin  step 5 */
function verifyPin(){
    // console.log('verify pin');
    const pin = document.getElementById('display-pin').value;
    const typedNumber =document.getElementById('typed-numbers').value;


    const sucessMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typedNumber){
        // console.log('matched');
        // const sucessMessage = document.getElementById('notify-success');
        sucessMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        // console.log('opps!!');
        // const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        sucessMessage.style.display = 'none';
    }
}
// const alue= Math.floor(Math.random()*90000) + 10000; 
// console.log(alue);

// const str= 'I love coding more than eating.';
// console.log(str.slice(2,6));
// const names =["rafiq", "jabbar","bakkar", "habib", "dalim"];
// console.log(names.reverse());
