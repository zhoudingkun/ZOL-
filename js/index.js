$(function(){
    //首页图片懒加载
    $('img').addClass('lazy');
   

    //轮播图上定的导航条hover效果
    $("#Allitem>ul>li:not(:first)").hover(function(){
        $(this).find("div").addClass("Aitem-active").siblings().show();
    },function(){
        $(this).find("div").removeClass("Aitem-active").siblings().hide();
        
    })

// <!-- 网页左侧导航条 -->
        // 1,点击左侧实现右侧滚动
var $wli1=$(".web-list li");   
    $wli1.click(function(){
        var index = $(this).index();
      if(index==$wli1.length-1){
          $(document).scrollTop(0);
      }
      else{
          var scrollTop = $(".louti").eq(index).offset().top;
          $('html,body').animate({
              'scrollTop':scrollTop
          })
          $(this).addClass("web-list-active").siblings().removeClass('web-list-active');
      }
    })
    // 右侧滚动，左侧选中
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>600){
           $('#zol-top2').fadeIn();
           $("#WebLeftnav").fadeIn();
        }else{
            $("#zol-top2").fadeOut();
           $("#WebLeftnav").fadeOut();
        }
        //遍历每个楼梯
        $('.louti').each(function(){
            var index = $(this).index();
            var minHeight = $(this).offset().top-$(this).height()/2-$('#zol-top2').height();
            var maxHeight = $(this).offset().top+$(this).height()/2+$('#zol-top2').height();
            
            if(scrollTop>minHeight && scrollTop<maxHeight){

                $wli1.eq(index).addClass("web-list-active").siblings().removeClass('web-list-active');
            }
        })

    })
    // 团购模块中的轮播图

    $('.Groupon-slide>.list1>li').eq(0).clone(true).appendTo($('.Groupon-slide>.list1'));
    var $slist1 = $('.Groupon-slide>.list1');
    var $sli1=$('.Groupon-slide>.list1>li');

    var $slist2 = $('.Groupon-slide>.list2');
    var $sli2=$('.Groupon-slide>.list2>li');
    console.log($sli2.length);

    $slist1.css({
        'width':$sli1.width()*$sli1.length
    })
    console.log($sli1.width());
    console.log($slist1.width());
    var i = 0;
    var timer = setInterval(function(){
        i++;
        move();
    
    },3000)
    function move(){
    // console.log(i);
        if(i>=$sli1.length){
            i=1;
            $slist1.css({
                'left':0
            })
        }
        if(i<0){
        
            $slist1.css({
                'left':-$sli1.width*($sli1.length-1)
            });
        i=$sli1.length-2;
        }
        //运动
        $slist1.animate({
                'left':-i*$sli1.width()
        },500)
        $sli2.eq(i).addClass('slideactive').siblings().removeClass('slideactive');
        if(i==$sli1.length-1){
            $sli2.eq(0).addClass('slideactive').siblings().removeClass('slideactive');
        }
    }
    $('.slide-prev').click(function(){
        i--;
        move();
    })
    $('.slide-next').click(function(){
        i++;
        move();
    })
    $sli2.click(function(){
        i = $(this).index();
        move();
    })
    $('.Groupon-slide').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            i++;
            move();
        },3000)
    })
    $('.slide-prev').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            i++;
            move();
        },3000)
    })
    $('.slide-next').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            i++;
            move();
        },3000)
    })
    // 团购中每个模块移入有个遮罩层
    $('.Groupon-slide .slide01').hover(function(){
        $('.slide01 .slide01-1').stop(true).animate({
            'top':'0'
        },300)
    },function(){
        $('.slide01-1').stop(true).animate({
            'top':'200'
        })
    },100)

    $('.Groupon-slide .slide02').hover(function(){
        $('.slide02 .slide01-1').stop(true).animate({
            'top':'0'
        },300)
    },function(){
        $('.slide01-1').stop(true).animate({
            'top':'200'
        })
    },100)

    $('.Groupon-slide .slide03').hover(function(){
        $('.slide03 .slide01-1').stop(true).animate({
            'top':'0'
        },300)
    },function(){
        $('.slide01-1').stop(true).animate({
            'top':'200'
        })
    },100)
// z智选的左上角第一个模块选中效果
    $('.zx-t1 li').hover(function(){
        var index = $(this).index();
        $(this).addClass('zxactive').siblings().removeClass('zxactive');
        $(this).parent().siblings().children('img').eq(index).addClass('imgactive').siblings().removeClass('imgactive');
    })
    // z智选的左上角第二个模块选中效果
    $('.zx-t2>ul>li').hover(function(){
        $(this).find('.t2-nav').stop(true).animate({
            'top':"0"
        },500)
    },function(){
        $(this).find('.t2-nav').stop(true).animate({
            'top':'135'
        })
    })
    // 电子竞技模块中的左上角轮播图
    $('.gl-list li').click(function(){
        $(this).addClass('gliactive').siblings().removeClass('gliactive');
        $(this).find('div').addClass('gactive').parent().siblings().children('div').removeClass('gactive');
    })
    //网页右侧滚动条的hover效果
    $('#WebRightnav>ul>li').hover(function(){

        $(this).find('div').stop(true).animate({
            'left':'-50px'
        },600)
    },function(){
        $(this).find('div').stop(true).animate({
            'left':'50px'
        },200)
    })

    $('.web-up').click(function(){
        $(document).scrollTop(0);
    })

//图片懒加载
$('img.lazy').lazyload({effect: "fadeIn"});

})

