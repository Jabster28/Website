console.log("I'm index.js!")

function siweap() {
  console.log(54)
  const email = $('#email').val()
  console.log(email)
  const pass = $('#password').val()
  console.log(pass)
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function SignOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

function suweap() {
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
