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
    //originalText = element.querySelector('p').innerText;
  }

  const newText = genderText(originalText);

  const displayTextElement = document.getElementById(displayTextId);
  //console.log(newText);
  displayTextElement.innerText = newText;
}


// Script für die Sicherheit: Überprüfung auf injizierten Code
function checkForInjectedCode() {
  // Finde alle Elemente mit der Klasse 'text'
  const textElements = document.querySelectorAll('.text');

  textElements.forEach((element) => {
      // Extrahiere den ursprünglichen Text aus dem ersten <p>-Element im aktuellen Element
      const originalText = element.querySelector('p').innerText;

      // Hier könnten weitere Überprüfungen auf injizierten Code erfolgen

      // Überprüfe, ob der ursprüngliche Text das Muster '<script>' enthält
      if (originalText.includes('<script>')) {
        // Wenn ja, zeige eine Fehlermeldung in der Konsole an
          console.error('Injizierter Code gefunden!');
      }
  });
}