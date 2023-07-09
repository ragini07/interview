const input = document.querySelector("#input");
const output = document.querySelector("#output");


var count = 10;
input.addEventListener('input',()=>{

    output.innerText = count - input.value.length;
    if(input.value.length>10){
        output.style.color = "red";
    }
    else
    {
        output.style.color = "black";
    }

})

