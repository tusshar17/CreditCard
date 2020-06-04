
function load(){
    document.getElementById('month-valid').focus();
}

function nxt(a,b){
    const a_element = document.getElementById(a);
    const b_element = document.getElementById(b);
    const a_val = a_element.value;
    if(a_val.length==4){
        a_element.style.border = "0";
        b_element.focus();
    }
}

function nxtS(a,b){
    const a_element = document.getElementById(a);
    const b_element = document.getElementById(b);
    const a_val = a_element.value;
    if(a_val.length==2){
        a_element.style.border = "0";
        b_element.focus();
    }
}


function final(){
    const a_element = document.getElementById("account-name");
    const a_val = a_element.value;
    if(a_val.length>=4){
        a_element.style.border = "0";
    }
}

