// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAm2Aqnwf2KIwP4ZCBIiq4uF2nIqRtmZw0",
  authDomain: "chatapp-dc217.firebaseapp.com",
  databaseURL: "https://chatapp-dc217-default-rtdb.firebaseio.com",
  projectId: "chatapp-dc217",
  storageBucket: "chatapp-dc217.appspot.com",
  messagingSenderId: "970218351922",
  appId: "1:970218351922:web:a97767e9819521d8a2bb2b",
  measurementId: "G-HPEZSRQL3S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("name1");
document.getElementById("username").innerHTML="welcome "+username;
function addroom(){
    roomname=document.getElementById("roomname").value 
    firebase.database().ref("/").child(roomname).update({
        purpus:"adding roomname"
    });
    localStorage.setItem("room",roomname);
    window.location="page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
}); }); } getData();
function redirectToRoomName(name)
{
    localStorage.setItem("room",name);
    window.location="page.html";
}