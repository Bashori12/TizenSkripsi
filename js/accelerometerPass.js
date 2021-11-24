/*===== 1 sec = 1000 milisec =====*/
var limitPass = 20;
//var limitHand = 60;
//var limitDribb = 30;

/*========================================================*/

//var limitHandDribb = 90;
//var limitPassHand = 90;
//var limitPassDribb = 60;
var value = 0;
var clear;

/*=============================================================================================*/
/*======================================PASSING BALL===========================================*/
/*=============================================================================================*/
var textbox = document.querySelector('#textbox');
var textstatus = document.querySelector('#textstatus');

function startCount(){
	
	if(value == limitPass){
//	if(value == limitHand){
//	if(value == limitDribb){
//	if(value == limitHandDribb){
//	if(value == limitPassHand){
//	if(value == limitPassDribb){
		
		window.removeEventListener('devicemotion', onDeviceMotion, true);
		textbox.innerHTML = "Start";
		stopCount();
	} else {
		textbox.innerHTML = value;
		value += 1;
		window.addEventListener('devicemotion', onDeviceMotion, true);
		clear = setTimeout(function(){ startCount() }, 1000);
	}	
}

function stopCount(){
	clearTimeout(clear);
	value = 0;
	location.replace("PopupPass.html");
}

function onDeviceMotion(event){
	
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
    
    var hand = ("Passing Ball");
//    var hand = ("Handling Ball");
//    var hand = ("Dribbling Ball");
    
    send_db(x,y,z);
//	event.innerHTML = hand;
//	
	textstatus.innerHTML = "<br>" + "x = " + x.toFixed(4) +
	   					   "<br>" + "y = " + y.toFixed(4) +
	   					   "<br>" + "z = " + z.toFixed(4) + 
	   					   "<br>" + "Aktivitas = " + hand ;
}

	textbox.addEventListener("click", function(){
	startCount();
	});

	


