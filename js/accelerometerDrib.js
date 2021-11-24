/*===== 1 sec = 1000 milisec =====*/
//var limitPass = 3;
//var limitHand = 3;
var limitDribb = 30;

/*========================================================*/

var limitHandDribb = 90;
var limitPassHand = 90;
var limitPassDribb = 60;
var value = 0;
var clear;

/*=============================================================================================*/
/*======================================DRIBBLING BALL===========================================*/
/*=============================================================================================*/
var textboxDrib = document.querySelector('#textboxDrib');
var textstatusDrib = document.querySelector('#textstatusDrib')

function startCountDrib(){
		
//	if(value == limitPass){
//	if(value == limitHand){
	if(value == limitDribb){
//	if(value == limitHandDribb){
//	if(value == limitPassHand){
//		if(value == limitPassDribb){
				
		window.removeEventListener('devicemotion', onDeviceMotionDrib, true);
		textboxDrib.innerHTML = "Start";
		stopCountDrib();
	} else {
		textboxDrib.innerHTML = value;
		value += 1;
		window.addEventListener('devicemotion', onDeviceMotionDrib, true);
		clear = setTimeout(function(){ startCountDrib() }, 1000);
	}	
}

function stopCountDrib(){
	clearTimeout(clear);
	value = 0;
	location.replace("PopupDrib.html");
}

function onDeviceMotionDrib(event){
			
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
    var hand = ("Dribbling Ball");
		    
//    send_dbPass(x, y, z);
	event.innerHTML = hand;
			
	textstatusDrib.innerHTML = "<br>" + "x = " + x.toFixed(4) +
	   					   "<br>" + "y = " + y.toFixed(4) +
	   					   "<br>" + "z = " + z.toFixed(4) + 
	   					   "<br>" + "Aktivitas = " + hand ;
}

	textboxDrib.addEventListener("click", function(){
	startCountDrib();
	});