worksheets.push({
  titleShort: "javascriptRechnen",
  titleTechnical: "jsrechnen",
  title: "Das erste JavaScript-Programm: Wie lassen sich Werte berechnen?",
  description:
    "<p>Das Wort <strong>Computer</strong> stammt vom lateinischen Wort <em>computare</em>, was so viel bedeutet wie <em>rechnen</em>. Im Grunde genommen ist ein Computer also eine Rechenmaschine – und selbst in jedem Taschenrechner steckt ein kleiner Computer.</p><p>Computer sind aber erst einmal dumm: Sie können nur das tun, was ihnen durch <strong>Programme</strong> vorgegeben wird. Ein Programm ist eine <strong>Abfolge von Anweisungen</strong>, die der Computer ausführen soll. <p>Diese Anweisungen werden in einer Programmiersprache geschrieben. In diesem Arbeitsblatt lernst du die Programmiersprache <strong>JavaScript</strong> kennen und schreibst dein erstes kleines Programm, mit dem du einfache Berechnungen durchführen kannst – und so den <em>Computer</em> tatsächlich zum <em>Rechner</em> machst.</p>",
  image: "img/taschenrechner.jpg",
  imageDescription:
    'Auch in Taschenrechnern steckt ein kleiner Computer. Foto: <a href="https://unsplash.com/de/@alefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Lefler</a> auf <a href="https://unsplash.com/de/fotos/ein-taschenrechner-sitzt-auf-einem-blatt-papier-ySZdYkPGEbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  imageAlt: "Ein Taschenrechner liegt auf einem Blatt Papier.",
  code: {
    javascript:
      "var zahl1 = 5;\nvar zahl2 = 10;\nvar summe = zahl1 + zahl2;\nalert(summe);",
  },
  codeFilename: {
    python: "rechnen.js",
  },
  primaryLanguage: "javascript",
  codeHelpers: {
    javascript: [
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">var</span></code>',
        content:
          "Mit diesem Schlüsselwort wird eine Variable deklariert. Eine Variable ist ein <strong>Speicherort</strong>, an dem ein Wert abgelegt werden kann. Der Name der Variable folgt direkt nach dem Schlüsselwort <code class='code-dark'>var</code>.",
      },
      {
        title: '<code class="code-dark">zahl1 = 5</code>',
        content:
          "Mit dem einfachen Gleichheitszeichen <code class='code-dark'>=</code> wird einer Variable ein Wert zugewiesen. Der Wert steht dabei rechts vom Gleichheitszeichen, der Name der Variable links davon. In diesem Beispiel wird der Variable <code class='code-dark'>zahl1</code> der Wert <code class='code-dark'>5</code> zugewiesen.",
      },
      {
        title: '<code class="code-dark">zahl1 + zahl2</code>',
        content:
          "Mit dem Operator <code class='code-dark'>+</code> werden zwei Werte addiert. In diesem Beispiel werden die Werte der Variablen <code class='code-dark'>zahl1</code> und <code class='code-dark'>zahl2</code> addiert. Das Ergebnis der Addition kann wiederum in einer Variable gespeichert werden.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-title">alert</span>()</code>',
        content:
          "Mit dieser Funktion wird ein Dialogfeld angezeigt, das den in den Klammern angegebenen Wert ausgibt. Möchte man Text ausgeben, muss dieser in Anführungszeichen gesetzt werden.",
      },
    ],
  },
  tasks: [
    {
      title: "Aufgabe 1: Den Code beschreiben",
      description:
        "In dieser Aufgabe sollst Du den Code beschreiben und verstehen, was er macht. Anschließend sollst Du eine Prognose über die Ausgabe des Codes treffen. <strong>Führe den Code dazu noch nicht aus</strong>, sondern versuche, die Ausgabe nur durch das Lesen des Codes zu ermitteln.",
      subtasks: [
        {
          task: "Nenne die Ausgabe, die nach Ausführen des Codes erscheint.",
          answerType: "textShortCheckable",
          correctAnswers: ["15", "15."],
          feedbackText:
            "Die Ausgabe des Codes ist <code class='code-dark'>15</code>, da die beiden Zahlen 5 und 10 addiert werden.",
          hints: [
            "Überlege, welche Werte in den Variablen <code class='code-dark'>zahl1</code> und <code class='code-dark'>zahl2</code> gespeichert sind.",
            "Überlege, was im Ausdruck <code class='code-dark'>zahl1 + zahl2</code> passiert.",
            "Denke daran, dass das Ergebnis der Addition in der Variable <code class='code-dark'>summe</code> gespeichert wird.",
            "Die Funktion <code class='code-dark'>alert()</code> gibt den Wert der Variable <code class='code-dark'>summe</code> aus.",
          ],
        },
        {
          task: "Beschreibe in eigenen Worten und so genau wie möglich, was der Code macht. <em>Tipp: Gehe den Code Zeile für Zeile durch. Nutze die Satzanfänge unter dieser Aufgabe, wenn du Hilfe beim Formulieren brauchst.</em>",
          answerType: "text",
          phrasingHelpers: [
            "In der ersten Zeile wird die Variable ... deklariert und ihr der Wert ... zugewiesen.",
            "... werden die Werte der Variablen ... und ... addiert und in der Variable ... gespeichert.",
            "Der Wert der Variable ... wird mit der Funktion ... ausgegeben.",
          ],
          sampleSolution:
            "In der ersten Zeile wird die Variable <code class='code-dark'>zahl1</code> deklariert und ihr der Wert 5 zugewiesen. In der zweiten Zeile wird die Variable <code class='code-dark'>zahl2</code> deklariert und mit dem Wert 10 initialisiert. In der dritten Zeile wird die Variable <code class='code-dark'>summe</code> deklariert und mit dem Ergebnis der Addition von <code class='code-dark'>zahl1</code> und <code class='code-dark'>zahl2</code> initialisiert. In der vierten Zeile wird die Funktion <code class='code-dark'>alert()</code> aufgerufen, die den Wert der Variable <code class='code-dark'>summe</code> in einem Dialogfeld anzeigt.",
        },
      ],
    },
    {
      title: "Aufgabe 2: Den Code ausführen",
      subtasks: [
        {
          task: 'Kopiere den <a href="#worksheet-code">Code</a> in einen Online-Editor wie den auf <a href="https://www.programiz.com/online-compiler/5tLXLWBG6MY3b" target="_blank">Programiz</a>. Schreibe ihn nicht ab.',
          answerType: "none",
        },
        {
          task: "Führe den Code in einem JavaScript-Interpreter aus. ",
          answerType: "none",
        },
        {
          task: "Vergleiche das Ergebnis mit deiner Vorhersage und erkläre, ob und warum deine Vorhersage korrekt war oder warum das Ergebnis abweicht.",
          answerType: "text",
        },
      ],
    },
    {
      title: "Aufgabe 3: Den Code analysieren",
      subtasks: [
        {
          task: "Wähle aus, welche Funktion <strong>Zeile 1</strong> im Code erfüllt.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "Variable",
              correct: true,
              feedbackText:
                "In Zeile 1 wird die Variable <code>zahl1</code> deklariert und mit dem Wert <code>5</code> initialisiert.",
            },
            {
              text: "Rechenoperation",
              correct: false,
              feedbackText:
                "In Zeile 1 wird die Variable <code>zahl1</code> deklariert und mit dem Wert <code>5</code> initialisiert.",
            },
            {
              text: "Ausgabe",
              correct: false,
              feedbackText:
                "In Zeile 1 wird die Variable <code>zahl1</code> deklariert und mit dem Wert <code>5</code> initialisiert.",
            },
          ],
        },
        {
          task: "Wähle aus, welche Funktion <strong>Zeile 2</strong> im Code erfüllt.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "Variable",
              correct: true,
              feedbackText:
                "In Zeile 2 wird die Variable <code>zahl2</code> deklariert und mit dem Wert <code>10</code> initialisiert.",
            },
            {
              text: "Rechenoperation",
              correct: false,
              feedbackText:
                "In Zeile 2 wird die Variable <code>zahl2</code> deklariert und mit dem Wert <code>10</code> initialisiert.",
            },
            {
              text: "Ausgabe",
              correct: false,
              feedbackText:
                "In Zeile 2 wird die Variable <code>zahl2</code> deklariert und mit dem Wert <code>10</code> initialisiert.",
            },
          ],
        },
        {
          task: "Wähle aus, welche Funktion <strong>Zeile 3</strong> im Code erfüllt.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "Variable",
              correct: true,
              feedbackText:
                "In Zeile 3 wird die Variable <code>summe</code> deklariert und das  Ergebnis der Addition von <code>zahl1</code> und <code>zahl2</code> gespeichert.",
            },
            {
              text: "Rechenoperation",
              correct: true,
              feedbackText:
                "In Zeile 3 wird die Variable <code>summe</code> deklariert und das  Ergebnis der Addition von <code>zahl1</code> und <code>zahl2</code> gespeichert.",
            },
            {
              text: "Variable und Rechenoperation",
              correct: true,
              feedbackText:
                "In Zeile 3 wird die Variable <code>summe</code> deklariert und das  Ergebnis der Addition von <code>zahl1</code> und <code>zahl2</code> gespeichert.",
            },
            {
              text: "Ausgabe",
              correct: false,
              feedbackText:
                "In Zeile 3 wird die Variable <code>summe</code> deklariert und das  Ergebnis der Addition von <code>zahl1</code> und <code>zahl2</code> gespeichert.",
            },
            {
              text: "Rechenoperation und Ausgabe",
              correct: false,
              feedbackText:
                "In Zeile 3 wird die Variable <code>summe</code> deklariert und das  Ergebnis der Addition von <code>zahl1</code> und <code>zahl2</code> gespeichert.",
            },
          ],
        },
        {
          task: "Wähle aus, welche Funktion <strong>Zeile 4</strong> im Code erfüllt.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "Variable",
              correct: false,
              feedbackText:
                "In Zeile 4 wird der Wert der Variable <code>summe</code> mit der Funktion <code class='code-dark'>alert()</code> ausgegeben.",
            },
            {
              text: "Rechenoperation",
              correct: false,
              feedbackText:
                "In Zeile 4 wird der Wert der Variable <code>summe</code> mit der Funktion <code class='code-dark'>alert()</code> ausgegeben.",
            },
            {
              text: "Ausgabe",
              correct: true,
              feedbackText:
                "In Zeile 4 wird der Wert der Variable <code>summe</code> mit der Funktion <code class='code-dark'>alert()</code> ausgegeben.",
            },
          ],
        },
        {
          task: "Beschreibe in eigenen Worten, was eine Variable ist und wofür sie verwendet wird. <em>Tipp: Klappe weiter oben die Erklärung zu Variablen rechts vom Code auf.</em>",
          answerType: "text",
          hints: [
            "Klappe die erste Erklärung rechts vom Code auf, den du weiter oben im Arbeitsblatt findest.",
          ],
          phrasingHelpers: [
            "Eine Variable ist ...",
            "Sie wird verwendet, um ...",
          ],
        },
        {
          task: "Nenne das Schlüsselwort, mit dem eine Variable im Code deklariert wird.",
          answerType: "textShortCheckable",
          correctAnswers: ["var"],
          feedbackText:
            "Das Schlüsselwort <code class='code-dark'>var</code> wird verwendet, um eine Variable im Code zu deklarieren.",
          hints: [
            "Lies dir die Erklärung zu Variablen rechts vom Code noch einmal durch.",
          ],
        },
        {
          task: "Nenne den Namen der Funktion, die verwendet wird, um eine Ausgabe anzuzeigen.",
          answerType: "textShortCheckable",
          correctAnswers: ["alert", "Alert", "alert()"],
          feedbackText:
            "Die Funktion <code class='code-dark'>alert()</code> wird verwendet, um eine Ausgabe anzuzeigen.",
          hints: [
            "Such in den Erklärungen rechts vom Code nach der Funktion, mit der sich eine Ausgabe anzeigen lässt.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      description:
        "In dieser Aufgabe sollst Du den Code verändern und erweitern. Kopiere dir dazu den ursprünglichen Code aus dem <a href='#worksheet-code'>Code-Bereich</a> in einen Online-Editor wie den auf <a href='https://www.programiz.com/online-compiler/5tLXLWBG6MY3b' target='_blank'>Programiz</a>. Verändere und prüfe den Code anschließend dort. Wenn du fertig bist, kopiere den veränderten Code in die Textfelder der jeweiligen Unteraufgaben.",
      subtasks: [
        {
          task: "Verändere den Code so, dass die Zahlen 20 und 30 addiert werden.",
          answerType: "code",
          hints: ["Ersetze die beiden vorherigen Zahlenwerte durch 20 und 30."],
        },
        {
          task: "Verändere den Code so, dass statt der Summe der beiden Zahlen die Differenz (also die Subtraktion) ausgegeben wird.",
          answerType: "code",
          hints: [
            "Überlege, welcher Operator für die Subtraktion verwendet wird.",
            "Ersetze im Code den Additionsoperator durch den Subtraktionsoperator.",
            "Der Subtraktionsoperator ist das Minuszeichen <code class='code-dark'>-</code>.",
          ],
        },
        {
          task: "Verändere den Code so, dass nur noch eine einzige Variable verwendet wird, die die Zahl 15 speichert. Passe den Code so an, dass diese Zahl veroppelt wird und das Ergebnis ausgegeben wird.",
          answerType: "code",
          hints: [
            "Du kannst eine Zahl veroppeln, indem du sie mit 2 multiplizierst.",
            "Die Multiplikationsoperator ist das Sternchen <code class='code-dark'>*</code>.",
          ],
        },
        {
          task: "Ergänze den Code so, dass eine dritte Variable eingeführt wird, die ebenfalls eine Zahl speichert. Passe den Code so an, dass die Summe aller drei Zahlen ausgegeben wird.",
          answerType: "code",
          hints: [
            "Füge eine dritte Variable <code class='code-dark'>zahl3</code> hinzu, die ebenfalls eine Zahl speichert.",
            "Berechne die Summe aller drei Variablen und gib das Ergebnis aus.",
          ],
        },
        {
          task: "Variablen können beliebig benannt werden. In unserem Beispiel hätten die Variablen auch <code>a</code> und <code>b</code> statt <code>zahl1</code> und <code>zahl2</code> heißen können. Begründe, warum es dennoch sinnvoll ist, Variablen aussagekräftige Namen zu geben.",
          answerType: "text",
          hints: [
            "Überlege, wie du vorgehen würdest, wenn du deinen Code in einigen Wochen oder Monaten noch einmal anschauen müsstest.",
            "Denke darüber nach, wie andere Personen deinen Code verstehen würden, wenn sie ihn lesen.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      description:
        "In dieser Aufgabe sollst Du jeweils neue Programme schreiben, die auf dem bisher Gelernten aufbauen. Nutze dafür weiterhin die Entwicklungsumgebung auf <a href='https://www.programiz.com/online-compiler/5tLXLWBG6MY3b' target='_blank'>Programiz</a>. Kopiere den fertigen Code anschließend in die Textfelder der jeweiligen Unteraufgaben.",
      image: "img/notentabelle.png",
      helpers: [
        {
          title: "Test",
          content: "Test",
        },
      ],
      subtasks: [
        {
          task: "Schreibe ein Programm, das zuerst die Summe aus zwei Variablen <code>a</code> und <code>b</code> berechnet. Anschließend soll von dieser Summe noch der Wert einer dritten Variable <code>c</code> subtrahiert werden. Anschließend soll das Ergebnis ausgegeben werden.<br>Nutze als Beispielwerte für <code>a</code> den Wert 50, für <code>b</code> den Wert 30 und für <code>c</code> den Wert 20. Teste deinen Code auch mit anderen Werten.",
          answerType: "code",
          hints: [
            "Nutze drei Variablen, um die Werte für <code>a</code>, <code>b</code> und <code>c</code> zu speichern.",
            "Nutze eine weitere Variable, um die Zwischensumme von <code>a</code> und <code>b</code> zu speichern.",
            "Berechne die Differenz zwischen der Zwischensumme und <code>c</code> und speichere das Ergebnis in einer weiteren Variable.",
            "Gib das Ergebnis mit der Funktion <code class='code-dark'>alert()</code> aus.",
            "Mit folgendem Code könnte dein Programm beginnen:<br><code class='code-dark'>var a = 50;<br>var b = 30;<br>var c = 20;</code>",
          ],
        },
        {
          task: "Schreibe ein Programm, das zwei Variablen speichert: Eine für die maximal erreichbaren Punkte in einer Klausur und eine für die erreichte Punktzahl. Das Programm soll anschließend den Prozentsatz der erreichten Punkte berechnen und ausgeben.<br>Nutze als Beispielwerte zum Beispiel 120 für die maximalen und 90 für die erreichten Punkte. Teste deinen Code auch mit anderen Werten.",
          answerType: "code",
          hints: [
            "Nutze zwei Variablen, um die maximalen Punkte und die erreichten Punkte zu speichern Denke über passende Namen nach.",
            "Die Formel zur Berechnung der erreichten Prozentzahl lautet: <code class='code-dark'>(erreichte_punkte / maximale_punkte) * 100</code>",
            "Mit folgendem Code könnte dein Programm beginnen:<br><code class='code-dark'>var maximalePunkte = 120;<br>var erreichtePunkte = 90;</code>",
          ],
        },
      ],
    },
  ],
});
