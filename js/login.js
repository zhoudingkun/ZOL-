$(function(){
    // 点击tab切换
    $('.right-nav>ul>li').click(function(){
        $(this).addClass('active1').siblings().removeClass('active1');
       
      $(this).find('ul').addClass('active2').parent().siblings().children('ul').removeClass('active2');
    })
})