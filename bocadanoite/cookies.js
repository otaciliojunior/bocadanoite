function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function deleteCookie(name) {
    setCookie(name, "", -1);
  }

  setCookie("username", "John Doe", 30);

  var username = getCookie("username");
if (username) {
  console.log("Welcome back, " + username + "!");
} else {
  console.log("Please log in.");
}

deleteCookie("username");


// Verifica se o usuário já aceitou os cookies
function hasAcceptedCookies() {
    return document.cookie.indexOf("cookieConsent=true") > -1;
  }
  
  // Define o cookie de consentimento
  function setCookieConsent() {
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "cookieConsent=true; expires=" + date.toUTCString() + "; path=/";
  }
  
  // Exibe o pop-up de consentimento de cookies
  function showCookieConsentPopup() {
    var cookiePopup = document.getElementById("cookieConsentPopup");
    cookiePopup.style.display = "block";
  }
  
  // Oculta o pop-up de consentimento de cookies
  function hideCookieConsentPopup() {
    var cookiePopup = document.getElementById("cookieConsentPopup");
    cookiePopup.style.display = "none";
  }
  
  // Verifica se o pop-up deve ser exibido e controla os eventos dos botões
  function handleCookieConsent() {
    if (!hasAcceptedCookies()) {
      showCookieConsentPopup();
    }
  
    var acceptButton = document.getElementById("acceptCookiesButton");
    acceptButton.addEventListener("click", function() {
      setCookieConsent();
      hideCookieConsentPopup();
    });
  
    var rejectButton = document.getElementById("rejectCookiesButton");
    rejectButton.addEventListener("click", function() {
      hideCookieConsentPopup();
    });
  }
  
  // Chama a função para manipular o consentimento de cookies quando a página carrega
  window.addEventListener("load", handleCookieConsent);
  