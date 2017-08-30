// JavaScript Document
var app=angular.module('myApp',[]);
 app.controller("data",function($scope){
	 if(localStorage.p2){
	var str=localStorage.p2
	ar= JSON.parse(str)
    $scope.product=ar
	 }
    if($scope.product.length<=0 || !$scope.product){
	 $(".shopping").html("您的收藏为空，快去添加吧") 
	}
    $scope.remov=function(n){
	   $scope.product.splice(n, 1)
	   var str= JSON.stringify($scope.product);
		localStorage.p2=str
	 }	
	 $scope.cle=function(){
	   for(var i=$scope.product.length-1;i>=0;i--){
		$scope.remov(i)
	  }
	   $(".shopping").html("您的收藏为空，快去添加吧") 
	 }
	  }) 
if(localStorage.p){
var str1=localStorage.p,arry= JSON.parse(str1)
}
else{
var	arry=[]
	}	
function add(em){
	var pa=$(em).parent()
var x={
	title:pa.children("h3").text(),
	tags:pa.children("i").text(),
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
 flag=0;
 function logon()
 {   location.href="logon.html"
	 }
function left_menu(){
	if(flag==0){
		$(".fixed").css({"left":"0","transition":"left 0.5s"})
		flag=1
		}
		else
		{
			$(".fixed").css({"left":"-200px","transition":"left 0.5s"})
			flag=0
			}
	
	}