worksheets.push({
  titleShort: "pythonTurtle1",
  titleTechnical: "pyTurtle1",
  title: "Mit Python Turtle erste Grafiken erstellen",
  description:
    "<p>Im ersten Arbeitsblatt haben Sie die Grundlagen von Python kennengelernt und einen einfachen Python-Code analysiert. In diesem Tutorial werden wir uns mit der Turtle-Grafik in Python beschäftigen. Mit dieser ist es möglich, über einfache Befehle Grafiken zu erstellen. So lässt sich Code direkt sichtbar machen.</p>",
  image: "img/turtle-beispielgrafik.jpg",
  imageDescription:
    'Beispielhaftes Muster, das mit Python Turtle erzeugt wurde. Bild: <a href="https://www.python-lernen.de/python-turtle.htm" target="_blank">Python-Lernen.de</a>',
  imageAlt: "Ein Beispiel für eine Turtle-Grafik in Python.",
  code: {
    python:
      'from turtle import *\n\npencolor("red")\nforward(100)\nright(90)\npencolor("blue")\nforward(100)\nright(90)\npencolor("green")\nforward(100)\nright(90)\npencolor("yellow")\nforward(100)\nright(90)\n\nmainloop()',
  },
  codeFilename: {
    python: "pythonTurtle1.py",
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
          "Mit dieser Funktion wird die Stiftfarbe der Turtle-Grafik geändert. Die Farbe kann durch einen Farbnamen (z.B. <code class='code-dark'>\"red\"</code>) oder einen Farbcode (z.B. <code class='code-dark'>#FF0000</code>) angegeben werden.",
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
          task: "Beschreiben oder Skizzieren Sie, welche grafische Ausgabe Sie vom Code erwarten. Sie können auch eine Zeichnung anfertigen, z. B. in Paint.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code zeichnet ...",
            "Zuerst wird ... gezeichnet, danach ...",
          ],
          hints: [
            "Gehen Sie Zeile für Zeile durch den Code und versuchen Sie, die Funktion der Zeile in Paint zu zeichnen.",
            "Betrachten Sie die Befehle im Code und überlegen Sie, welche Bewegungen die Turtle ausführt.",
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
          task: 'Welchen Wert erwartet der Code in der Funktion <code class="code-dark">pencolor()</code> (z. B. in Zeile 3) zwischen den beiden runden Klammern?',
          answerType: "textShortCheckable",
          correctAnswers: [
            "Farbe",
            "Farbname",
            "Farbcode",
            "eine Farbe",
            "ein Farbname",
            "ein Farbcode",
            "Farbwert",
            "ein Farbwert",
          ],
          feedbackText:
            "In der Funktion <code class='code-dark'>pencolor()</code> wird eine Farbe angegeben, die die Stiftfarbe der Turtle-Grafik ändert. Dabei können entweder Farbnamen (z. B. <code class='code-dark'>'red'</code>) oder Farbwerte (z. B. <code class='code-dark'>#FF0000</code>) verwendet werden.",
          hints: [
            "Überlegen Sie, was die Funktion <code class='code-dark'>pencolor()</code> macht und welche Art von Information sie benötigt, um die Stiftfarbe zu ändern.",
          ],
        },
        {
          task: "Welchen Wert erwartet der Code in der Funktion <code class='code-dark'>forward()</code> (z. B. in Zeile 4) zwischen den beiden runden Klammern?",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Zahl",
            "Pixel",
            "eine Zahl",
            "ein Pixelwert",
            "Pixelwert",
          ],
          feedbackText:
            "In der Funktion <code class='code-dark'>forward()</code> wird eine Zahl angegeben, die bestimmt, wie viele Pixel die Turtle vorwärts bewegt wird.",
          hints: [
            "Überlegen Sie, was die Funktion <code class='code-dark'>forward()</code> macht und welche Art von Information sie benötigt, um die Bewegung der Turtle zu bestimmen.",
          ],
        },
        {
          task: "Welchen Wert erwartet der Code in der Funktion <code class='code-dark'>right()</code> (z. B. in Zeile 5) zwischen den beiden runden Klammern?",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Zahl",
            "Pixel",
            "eine Zahl",
            "eine Gradzahl",
            "Gradzahl",
            "Grad",
            "Winkel",
            "eine Winkelzahl",
            "Winkelzahl",
            "einen Winkel",
          ],
          feedbackText:
            "In der Funktion <code class='code-dark'>right()</code> wird eine Zahl angegeben, die bestimmt, um wie viele Grad die Turtle nach rechts gedreht wird.",
          hints: [
            "Überlegen Sie, was die Funktion <code class='code-dark'>right()</code> macht und welche Art von Information sie benötigt, um die Drehung der Turtle zu bestimmen.",
          ],
        },
        {
          task: "Vergleichen Sie den Python-Code mit dem Code aus dem ersten Arbeitsblatt, der zwei Zahlen addiert hat. Nennen Sie mindestens drei Unterschiede und drei Gemeinsamkeiten zwischen den beiden Codes.",
          answerType: "text",
          hints: [
            "Unterschiede könnten z. B. die verwendeten Bibliotheken, die Art der Befehle oder die Ausgabe sein.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: "Beschreiben Sie, welche Ausgaben Sie beim Ausführen des Codes erwarten, wenn Sie die Befehle <code class='code-dark'>right(90)</code> durch <code class='code-dark'>left(90)</code> ersetzen.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code zeichnet ...",
            "Im Gegensatz zum ursprünglichen Code wird ...",
          ],
          hints: [
            "Der Befehl <code class='code-dark'>left(90)</code> dreht die Turtle um 90 Grad nach links, während <code class='code-dark'>right(90)</code> sie um 90 Grad nach rechts dreht.",
          ],
        },
        {
          task: "Beschreiben Sie, welche Ausgabe Sie beim Ausführen des Codes erwarten, wenn Sie die Befehle right(90) durch right(45) ersetzen.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code zeichnet ...",
            "Im Gegensatz zum ursprünglichen Code wird ...",
          ],
          hints: [
            "Der Befehl <code class='code-dark'>right(45)</code> dreht die Turtle um 45 Grad nach rechts, während <code class='code-dark'>right(90)</code> sie um 90 Grad nach rechts dreht.",
          ],
        },
        {
          task: "Führen Sie die beiden vorherigen Änderungen nacheinander durch und überprüfen Sie Ihre Vorhersagen, indem Sie den Code jeweils ausführen.",
          answerType: "none",
        },
        {
          task: "Fügen Sie wieder den ursprünglichen Code ein. Ändern Sie den Code so ab, dass statt der Buchstaben <code class='code-dark'>a</code> und <code class='code-dark'>b</code> die Variablen <code class='code-dark'>x</code> und <code class='code-dark'>y</code> verwendet werden. Beschreiben Sie anschließend, was Sie geändert haben und warum der Code weiterhin funktioniert.",
          answerType: "textLong",
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Schreiben Sie nun Code, der die gleiche Grafik zeichnet wie der ursprüngliche Code, aber die Farben in umgekehrter Reihenfolge verwendet (also zuerst gelb, dann grün, dann blau, dann rot).",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie die Farbnamen in den <code class='code-dark'>pencolor()</code>-Funktionen an.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der statt der vier Seiten eines Quadrats die drei Seiten eines Dreiecks zeichnet. Verwenden Sie dabei die Farben rot, grün und blau.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie diesen an.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der statt der vier Seiten eines Quadrats die sechs Seiten eines Sechsecks zeichnet. Verwenden Sie dabei die Farben rot, orange, gelb, grün, blau und violett. Außerdem soll die Seitenlänge 50 Pixel betragen.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie diesen an.",
          ],
        },
        {
          task: "Passen Sie den Code aus der vorherigen Aufgabe so an, dass Sie die Seitenlänge nur noch an einer einzigen Stelle im Code ändern müssen, falls Sie die Seitenlänge anpassen möchten.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie diesen an.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der statt der vier Seiten eines Quadrats die acht Seiten eines Achtecks zeichnet. Verwenden Sie dabei die Farben rot, orange, gelb, grün, blau, indigo, violett und pink. Außerdem soll die Seitenlänge 75 Pixel betragen.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie diesen an.",
          ],
        },
      ],
    },
  ],
});
