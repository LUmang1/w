$(function(){
	$.getJSON("bootstrap/json/index.json",function(data){
		$("#img1").append("<img src='bootstrap/json/"+data.img1+"'/>")
		$("#img2").append("<img src='bootstrap/json/"+data.img2+"'/>")
		$("#img3").append("<img src='bootstrap/json/"+data.img3+"'/>")
		$("#img4").append("<img src='bootstrap/json/"+data.img4+"'/>")
		$("#img5").append("<img src='bootstrap/json/"+data.img5+"'/>")
	})
})