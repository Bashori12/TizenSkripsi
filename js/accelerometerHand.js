/*===== 1 sec = 1000 milisec =====*/
//var limitPass = 3;
var limitHand = 60;
//var limitDribb = 3;

/*========================================================*/

var limitHandDribb = 90;
var limitPassHand = 90;
var limitPassDribb = 60;
var value = 0;
var clear;

/*=============================================================================================*/
/*======================================HANDLING BALL===========================================*/
/*=============================================================================================*/
var textboxHand = document.querySelector('#textboxHand');
var textstatusHand = document.querySelector('#textstatusHand')

function startCountHand(){
		
//	if(value == limitPass){
	if(value == limitHand){
//	if(value == limitDribb){
//	if(value == limitHandDribb){
//	if(value == limitPassHand){
//	if(value == limitPassDribb){
			
		window.removeEventListener('devicemotion', onDeviceMotionHand, true);
		textboxHand.innerHTML = "Start";
		stopCountHand();
	} else {
		textboxHand.innerHTML = value;
		value += 1;
		window.addEventListener('devicemotion', onDeviceMotionHand, true);
		clear = setTimeout(function(){ startCountHand() }, 1000);
	}	
}

function stopCountHand(){
	clearTimeout(clear);
	value = 0;
	location.replace("PopupHand.html");
}

function onDeviceMotionHand(event){
		
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
    var hand = ("Handling Ball");
	    
//    send_dbPass(x, y, z);
	event.innerHTML = hand;
		
	textstatusHand.innerHTML = "<br>" + "x = " + x.toFixed(4) +
	   					   "<br>" + "y = " + y.toFixed(4) +
	   					   "<br>" + "z = " + z.toFixed(4) + 
	   					   "<br>" + "Aktivitas = " + hand ;
}

	textboxHand.addEventListener("click", function(){
	startCountHand();
	});