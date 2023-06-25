let string = "";
let buttons = document.querySelectorAll('.button');
let op=document.getElementsByClassName("operators").innerHTML;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML.includes("/0")){
            document.querySelector('input').value = "Infinity";
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})