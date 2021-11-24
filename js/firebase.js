  var firebaseConfig = {
//		    apiKey: "AIzaSyAKJz51yboS_d2-2r6-Cen2NApfoLKIjW8",
//		    authDomain: "fir-tizenrev-40814.firebaseapp.com",
//		    databaseURL: "https://fir-tizenrev-40814-default-rtdb.firebaseio.com",
//		    projectId: "fir-tizenrev-40814",
//		    storageBucket: "fir-tizenrev-40814.appspot.com",
//		    messagingSenderId: "941159908178",
//		    appId: "1:941159908178:web:0017bdd34a4f4533d3b08b",
//		    measurementId: "G-1B7DGTFZV5"
		    
		  apiKey: "AIzaSyDhSerMK_DcrMWzNHfdFatZA_m_NsWUUNg",
		  authDomain: "subject6tizenrevisi.firebaseapp.com",
		  databaseURL: "https://subject6tizenrevisi-default-rtdb.firebaseio.com",
		  projectId: "subject6tizenrevisi",
		  storageBucket: "subject6tizenrevisi.appspot.com",
		  messagingSenderId: "754972538813",
		  appId: "1:754972538813:web:5d45d31711ddece06904d4",
		  measurementId: "G-JNN37CMWKW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  /*var rootRef = firebase.database().ref();*/

//  function send_dbPass( x,y,z,event,Number){
  function send_db(x,y,z){
		console.log( " x = " + x + " y = " + y + " z = " + z);
//		console.log( " aktivitas pemain : " + event );
		
		firebase.database().ref('Subject6 Passing Ball').push().set({
//		firebase.database().ref('Handling Ball').push().set({
//		firebase.database().ref('Dribbling Ball').push().set({
		
//		firebase.database().ref('Subject1 Passing Ball').push().set({
//		firebase.database().ref('Subject1 Handling Ball').push().set({
//		firebase.database().ref('Subject1 Dribbling Ball').push().set({
			

			
//		firebase.database().ref('Subject2 Passing Ball').push().set({
//		firebase.database().ref('Subject2 Handling Ball').push().set({
//		firebase.database().ref('Subject2 Dribbling Ball').push().set({
			
			
		
//		firebase.database().ref('Subject3 Passing Ball').push().set({
//		firebase.database().ref('Subject3 Handling Ball').push().set({
//		firebase.database().ref('Subject3 Dribbling Ball').push().set({
			
			
			
//		firebase.database().ref('Subject4 Passing Ball').push().set({
//		firebase.database().ref('Subject4 Handling Ball').push().set({
//		firebase.database().ref('Subject4 Dribbling Ball').push().set({
			
			
			
//		firebase.database().ref('Subject5 Passing Ball').push().set({
//		firebase.database().ref('Subject5 Handling Ball').push().set({
//		firebase.database().ref('Subject5 Dribbling Ball').push().set({
		
		
			
//		    aktivitas_pemain :  event,
		    x: x.toFixed(4),
		    y: y.toFixed(4),
		    z: z.toFixed(4)
		});
  }
  
