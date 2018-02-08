$(function(){

    //轮播图上定的导航条hover效果
    $(".item-nav div").hover(function(){
        $(this).siblings().addClass("Aitem-active").show();
    },function(){
        $(this).siblings().removeClass("Aitem-active").hide();
    })

    //移入全部，展开下拉菜单
    
})