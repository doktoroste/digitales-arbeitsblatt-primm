worksheets.push({
  titleShort: "pythonFunktionenRechner",
  titleTechnical: "pythonFunktionenRechner",
  title:
    "Den gleichen Code nochmal: Funktionen am Beispiel eines Taschenrechners",
  description:
    "<p>In den bisherigen Arbeitsblättern haben wir Code geschrieben, der einmal ausgeführt wird und dann seinen Zweck erfüllt hatte. Möchte man jedoch Code mehrfach verwenden, ohne ihn jedes Mal neu zu schreiben, kommen <strong>Funktionen</strong> ins Spiel.</p><p>Funktionen sind Codeblöcke, die eine bestimmte Aufgabe erfüllen und bei Bedarf <strong>aufgerufen</strong> werden können. Sie helfen dabei, den Code übersichtlicher zu gestalten und Wiederholungen zu vermeiden.</p><p>Ein klassisches Beispiel für die Nutzung von Funktionen ist ein Taschenrechner: So lassen sich für die Grundrechenarten einzelne Funktionen definieren, die bei Bedarf aufgerufen werden können.</p><p>Funktionen haben noch einen Vorteil: Sie können <strong>Parameter</strong> entgegennehmen, also Eingabewerte, die die Funktion benötigt, um ihre Aufgabe zu erfüllen. Dadurch wird die Funktion flexibler und Code kann mit unterschiedlichen Werten ausgeführt werden.</p>",
  image: "img/taschenrechner.jpg",
  imageDescription:
    'Foto: <a href="https://unsplash.com/de/@alefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Lefler</a> auf <a href="https://unsplash.com/de/fotos/ein-taschenrechner-sitzt-auf-einem-blatt-papier-ySZdYkPGEbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  imageAlt: "Ein Taschenrechner sitzt auf einem Blatt Papier.",
  code: {
    python:
      'def addition(a, b):\n    return a + b\n\ndef subtraktion(a, b):\n    return a - b\n\nwhile True:\n    a = float(input("Gib die erste Zahl ein: "))\n    b = float(input("Gib die zweite Zahl ein: "))\n    berechnung = input("Welche Berechnung möchtest du durchführen? (1: Addition, 2: Subtraktion): ")\n    if berechnung == "1":\n        ergebnis = addition(a, b)\n        print("Das Ergebnis der Addition ist:", ergebnis)\n    elif berechnung == "2":\n        ergebnis = subtraktion(a, b)\n        print("Das Ergebnis der Subtraktion ist:", ergebnis)\n    else:\n        print("Ungültige Eingabe. Bitte wähle 1 oder 2.")',
  },
  codeFilename: {
    python: "pythonFunktionenRechner.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">input</span>()</code>',
        content:
          "Mit dieser Funktion wird der Benutzer aufgefordert, einen Wert einzugeben. Dieser kann anschließend beispielsweise in einer Variable gespeichert werden.",
      },
      {
        title: '<code class="code-dark">==</code>',
        content:
          "Mit diesem Operator wird überprüft, ob zwei Werte gleich sind. Wenn dies der Fall ist, wird der folgende Codeblock ausgeführt.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">or</span></code>',
        content:
          "Mit dem Schlüsselwort <code class='code-dark'>or</code> können mehrere Bedingungen in einer <code class='code-dark'>if</code>-Anweisung kombiniert werden. Wenn eine der Bedingungen wahr ist, wird der folgende Codeblock ausgeführt.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">print</span>()</code>',
        content:
          "Mit dieser Funktion wird der in den Klammern angegebene Wert auf der Konsole ausgegeben. Möchte man Text ausgeben, muss dieser in Anführungszeichen gesetzt werden.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">elif</span></code>',
        content:
          "Mit dieser Funktion wird eine weitere Bedingung in einer <code class='code-dark'>if</code>-Anweisung hinzugefügt. Wenn die vorherige Bedingung nicht erfüllt ist, wird diese Bedingung überprüft.",
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
          task: "Nennen Sie die Ausgabe, die bei der Eingabe von <code class='code-dark'>Freitag</code> erscheint.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "Wochenende!",
              correct: false,
              feedbackText:
                "Bei der Eingabe von <code class='code-dark'>Freitag</code> wird die Ausgabe <code class='code-dark'>Fast Wochenende!</code> erscheinen. Dies liegt daran, dass die Bedingung in der <code class='code-dark'>elif</code>-Anweisung erfüllt ist, wenn der eingegebene Wert <code class='code-dark'>Freitag</code> ist.",
            },
            {
              text: "Fast Wochenende!",
              correct: true,
              feedbackText:
                "Bei der Eingabe von <code class='code-dark'>Freitag</code> wird die Ausgabe <code class='code-dark'>Fast Wochenende!</code> erscheinen. Dies liegt daran, dass die Bedingung in der <code class='code-dark'>elif</code>-Anweisung erfüllt ist, wenn der eingegebene Wert <code class='code-dark'>Freitag</code> ist.",
            },
            {
              text: "Noch ein Arbeitstag.",
              correct: false,
              feedbackText:
                "Bei der Eingabe von <code class='code-dark'>Freitag</code> wird die Ausgabe <code class='code-dark'>Fast Wochenende!</code> erscheinen. Dies liegt daran, dass die Bedingung in der <code class='code-dark'>elif</code>-Anweisung erfüllt ist, wenn der eingegebene Wert <code class='code-dark'>Freitag</code> ist.",
            },
          ],
        },
        {
          task: "Beschreiben Sie in eigenen Worten, was der Code macht.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code fragt die Benutzer*innen nach ...",
            "Der Wert aus der Eingabe wird ...",
            "Anschließend wird überprüft, ob ...",
            "Ist dies nicht der Fall, wird überprüft, ob ...",
            "Trifft das auch nicht zu, dann ...",
            "... wird ... ausgegeben.",
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
          task: "Nennen Sie den Namen der Funktion, mit der Eingaben von Benutzer*innen abgefragt werden können.",
          answerType: "textShortCheckable",
          correctAnswers: ["input", "input()"],
          feedbackText:
            "Die Funktion <code class='code-dark'>input()</code> wird verwendet, um Eingaben von Benutzer*innen abzufragen.",
          hints: ["Gucken Sie sich die erste Zeile des Codes an."],
        },
        {
          task: "Nennen Sie den Operator, mit dem man mehrere Bedingungen in einer <code class='code-dark'>if</code>-Anweisung verknüpfen kann, falls mindestens eine der Bedingungen wahr ist.",
          answerType: "textShortCheckable",
          correctAnswers: ["or", "Or"],
          hints: [
            "Gucken Sie sich die Bedingung in der <code class='code-dark'>if</code>-Anweisung in Zeile 2 an.",
          ],
        },
        {
          task: "Nennen Sie den Operator, mit dem man mehrere Bedingungen in einer <code class='code-dark'>if</code>-Anweisung verknüpfen kann, falls alle Bedingungen wahr sind.",
          answerType: "textShortCheckable",
          correctAnswers: ["and", "And"],
          feedbackText:
            "Der Operator <code class='code-dark'>and</code> wird verwendet, um mehrere Bedingungen in einer <code class='code-dark'>if</code>-Anweisung zu verknüpfen, falls alle Bedingungen wahr sein müssen.",
          hints: [
            "Überlegen Sie sich, welcher Operator das Gegenstück zu <code class='code-dark'>or</code> ist.",
          ],
        },
        {
          task: "Nennen Sie den Operator, mit dem man eine weitere Prüfung in einer <code class='code-dark'>if</code>-Anweisung hinzufügen kann, falls die vorherige Bedingung nicht erfüllt ist.",
          answerType: "textShortCheckable",
          correctAnswers: ["elif", "Elif", "else if", "Else if"],
          feedbackText:
            "Der Operator <code class='code-dark'>elif</code> wird verwendet, um eine weitere Prüfung in einer <code class='code-dark'>if</code>-Anweisung hinzuzufügen, falls die vorherige Bedingung nicht erfüllt ist.",
          hints: [
            "Lesen Sie sich den Einführungstext am Beginn des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Nennen Sie den Namen der Funktion, mit der Ausgaben auf der Konsole angezeigt werden können.",
          answerType: "textShortCheckable",
          correctAnswers: ["print", "print()"],
          feedbackText:
            "Die Funktion <code class='code-dark'>print()</code> wird verwendet, um Ausgaben auf der Konsole anzuzeigen.",
          hints: ["Gucken Sie sich die Zeilen 3, 5 und 7 des Codes an."],
        },
        {
          task: "Beschreiben Sie den Unterschied zwischen der <code class='code-dark'>if</code>-Anweisung in Zeile 2 und der <code class='code-dark'>elif</code>-Anweisung in Zeile 5.",
          answerType: "text",
          hints: [
            "Überlegen Sie, unter welchen Bedingungen der Code darüber ausgeführt wird.",
            "Denken Sie daran, dass der Code in Zeile 11 unter der <code class='code-dark'>else</code>-Anweisung eingerückt ist.",
            "Wofür könnte das Schlüsselwort <code class='code-dark'>else</code> stehen?",
          ],
          phrasingHelpers: [
            "Der Code in Zeile 11 wird nur dann ausgeführt, wenn ...",
            "Ermöglicht wird dies durch die das Schlüsselwort ... in Zeile ...",
          ],
        },
        {
          task: 'Vergleichen Sie den ursprünglichen Code mit dem folgenden Code. Was wurde hier anders programmiert? Würde der Code anders funktionieren oder gleiche Ergebnisse ausgeben? Begründen Sie Ihre Antwort.<br/><br/><pre>a = input("Gib hier einen Wochentag ein:")\nif a == "Samstag" or a == "Sonntag":\n    print("Wochenende!")\nelse:\n    if a == "Freitag":\n        print("Fast Wochenende!")\n    else:\n        print("Noch ein Arbeitstag.")</pre>',
          answerType: "text",
          hints: [
            "Überlegen Sie, wie viele Bedingungen in beiden Codes überprüft werden.",
          ],
          phrasingHelpers: [
            "Der ursprüngliche Code überprüft mithilfe einer ...",
            "Die alternative Version überprüft mithilfe von ...",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: "Ergänzen Sie den Code um weitere Verzweigungen, so dass für jeden Wochentag eine eigene Ausgabe erscheint.",
          answerType: "code",
          hints: [
            "Kopieren Sie die <code class='code-dark'>elif</code>-Anweisung und passen Sie die Bedingung und die Ausgabe entsprechend an.",
            "Eine zusätzliche <code class='code-dark'>elif</code>-Anweisung könnte so aussehen: <code class='code-dark'>elif a == \"Montag\":</code>",
          ],
        },
        {
          task: "Aktuell wird die Eingabe der Nutzer*innen in der Variable <code class='code-dark'>a</code> gespeichert. Beschreiben Sie einen Vor- und Nachteil dieser Variablenbenennung und geben Sie einen Vorschlag für einen besseren Namen an.",
          answerType: "text",
          hints: [
            "Überlegen Sie, ob der Name der Variable aussagekräftig ist.",
            "Überlegen Sie, ob der Name der Variable kurz und einfach zu schreiben ist.",
            "Würde eine andere Person direkt verstehen, was in der Variable gespeichert ist?",
          ],
          phrasingHelpers: [
            "Ein Vorteil des Variablennamens a ist, ...",
            "Allerdings hat der Name auch den Nachteil, dass ...",
            "Ein besserer Name für die Variable wäre ...",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      helpers: [
        {
          title: "Notentabelle",
          content:
            "<table class='table table-sm'><tr><th>Note</th><th>NP</th><th>ab Prozent</th></tr><tr><td>sehr gut (1+)</td><td>15</td><td>95 %</td></tr><tr><td>sehr gut (1)</td><td>14</td><td>90 %</td></tr><tr><td>sehr gut (1-)</td><td>13</td><td>85 %</td></tr><tr><td>gut (2+)</td><td>12</td><td>80 %</td></tr><tr><td>gut (2)</td><td>11</td><td>75 %</td></tr><tr><td>gut (2-)</td><td>10</td><td>70 %</td></tr><tr><td>befriedigend (3+)</td><td>9</td><td>65 %</td></tr><tr><td>befriedigend (3)</td><td>8</td><td>60 %</td></tr><tr><td>befriedigend (3-)</td><td>7</td><td>55 %</td></tr><tr><td>ausreichend (4+)</td><td>6</td><td>50 %</td></tr><tr><td>ausreichend (4)</td><td>5</td><td>45 %</td></tr><tr><td>ausreichend (4-)</td><td>4</td><td>40 %</td></tr <tr><td>mangelhaft (5+)</td><td>3</td><td>33 %</td></tr><tr><td>mangelhaft (5)</td><td>2</td><td>27 %</td></tr><tr><td>mangelhaft (5-)</td><td>1</td><td>20 %</td></tr><tr><td>ungenügend (6)</td><td>0</td><td>&lt; 20 %</td></tr></table>",
        },
      ],
      subtasks: [
        {
          task: 'Schreiben Sie ein Programm, das eine Eingabe fordert, in der Notenpunkte eingegeben werden soll (Zahlenwerte zwischen 0 und 15). Über die Ausgabe sollen diese Notenpunkte in den Namen der Note (z. B. "befriedigend (plus), befriedigend, befriedigend (minus)") umgewandelt werden. Nutzen Sie die Tabelle auf der rechten Seite als Hilfe. Tipp: Nutzen Sie die Funktion int(), um eine Eingabe aus der input-Funktion in eine Zahl umzuwandeln, z. B. <code class=\'code-dark\'>notenpunkte = int(input("Notenpunkte: "))</code>',
          answerType: "code",
        },
        {
          task: "Passen Sie den Code aus der vorherigen Ausgabe so an, dass sichergestellt wird, dass die Eingabe tatsächlich nur eine Zahl zwischen 0 und 15 ist. Lassen Sie ansonsten eine Fehlermeldung ausgeben.",
          answerType: "code",
          hints: [
            "Nutzen Sie die Ihre bisherigen Lösungen aus den vorherigen Arbeitsblättern und ergänzen Sie diese um eine Verzweigung.",
          ],
        },
        {
          task: "Passen Sie den Code aus der vorherigen Ausgabe so an, dass nach der Ausgabe wieder nach der Eingabe gefragt wird. Dies können Sie mit einer <code class='code-dark'>while</code>-Schleife ermöglichen, die immer wieder ausgeführt wird, bis die Nutzer*innen eine bestimmte Eingabe machen (z. B. <code class='code-dark'>exit</code>).",
          answerType: "code",
          hints: [
            "Der Schleifenkopf könnte so aussehen: <code class='code-dark'>while True:</code>",
            "Nutzen Sie das Schlüsselwort <code class='code-dark'>break</code>, um die Schleife zu beenden, wenn die Nutzer*innen <code class='code-dark'>exit</code> eingeben.",
          ],
        },
        {
          task: "<em>Zusatzaufgabe:</em> Ergänzen Sie das Programm so, dass es zuerst eine Eingabe der maximal erreichbaren BE bzw. Punkte aus einer Klausur abfragt, dann die erreichten BE bzw. Punkte und anschließend anhand dieser Punktzahl die Notenpunkte berechnet.",
          answerType: "code",
          hints: [
            "Die Formel zur Berechnung der erreichten Prozentzahl lautet: <code class='code-dark'>(erreichte_punkte / maximale_punkte) * 100</code>",
          ],
        },
      ],
    },
  ],
});
