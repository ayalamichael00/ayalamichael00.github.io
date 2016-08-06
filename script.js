$(document).ready(function(){
	var count=0;
	$("#button").click(function(){
		var colors = ["red","blue","green","purple","magenta","teal","dark blue","darkolivegreen"];
		console.log(colors.length)
		var num = getRandomInt(0, colors.length)
		console.log(num)
		var color = colors[num]
		console.log(color)
		$("#button").css("background", color);
		var button = document.getElementById ("button");
		count++;
		console.log(count);
		button.textContent= count;
		button.style.textAlign = "Center";
		button.style.fontSize = "200px";
		 	})}); 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}