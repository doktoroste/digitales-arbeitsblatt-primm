worksheets.push({
  titleShort: "pythonIntro2",
  titleTechnical: "pyIntro2",
  title:
    "Datentypen: Wie kann man die Daten in einem Social-Media-Profil speichern?",
  description:
    "<p>Stellen Sie sich vor, Sie entwickeln eine neue Social-Media-App. Damit ein Profil funktionieren kann, müssen viele Informationen gespeichert werden: Wie viele Follower jemand hat, wie lange ein Video im Durchschnitt geschaut wird, was in der Bio steht – und natürlich auch, ob ein Account verifiziert ist oder nicht.</p><p>All diese Informationen bestehen aus <strong>Daten</strong>, und um sie im Programm zu verwalten, werden <strong>Variablen</strong> benutzt. Eine Variable können Sie sich wie eine beschriftete Box vorstellen, in die das Programm einen bestimmten Wert legt. Dieser Wert kann eine Zahl sein, ein Text, eine Kommazahl oder einfach nur „wahr“ oder „falsch“. Je nach Art dieses Wertes unterscheidet man verschiedene <strong>Datentypen</strong>.</p><p>Python ist dabei sehr flexibel: Man muss vorher nicht festlegen, was für eine Art Wert in der Box gelegt werden soll. Trotzdem ist es wichtig zu verstehen, dass jede Box einen bestimmten Datentyp enthält – also eine Art, wie Python den Wert interpretiert. Zahlen werden anders verarbeitet als Texte, und Wahrheitswerte wiederum erfüllen ganz eigene Aufgaben.</p><p>In diesem Arbeitsblatt werden Sie anhand eines einfachen Social-Media-Profils untersuchen, welche verschiedenen Datentypen es gibt, wie man sie erkennt und wie man Werte in Variablen speichern, anzeigen und miteinander verbinden kann.</p>",
  image: "img/erik-lucatero-influencer-unsplash.jpg",
  imageDescription:
    'Ein Profil auf Instagram. Bild: <a href="https://unsplash.com/de/@erik_lucatero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik  Lucatero</a> auf <a href="https://unsplash.com/de/fotos/person-die-ein-android-smartphone-in-der-hand-halt-UrhMJ6kfKlo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  imageAlt: "Ein Instagram-Profil wird auf einem Smartphone aufgerufen.",
  code: {
    python:
      'follower = 931\naverage_watchtime = 3.1425\nbio = "Ich bin ein Berliner"\nverified = False\n\nprint(follower)\nprint(average_watchtime)\nprint(bio)\nprint(verified)',
  },
  codeFilename: {
    python: "pythonIntro2.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: '<code class="code-dark">follower = 931</code>',
        content:
          "Hier wird eine Variable mit dem Namen <code class='code-dark'>follower</code> erstellt und der Wert <code class='code-dark'>931</code> zugewiesen.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">print</span>(follower)</code>',
        content:
          "Mit diesem Befehl wird der Wert der Variable <code class='code-dark'>follower</code> ausgegeben.",
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
          task: "Beschreiben Sie, welche Ausgabe Sie vom Code erwarten.",
          answerType: "text",
          phrasingHelpers: [
            "Zuerst wird der Inhalt der Variable ... ausgegeben, der den Wert ... hat.",
            "Als nächstes wird ...",
            "Die Variable ... mit dem Wert ... wird ausgegeben.",
          ],
          hints: [
            "Lesen Sie den Code Zeile für Zeile durch und überlegen Sie, was jede Zeile macht.",
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
      helpers: [
        {
          title: "Datentypen",
          content:
            '<table class="table"><thead><tr><th>Datentyp</th><th>Beispiel</th></tr></thead><tbody><tr><td>Integer</td><td><code>42</code></td></tr><tr><td>Float</td><td><code>1.4243</code></td></tr><tr><td>Boolean</td><td><code>true</code></td></tr><tr><td>String</td><td><code>"Hallo Welt!"</code></td></tr><tr><td>Char</td><td><code>\'a\'</code></td></tr></tbody></table>',
        },
      ],
      subtasks: [
        {
          task: 'Welcher Datentyp wird in der Variable <code class="code-dark">follower</code> (Zeile 1) gespeichert?',
          answerType: "multipleChoice",
          choices: [
            {
              text: "Integer",
              correct: true,
              feedbackText:
                "Die Variable <code>follower</code> enthält den Wert <code>931</code>, welcher eine ganze Zahl ist. Ganze Zahlen ohne Dezimalstellen werden in Python als <strong>Integer</strong> bezeichnet.",
            },
            {
              text: "Float",
              correct: false,
              feedbackText:
                "Die Variable <code>follower</code> enthält den Wert <code>931</code>, welcher eine ganze Zahl ist. Ganze Zahlen ohne Dezimalstellen werden in Python als <strong>Integer</strong> bezeichnet.",
            },
            {
              text: "Boolean",
              correct: false,
              feedbackText:
                "Die Variable <code>follower</code> enthält den Wert <code>931</code>, welcher eine ganze Zahl ist. Ganze Zahlen ohne Dezimalstellen werden in Python als <strong>Integer</strong> bezeichnet.",
            },
            {
              text: "String",
              correct: false,
              feedbackText:
                "Die Variable <code>follower</code> enthält den Wert <code>931</code>, welcher eine ganze Zahl ist. Ganze Zahlen ohne Dezimalstellen werden in Python als <strong>Integer</strong> bezeichnet.",
            },
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Die Variable <code>follower</code> enthält den Wert <code>931</code>, welcher eine ganze Zahl ist. Ganze Zahlen ohne Dezimalstellen werden in Python als <strong>Integer</strong> bezeichnet.",
            },
          ],
        },
        {
          task: 'Welcher Datentyp wird in der Variable <code class="code-dark">average_watchtime</code> (Zeile 2) gespeichert?',
          answerType: "multipleChoice",
          choices: [
            {
              text: "Integer",
              correct: false,
              feedbackText:
                "Die Variable <code>average_watchtime</code> enthält den Wert <code>3.1425</code>, welcher eine Fließkommazahl ist. Fließkommazahlen werden in Python als <strong>Float</strong> bezeichnet.",
            },
            {
              text: "Float",
              correct: true,
              feedbackText:
                "Die Variable <code>average_watchtime</code> enthält den Wert <code>3.1425</code>, welcher eine Fließkommazahl ist. Fließkommazahlen werden in Python als <strong>Float</strong> bezeichnet.",
            },
            {
              text: "Boolean",
              correct: false,
              feedbackText:
                "Die Variable <code>average_watchtime</code> enthält den Wert <code>3.1425</code>, welcher eine Fließkommazahl ist. Fließkommazahlen werden in Python als <strong>Float</strong> bezeichnet.",
            },
            {
              text: "String",
              correct: false,
              feedbackText:
                "Die Variable <code>average_watchtime</code> enthält den Wert <code>3.1425</code>, welcher eine Fließkommazahl ist. Fließkommazahlen werden in Python als <strong>Float</strong> bezeichnet.",
            },
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Die Variable <code>average_watchtime</code> enthält den Wert <code>3.1425</code>, welcher eine Fließkommazahl ist. Fließkommazahlen werden in Python als <strong>Float</strong> bezeichnet.",
            },
          ],
        },
        {
          task: 'Welcher Datentyp wird in der Variable <code class="code-dark">bio</code> (Zeile 3) gespeichert?',
          answerType: "multipleChoice",
          choices: [
            {
              text: "Integer",
              correct: false,
              feedbackText:
                "Die Variable <code>bio</code> enthält den Wert <code>&quot;Ich bin ein Berliner&quot;</code>, welcher ein String ist. Strings werden in Python als <strong>String</strong> bezeichnet.",
            },
            {
              text: "Float",
              correct: false,
              feedbackText:
                "Die Variable <code>bio</code> enthält den Wert <code>&quot;Ich bin ein Berliner&quot;</code>, welcher ein String ist. Strings werden in Python als <strong>String</strong> bezeichnet.",
            },
            {
              text: "Boolean",
              correct: false,
              feedbackText:
                "Die Variable <code>bio</code> enthält den Wert <code>&quot;Ich bin ein Berliner&quot;</code>, welcher ein String ist. Strings werden in Python als <strong>String</strong> bezeichnet.",
            },
            {
              text: "String",
              correct: true,
              feedbackText:
                "Die Variable <code>bio</code> enthält den Wert <code>&quot;Ich bin ein Berliner&quot;</code>, welcher ein String ist. Strings werden in Python als <strong>String</strong> bezeichnet.",
            },
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Die Variable <code>bio</code> enthält den Wert <code>&quot;Ich bin ein Berliner&quot;</code>, welcher ein String ist. Strings werden in Python als <strong>String</strong> bezeichnet.",
            },
          ],
        },
        {
          task: 'Welcher Datentyp wird in der Variable <code class="code-dark">verified</code> (Zeile 4) gespeichert?',
          answerType: "multipleChoice",
          choices: [
            {
              text: "Integer",
              correct: false,
              feedbackText:
                "Die Variable <code>verified</code> enthält den Wert <code>True</code>, welcher ein Wahrheitswert ist. Wahrheitswerte werden in Python als <strong>Boolean</strong> bezeichnet.",
            },
            {
              text: "Float",
              correct: false,
              feedbackText:
                "Die Variable <code>verified</code> enthält den Wert <code>True</code>, welcher ein Wahrheitswert ist. Wahrheitswerte werden in Python als <strong>Boolean</strong> bezeichnet.",
            },
            {
              text: "Boolean",
              correct: true,
              feedbackText:
                "Die Variable <code>verified</code> enthält den Wert <code>True</code>, welcher ein Wahrheitswert ist. Wahrheitswerte werden in Python als <strong>Boolean</strong> bezeichnet.",
            },
            {
              text: "String",
              correct: false,
              feedbackText:
                "Die Variable <code>verified</code> enthält den Wert <code>True</code>, welcher ein Wahrheitswert ist. Wahrheitswerte werden in Python als <strong>Boolean</strong> bezeichnet.",
            },
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Die Variable <code>verified</code> enthält den Wert <code>True</code>, welcher ein Wahrheitswert ist. Wahrheitswerte werden in Python als <strong>Boolean</strong> bezeichnet.",
            },
          ],
        },
        {
          task: "Nennen Sie die erwartete Ausgabe des Befehls <code class='code-dark'>print(follower+average_watchtime)</code>.",
          answerType: "textShortCheckable",
          correctAnswers: ["934,1425", "934.1425"],
          feedbackText:
            "Die Funktion addiert die beiden Werte der Variablen <code class='code-dark'>follower</code> (Integer) und <code class='code-dark'>average_watchtime</code> (Float). Da es sich bei beiden Datentypen um Zahlen handelt, ist das Ergebnis ebenfalls eine Float-Zahl.",
          hints: [
            "Die Funktion <code class='code-dark'>print()</code> löst erst mögliche Berechnungen innerhalb der Klammern, bevor sie das Ergebnis ausgibt.",
            "Die Addition von Integer und Float ergibt immer eine Float-Zahl.",
          ],
        },
        {
          task: "Führen Sie den Befehl in Python aus und überprüfen Sie Ihre Vorhersage.",
          answerType: "none",
          hints: [
            "Kopieren Sie den Befehl und ersetzen Sie die bisherigen <code>print</code>-Befehle durch den neuen Befehl. Führen Sie den Code in Visual Studio Code aus.",
          ],
        },
        {
          task: "Beschreiben Sie die erwartete Ausgabe des Befehls <code class='code-dark'>print(follower+bio)</code>.",
          answerType: "text",
          hints: [
            "Hier wird versucht, eine Zahl (Integer) mit einem Text (String) zu addieren.",
            "In Python können Zahlen und Texte nicht einfach miteinander kombiniert werden.",
          ],
        },
        {
          task: "Führen Sie den Befehl in Python aus und überprüfen Sie Ihre Vorhersage.",
          answerType: "none",
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      description:
        "<p>In nahezu jeder Programmiersprache gibt es ein sogenanntes <strong>Typecasting</strong>, mit dem man einen Datentyp in einen anderen umwandeln kann.</p><p>In Python gibt es dafür die Funktionen <code class='code-dark'>int()</code>, <code class='code-dark'>float()</code>, <code class='code-dark'>str()</code> und <code class='code-dark'>bool()</code>:</p><p><pre><code>str(follower) # gibt \"931\" zurück\nint(\"42\") # gibt 42 zurück\nbool(1) # gibt True zurück</code></pre>",
      subtasks: [
        {
          task: "Ergänzen Sie den Code <code class='code-dark'>print(follower+bio)</code> so, dass eine korrekte Ausgabe erzeugt wird.",
          answerType: "code",
          hints: [
            "Nutzen Sie eine der oben genannten Typecasting-Funktionen.",
            "Überlegen Sie sich, ob es sinnvoller ist, die Zahl in einen Text umzuwandeln oder den Text in eine Zahl.",
            "Eine beispielhafte Umwandlung einer Variable in einen String: <code class='code-dark'>str(follower)</code>.",
          ],
        },
        {
          task: "Ergänzen Sie den ursprünglichen Code um eine Funktion, die die Anzahl der Follower und die durchschnittliche Watchtime ausgibt, ohne die beiden Zahlen zu addieren.",
          answerType: "code",
          hints: [
            "Nutzen Sie eine der oben genannten Typecasting-Funktionen.",
            "Nutzen Sie die Variablen <code class='code-dark'>follower</code> und <code class='code-dark'>average_watchtime</code>.",
            "Wandeln Sie beide Variablen in Strings um, bevor Sie sie miteinander verbinden.",
          ],
        },
        {
          task: "Ergänzen Sie den Code, so dass mithilfe eines <code>print</code>-Befehls alle Informationen des Profils in einem Satz ausgegeben werden.",
          answerType: "code",
          hints: [
            "Beispiel-Ausgabe: <code class='code-dark'>Dieser Account hat 931 Follower, eine durchschnittliche Watchtime von 3.1425 Minuten, die Bio 'Ich bin ein Berliner' und hat den Verifikations-Status False.</code>",
            "Nutzen Sie die Variablen <code class='code-dark'>follower</code>, <code class='code-dark'>average_watchtime</code>, <code class='code-dark'>bio</code> und <code class='code-dark'>verified</code>.",
            "Wandeln Sie alle Variablen in Strings um, bevor Sie sie miteinander verbinden.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: 'Ergänzen Sie den folgenden Code so, dass die Summe aller vier Variablen ausgegeben wird:<pre><code>zahl1 = 15\nzahl2 = "20"\nzahl3 = 7.5</code></pre>',
          answerType: "code",
          hints: [
            "Überlegen Sie sich, welche Typecasting-Funktionen Sie benötigen, um alle Variablen in Zahlen umzuwandeln.",
            "Nutzen Sie die Typecasting-Funktion <code class='code-dark'>int()</code> für ganze Zahlen und <code class='code-dark'>float()</code> für Kommazahlen.",
          ],
        },
        {
          task: "Nutzen Sie die Variablen aus dem ursprünglichen Code und ergänzen Sie in einem eigenen Beispiel weitere Variablen mit unterschiedlichen Datentypen, um mehr Informationen über ein Profil zu speichern. Schreiben Sie anschließend eine Funktion, die die Werte aller Variablen in einem Satz ausgibt. Sie können für diese Aufgabe gerne auf eine bekannte Person zurückgreifen oder ein fiktives Profil erstellen.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes, passen Sie diesen an und ergänzen Sie weitere Variablen.",
          ],
        },
      ],
    },
  ],
});
