function pageLoaded() {
  gapi.client.setApiKey("AIzaSyDTIaJiPluGgP_RBERTelHkpZLPaGIf5dE");
  gapi.auth.init(auth);
}

function auth() {
  gapi.auth.authorize(
    { client_id: "1058103586955-lma4u04883olc8qiveajsnb2r71djlc6.apps.googleusercontent.com",
     scope: "https://www.googleapis.com/auth/plus.login" },
    signedIn
  );
}

function signedIn(resp) {
  document.getElementById("status").textContent = "Login Successful!";
  gapi.client.load('plus', 'v1', plusLoaded);
}

function plusLoaded() {
  var request = gapi.client.plus.people.get({'userId' : 'me'});
  request.then(function (resp) {
    document.getElementById("result").textContent = JSON.stringify(resp);
  }, function (reason) {
    document.getElementById("result").textContent = "Authorization failure! " + reason.body;
  });
}
