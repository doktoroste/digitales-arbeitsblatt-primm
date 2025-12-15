worksheets.push({
  titleShort: "pythonTurtle3",
  titleTechnical: "pyTurtle3",
  title: "Stufe für Stufe: Wenn Code genau weiß, wie oft er sich wiederholt",
  description:
    "<p>Nachdem Sie im vorherigen Arbeitsblatt gelernt haben, wie man Code so lange wiederholen lassen kann, wie eine Bedingung erfüllt ist, werden wir uns in diesem Arbeitsblatt mit einer weiteren wichtigen Art von Schleifen beschäftigen: der <strong>for</strong>-Schleife. Diese kommt immer dann zum Einsatz, wenn wir bereits wissen, wie oft wir einen bestimmten Codeabschnitt ausführen möchten.</p><p>Ein Beispiel ist beispielsweise das Klettern von Treppenstufen: Wir starten auf dem Boden vor der ersten Stufe und wissen, dass wir genau zehn Stufen hinaufsteigen möchten. In diesem Fall können wir eine <strong>for</strong>-Schleife verwenden und ihr sagen, dass sie den folgenden Code zum Hinaufsteigen der Stufen genau zehn Mal ausführen soll.</p>",
  image: "img/treppe.jpg",
  imageDescription:
    'Eine Treppe. Foto: <a href="https://unsplash.com/de/@rhustler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Reuben Hustler</a> auf <a href="https://unsplash.com/de/fotos/graue-betontreppe-mit-grauem-stahlgriff-mP2GF2D8H-4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  imageAlt:
    "Eine Treppe mit mehreren Stufen, die nach oben führt. Jede Stufe ist nummeriert.",
  code: {
    python:
      'from turtle import *\n\npencolor("red")\npensize(3)\n\nfor i in range(10):\n    left(90)\n    forward(15)\n    write(i)\n    right(90)\n    forward(15)\n\nmainloop()',
  },
  codeFilename: {
    python: "pythonTurtle3.py",
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
        title: '<code class="code-dark">pensize()</code>',
        content:
          "Mit dieser Funktion wird die Stiftgröße der Turtle-Grafik geändert. Die Größe kann durch eine Zahl (z.B. <code class='code-dark'>5</code>) angegeben werden. Je größer die Zahl, desto dicker wird die Linie, die die Turtle zeichnet. Der Standardwert ist <code class='code-dark'>1</code>.",
      },
      {
        title: '<code class="code-dark">for</code>',
        content:
          "Mit dem Schlüsselwort <code class='code-dark'>for</code> wird eine Schleife eingeleitet. Die Schleife wird eine bestimmte Anzahl von Malen ausgeführt, die in der Funktion <code class='code-dark'>range()</code> angegeben ist.",
      },
      {
        title: '<code class="code-dark">i</code>',
        content:
          "Dies ist die Schleifenvariable für die <code class='code-dark'>for</code>-Schleife. Sie wird bei jedem Durchlauf der Schleife um <code class='code-dark'>1</code> erhöht, beginnend bei <code class='code-dark'>0</code> und endend bei einer Zahl vor der in <code class='code-dark'>range()</code> angegebenen Zahl, in diesem Fall also <code class='code-dark'>9</code>.",
      },
      {
        title: '<code class="code-dark">range()</code>',
        content:
          "Mit dieser Funktion wird eine Sequenz von Zahlen erzeugt. Die Funktion <code class='code-dark'>range()</code> kann mit einem Startwert, einem Endwert und einem Schrittwert aufgerufen werden. In diesem Fall wird die Schleife zehn Mal iterieren, von <code class='code-dark'>0</code> bis <code class='code-dark'>9</code>.",
      },
      {
        title: '<code class="code-dark">write()</code>',
        content:
          "Mit dieser Funktion wird ein Text an der aktuellen Position der Turtle geschrieben. Der Text kann direkt durch eine Zeichenkette oder dem Aufrufen eines Variablenwerts in den runden Klammern angegeben werden.",
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
          answerType: "textShortCheckable",
          correctAnswers: [
            "10",
            "zehn",
            "Zehn",
            "10 mal",
            "zehn mal",
            "10x",
            "10x mal",
            "10 Mal",
            "zehn Mal",
            "Zehn Mal",
            "Zehn mal",
            "Zehnmal",
            "10-mal",
            "zehn-mal",
          ],
          feedbackText:
            "Die Schleife in Zeile 6 wird genau zehn Mal ausgeführt. Dies wird durch die Funktion <code class='code-dark'>range(10)</code> bestimmt, die eine Sequenz von Zahlen von 0 bis 9 erzeugt, was insgesamt zehn Zahlen sind.",
          hints: [
            "Schauen Sie sich die Funktion <code class='code-dark'>range()</code> in der Schleife an und überlegen Sie, wie viele Zahlen sie erzeugt.",
            "Die Schleife beginnt bei 0 und endet bei einer Zahl vor der in <code class='code-dark'>range()</code> angegebenen Zahl.",
          ],
        },
        {
          task: "Beschreiben oder Skizzieren Sie, welche grafische Ausgabe Sie vom Code erwarten. Sie können auch eine grobe Zeichnung anfertigen, z. B. in Paint.",
          answerType: "text",
          phrasingHelpers: [
            "Der Code zeichnet ...",
            "Für genau ... Wiederholungen zeichnet der Code ...",
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
          task: "Nennen Sie, welche Art von Wert in den Klammern der Funktion pencolor in Zeile 3 übergeben werden kann.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Farbe",
            "eine Farbe",
            "color",
            "farbe",
            "eine farbe",
            "Eine Farbe",
            "Eine farbe",
            "Name einer Farbe",
            "Farbname",
            "ein Farbname",
            "Hexadezimalcode",
            "ein Hexadezimalcode",
            "Farbcode",
            "ein Farbcode",
          ],
          feedbackText:
            "In den Klammern der Funktion <code class='code-dark'>pencolor</code> in Zeile 3 kann der Name einer Farbe (in Englisch, z. B. <code class='code-dark'>'red'</code> für Rot) übergeben werden. Der Wert gibt an, welche Farbe die Turtle zum Zeichnen verwenden soll.",
          hints: [
            "Überlegen Sie, welche anderen Werte in den vorherigen Arbeitsblättern in dieser Funktion eingesetzt wurden.",
            "Was soll der Begriff 'red' darstellen?",
          ],
        },
        {
          task: "Nennen Sie den Namen des Konzepts, das in Zeile 6 verwendet wird, um bestimmte Codeabschnitte mehrfach auszuführen.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Schleife",
            "eine Schleife",
            "loop",
            "For-Schleife",
            "eine For-Schleife",
            "for",
            "For",
            "for-Schleife",
            "For-schleife",
          ],
          feedbackText:
            "Das Konzept, das in Zeile 6 verwendet wird, um bestimmte Codeabschnitte mehrfach auszuführen, ist eine Schleife. In diesem Fall handelt es sich um eine <code class='code-dark'>for</code>-Schleife, die so lange ausgeführt wird, wie die angegebene Bedingung erfüllt ist.",
          hints: [
            "Lesen Sie sich den Einführungstext am Beginn des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Nennen Sie den Startwert, mit dem die Variable <code class='code-dark'>i</code> in der Schleife in Zeile 6 beginnt.",
          answerType: "textShortCheckable",
          correctAnswers: ["0", "null"],
          feedbackText:
            "Der Startwert der Variable <code class='code-dark'>i</code> in der Schleife in Zeile 6 ist <code class='code-dark'>0</code>. Dies bedeutet, dass die Schleife mit <code class='code-dark'>i = 0</code> beginnt und solange ausgeführt wird, wie die Bedingung erfüllt ist.",
          hints: [
            "Denken Sie daran, dass das Zählen in der Informatik häufig nicht bei 1 beginnt.",
          ],
        },
        {
          task: "Erklären Sie, warum in der Funktion <code class='code-dark'>range(10)</code> in Zeile 6 die Zahl 10 übergeben wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie viele Wiederholungen die Schleife ausführen soll.",
            "Denken Sie daran, dass die Schleife bei 0 beginnt zu zählen.",
          ],
          phrasingHelpers: [
            "Die Zahl 10 wird übergeben, weil ...",
            "Die Schleife soll ... Wiederholungen ausführen.",
            "Die Schleife beginnt bei ... und endet bei ... .",
          ],
        },
        {
          task: "Nennen Sie den Endwert, bei dem die Schleife in Zeile 6 endet.",
          answerType: "textShortCheckable",
          correctAnswers: ["9", "neun"],
          feedbackText:
            "Der Endwert, bei dem die Schleife in Zeile 6 endet, ist <code class='code-dark'>9</code>. Dies bedeutet, dass die Schleife mit <code class='code-dark'>i = 0</code> beginnt und bis <code class='code-dark'>i = 9</code> ausgeführt wird, was insgesamt zehn Wiederholungen ergibt.",
          hints: [
            "Denken Sie daran, dass die Schleife bei 0 beginnt zu zählen und bei einer Zahl vor der in <code class='code-dark'>range()</code> angegebenen Zahl endet.",
          ],
        },
        {
          task: "Erklären Sie, was mit der Variable <code class='code-dark'>i</code> in der Schleife nach jedem Durchlauf passiert.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich der Wert von <code class='code-dark'>i</code> nach jedem Durchlauf der Schleife verändert.",
            "Denken Sie daran, dass die Schleife bei 0 beginnt und bei 9 endet.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: 'Beschreiben Sie die Auswirkungen auf die grafische Ausgabe, wenn in der Funktion <code class="code-dark">range</code> in Zeile 6 der Wert von <code class="code-dark">10</code> auf <code class="code-dark">5</code> geändert wird.',
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich die Änderung des Endwerts auf die Anzahl der gezeichneten Formen auswirkt.",
          ],
        },
        {
          task: "Passen Sie den Code so an, dass die Schleife in Zeile 6 nur zwei Mal ausgeführt wird, und führen Sie den Code anschließend aus, um Ihre Vorhersage zu überprüfen.",
          answerType: "code",
          hints: [
            "Ändern Sie einen Wert in der Funktion <code class='code-dark'>range</code> in Zeile 6.",
            "Führen Sie den Code erneut aus, um die grafische Ausgabe zu überprüfen.",
          ],
        },
        {
          task: "Stellen Sie eine Vermutung auf, wie sich die grafische Ausgabe verändert, wenn in Zeile 6 die Funktion <code class='code-dark'>range(10)</code> auf <code class='code-dark'>range(5,10)</code> geändert wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie, wie sich die Erhöhung der Variable <code class='code-dark'>laenge</code> um 10 anstatt um 2 auf die grafische Ausgabe auswirkt.",
          ],
        },
        {
          task: "Führen Sie die vorherige Änderung durch und überprüfen Sie Ihre Vorhersage, indem Sie den Code ausführen. Beschreiben Sie anschließend, ob Ihre Vorhersage korrekt war oder warum das Ergebnis abweicht.",
          answerType: "text",
          phrasingHelpers: [
            "Meine Vorhersage war korrekt, weil ...",
            "Meine Vorhersage war nicht korrekt, weil ...",
          ],
        },
        {
          task: "Passen Sie den Code so an, dass die Aufzählungen an den Treppenstufen an der ersten Stufe bei 3 beginnt und bei 8 endet.",
          answerType: "code",
          hints: [
            "Passen Sie die Funktion <code class='code-dark'>range</code> in Zeile 6 entsprechend an.",
          ],
        },
        {
          task: "Verändern Sie den ursprünglichen Code so, dass die Stufen absteigend gezeichnet werden. Es sollen wieder zehn Stufen gezeichnet werden, die entsprechend aufsteigen nummeriert werden.",
          answerType: "code",
          hints: [
            "Sie können die Richtungen der Bewegungsbefehle ändern, um die Stufen absteigend zu zeichnen.",
            "Damit die Zahlen sichtbar bleiben, macht es Sinn, die Turtle zuerst vorwärts laufen zu lassen, dann den Text zu schreiben und anschließend die Drehung vorzunehmen.",
          ],
        },
        {
          task: "<span class='text-muted'>(Zusatzaufgabe)</span> Verändern Sie den ursprünglichen Code so, dass die Stufen nicht nur absteigend gezeichnet werden, sondern auch absteigend beschriftet werden. Sie müssen dafür in der <code class='code-dark'>range</code>-Funktion einen dritten Parameter angeben, der die Schrittweite bestimmt.",
          answerType: "code",
          hints: [
            "Der Standardwert für die Schrittweite in der <code class='code-dark'>range</code>-Funktion ist 1. Überlegen Sie, wie Sie den Wert ändern müssen, damit er nicht aufsteigend zählt, sondern absteigend.",
            "Eine mögliche Lösung ist die Angabe eines negativen Werts als dritten Parameter in der <code class='code-dark'>range</code>-Funktion.",
            "Beispiel: <code class='code-dark'>range(10, 0, -1)</code> zählt von 10 bis 1 absteigend.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Schreiben Sie Code, der mithilfe einer <code class='code-dark'>for</code>-Schleife ein Quadrat zeichnet. Das Quadrat soll in der Farbe Blau gezeichnet werden, eine Seitenlänge von 100 und eine Stiftgröße von 2 haben.",
          answerType: "code",
          hints: [
            "Nutzen Sie die Ihre bisherigen Lösungen aus den vorherigen Arbeitsblättern mit der <code class='code-dark'>while</code>-Schleife als Vorlage.",
          ],
        },
        {
          task: 'Schreiben Sie Code, der mithilfe einer <code class="code-dark">for</code>-Schleife eine immer größer werdende quadratische Spirale wie auf dem Bild erzeugt. Die <code class="code-dark">pencolor</code> wurde auf <code class="code-dark">magenta</code> gesetzt, die erste Seitenlänge ist 10 Pixel lang, die längste Seitenlänge soll nicht größer als 220 Pixel lang sein und die Länge soll immer 10 Pixel länger werden. Greifen Sie auf die Tipps unter der Aufgabe zurück, um sich Lösungsteile vorgeben zu lassen.<br><img src="img/turtle-schleife-spirale-for.png" alt="Eine quadratische Spirale in Magenta, die mit der Turtle-Grafik gezeichnet wurde. Die Spirale beginnt in der Mitte und wächst nach außen hin immer weiter." style="width: 300px;" />',
          answerType: "code",
          hints: [
            "Geben sie in der <code class='code-dark'>range</code>-Funktion drei Parameter an: den Startwert (10), den Endwert (220) und die Schrittweite (10).",
            "Innerhalb der Schleife soll die Turtle sich immer um 90 Grad nach rechts drehen.",
            "Innerhalb der Schleife soll die Turtle die aktuelle Seitenlänge vorwärts gehen.",
            "Die aktuelle Seitenlänge kann durch die Variable <code class='code-dark'>i</code> repräsentiert werden.",
            "Ein möglicher Anfang des Codes könnte so aussehen:<br><code class='code-dark'>from turtle import *\n\npencolor(\"magenta\")\npensize(2)\n\nfor i in range(10, 220, 10):\n    # Hier kommen die Bewegungsbefehle der Turtle hin\n\nmainloop()</code>",
          ],
        },
      ],
    },
  ],
});
