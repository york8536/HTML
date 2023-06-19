var test = $('#list');
console.log("1");

//回首頁
$(function bth_onclick(){
    $("#BackToHome").click(function() {
      $("#main").html("首頁<br>首頁<br>首頁<br>首頁");
    });
});
    


//列表區塊 展示與隱藏
$(function(){
    var sidebar_on = true;
    $("#sidebar_toggle").click(function(){
            if(sidebar_on == true){
                $(".sidebar").hide();
                sidebar_on = false;
                $("#sidebar_toggle").text("展開");

            }
            else{
                $(".sidebar").show();
                sidebar_on = true;
                $("#sidebar_toggle").text("收起");
            }
    })

});

//列表 展示與隱藏
$(function(){
    $("#list > ul > li").click(function(){
            $(this).children("ul").toggle();
    })

});

//在main中開啟計算機 
$(function cpt_onclick(){
    $("#cpt").click(function(){
            $(".main").load("../計算機.html");
        })
 });

//在main中開啟部落格
 $(function blg_onclick(){
    $("#blg").click(function(){
            $(".main").load("../部落格.html");
        })
 });

//在main中開啟外部網頁
 $(document).ready(function() {
    $("#game").click(function() {
        // 在 main 的 div 區塊中再插入以下內容
        $("#main").html('<iframe width="100%" height="100%" src="https://s3.us-west-2.amazonaws.com/qat-eagle.089453.fun/HolyCash-ph/WebDemo/index.html" </iframe>');
    });
});

//日期時間
function updateDateTime() {
    var datetimeElement = $(".datetime");
    var currentDateTime = new Date();
    datetimeElement.text(currentDateTime.toLocaleString());
  }
  
  setInterval(updateDateTime, 1000);




//  https://ithelp.ithome.com.tw/articles/10186895
//  https://blog.csdn.net/weixin_43230812/article/details/123371827
//  https://www.udemy.com/course/react-redux/

