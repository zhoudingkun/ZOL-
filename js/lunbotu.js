$(function(){
    $.ajax({
        url:"http://127.0.0.1/ZOL/js/lunbotu_api.php",
        type:"get",
        success:function(data){   
          
            var arr = JSON.parse(data);
            for(var i = 0;i<arr.length;i++){
                var obj = arr[i];
                $("<li><img src = "+obj.img+"></li>").appendTo($(".list-l"));
                $("<li></li>").appendTo($(".list2-l"));
            }
            var $olist1 = $(".list-l");
            var $ali1 = $(".list-l li");
            var $olist2 = $(".list2-l");
            var $ali2 = $(".list2-l li");

            $ali1.eq(0).show().siblings().hide();
            $ali2.eq(0).addClass("active");
            //图片数量
            var size = $ali1.length;
            // console.log(size);
            //lunbo
          
            var i = 0;
            var timer = setInterval(function(){
                i++;
                move();
            },3000)
            function move(){
                if(i==size){
                    i=0;
                }
                if(i<0){
                    i=size-1;
                }
                $ali1.eq(i).fadeIn().siblings().fadeOut();
                $ali2.eq(i).addClass("active").siblings().removeClass("active"); 
               // console.log(i);

                $ali2.click(function(){
                    var index = $(this).index();
                    i=index;
                    move();
                })
              
            }
            $("#lunbo").hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(function(){
                    i++;
                    move();
                },3000)
            })
            $("#prev").click(function(){
                i--;
                move();
            });
            $("#next").click(function(){
                i++;
                move();
            })
        },
        error:function(){
            alert("请求数据失败");
        }
        
    })
       
    
})