worksheets.push({
  titleShort: "pythonFunktionen",
  titleTechnical: "pythonFunktionen",
  title:
    "Den gleichen Code nochmal: Funktionen am Beispiel eines Getränkeautomaten",
  description:
    "<p>In den bisherigen Arbeitsblättern haben wir Code geschrieben, der einmal ausgeführt wird und dann seinen Zweck erfüllt hatte. Möchte man jedoch Code mehrfach verwenden, ohne ihn jedes Mal neu zu schreiben, kommen <strong>Funktionen</strong> ins Spiel.</p><p>Funktionen sind Codeblöcke, die eine bestimmte Aufgabe erfüllen und bei Bedarf <strong>aufgerufen</strong> werden können. Sie helfen dabei, den Code übersichtlicher zu gestalten und Wiederholungen zu vermeiden.</p><p>Funktionen haben noch einen Vorteil: Sie können <strong>Parameter</strong> entgegennehmen, also Eingabewerte, die die Funktion benötigt, um ihre Aufgabe zu erfüllen. Dadurch wird die Funktion flexibler und Code kann mit unterschiedlichen Werten ausgeführt werden.</p>",
  image: "img/automat.jpg",
  imageDescription:
    'Foto: <a href="https://unsplash.com/de/@heyquilia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kenny Eliason</a> auf <a href="https://unsplash.com/de/fotos/coca-cola-und-coca-cola-flaschen-im-schwarzen-automaten-C0V7dWFVnec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  imageAlt: "Ein Snack- sowie ein Getränkeautomat.",
  code: {
    python:
      'def berechne_preis(getraenk, menge):\n    if getraenk == "wasser":\n        preis = 1.00\n    elif getraenk == "saft":\n        preis = 1.50\n    elif getraenk == "cola":\n        preis = 2.00\n    else:\n        preis = 0\n\n    return preis * menge\n\nprint(berechne_preis("wasser", 2))\nprint(berechne_preis("saft", 1))\nprint(berechne_preis("cola", 3))',
  },
  codeFilename: {
    python: "automat.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">def</span></code>',
        content:
          "Mit diesem Schlüsselwort wird eine Funktion definiert. Der Name der Funktion folgt direkt danach, gefolgt von Klammern, in denen die Parameter der Funktion angegeben werden können. Wenn keine Parameter benötigt werden, bleiben die Klammern leer.",
      },
      {
        title: '<code class="code-dark">return</code>',
        content:
          "Mit diesem Schlüsselwort wird der Rückgabewert einer Funktion festgelegt. Der Wert, der nach <code class='code-dark'>return</code> steht, wird an den Aufrufer der Funktion zurückgegeben.",
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
          task: 'Nennen Sie die Ausgabe der Funktion <code class="code-dark">berechne_preis</code>, die bei der Eingabe von <code class="code-dark">("saft", 3)</code> zurückgegeben wird.',
          answerType: "textShortCheckable",
          correctAnswers: ["4.5", "4,5"],
          feedbackText:
            "Die Funktion gibt bei der Eingabe von <code>(&quot;saft&quot;, 3)</code> den Wert 4.5 zurück, da der Preis für Saft 1.50 beträgt und dieser mit der Menge 3 multipliziert wird (1.50 * 3 = 4.5). Achten Sie darauf, dass Kommazahlen in den meisten Programmiersprachen mit einem Punkt geschrieben werden.",
          hints: [
            "Prüfen Sie, welcher Code in der Verzweigung für die Eingabe <code class='code-dark'>'saft'</code> ausgeführt wird.",
          ],
        },
        {
          task: "Beschreiben Sie in eigenen Worten, was der Code macht.",
          answerType: "text",
          phrasingHelpers: [
            "Es wird eine Funktion mit dem Namen ... definiert.",
            "Diese akzeptiert zwei Parameter namens ... und ...",
            "In der Funktion wird überprüft, ob ...",
            "Ist dies nicht der Fall, wird überprüft, ob ...",
            "Am Ende der Funktion wird ... zurückgegeben.",
            "Außerhalb der Funktion wird diese mit den Werten ... aufgerufen.",
          ],
        },
        {
          task: "Nennen Sie die Ausgabe des gesamten Codes, wenn er ausgeführt wird.",
          answerType: "text",
          hints: [
            "Der Code ruft die Funktion <code class='code-dark'>berechne_preis</code> dreimal auf, jeweils mit unterschiedlichen Eingabewerten.",
            "Berechnen Sie die Ausgabe für jeden Funktionsaufruf einzeln und notieren Sie diese.",
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
          task: "Führen Sie den Code in einem Python-Interpreter aus. Nutzen Sie dazu auf Ihrem PC das Programm <strong>Visual Studio Code</strong>. Falls Sie auf einem Tablet oder Smartphone arbeiten, kopieren Sie den Code in einen Online-Editor wie den auf <a href='https://inf-schule.de/tools/python-turtle' target='_blank'>inf-schule.de</a>.",
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
          task: "Nennen Sie das Schlüsselwort, mit dem eine Funktion in Python definiert wird.",
          answerType: "textShortCheckable",
          correctAnswers: ["def"],
          feedbackText:
            "Das Schlüsselwort <code class='code-dark'>def</code> wird verwendet, um eine Funktion in Python zu definieren.",
          hints: ["Gucken Sie sich die erste Zeile des Codes an."],
        },
        {
          task: "Nennen Sie den Fachbegriff für die Werte, die einer Funktion übergeben werden, damit sie ihre Aufgabe erfüllen kann.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Argumente",
            "Argument",
            "Parameter",
            "Parameterwerte",
          ],
          feedbackText:
            "Die Werte, die einer Funktion übergeben werden, damit sie ihre Aufgabe erfüllen kann, werden als <strong>Argumente</strong> oder <strong>Parameter</strong> bezeichnet.",
          hints: [
            "Lesen Sie den Einführungstext am Beginn des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Nennen Sie das Schlüsselwort, mit dem eine Funktion in Python einen Wert zurückgibt.",
          answerType: "textShortCheckable",
          correctAnswers: ["return"],
          feedbackText:
            "Das Schlüsselwort <code class='code-dark'>return</code> wird verwendet, um einen Wert aus einer Funktion zurückzugeben. Werden hinter return noch Berechnungen und/oder Variablen angegeben, so wird deren Wert ausgerechnet und erst dann zurückgegeben.",
          hints: ["Gucken Sie sich die Zeile 11 des Codes an."],
        },
        {
          task: "Beschreiben Sie, wann der <code>else</code>-Code in Zeile 11 aufgerufen wird und weshalb dies sinnvoll ist.",
          answerType: "text",
          hints: [
            "Überlegen Sie, welche Bedingungen in den vorherigen <code class='code-dark'>if</code>- und <code class='code-dark'>elif</code>-Anweisungen überprüft werden.",
            "Überlegen Sie, was passiert, wenn keine der vorherigen Bedingungen erfüllt ist.",
          ],
          phrasingHelpers: [
            "Der Code in Zeile 11 wird nur dann ausgeführt, wenn ...",
          ],
        },
        {
          task: "Beschreiben Sie den Vorteil von Funktionen im Vergleich zu herkömmlichem Code.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie oft die Funktion im Beispielcode verwendet wird.",
            "Überlegen Sie, wie der Code aussehen würde, wenn die Funktion nicht verwendet werden würde.",
          ],
          phrasingHelpers: [
            "Der Code in Zeile 11 wird nur dann ausgeführt, wenn ...",
            "Ermöglicht wird dies durch die das Schlüsselwort ... in Zeile ...",
          ],
        },
        {
          task: "Vergleichen Sie die im Code genutzten Werte, die in den Variablen <code class='code-dark'>getraenk</code>, <code class='code-dark'>menge</code> und <code class='code-dark'>preis</code> gespeichert werden. Falls Sie bereits die Fachbegriffe für die Art von Werten kennen, nennen Sie diese. Falls nicht, beschreiben Sie die Art der Werte.",
          answerType: "text",
          hints: [
            "Überlegen Sie, welche Art von Werten in den jeweiligen Variablen gespeichert werden (z. B. Text, Zahlen, Wahrheitswerte).",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: "Ergänzen Sie den Code um mindestens drei weitere Getränke oder Snacks.",
          answerType: "code",
          hints: [
            "Kopieren Sie die <code class='code-dark'>elif</code>-Anweisung und passen Sie die Bedingung und die Ausgabe entsprechend an.",
            "Eine zusätzliche <code class='code-dark'>elif</code>-Anweisung könnte so aussehen: <code class='code-dark'>elif getraenk == \"Energy\":</code>",
          ],
        },
        {
          task: "Aktuell lassen sich noch negative Mengen angeben. Ergänzen Sie den Code um eine Überprüfung, sodass nur positive Mengen akzeptiert werden. Lassen Sie ansonsten einen Preis von 0 Euro zurückgeben.",
          answerType: "code",
          hints: [
            "Nutzen Sie eine <code class='code-dark'>if</code>-Anweisung, um zu überprüfen, ob die Menge negativ ist.",
            "Die Überprüfung könnte so aussehen: <code class='code-dark'>if menge &lt; 0:</code>",
            "Die Überprüfung muss vor der Berechnung des Preises stattfinden.",
          ],
        },
        {
          task: "Ergänzen Sie den Code um eine zweite Funktion mit dem Namen <code class='code-dark'>zeige_preis(getraenk, wasser)</code>, in der die Funktion berechne_preis aufgerufen wird und zusätzlich zum Preis auch eine kurze Zusammenfassung der Bestellung zurückgegeben wird, z. B. <em>2 Mal Wasser kosten 2 Euro</em>. Lassen Sie die Zusammenfassung weiterhin mit <code class='code-dark'>return</code> zurückgeben und rufen Sie die Funktion beispielhaft auf.",
          answerType: "code",
          hints: [
            "Nutzen Sie die Funktion <code class='code-dark'>berechne_preis</code> innerhalb der neuen Funktion, um den Preis zu berechnen.",
            "Sie können die Parameter der neuen Funktion direkt in den Aufruf der alten Funktion übergeben.",
          ],
        },
        {
          task: "<em>Zusatzaufgabe</em>: Ergänzen Sie den Code so, dass der User durchgehend nach einem Getränk und der Menge gefragt wird, bis er das Programm beendet. Nutzen Sie dazu eine Endlosschleife. Geben Sie dem User vor der Eingabe eine Übersicht über alle verfügbaren Getränke. Aufgerufen werden soll die Funktion <code class='code-dark'>zeige_preis</code>, die Sie in der vorherigen Aufgabe erstellt haben.",
          answerType: "code",
          hints: [
            "Nutzen Sie eine <code class='code-dark'>while</code>-Schleife, um den Code immer wieder auszuführen.",
            "Nutzen Sie das Schlüsselwort <code class='code-dark'>break</code>, um die Schleife zu beenden, wenn der User eine bestimmte Eingabe macht (z. B. <code class='code-dark'>'exit'</code>).",
            "Fragen Sie den User mit der <code class='code-dark'>input</code>-Funktion nach dem Getränk und der Menge.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Schreiben Sie ein Programm, das die einfache Verwaltung eines Bankkontos ermöglicht. Erstellen Sie dazu die Funktionen <code class='code-dark'>einzahlen(betrag)</code>, <code class='code-dark'>abheben(betrag)</code> und <code class='code-dark'>kontostand_anzeigen()</code>. Nutzen Sie eine Variable, um den Kontostand zu speichern. Achten Sie auf Sonderfälle wie z. B. das Abheben bei nicht gedecktem Kontostand. Testen Sie Ihre Funktionen mit Beispielwerten.",
          answerType: "code",
        },
        {
          task: '<em>Zusatzaufgabe:</em> Schreiben Sie ein Programm, das Funktionen zum Umrechnen von Einheiten beinhaltet. Erstellen Sie dazu mindestens die Funktionen <code class="code-dark">celsius_to_fahrenheit(celsius)</code>, die eine Temperatur in Celsius entgegennimmt und diese in Fahrenheit umrechnet, <code class="code-dark">fahrenheit_to_celsius(fahrenheit)</code>, <code class="code-dark">km_to_m(kilometer)</code>, <code class="code-dark">m_to_km(meter)</code>. Recherchieren Sie ggf. die Umrechnungsformeln im Internet. Testen Sie Ihre Funktionen mit Beispielwerten. Ergänzen Sie das Programm um weitere Umrechnungsfunktionen.',
          answerType: "code",
        },
      ],
    },
  ],
});
