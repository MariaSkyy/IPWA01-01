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

  if (checkCodeInjection(originalText) == false) {
    const newText = genderText(originalText);
    const displayTextElement = document.getElementById(displayTextId);
    displayTextElement.innerText = newText;
  }
}

function checkCodeInjection(pruefText) {
  // Regex für einfache Überprüfung auf Skripttags
  var scriptRegex = /<\s*script\s*>|<\s*\/\s*script\s*>/i;
  var ausdruckRegex = /\b(?:eval|alert|prompt|confirm)\b/;
  var tagRegex =  /<(iframe|embed)\s.*>/;
  var functionRegex =  /\b(?:function\s*\(.*\)|new\s*Function|\$\()/;

  // Überprüfen, ob der Text Skripttags enthält
  if (scriptRegex.test(pruefText) || ausdruckRegex.test(pruefText) || tagRegex.test(pruefText) || functionRegex.test(pruefText) ){
    alert(' In ihrem Text wurde potenziell gefährlicher Code entdeckt! Bitte entfernen Sie die entsprechenden Stellen und versuchen Sie es erneut.');
    document.getElementById('inputTextFrei').value = '';
    document.getElementById('displayTextFrei').innerText = '';
    return true;
  } else return false;
}

function setLocalNav() {
  const language = navigator.language || navigator.userLanguage; //gibt bevorzugte Sprache des Nutzers zurück

  // Prüfen Sie, ob die erkannte Schriftkultur von rechts nach links (RTL) ist
  if (language.toLowerCase().startsWith('ar') || language.toLowerCase().startsWith('he')) { //überprüft, ob die erkannte Schriftkultur mit 'ar' (Arabisch) oder 'he' (Hebräisch) beginnt, und das nicht case sensitive
      document.getElementById("localNav").classList.add("text-right");
  } else {
      document.getElementById("localNav").classList.add("text-left");
  }
}

function loremWiederholung(){
  console.log("Wdh geladen");
  // Zielfeld
  var contentElement = document.getElementById("loremIpsum");

  var text="";

  // Schleife zum Einfügen von "Lorem Ipsum"
  for (var i = 0; i < 20; i++) {
      // Erstelle ein neues Paragraph-Element
      //var paragraph = document.createElement("p");
      // Füge den Text "Lorem Ipsum" hinzu
      //paragraph.textContent = "Lorem Ipsum ";
      // Füge das Paragraph-Element zum Zielfeld hinzu
      //contentElement.appendChild(paragraph);
      text = text + "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ";
      //contentElement.innerText="Lorem Ipsum";
  }
  //contentElement.appendChild(paragraph);
  contentElement.innerText=text;
}


window.onload = function() {
  // Code, der nach dem Laden der Seite ausgeführt wird
  try {
    setLocalNav();
  } catch (error) {
    console.error('Fehler in setLocalNav:', error);
  }

  try {
    loremWiederholung();
  } catch (error) {
    console.error('Fehler in loremWiederholung:', error);
  }
};