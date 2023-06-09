var tot = 0;
var num1 = 0;
var num2 = 0;
var plu_on = false;
var min_on = false;
var tim_on = false;
var div_on = false;



var res = document.getElementById("res")
res.value = "0"

zeo.onclick = function(){
    num1 = num1*10 + 0
    res.value = num1
}
one.onclick = function(){
    num1 = num1*10 + 1
    res.value = num1
}
two.onclick = function(){
    num1 = num1*10 + 2
    res.value = num1
}
thr.onclick = function(){
    num1 = num1*10 + 3
    res.value = num1
}
fou.onclick = function(){
    num1 = num1*10 + 4
    res.value = num1
}
fiv.onclick = function(){
    num1 = num1*10 + 5
    res.value = num1
}
six.onclick = function(){
    num1 = num1*10 + 6
    res.value = num1
}
sev.onclick = function(){
    num1 = num1*10 + 7
    res.value = num1
}
eig.onclick = function(){
    num1 = num1*10 + 8
    res.value = num1
}
nin.onclick = function(){
    num1 = num1*10 + 9
    res.value = num1
}


//加
plu.onclick = function(){
    if(num2 == 0){
        res.value="+";
        num2 = num1;
        num1 = 0;
        plu_on = true;
    }
    else{
        res.value="+";
        num1 = 0;
        plu_on = true;
    }
    min_on = false;
    tim_on = false;
    div_on = false;
}
//減
min.onclick = function(){
    if(num2 == 0){
        res.value="-";
        num2 = num1;
        num1 = 0;
        min_on = true;
    }
    else{
        res.value="-";
        num1 = 0;
        min_on = true;
    }
    plu_on = false;
    tim_on = false;
    div_on = false;
}
//乘
tim.onclick = function(){
    if(num2 == 0){
        res.value="*";
        num2 = num1;
        num1 = 0;
        tim_on = true;
    }
    else{
        res.value="*";
        num1 = 0;
        tim_on = true;
    }
    plu_on = false;
    min_on = false;
    div_on = false;
}
//除
div.onclick = function(){
    if(num2 == 0){
        res.value="/";
        num2 = num1;
        num1 = 0;
        div_on = true;
    }
    else{
        res.value="/";
        num1 = 0;
        div_on = true;
    }
    plu_on = false;
    min_on = false;
    tim_on = false;
}


equ.onclick = function(){
    if(plu_on){
        res.value = num2 + num1;
        num2 =  num2 + num1;
        num1 = 0;
        plu_on = false;
    }
    else if(min_on){
        res.value = num2 - num1;
        num2 =  num2 - num1;
        num1 = 0;
        min_on = false;
    }
    else if(tim_on){
        res.value = num2 * num1;
        num2 =  num2 * num1;
        num1 = 0;
        tim_on = false;
    }
    else if(div_on){
        res.value = num2 / num1;
        num2 =  num2 / num1;
        num1 = 0;
        div_on = false;
    }
    else{
        res.value = num1;
    }
}