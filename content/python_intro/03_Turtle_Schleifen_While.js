worksheets.push({
  titleShort: "pythonTurtle2",
  titleTechnical: "pyTurtle2",
  title: "Immer wieder dasselbe Spiel: Wenn sich Code wiederholen soll",
  description:
    "<p>In diesem Arbeitsblatt werden wir uns mit <strong>Schleifen</strong> in Python beschäftigen. Schleifen ermöglichen es, bestimmte Codeabschnitte mehrfach auszuführen, ohne sie wiederholt schreiben zu müssen. Dies ist besonders nützlich, um wiederkehrende Muster zu erstellen.</p><p>Eine der wichtigsten Schleifentypen ist die <strong>while</strong>-Schleife. Diese wird mit dem Schlüsselwort <code>while</code> eingeleitet, gefolgt von einer <strong>Bedingung</strong> und einem Doppelpunkt. So lange die Bedingung erfüllt ist, werden die Befehle im nachfolgenden Programmblock wiederholt. Der sich wiederholende Code muss dabei eingerückt sein.</p><p>While-Schleifen sind dann interessant, wenn die Anzahl Durchläufe nicht zum vornherein feststeht. Sie läuft solange, wie die angegebene Bedingung wahr ist.</p><p>Die Wiederholstruktur kann umgangssprachlich so formuliert werden: <i>Solange die folgende Bedingung erfüllt ist, führe den nachfolgenden Programmblock aus</i>.</p>",
  image: "img/kreisverkehr.jpg",
  imageDescription:
    'Ein  typischer Kreisverkehr. Bild: <a href="https://commons.wikimedia.org/wiki/File:Straßwalchen_kreisverkehr.jpg" target="_blank">Arne Müseler/Wikimedia Commons</a> (CC-BY-SA-3.0)',
  imageAlt:
    "Ein Kreisverkehr mit vier Ausfahrten, fotografiert aus der Vogelperspektive. Ein weißes Auto befindet sich im Kreisverkehr.",
  code: {
    python:
      'from turtle import *\n\npencolor("blue")\n\nlaenge = 5\nwhile laenge < 200:\n    forward(laenge)\n    right(90)\n    laenge = laenge + 2\n\nmainloop()',
  },
  codeFilename: {
    python: "pythonTurtle2.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">from</span> turtle <span class="hljs-keyword">import</span> *</code>',
        content:
          "Mit diesem Befehl wird die Bibliothek <code class='code-dark'>turtle</code> in das Programm geladen. Diese Bibliothek stellt alle Funktionen und Befehle zur Verfügung, die für die Turtle-Grafik benötigt werden.",
      },
      {
        title: '<code class="code-dark">pencolor()</code>',
        content:
          "Mit dieser Funktion wird die Stiftfarbe der Turtle-Grafik geändert. Die Farbe kann durch einen Farbnamen (z.B. <code class='code-dark'>\"blue\"</code>) oder einen Farbcode (z.B. <code class='code-dark'>#0000FF</code>) angegeben werden.",
      },
      {
        title: '<code class="code-dark">laenge = 5</code>',
        content:
          "Mit dieser Zeile wird eine Variable <code class='code-dark'>laenge</code> erstellt und auf den Wert <code class='code-dark'>5</code> gesetzt. ",
      },
      {
        title: '<code class="code-dark">while</code>',
        content:
          "Mit dem Schlüsselwort <code class='code-dark'>while</code> wird eine Schleife eingeleitet. Die Schleife wird so lange ausgeführt, wie die angegebene Bedingung (in diesem Fall <code class='code-dark'>laenge &lt; 200</code>) erfüllt ist.",
      },
      {
        title: '<code class="code-dark">laenge < 200</code>',
        content:
          "Dies ist die Bedingung für die <code class='code-dark'>while</code>-Schleife. Solange der Wert der Variable <code class='code-dark'>laenge</code> kleiner als <code class='code-dark'>200</code> ist, wird der nachfolgende und eingerückte Programmblock ausgeführt.",
      },
      {
        title: '<code class="code-dark">forward()</code>',
        content:
          "Mit diesem Code wird die Turtle um einen bestimmten Betrag vorwärts bewegt. Der Betrag wird in Pixeln angegeben und kann durch eine Zahl in den runden Klammern bestimmt werden.",
      },
      {
        title: '<code class="code-dark">right()</code>',
        content:
          "Mit diesem Code wird die Turtle um einen bestimmten Betrag nach rechts gedreht. Der Betrag wird in Grad angegeben und kann durch eine Zahl in den runden Klammern bestimmt werden.",
      },
      {
        title: '<code class="code-dark">mainloop()</code>',
        content:
          "Mit diesem Code wird die Turtle-Grafik gestartet und bleibt so lange geöffnet, bis das Fenster geschlossen wird.",
      },
    ],
  },
  tasks: [
    {
      title: "Aufgabe 1: Den Code beschreiben",
      description:
        "In dieser Aufgabe sollen Sie den Code analysieren und verstehen, was er macht. Anschließend sollen Sie eine Prognose über die Ausgabe des Codes treffen. <strong>Führen Sie den Code dazu noch nicht aus</strong>, sondern versuchen Sie, die Ausgabe nur durch das Lesen des Codes zu ermitteln.",
      subtasks: [
        {
          task: "Nennen Sie die Anzahl an Wiederholungen, die die Schleife in Zeile 6 ausführt.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "1 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
            {
              text: "50 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
            {
              text: "98 Mal",
              correct: true,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
            {
              text: "100 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
            {
              text: "195 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
            {
              text: "200 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird so lange ausgeführt, wie die Bedingung <code>laenge &lt; 200</code> erfüllt ist. Die Variable <code>laenge</code> startet bei <code>5</code> und wird in jedem Schleifendurchlauf um <code>2</code> erhöht. Die Schleife wird also ausgeführt, bis <code>laenge</code> den Wert <code>200</code> erreicht oder überschreitet. Insgesamt wird die Schleife <code>98</code> Mal ausgeführt.",
            },
          ],
        },
        {
          task: "Beschreiben oder Skizzieren Sie, welche grafische Ausgabe Sie vom Code erwarten. Sie können auch eine grobe Zeichnung anfertigen, z. B. in Paint.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code zeichnet ...",
            "So lange die Bedingung ... erfüllt ist, ...",
            "Am Ende entsteht ein Bild, das ... darstellt.",
            "Das Endergebnis sieht aus wie ...",
            "Die Grafik wird in der Farbe ... gehalten.",
          ],
          hints: [
            "Gehen Sie Zeile für Zeile durch den Code und versuchen Sie, die Funktion der Zeile in Paint zu zeichnen.",
            "Betrachten Sie die Befehle im Code und überlegen Sie, welche Bewegungen die Turtle ausführt.",
            "Achten Sie besonders auf die Schleife und wie sich die Variable <code class='code-dark'>laenge</code> verändert.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 2: Den Code ausführen",
      subtasks: [
        {
          task: '<a href="#worksheet-code">Kopieren Sie den Code auf Ihren PC oder laden Sie ihn herunter</a>. Schreiben Sie ihn nicht ab.',
          answerType: "none",
        },
        {
          task: "Führen Sie den Code in einem Python-Interpreter aus. Nutzen Sie dazu auf Ihrem PC das Programm <strong>Visual Studio Code</strong>.",
          answerType: "none",
        },
        {
          task: "Vergleichen Sie das Ergebnis mit Ihrer Vorhersage und erklären Sie, ob und warum Ihre Vorhersage korrekt war oder warum das Ergebnis abweicht.",
          answerType: "text",
        },
      ],
    },
    {
      title: "Aufgabe 3: Den Code analysieren",
      subtasks: [
        {
          task: "Nennen sie die Bezeichnung des Code-Elements mit dem Namen <code>laenge</code> in Zeile 5, in dem ein Wert gespeichert werden kann.",
          answerType: "textShortCheckable",
          correctAnswers: ["Variable", "eine Variable", "variable"],
          feedbackText:
            "Das Code-Element <code class='code-dark'>laenge</code> in Zeile 5 ist eine Variable. Variablen werden verwendet, um Werte zu speichern, die im Laufe des Programms geändert oder verwendet werden können.",
          hints: [
            "Überlegen Sie, wie Werte in einem Programm gespeichert werden können und wie sie später wiederverwendet werden können.",
            "Der Anfangsbuchstabe ist <i>V</i>.",
          ],
        },
        {
          task: "Nennen Sie den Namen des Konzepts, das in Zeile 6 verwendet wird, um bestimmte Codeabschnitte mehrfach auszuführen.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Schleife",
            "eine Schleife",
            "loop",
            "While-Schleife",
            "eine While-Schleife",
            "While",
            "while",
            "while-Schleife",
            "while-schleife",
          ],
          feedbackText:
            "Das Konzept, das in Zeile 6 verwendet wird, um bestimmte Codeabschnitte mehrfach auszuführen, ist eine Schleife. In diesem Fall handelt es sich um eine <code class='code-dark'>while</code>-Schleife, die so lange ausgeführt wird, wie die angegebene Bedingung erfüllt ist.",
          hints: [
            "Lesen Sie sich den Einführungstext am Beginn des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Nennen Sie den Namen des mathematischen Vergleichsoperators, der in der Bedingung der Schleife in Zeile 6 verwendet wird.",
          answerType: "textShortCheckable",
          correctAnswers: ["kleiner als", "<", "kleiner"],
          feedbackText:
            "Der mathematische Vergleichsoperator, der in der Bedingung der Schleife in Zeile 6 verwendet wird, ist <code class='code-dark'>&lt;</code>, was für 'kleiner als' steht. Die Bedingung <code class='code-dark'>laenge &lt; 200</code> bedeutet, dass die Schleife so lange ausgeführt wird, wie der Wert der Variable <code class='code-dark'>laenge</code> kleiner als <code class='code-dark'>200</code> ist.",
          hints: [
            "Überlegen Sie, welche mathematischen Vergleichsoperatoren es gibt und welcher in der Bedingung verwendet wird.",
            "Mathematische Vergleichsoperatoren sind z. B. <code class='code-dark'>&lt;</code> (kleiner als), <code class='code-dark'>&gt;</code> (größer als), <code class='code-dark'>==</code> (gleich), <code class='code-dark'>&lt;=</code> (kleiner oder gleich), <code class='code-dark'>&gt;=</code> (größer oder gleich) und <code class='code-dark'>!=</code> (ungleich).",
          ],
        },
        {
          task: "Beschreiben Sie, was die Code-Zeile 9 macht.",
          answerType: "text",
          hints: [
            "Welche mathematische Operation wird hier ausgeführt?",
            "Welche Variable wird in dieser Zeile verändert?",
            "Wie verändert sich der Wert der Variable <code class='code-dark'>laenge</code> durch diese Zeile?",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: 'Beschreiben Sie die Auswirkungen auf die grafische Ausgabe, wenn in der Funktion <code class="code-dark">pencolor</code> in Zeile 3 der Wert "green" angegeben wird.',
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich die Erhöhung der Variable <code class='code-dark'>laenge</code> um 10 anstatt um 2 auf die Bedingung der Schleife auswirkt.",
            "Denken Sie daran, dass die Schleife so lange ausgeführt wird, wie die Bedingung <code class='code-dark'>laenge &lt; 200</code> erfüllt ist.",
          ],
        },
        {
          task: "Erklären Sie, inwiefern sich die Anzahl der Schleifendurchläufe verändern würde, wenn in Zeile 9 die Variable <code class='code-dark'>laenge</code> um 10 erhöht wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich die Erhöhung der Variable <code class='code-dark'>laenge</code> um 10 anstatt um 2 auf die Bedingung der Schleife auswirkt.",
            "Denken Sie daran, dass die Schleife so lange ausgeführt wird, wie die Bedingung <code class='code-dark'>laenge &lt; 200</code> erfüllt ist.",
          ],
        },
        {
          task: "Stellen Sie eine Vermutung auf, wie sich die grafische Ausgabe verändern würde, wenn in Zeile 9 die Variable <code class='code-dark'>laenge</code> um 10 erhöht wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich die Erhöhung der Variable <code class='code-dark'>laenge</code> um 10 anstatt um 2 auf die grafische Ausgabe auswirkt.",
          ],
        },
        {
          task: "Führen Sie die vorherige Änderung durch und überprüfen Sie Ihre Vorhersage, indem Sie den Code ausführen.",
          answerType: "none",
        },
        {
          task: "Erklären Sie, inwiefern sich die Anzahl der Schleifendurchläufe verändern würde, wenn der Code in Zeile 9 ausgelassen wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich das Weglassen der Zeile 9 auf die Bedingung der Schleife auswirkt.",
            "Denken Sie daran, dass die Schleife so lange ausgeführt wird, wie die Bedingung <code class='code-dark'>laenge &lt; 200</code> erfüllt ist.",
          ],
        },
        {
          task: "Verändern Sie den ursprünglichen Code so, dass in der Bedingung der Schleife in Zeile 6 die Variable der Vergleichsoperator größer als (<code class='code-dark'>&gt;</code>) verwendet wird. Das Endergebnis soll dabei unverändert bleiben.",
          answerType: "code",
          hints: [
            "Die Reihenfolge, in der die Zielgrafik gezeichnet wird, ändert sich durch diese Anpassung.",
            "Passen Sie den Anfangswert der Variable <code class='code-dark'>laenge</code> sowie die Erhöhung in Zeile 9 entsprechend an.",
            "Greifen Sie statt auf eine Addition auf eine Subtraktion der Variable <code class='code-dark'>laenge</code> zurück.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Schreiben Sie Code, der ein ähnliches Muster wie in den vorherigen Aufgaben für ein Dreieck erzeugt.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie unter anderem den Winkel an.",
          ],
        },
        {
          task: "Schreiben Sie Code, der ein ähnliches Muster wie in den vorherigen Aufgaben für ein Sechseck erzeugt.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie unter anderem den Winkel an.",
          ],
        },
        {
          task: "Schreiben Sie Code, der die Turtle in einer Endlosschleife im Kreis laufen lässt.",
          answerType: "code",
          hints: [
            "Eine Endlosschleife kann mit einer <code class='code-dark'>while</code>-Schleife erzeugt werden, deren Bedingung immer wahr ist, z. B. <code class='code-dark'>while True:</code>.",
          ],
        },
        {
          task: "Schreiben Sie Code, der das folgende Bildmuster erzeugt: <img src='img/turtle-schleife-dreiecke.png'>",
          answerType: "code",
          hints: [
            "Die Turtle zeichnet regelmässige Dreiecke, wobei das erste Dreieck die Seitenlänge s = 300 hat, das zweite 290, das dritte 280, und so weiter.",
            "Nach jedem Dreieck folgt eine Drehung um 10° nach rechts.",
            "Das Programm beendet das Zeichnen, wenn die Seitenlänge kleiner als 10 ist.",
          ],
        },
      ],
    },
  ],
});
