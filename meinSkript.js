// Funktion zur Umwandlung von geschlechtsspezifischer Sprache in genderneutrale Sprache
// Hier wurden einige geschlechterspezifischen Bezeichnungen zufällig ausgewählt
// Alle folgenden Bezeichnungen sowie Artikel sind beispielhaft gewählt (es wurden nicht alle Möglichkeiten der Nutzung in einem Satz abgedeckt)
function genderText(text) {
  // Erklärung an dem ersten Befehl
  // Ersetze "Lehrer" ODER "Lehrerin" durch "Lehrperson" und gleiches Prinzip mit zwei möglichen Artikeln
  text = text.replace(/\b(Lehrer|Lehrerin)\b/gi, "Lehrperson");
  text = text.replace(/\b(der Lehrer|die Lehrerin)\b/gi, "die Lehrperson");
  text = text.replace(/\b(ein Lehrer|eine Lehrerin)\b/gi, "eine Lehrperson");

  // folgend gleiches Prinzip wie bei "Lehrperson"
  text = text.replace(/\bSchüler\b/gi, "Schüler*in");
  text = text.replace(/\b(der Schüler)\b/gi, "der/die Schüler*in");

  text = text.replace(/\b(Fachmann|Fachfrau)\b/gi, "Fachpersonal");
  text = text.replace(/\b(der Fachmann|die Fachfrau)\b/gi, "das Fachpersonal");
  text = text.replace(/\b(ein Fachmann|eine Fachfrau)\b/gi, "Fachpersonal");

  text = text.replace(/\b(Käufer|Käuferin)\b/gi, "Käufer*in");
  text = text.replace(/\b(der Käufer|die Käuferin)\b/gi, "der/die Käufer*in");
  text = text.replace(/\b(ein Käufer|eine Käuferin)\b/gi, "ein/eine Käufer*in");

  text = text.replace(/\bMonteur\b/gi, "Montagefachkraft");
  text = text.replace(/\b(der Monteur)\b/gi, "die Montagefachkraft");
  text = text.replace(/\b(ein Monteur)\b/gi, "eine Montagefachkraft");

  text = text.replace(/\b(Verkäufer|Verkäuferin)\b/gi, "Verkaufspersonal");
  text = text.replace(/\b(der Verkäufer|die Verkäuferin)\b/gi, "das Verkaufspersonal");
  text = text.replace(/\b(ein Verkäufer|eine Verkäuferin)\b/gi, "Verkaufspersonal");

  text = text.replace(/\b(Mitarbeiter|Mitarbeiterin)\b/gi, "Mitarbeiter*in");
  text = text.replace(/\b(der Mitarbeiter|die Mitarbeiterin)\b/gi, "der/die Mitarbeiter*in");
  text = text.replace(/\b(ein Mitarbeiter|eine Mitarbeiterin)\b/gi, "ein/eine Mitarbeiter*in");

  text = text.replace(/\bExperte\b/gi, "Person mit Expertise");
  text = text.replace(/\b(der Experte)\b/gi, "die Person mit Expertise");
  text = text.replace(/\b(ein Experte)\b/gi, "eine Person mit Expertise");

  text = text.replace(/\bAdministrator\b/gi, "Administrator*in");
  text = text.replace(/\b(der Administrator)\b/gi, "der/die Administrator*in");
  text = text.replace(/\b(ein Administrator)\b/gi, "ein/eine Administrator*in");

  text = text.replace(/\b(Anwender|Anwenderin)\b/gi, "Anwender*in");
  text = text.replace(/\b(der Anwender|die Anwenderin)\b/gi, "der/die Anwender*in");
  text = text.replace(/\b(ein Anwender|eine Anwenderin)\b/gi, "ein/eine Anwender*in");

  text = text.replace(/\bAbsender\b/gi, "Absendende Person");
  text = text.replace(/\b(der Absender)\b/gi, "die absendende Person");
  text = text.replace(/\b(ein Absender)\b/gi, "eine absendende Person");

  text = text.replace(/\b(Betroffene)\b/gi, "betroffene Person");
  text = text.replace(/\b(der Betroffene)\b/gi, "die betroffene Person");
  text = text.replace(/\b(ein Betroffener)\b/gi, "eine betroffene Person");

  text = text.replace(/\b(Student|Studentin)\b/gi, "Studierende");
  text = text.replace(/\b(der Student|die Studentin)\b/gi, "der/die Studierende");
  text = text.replace(/\b(ein Student|eine Studentin)\b/gi, "ein/eine Student*in");

  text = text.replace(/\bInteressent\b/gi, "Interessierte");
  text = text.replace(/\b(der Interessent)\b/gi, "der/die Interessierte");
  text = text.replace(/\b(ein Interessent)\b/gi, "eine interessierte Person");

  text = text.replace(/\bHerausgeber\b/gi, "Herausgegeben von");

  text = text.replace(/\bLektor\b/gi, "Lektoriert von");

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
    document.getElementById('displayTextFrei').innerText = ''; //innerText statt innerHTML gegen injizierten Code
    return true;
  } else return false;
}

function setLocalNav() {
  const language = navigator.language || navigator.userLanguage; //gibt bevorzugte Sprache des Nutzers zurück

  //überprüft, ob die erkannte Schriftkultur mit 'ar' (Arabisch) oder 'he' (Hebräisch) beginnt, und das nicht case sensitive
  // Somit Überprüfung, ob die erkannte Schriftkultur von rechts nach links (RTL) ist
  if (language.toLowerCase().startsWith('ar') || language.toLowerCase().startsWith('he')) { 
      document.getElementById("localNav").classList.add("text-right");
  } else {
      document.getElementById("localNav").classList.add("text-left");
  }
}

function loremWiederholung(){
  // Zielfeld
  var contentElement = document.getElementById("loremIpsum");

  var text="";

  // Schleife zum Einfügen von "Lorem Ipsum"
  for (var i = 0; i < 20; i++) {
      // Füge den Text "Lorem Ipsum" hinzu
      text = text + "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ";
  }
  contentElement.innerText=text;
}

function autoResize(element) {
  // Zurücksetzen auf automatische Höhe
  element.style.height = "auto"; 
  // Anpassen der Höhe basierend auf dem Scrollhöhenwert
  element.style.height = (element.scrollHeight) + "px"; 
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