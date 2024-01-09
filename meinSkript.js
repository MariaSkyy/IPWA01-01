

// Eine Funktion zur Umwandlung von geschlechtsspezifischer Sprache in genderneutrale Sprache
function genderText(text) {
  // Ersetze "Der" durch "Die"
  text = text.replace(/\bDer\b/g, "Die");

  // Ersetze "Lehrer" durch "Lehrperson"
  text = text.replace(/\bLehrer\b/gi, "Lehrperson");

  // Ersetze "Schüler" durch "Schüler*in"
  text = text.replace(/\bSchüler\b/gi, "Schüler*in");

  // Ersetze "er" durch "sie/er"
  text = text.replace(/\ber\b/g, "sie/er");

  text = text.replace(/\bFachmann\b/gi, "Fachpersonal");

  text = text.replace(/\bKäufer\b/gi, "Käufer*In");

  text = text.replace(/\bMonteur\b/gi, "Montagefachkraft");

  text = text.replace(/\bVerkäufer\b/gi, "Verkäufer*In");

  text = text.replace(/\bMitarbeiter\b/gi, "Mitarbeiter*In");

  text = text.replace(/\bExperte\b/gi, "Person mit Expertise");

  text = text.replace(/\bAdministrator\b/gi, "Administrator*In");

  text = text.replace(/\bAnwender\b/gi, "Anwender*In");

  text = text.replace(/\bAbsender\b/gi, "Absendende Person");

  return text;
}

function genderAndDisplay(elementId, displayTextId, isTextarea = false) {
  const element = document.getElementById(elementId);

  let originalText;

  // Überprüfen, ob es sich um eine Textarea handelt
  if (isTextarea) {
    originalText = element.value; // Verwende .value für Textareas
  } else {
    originalText = element.innerText;
  }

  const newText = genderText(originalText);

  const displayTextElement = document.getElementById(displayTextId);
  displayTextElement.innerText = newText;
}

function checkCodeInjection() {
  // Regex für einfache Überprüfung auf Skripttags
  var scriptRegex = /<\s*script\s*>|<\s*\/\s*script\s*>/i;
  var ausdruckRegex = /\b(?:eval|alert|prompt|confirm)\b/;
  var tagRegex =  /<(iframe|embed)\s.*>/;
  var functionRegex =  /\b(?:function\s*\(.*\)|new\s*Function|\$\()/;

  // Text aus der Textarea holen
  var userInput = document.getElementById('inputTextFrei').value;

  // Überprüfen, ob der Text Skripttags enthält
  if (scriptRegex.test(userInput) || ausdruckRegex.test(userInput) || tagRegex.test(userInput) || functionRegex.test(userInput) ){
    alert(' In ihrem Text wurde potenziell gefährlicher Code entdeckt! Bitte entfernen Sie die entsprechenden Stellen und versuchen Sie es erneut.');
    document.getElementById('inputTextFrei').value = '';
  } else {
    // Der Text ist sicher, du kannst ihn weiterverarbeiten
    //alert('Text ist sicher. Verarbeite weiter...');
    // Hier könntest du den Text weiterverarbeiten, z.B. an den Server senden oder lokal verwenden.
    genderAndDisplay('inputTextFrei','displayTextFrei', true);
  }
}

function setLocalNav() {
  const language = navigator.language || navigator.userLanguage; //gibt bevorzugte Sprache des Nutzers zurück
  //console.log(language);
  //const menu = document.querySelector('.menu'); // Menüleiste auswählen, HTML Klasse Menü (wenn sie so heißt) wird ausgewählt

  // Prüfen Sie, ob die erkannte Schriftkultur von rechts nach links (RTL) ist
  if (language.toLowerCase().startsWith('ar') || language.toLowerCase().startsWith('he')) { //überprüft, ob die erkannte Schriftkultur mit 'ar' (Arabisch) oder 'he' (Hebräisch) beginnt, und das nicht case sensitive
      //menu.classList.remove('menu-left'); // Entfernen Sie die linke Ausrichtung
      //menu.classList.add('menu-right');    // Fügen Sie die rechte Ausrichtung hinzu
      document.getElementById("localNav").classList.add("text-right");
      //document.getElementById("localNav").classList.remove("text-left");
      console.log('RTL');
  } else {
      //menu.classList.remove('menu-right'); // Entfernen Sie die rechte Ausrichtung
      //menu.classList.add('menu-left');      // Fügen Sie die linke Ausrichtung hinzu (Standard)
      document.getElementById("localNav").classList.add("text-left");
      //document.getElementById("localNav").classList.remove("text-right");
      console.log('LTR');
  }
}

//window.addEventListener('DOMContentLoaded', setLocalNav); //wartet, bis Dokument vollständig geladen, um Ausrichtung Menü zu setzen

//window.onload = setLocalNav();
window.onload = function() {
  // Code, der nach dem Laden der Seite ausgeführt werden soll
  setLocalNav();
};