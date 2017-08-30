
//瀑布流
$(document).ready(function() {
    $('.tabs_animate').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
});
$(function(){
    <!--推荐-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab1-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--汽车生活-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab2-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--耍大牌-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab3-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--玩酷吧-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab4-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--智能家居-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab5-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--纯棉时代-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab6-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--有机食品-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab7-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});
$(function(){
    <!--有机食品-->
    function loadMeinv(){
        var data = 0;
        for(var i=0;i<9;i++){//每次加载时模拟随机加载图片
            data = parseInt(Math.random()*9);
            var html = "";
            html = '<li><a href="shop-detail.html" class="shop-img"><img src = images/'
                +data+'.jpg></a><div class="shop-descript">' +
                '<h3 class="shop-title">好帅二蛋智能机器人</h3>' +
                '<p class="shop-price"><span class="icon-price">￥</span><span class="now-price">1995.08</span></p>' +
                '<p>原价:￥&nbsp;<span class="old-price">1200</span>&nbsp;/&nbsp;3800积分</p>' +
                '</div></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    function getMinUl(){//每次获取最短的ul,将图片放到其后
        var $arrUl = $("#tab8-container .col");
        var $minUl =$arrUl;
        $arrUl.each(function(index,elem){
            if($(elem).height()<$minUl.height()){
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
    $(window).on("scroll",function(){
        $minUl = getMinUl();
        if($minUl.height() <= $(window).scrollTop()+$(window).height()){
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    });
});