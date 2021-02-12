
function fnadd(){
    //import firebase from 'firebase/app';
    //import 'firebase/firestore';
    //const firebase = require("firebase");
    // Required for side-effects
    //require("firebase/firestore");
    alert("Fixed");
        var db = firebase.firestore();
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        // Add a second document with a generated ID.
        db.collection("users").add({
            first: "Alan",
            middle: "Mathison",
            last: "Turing",
            born: 1912
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        };
function fnread(){
    var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
           document.getElementById("readdata").innerHTML = `${doc.id} => ${doc.data()}`;
        });

    });


}