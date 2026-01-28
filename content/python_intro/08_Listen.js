worksheets.push({
  titleShort: "pythonListen",
  titleTechnical: "pythonListen",
  title: "Wenn ein einzelner Wert nicht ausreicht: Listen in Python",
  description:
    '<p>Ob zum Speichern einer Zahl, eines Textes oder eines Preises im Getränkeautomaten: Bisher haben wir Variablen genutzt, die zwar überschrieben werden können, aber nicht mehrere Werte gleichzeitig speichern können. Ob nun Zahlen, Namen oder Preise: In der echten Welt kommen wir nur selten mit einem einzigen Wert aus.</p><p>In Python gibt es mehrere Möglichkeiten, um mehrere Werte in einer einzigen Variable zu speichern: <strong>Listen</strong> (Arrays), <strong>Tupel</strong>, <strong>Sets</strong> und <strong>Dictionaries</strong>.</p><p>Die einfachste, gleichzeitig mächtigste und deshalb wohl am häufigsten genutzte Möglichkeit sind <strong>Listen</strong>. Listen können beliebig viele Werte speichern, die über ihren <strong>Index</strong> angesprochen werden können.</p><p><pre><code>flixtrain = ["wagen0", "wagen1", "wagen2", "wagen3"]</code></pre></p>',
  image: "img/flixtrain.jpg",
  imageDescription:
    "Listen in Python verhalten sich ähnlich wie Züge mit Waggons – warum, das werden Sie im Code sehen.",
  imageAlt: "Eine Flixtrain mit mehreren Waggons im Berliner Hauptbahnhof.",
  code: {
    python:
      "reservierungen = [24, 30, 28, 32, 26]\n\nprint(reservierungen[0])\n\nprint(reservierungen[2:])\n\nreservierungen.insert(3, 18)\nprint(reservierungen)\n\nreservierungen.remove(32)\nprint(reservierungen)\n\nreservierungen.append(29)\nprint(reservierungen[-1])\n\nreservierungen.pop()\nprint(reservierungen)",
  },
  codeFilename: {
    python: "liste.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: '<code class="code-dark">[4, 2, 6, 3]</code>',
        content:
          "Eine Liste ist eine Sammlung von Werten, die in eckigen Klammern <code class='code-dark'>[ ]</code> geschrieben werden. Die einzelnen Werte werden durch Kommas getrennt. In diesem Beispiel enthält die Liste die Zahlen 4, 2, 6 und 3. Der erste Wert in der Liste hat den Index 0, der zweite den Index 1, und so weiter.",
      },
      {
        title: '<code class="code-dark">liste[2]</code>',
        content:
          "Um auf einen bestimmten Wert in einer Liste zuzugreifen, wird der Name der Liste gefolgt von eckigen Klammern <code class='code-dark'>[ ]</code> verwendet, in denen der Index des gewünschten Wertes angegeben wird. In diesem Beispiel greift <code class='code-dark'>liste[2]</code> auf den dritten Wert in der Liste zu (da die Zählung bei 0 beginnt).",
      },
      {
        title: '<code class="code-dark">liste[2:]</code>',
        content:
          "Um auf einen bestimmten Teil einer Liste zuzugreifen, kann der Name der Liste gefolgt von eckigen Klammern <code class='code-dark'>[ ]</code> verwendet werden, in denen der Start- und Endindex angegeben werden. In diesem Beispiel greift <code class='code-dark'>liste[2:]</code> auf alle Werte ab dem dritten Wert in der Liste zu (da die Zählung bei 0 beginnt) und gibt diese als neue Liste zurück.",
      },
      {
        title: '<code class="code-dark">liste.insert(a, b)</code>',
        content:
          "Um ein Element an einer bestimmten Stelle in einer Liste einzufügen, wird die Methode <code class='code-dark'>insert</code> verwendet. Der erste Parameter <code class='code-dark'>a</code> gibt den Index an, an dem das Element eingefügt werden soll, und der zweite Parameter <code class='code-dark'>b</code> ist der Wert, der eingefügt werden soll. In diesem Beispiel wird <code class='code-dark'>liste.insert(2, 5)</code> verwendet, um die Zahl 5 an der dritten Stelle (Index 2) in die Liste einzufügen.",
      },
      {
        title: '<code class="code-dark">liste.remove(a)</code>',
        content:
          "Um ein Element aus einer Liste zu entfernen, wird die Methode <code class='code-dark'>remove</code> verwendet. Der Parameter <code class='code-dark'>a</code> ist der Wert, der entfernt werden soll. In diesem Beispiel wird <code class='code-dark'>liste.remove(5)</code> verwendet, um die Zahl 5 aus der Liste zu entfernen.",
      },
      {
        title: '<code class="code-dark">liste.append(a)</code>',
        content:
          "Um ein Element am Ende einer Liste hinzuzufügen, wird die Methode <code class='code-dark'>append</code> verwendet. Der Parameter <code class='code-dark'>a</code> ist der Wert, der hinzugefügt werden soll. In diesem Beispiel wird <code class='code-dark'>liste.append(7)</code> verwendet, um die Zahl 7 am Ende der Liste hinzuzufügen.",
      },
      {
        title: '<code class="code-dark">liste.pop()</code>',
        content:
          "Um das letzte Element aus einer Liste zu entfernen und zurückzugeben, wird die Methode <code class='code-dark'>pop</code> verwendet. In diesem Beispiel wird <code class='code-dark'>liste.pop()</code> verwendet, um das letzte Element aus der Liste zu entfernen und zurückzugeben.",
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
          task: 'Nennen Sie die Ausgabe der <code class="code-dark">print</code>-Funktion in Zeile 3.',
          answerType: "textShortCheckable",
          correctAnswers: ["24"],
          feedbackText:
            "Die Ausgabe der <code class='code-dark'>print</code>-Funktion in Zeile 3 ist <code class='code-dark'>24</code>, da dies der erste Wert in der Liste <code class='code-dark'>reservierungen</code> ist, der über den Index <code class='code-dark'>0</code> angesprochen wird.",
          hints: [
            "In den eckigen Klammern <code class='code-dark'>[ ]</code> wird der Index des Wertes angegeben, auf den zugegriffen werden soll.",
            "Die Zählung der Indizes beginnt bei 0.",
            "Der erste Wert in der Liste hat den Index 0.",
          ],
        },
        {
          task: 'Stellen Sie eine Vermutung über die folgenden Ausgaben in Zeile 5, 8,11, 14, 15 und 17 auf. Nennen Sie jeweils die Ausgabe der <code class="code-dark">print</code>-Funktion.',
          answerType: "textLong",
          hints: [
            "Wenn Sie nicht wissen, was die einzelnen Methoden machen, schauen Sie sich die Code-Hilfen rechts vom Code an.",
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
          task: "Nennen Sie die Art der Klammern, die verwendet werden, um eine Liste in Python zu erstellen.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "[]",
            "eckige klammern",
            "eckige klammer",
            "eckige Klammern",
            "eckige Klammer",
            "Eckige Klammern",
            "Eckige Klammer",
            "[",
            "]",
            "[ ]",
          ],
          feedbackText:
            "Listen in Python werden mit <strong>eckigen Klammern</strong> <code class='code-dark'>[ ]</code> erstellt.",
          hints: ["Gucken Sie sich die erste Zeile des Codes an."],
        },
        {
          task: "Nennen Sie das Zeichen, mit dem die einzelnen Werte in einer Liste getrennt werden.",
          answerType: "textShortCheckable",
          correctAnswers: [",", "Komma", "komma"],
          feedbackText:
            "Die einzelnen Werte in einer Liste werden durch ein <strong>Komma</strong> <code class='code-dark'>,</code> getrennt.",
          hints: ["Gucken Sie sich die erste Zeile des Codes an."],
        },
        {
          task: "Beschreiben Sie, wie auf einen bestimmten Wert in einer Liste zugegriffen werden kann.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 3 auf den ersten Wert in der Liste zugegriffen wird.",
          ],
        },
        {
          task: "Beschreiben Sie, wie auf Elemente ab einer bestimmten Position in einer Liste zugegriffen werden kann.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 5 auf die Werte ab dem dritten Wert in der Liste zugegriffen wird.",
          ],
        },
        {
          task: "Beschreiben Sie, wie auf das letzte Element in einer Liste zugegriffen werden kann.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 14 auf den letzten Wert in der Liste zugegriffen wird.",
          ],
        },
        {
          task: "Erklären Sie, wie ein neuer Wert an einer bestimmten Position in einer Liste eingefügt werden kann.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 7 ein neuer Wert in der Liste eingefügt wird.",
            "Welche Parameter werden der Methode übergeben?",
          ],
        },
        {
          task: "Erklären Sie den Unterschied zwischen den Methoden <code class='code-dark'>insert()</code> und <code class='code-dark'>append()</code>.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 7 und Zeile 13 neue Werte in die Liste eingefügt werden.",
          ],
        },
        {
          task: "Nennen Sie die beiden im Code gezeigten Methoden, um Werte aus einer Liste zu entfernen, und erklären Sie den Unterschied zwischen ihnen.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie in Zeile 10 und Zeile 16 Werte aus der Liste entfernt werden.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: 'Erstellen Sie eine Liste mit den  Haltestellen auf der <a href="https://www.bvg.de/de/verbindungen/linienuebersicht/u4" target="_blank">U-Bahn-Linie 4</a> in der korrekten Reihenfolge. Die Liste soll mit der Haltestelle Nollendorfplatz enden.',
          answerType: "code",
        },
        {
          task: "Die Linie wird nun vorübergehend bis zur Haltestelle Wittenbergplatz verlängert. Schreiben Sie Code, der diese Haltestelle an das Ende der Liste anhängt.",
          answerType: "code",
        },
        {
          task: "Die Haltestelle Viktoria-Luise-Platz wird aufgrund von Bauarbeiten vorübergehend übersprungen. Schreiben Sie Code, der diese Haltestelle aus der Liste entfernt.",
          answerType: "code",
        },
        {
          task: "Die Haltestelle Wittenbergplatz wird wieder aus dem Fahrplan genommen. Schreiben Sie Code, der diese Haltestelle vom Ende der Liste entfernt.",
          answerType: "code",
        },
        {
          task: "Die Haltestelle Rathaus Schöneberg wird im Zuge eines Events kurzzeitig in Rathaus Partyberg umbenannt. Schreiben Sie Code, der diese Änderung in der Liste vornimmt.",
          answerType: "code",
        },
        {
          task: "Schreiben Sie Code, der die Anzahl der Haltestellen in der Liste ausgibt.",
          answerType: "code",
        },
        {
          task: "Die Haltestelle Viktoria-Luise-Platz wird wieder in den Fahrplan aufgenommen. Schreiben Sie Code, der diese Haltestelle an der korrekten Position in der Liste einfügt.",
          answerType: "code",
        },
        {
          task: "Am stärksten ist eine Liste, wenn sie mit einer Schleife kombiniert wird. Dazu gibt es zwei Möglichkeiten:<p><pre><code>for elem in reservierungen:\n&nbsp;&nbsp;&nbsp;&nbsp;print(elem)</code></pre></p><p><pre><code>for i in len(reservierungen):\n&nbsp;&nbsp;&nbsp;&nbsp;print(reservierungen[i])</code></pre></p>Testen Sie beide beide Varianten. Beschreiben Sie, was jeweils ausgegeben wird und erklären Sie Vorteile der jeweiligen Variante sein könnten.",
          answerType: "text",
          hints: [
            "Kopieren Sie den Code in Ihren Python-Interpreter und führen Sie ihn aus. Nutzen Sie die Liste <code class='code-dark'>reservierungen</code> aus dem ursprünglichen Code.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Erstellen Sie eine Liste, die eine beliebige Kombination von mindestens fünf ganzzahligen Werten enthält. Schreiben Sie anschließend ein Programm, das die <strong>Summe</strong> aller Werte in der Liste berechnet und ausgibt.",
          answerType: "code",
        },
        {
          task: "Erstellen Sie eine Liste, die eine beliebige Kombination von mindestens fünf ganzzahligen Werten enthält. Schreiben Sie anschließend ein Programm, das das <strong>Produkt</strong> aller Werte in der Liste berechnet und ausgibt.",
          answerType: "code",
        },
        {
          task: "Erstellen Sie eine Liste, die eine beliebige Kombination von mindestens fünf ganzzahligen Werten enthält. Schreiben Sie anschließend ein Programm, das den <strong>Durchschnitt</strong> aller Werte in der Liste berechnet und ausgibt.",
          answerType: "code",
        },
        {
          task: "Erstellen Sie eine Liste, die eine beliebige Kombination von mindestens fünf ganzzahligen Werten enthält. Schreiben Sie anschließend ein Programm, das die Liste in <strong>umgekehrter Reihenfolge</strong> ausgibt.",
          answerType: "code",
        },
        {
          task: "Programmieren Sie ein einfaches kleines Spiel <em>NumberGuesser</em>. Das Programm soll am Anfang eine Zufallszahl von 0 bis 100 erzeugen. Spielziel ist es, die Zahl zu erraten. Nach jedem Rateversuch soll ausgegeben werden, ob die Zahl über oder unter dem geratenen Wert liegt. Speichern Sie die geratene Zahlen in einer Liste und lassen Sie eine Zählvariable mitlaufen, welche die Anzahl der Versuche zählt. Sobald die Zahl korrekt erraten wurde, lasse ein Ergebnis ausgeben wie z.B. <em>Du hast die Zahl 37 korrekt erraten. Du hast 3 Versuche gebraucht. Deine Versuche waren 50, 40, 37.</em>",
          answerType: "code",
          hints: [
            "Nutzen Sie die Funktion <code class='code-dark'>import random</code> und <code class='code-dark'>random.randint(0, 100)</code>, um eine Zufallszahl zu erzeugen.",
            "Nutzen Sie eine <code class='code-dark'>while</code>-Schleife, um den Spieler so lange raten zu lassen, bis die Zahl korrekt erraten wurde.",
            "Nutzen Sie die Methode <code class='code-dark'>append()</code>, um die geratene Zahl in der Liste zu speichern.",
          ],
        },
      ],
    },
  ],
});
