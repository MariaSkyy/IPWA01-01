// Ein Beispieltext mit geschlechtsspezifischer Sprache
const inputText = "Der Lehrer sagte dem Schüler, dass er fleißig sein soll.";

// Eine Funktion zur Umwandlung von geschlechtsspezifischer Sprache in genderneutrale Sprache
function genderText(text) {
  // Ersetze "Der" durch "Die"
  text = text.replace(/\bDer\b/g, "Die");

  // Ersetze "Der" durch "Die"
  text = text.replace(/\bDer\b/g, "Die");

  // Ersetze "Lehrer" durch "Lehrperson"
  text = text.replace(/\bLehrer\b/g, "Lehrperson");

  // Ersetze "Schüler" durch "Schüler*in"
  text = text.replace(/\bSchüler\b/g, "Schüler*in");

  // Ersetze "er" durch "sie/er"
  text = text.replace(/\ber\b/g, "sie/er");

  return text;
}

function genderAndDisplay(elementId, displayTextId, isTextarea = false) {
  const element = document.getElementById(elementId);

  let originalText;

  // Überprüfen, ob es sich um eine Textarea handelt
  if (isTextarea) {
    originalText = element.value; // Verwende .value für Textareas
  } else {
    //originalText = element.querySelector('p').innerText; // Text aus dem <p>-Element extrahieren
    originalText = element.innerHTML;
  }

  // const originalText = element.querySelector('p').innerText;
  const newText = genderText(originalText);
  //element.querySelector('p').innerText = newText;

  // Überprüfen, ob es sich um eine Textarea handelt
  //  if (isTextarea) {
    //element.value = newText; // Verwende .value für Textareas
  //} else {
     // element.querySelector('p').innerText = newText; // Text ins <p>-Element einfügen
 // }

  // Hier wird das gemeinsame Ausgabefeld aktualisiert
  //outputText.innerText = newText;
  //element.querySelector('.right-section').innerText = newText;
  //document.getElementById('displayText').innerText = newText;
  //element.querySelector('#displayText1').innerText = newText;

  const displayTextElement = document.getElementById(displayTextId);
  displayTextElement.innerText = newText;
}

// Funktion zur Überprüfung und Anzeige von gendergerechtem Text
//function genderAndDisplay(elementId, isTextarea = false) {
  // Element anhand der ID abrufen
  //const element = document.getElementById(elementId);

  // Textvariable deklarieren
  //let text;

  

  // Geschlechtergerechten Text generieren
  //const newText = genderText(text);

  
//}

// Hier könnte weiterer JavaScript-Code folgen...


/*  Eigentlich unnötig?
Funktion zum Anwenden des Genderns auf alle Texte
function applyGendering() {
  const textElements = document.querySelectorAll('.text');
  
  textElements.forEach((element) => {
      const originalText = element.querySelector('p').innerText;
      const newText = genderText(originalText);
      element.querySelector('p').innerText = newText;
  });
}
*/

// Event Listener für die Schaltfläche zum Ausführen des Gendering
document.addEventListener('DOMContentLoaded', () => {
  const genderButton = document.createElement('button');
  genderButton.innerText = 'Gendern';
  genderButton.addEventListener('click', applyGendering);

  const footer = document.querySelector('footer');
  footer.appendChild(genderButton);
});

// Script für die Sicherheit: Überprüfung auf injizierten Code
function checkForInjectedCode() {
  const textElements = document.querySelectorAll('.text');

  textElements.forEach((element) => {
      const originalText = element.querySelector('p').innerText;

      // Hier könnten weitere Überprüfungen auf injizierten Code erfolgen

      if (originalText.includes('<script>')) {
          console.error('Injizierter Code gefunden!');
      }
  });
}

// Event Listener für die Schaltfläche zur Code-Überprüfung
document.addEventListener('DOMContentLoaded', () => {
  const codeCheckButton = document.createElement('button');
  codeCheckButton.innerText = 'Code überprüfen';
  codeCheckButton.addEventListener('click', checkForInjectedCode);

  const footer = document.querySelector('footer');
  footer.appendChild(codeCheckButton);
});

// Den Text verarbeiten und ausgeben
const resultText = genderNeutralizeText(inputText);
console.log(resultText);
