// 監聽按鈕並執行函式  
btn.onclick = function(){

    //取得文字框與預設區塊ID
    let tit = document.getElementById("tit");
    let mes = document.getElementById("mes");
    let add = document.getElementById("add");

    //用innerHTML更改預設區塊內容
    add.innerHTML = add.innerHTML + 
    `<div id = "add"> 
        <h2>${tit.value} </h2>
        <p> ${mes.value} <p>
    </div>`;

    //清除輸入文字
    tit.value = "";
    mes.value = "";
}

// add.innerText = tit.value + "\n" + mes.value;
// 以上方式無法連續發布，會覆蓋上一次的內容



// var btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     let tit = document.getElementById("tit");
//     let mes = document.getElementById("mes");
//     let add = document.getElementById("add");
//     // add.innerText = tit.value + "\n" + mes.value;
//     // 以上方式無法連續發布，會覆蓋上一次的內容
//     add.innerHTML = add.innerHTML + 
//     `<div id = "add"> 
//         <h2>${tit.value} </h2>
//         <P> ${mes.value} <p>
//      </div>`
//      tit.value = "";
//      mes.value = "";
//     })