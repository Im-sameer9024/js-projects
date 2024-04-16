let result = document.querySelector('#result')

function Inc(){
    let value = parseInt(result.innerHTML);
     value += 1;
     result.innerHTML = value;
}

function Dec(){
    let value = parseInt(result.innerHTML);
    value-=1;
    result.innerHTML = value;

}

function reset(){
    let value = parseInt(result.innerHTML);
    value = 0;
    result.innerHTML = value;
}