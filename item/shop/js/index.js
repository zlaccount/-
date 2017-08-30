// JavaScript Document
var app = angular.module('book',["ngSanitize"]);
    app.controller("books",function($scope,$http){
	$http.jsonp("http://apis.juhe.cn/goodbook/query?callback=JSON_CALLBACK&catalog_id=110&pn=110&rn=30&dtype=&key=303c20cd1e3dab989e09b51f7cd9b71e")
	    .success(function(da){
		    var att=[]
			for(y=0;y<=29;y++){
                if(y%6==0){
                 att[y/6]=[]
                }
                att[Math.floor(y/6)].push(da.result.data[y])
	        }
            $scope.book2=att[0]
			$scope.nex=function(n){ 
				$scope.book2=att[n]
				$(".page").eq(0).find(".on").removeClass("on")
				$(".page").eq(0).find("li").eq(n).addClass("on")
            }
	    })
	})
	app.controller("books2",function($scope,$http){
	$http.jsonp("http://apis.juhe.cn/goodbook/query?callback=JSON_CALLBACK&catalog_id=120&pn=120&rn=30&dtype=&key=303c20cd1e3dab989e09b51f7cd9b71e")
	    .success(function(da){
			var att=[]
			for(z=0;z<=29;z++){
		    if(z%6==0){
			 att[z/6]=[]}
	att[Math.floor(z/6)].push(da.result.data[z])
	}
				$scope.book2=att[0]
			$scope.nex=function(n){ 
				$scope.book2=att[n]
				$(".page").eq(1).find(".on").removeClass("on")
				$(".page").eq(1).find("li").eq(n).addClass("on")
				}
	})	
	})
	app.controller("books3",function($scope,$http){
	$http.jsonp("http://apis.juhe.cn/goodbook/query?callback=JSON_CALLBACK&catalog_id=15&pn=15&rn=30&dtype=&key=303c20cd1e3dab989e09b51f7cd9b71e")
	    .success(function(da){
			var att=[]
			for(m=0;m<=29;m++){
		    if(m%6==0){
			 att[m/6]=[]}
	att[Math.floor(m/6)].push(da.result.data[m])
	}
				$scope.book2=att[0]
		$scope.nex=function(n){ 
				$scope.book2=att[n]
			$(".page").eq(2).find(".on").removeClass("on")
				$(".page").eq(2).find("li").eq(n).addClass("on")
				}
	})	
	})

if(localStorage.p){
var str1=localStorage.p,arry= JSON.parse(str1)
}
else{
var	arry=[]
	}	
function add(em){
	var pa=$(em).parent()
	$(em).css("color","#ccc")
var x={
	tags:pa.children("i").text(),
	title:pa.children("h3").text(),
	img:pa.children("img").attr("src")}
var y=x.title
     var br=[]
    for(i in arry){
		br.push(arry[i].title)
		}
       if(br.indexOf(y)==-1){
		   arry.push(x)
		   }
	var str1= JSON.stringify(arry);
		localStorage.p=str1			
	}


if(localStorage.p2){
var lik1=localStorage.p2,arry2= JSON.parse(lik1)
}
else{
var	arry2=[]
	}	
function like(em){
	var pa=$(em).parent()
	$(em).css("color","#ccc")
var x={
	tags:pa.children("i").text(),
	title:pa.children("h3").text(),
	img:pa.children("img").attr("src")}
var y=x.title
    var br2=[]
    for(i in arry2){
		br2.push(arry2[i].title)
		}
       if(br2.indexOf(y)==-1){
		   arry2.push(x)
		   }
	var lik1= JSON.stringify(arry2);
		localStorage.p2=lik1		
	}
flag=0
// 导航
function left_menu(){
	if(flag==0){
	$(".fixed").css({"left":"0","transition":"left 0.5s"})
	flag=1
	}
	else{
		$(".fixed").css({"left":"-200px","transition":"left 0.5s"})
	flag=0	
		}
	}
$(function(){
	var div=$(".slider_img .slider")
     i=0
	 var li=$(".slider_box li")
	 change()
function right(){
   if(i==div.length-1){
	  i=0
	   }
	else{
	i=i+1
		}
	 change()
	  }
function left(){
   if(i==0){
	  i=div.length-1
	   }
	else{
	i=i-1
		}
	 change()
	  }
      li.each(function(index, element){
	$(element).click(function(){
		i=index
		change()
		})  
})
function change(){
	   li.eq(i).addClass("active")
	   li.eq(i).siblings().removeClass("active")
	   div.eq(i).stop().fadeIn(1500)
	   div.eq(i).siblings().stop().fadeOut(1500)
	}
$(".right").click(right)
$(".left").click(left)
var timer=window.setInterval(right,2000)
$(".slider_box").hover(function(){
	window.clearInterval(timer)
    },function(){
	timer=window.setInterval(right,2000)
		})
	})
function book(em){
	localStorage.src=$(em).attr("src")
	localStorage.title=$(em).siblings("h3").text()
	localStorage.info=$(em).siblings(".sub2").text()
	localStorage.tags=$(em).siblings(".tags").text()
	location.href="book.html"
	}
