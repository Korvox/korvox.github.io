function auth() {
  gapi.client.setApiKey("AIzaSyDTIaJiPluGgP_RBERTelHkpZLPaGIf5dE");
  gapi.auth.authorize(
    { client_id: "1058103586955-lma4u04883olc8qiveajsnb2r71djlc6.apps.googleusercontent.com",
      immediate: true,
      scopes: "plus.login" },
    signedIn
  );
}

function signedIn(resp) {
  document.getElementById("status").textContent = "Login Successful!";
  gapi.client.load('plus', 'v1', apiClientLoaded);
}

function apiClientLoaded() {
  var request = gapi.client.plus.people.get({'userId' : 'me'});
  request.execute(function (resp) {
    document.getElementById("result").textContent = JSON.stringify(resp);
  });
}
