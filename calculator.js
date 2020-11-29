let inputString = '';

function removeError(){
    if (inputString === 'ERROR') inputString = '';
}

function updateTextInput(){
    document.querySelector('.inputString').value=(inputString==='') ? '0' : inputString;
}

const deleteString = document.querySelector('.delete');
deleteString.addEventListener("click",function(){inputString='';updateTextInput()});

const numbers = document.querySelectorAll('.numbers');
//console.log(numbers);
for (let i=0; i< numbers.length; i += 1){
    numbers[i].addEventListener('click', (event) => {
        //inputString += event.target.id;
        if(inputString === 'ERROR') inputString = 'ERROR';
        else inputString += event.target.textContent;
        updateTextInput();
        //console.log('Clicked', i);
    })
}

const dot = document.querySelectorAll('.dot');
for (let i=0; i< dot.length; i += 1){
    dot[i].addEventListener('click', (event) => {
        //inputString += event.target.id;
        if(inputString === 'ERROR' || inputString.search(/\.[0-9]*$/)>=0) inputString = 'ERROR';
        else inputString += event.target.textContent;
        updateTextInput();
        //console.log('Clicked', i);
    })
}

function calculate(str){
    if (str==='') return '';
    if (str.startsWith('ERROR')) return '';
    console.log(str);
    if (parseFloat(str)===NaN) {str = 'ERROR'; return str};
    let num1 = parseFloat(str);
    if(str.charAt(0)==='.'){
        str = str.replace(String(num1).substring(1),"");
    }
    else {
        str = str.replace(String(num1),"");
    }
    while (str.charAt(0)==='0') str=str.substring(1);
    if (str==='') return String(num1); 
    let operation = str.charAt(0);
    str = str.substring(1);
    let num2 = parseFloat(str);
    if(str.charAt(0)==='.'){
        str = str.replace(String(num2).substring(1),"");
    }
    else {
        str = str.replace(String(num2),"");
    }
    while (str.charAt(0)==='0') str=str.substring(1);
//    console.log(num1);
//    console.log(operation);
//    console.log(num2);
    let result = 'ERROR'; 
    if (operation === '+') {result = String(parseFloat(num1) + parseFloat(num2))};
    if (operation === '-') {result = String(parseFloat(num1) - parseFloat(num2))};
    if (operation === '*') {result = String(parseFloat(num1) * parseFloat(num2))};
    if (operation === '/') {result = String(parseFloat(num1) / parseFloat(num2))};
    console.log(result);
    if (str==='') return result;
    return calculate(result + str);
}

const sum = document.querySelector('.sum');
sum.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const sub = document.querySelector('.sub');
sub.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const mult = document.querySelector('.mult');
mult.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += '*';
            updateTextInput()});

const mod = document.querySelector('.mod');
mod.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString += event.target.textContent;
            updateTextInput()});

const equal = document.querySelector('.equal');
equal.addEventListener("click",
    (event)=>{
        if(inputString.endsWith('+') || inputString.endsWith('-') || inputString.endsWith('*') || inputString.endsWith('/'))
            inputString='ERROR';
        else inputString = calculate(inputString);
            updateTextInput()});