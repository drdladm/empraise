function AddQue(){
    //import firebase from 'firebase/app';
    //import 'firebase/firestore';
    //const firebase = require("firebase");
    // Required for side-effects
    //require("firebase/firestore");
    alert("Question added");
        var db = firebase.firestore();
        var topicRef = db.collection("Questions");
        topicRef.doc(document.getElementById("topic").value).add({
            Question: document.getElementById("qtext").value,
            Option1: document.getElementById("Option1").value,
            Option2: document.getElementById("Option2").value,
            Option3: document.getElementById("Option3").value,
            Option4: document.getElementById("Option4").value,
            Answer: document.getElementById("anstext").value
            
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        document.getElementById("chTopic").innerHTML = document.getElementById("qtext").value;
    }  
function GetQue(){
    var db = firebase.firestore();
    var docRef = db.collection("English").doc("OGfgHdYhnVnYeuN3Kxa7");
    //console.log(doc.data());
// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    });

   
   


}