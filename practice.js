var firebaseConfig = {
    apiKey: "AIzaSyA3cShCwm5hCQq5kImXItxWQ5nz-c0qYiE",
    authDomain: "kwitter-a1b1b.firebaseapp.com",
    databaseURL: "https://kwitter-a1b1b-default-rtdb.firebaseio.com",
    projectId: "kwitter-a1b1b",
    storageBucket: "kwitter-a1b1b.appspot.com",
    messagingSenderId: "1036913424587",
    appId: "1:1036913424587:web:9aaa7be498aae46642c34e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}

//ADD YOUR FIREBASE LINKS
