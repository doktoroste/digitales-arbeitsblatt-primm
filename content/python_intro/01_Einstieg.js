worksheets.push({
  titleShort: "pythonIntro1",
  titleTechnical: "pyIntro1",
  title: "Vom Assembler-Code zu Python: Ein erster Einstieg",
  description:
    "<p>Willkommen zu Python!</p><p>Python ist eine sehr <strong>hohe Programmiersprache</strong>, das heißt: Die Befehle sind sehr nah an der natürlichen Sprache. Im Vergleich dazu ist Assembler eine Programmiersprache, die nah an einer Maschinensprache auf der Prozessorebene ist und mit den grundlegenden Befehlen arbeitet. Der Vorteil von Assembler ist, dass die Programmierung unglaublich effizient ist, da jedes Bit einzeln verschoben und bearbeitet werden kann.</p><p>Wie wir im Johnny bereits gesehen haben, sind Programme mit Assembler äußerst umständlich zu schreiben und verlangen hohes Verständnis der einzelnen Befehle und derer Anwendungsmöglichkeiten. Für den Einstieg in die umfangreiche Programmierung sind sie daher ungeeignet.</p><p>Im Bild siehst du Assembler-Code, den du aus Johnny bereits kennen solltest. In dieser Einführungs-Übung wirst du einen einfachen Python-Code analysieren, der genau dasselbe machen soll.</p>",
  image: "img/01_python_maschinencode.jpg",
  imageDescription:
    'Bild: <a href="https://www.osa.fu-berlin.de/informatik_lehramt/aufgaben/04_assembler/index.html" target="_blank">Pablo BD auf Flickr.com [CC BY-SA 2.0]</a>, eigene Bearbeitung.',
  imageAlt: "Ein Assembler-Code, der eine Addition durchführt.",
  code: {
    python: "a = 5\nb = 7\nc = a + b\nprint(c)",
  },
  codeFilename: {
    python: "pythonIntro1.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: '<code class="code-dark">a</code>',
        content:
          "Der Buchstabe <code class='hljs-keyword'>a</code> ist der Name einer Variable. Variablen sind Speicherplätze, in denen Werte abgelegt werden können. In diesem Fall wird der Variable <code class='hljs-keyword'>a</code> der Wert <code class='code-dark'>5</code> zugewiesen. Das Speichern von Werten wird immer mit dem Gleichheitszeichen <code class='code-dark'>=</code> durchgeführt.",
      },
      {
        title: '<code class="code-dark">a + b</code>',
        content:
          "Auf den Werten in Variablen kann man häufig Berechnungen durchführen. Hier werden die Variablen <code class='code-dark'>a</code> und <code class='code-dark'>b</code> mit dem Plus-Operator <code class='code-dark'>+</code> addiert. Das Ergebnis der Addition kann anschließend unter anderem in einer weiteren Variable gespeichert werden.",
      },
      {
        title:
          '<code class="code-dark"><span class="hljs-keyword">print</span>()</code>',
        content:
          "Mit diesem Code wird das, was zwischen den runden Klammern übergeben wird, <strong>ausgegeben</strong>.",
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
          task: "Beschreiben Sie, was der gezeigte Code macht.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code ...",
            "Zuerst wird ...",
            "Anschließend wird ...",
            "Am Ende wird ...",
          ],
          hints: [
            "Gehen Sie den Code Zeile für Zeile durch und versuchen Sie, die Funktion der Zeilen nachzuvollziehen und zu beschreiben.",
            "Ein möglicher Start: <em>Der Code definiert zu Beginn zwei Variablen, denen Zahlen als Werte zugewiesen werden. Zuerst wird der Variable...</em>",
          ],
        },
        {
          task: "Nennen Sie die erwartete Ausgabe des Codes.</code>.",
          answerType: "multipleChoice",
          choices: [
            {
              text: "5",
              correct: false,
              feedbackText:
                "Im Code werden die Werte <code>5</code> und <code>7</code> zuerst den Variablen <code>a</code> und <code>b</code> zugewiesen. Anschließend werden die beiden Werte addiert und das Ergebnis in der Variable <code>c</code> gespeichert. Die Ausgabe ist daher nicht <code>5</code>, sondern das Ergebnis der Addition.",
            },
            {
              text: "7",
              correct: false,
              feedbackText:
                "Im Code werden die Werte <code>5</code> und <code>7</code> zuerst den Variablen <code>a</code> und <code>b</code> zugewiesen. Anschließend werden die beiden Werte addiert und das Ergebnis in der Variable <code>c</code> gespeichert. Die Ausgabe ist daher nicht <code>7</code>, sondern das Ergebnis der Addition.",
            },
            {
              text: "12",
              correct: true,
              feedbackText:
                "Korrekt. Im Code werden die Werte <code>5</code> und <code>7</code> zuerst den Variablen <code>a</code> und <code>b</code> zugewiesen. Anschließend werden die beiden Werte addiert und das Ergebnis in der Variable <code>c</code> gespeichert. Dieser Wert wird am Ende ausgegeben.",
            },
            {
              text: "57",
              correct: false,
              feedbackText:
                "Im Code werden die Werte <code>5</code> und <code>7</code> zuerst den Variablen <code>a</code> und <code>b</code> zugewiesen. Da es sich bei beiden Werten um ganze Zahlen handelt, werden diese anschließend addiert und das Ergebnis in der Variable <code>c</code> gespeichert. Die Ausgabe ist daher nicht <code>57</code>, sondern das Ergebnis der Addition.",
            },
          ],
        },
        {
          task: 'Nennen Sie die erwartete Ausgabe des Codes mit den Werten <code class="code-dark">a = 24</code> und <code class="code-dark">b = 18</code>.',
          answerType: "textShort",
          feedbackText:
            "Wenn die Werte der Variablen <code class='code-dark'>a</code> und <code class='code-dark'>b</code> auf <code class='code-dark'>24</code> bzw. <code class='code-dark'>18</code> gesetzt werden, ergibt die Addition den Wert <code class='code-dark'>42</code>, der in der Variable <code class='code-dark'>c</code> gespeichert und am Ende ausgegeben wird.",
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
          task: "Vergleichen Sie den Python-Code mit dem Assembler-Code im Bild oben. Nennen Sie mindestens zwei Unterschiede zwischen den beiden Codes.",
          answerType: "text",
          hints: [
            "Betrachten Sie die Anzahl der Zeilen in beiden Codes.",
            "Betrachten Sie die Lesbarkeit der beiden Codes.",
            "Betrachten Sie die Komplexität der beiden Codes.",
            "Überlegen Sie, was Sie in beiden Codes ändern müssten, um eine dritte Zahl zu addieren.",
          ],
        },
        {
          task: 'Nennen Sie den Fachbegriff für die Elemente, die im Code mit <code class="code-dark">a</code>, <code class="code-dark">b</code> und <code class="code-dark">c</code> bezeichnet sind.',
          answerType: "textShortCheckable",
          correctAnswers: ["Variablen", "variable", "Variable", "variablen"],
          feedbackText:
            "Die Elemente <code class='code-dark'>a</code>, <code class='code-dark'>b</code> und <code class='code-dark'>c</code> sind Variablen. Variablen sind Speicherplätze, in denen Werte abgelegt werden können.",
          hints: [
            "Betrachten Sie die Hilfestellungen zum Code weiter oben.",
            "Die Elemente <code class='code-dark'>a</code>, <code class='code-dark'>b</code> und <code class='code-dark'>c</code> speichern Werte.",
          ],
        },
        {
          task: "Ordnen Sie die einzelnen Zeilen des Python-Codes den Bestandteilen des EVA-Modells zu.",
          answerType: "text",
          phrasingHelpers: [
            "Die Zeile <code class='code-dark'>...</code> gehört zum Bestandteil ...",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: "Nennen und begründen Sie, welche Ausgaben Sie beim Ausführen des Codes erwarten, wenn Sie die ersten beiden Zeilen weglassen und stattdessen in Zeile 3 nur <code class='code-dark'>c = a + b</code> stehen lassen.",
          answerType: "text",
          phrasingHelpers: [
            "Bei der Ausführung des Codes wird ...",
            "Da die Variablen ... nicht definiert sind, ...",
          ],
          hints: [
            "Was passiert, wenn im Code auf Variablen zugegriffen wird, die nicht definiert wurden?",
          ],
        },
        {
          task: "Nennen und begründen Sie, welche Ausgaben Sie beim Ausführen des Codes erwarten, wenn Sie die ersten beiden Zeilen weglassen und stattdessen in Zeile 3 nur <code class='code-dark'>c = 5 + 7</code> stehen lassen.",
          answerType: "text",
          phrasingHelpers: [
            "Bei der Ausführung des Codes wird ...",
            "Da der Variable c direkt ein Ergebnis einer ... zugewiesen wird, ...",
          ],
          hints: [
            "Additionen können auch direkt mit Zahlenwerten durchgeführt werden, ohne dass diese vorher in Variablen gespeichert werden müssen.",
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
          task: "Schreiben Sie nun Code, der die Zahlen <code>x = 10</code> und <code>y = 5</code> voneinander subtrahiert.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie die Rechenoperation an.",
            "Verwenden Sie den Minus-Operator <code class='code-dark'>-</code> für die Subtraktion.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der die Zahlen <code>zahl1 = 10</code> und <code>zahl2 = 5</code> miteinander multipliziert.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie die Rechenoperation an.",
            "Verwenden Sie den Mal-Operator <code class='code-dark'>*</code> für die Multiplikation.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der die Zahlen <code>dividend = 49</code> und <code>divisor = 7</code> miteinander dividiert.",
          answerType: "code",
          hints: [
            "Kopieren Sie die Struktur des ursprünglichen Codes und passen Sie die Rechenoperation an.",
            "Verwenden Sie den Divisions-Operator <code class='code-dark'>/</code> für die Division.",
          ],
        },
        {
          task: "Schreiben Sie nun Code, der zuerst die zwei Variablen <code>zahl1 = 10</code> und <code>zahl2 = 5</code> speichert. Anschließend sollen die Werte in den beiden Variablen getauscht werden, so dass <code>zahl1 = 5</code> und <code>zahl2 = 10</code> wird. Sie dürfen dabei nicht noch einmal die Zahlenwerte direkt verwenden, sondern müssen mit den Variablen arbeiten.",
          answerType: "code",
          hints: [
            "Überlegen Sie, wie Sie eine dritte Variable verwenden können, um die Werte zu tauschen.",
            "Speichern Sie den Wert von <code class='code-dark'>zahl1</code> zuerst in einer dritten Variable, bevor Sie <code class='code-dark'>zahl1</code> den Wert von <code class='code-dark'>zahl2</code> zuweisen.",
          ],
        },
      ],
    },
  ],
});
