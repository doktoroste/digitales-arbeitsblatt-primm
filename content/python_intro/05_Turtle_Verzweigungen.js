worksheets.push({
  titleShort: "pythonTurtle4",
  titleTechnical: "pyTurtle4",
  title: "Wenn Code nicht immer gelten soll: Verzweigungen und Bedingungen",
  description:
    "<p>Genau wie beispielsweise bei Parkzonen im Straßenverkehr gibt es auch beim Programmieren Code, der nicht immer oder nur unter bestimmten Bedingungen ausgeführt werden soll. Solche Programmierstrukturen nennt man auch häufig <strong>Verzweigungen</strong>.</p><p>Verzweigungen werden in Programmiersprachen häufig mit dem Schlüsselwort <code class='code-dark'>if</code> (englisch für 'wenn') eingeleitet. Anschließend folgt die <strong>Bedingung</strong>, wann der folgende Code ausgeführt werden soll – genau wie bei der <code class='code-dark'>while</code>-Schleife.</p><p>Der Code, der nur unter bestimmten Bedingungen ausgeführt werden soll, wird dann eingerückt unterhalb der <code class='code-dark'>if</code>-Anweisung geschrieben.</p><p>Will man zusätzlich noch Code bereitstellen, der immer dann ausgeführt wird, wenn die Bedingung nicht erfüllt ist, kann man das Schlüsselwort <code class='code-dark'>else</code> (englisch für 'ansonsten') verwenden. Auch der Code unterhalb der <code class='code-dark'>else</code>-Anweisung wird eingerückt geschrieben.</p>",
  image: "img/verzweigung.jpg",
  imageDescription:
    'Manchmal benötigt man auch beim Programmieren die Option, verschiedene Wege zu gehen. Foto: <a href="https://uudux.org/home-2-4/360_f_388001301_ek6xkbrbn5ldxeazvu2vsatbibxaz6m3/">uudux.org</a>',
  imageAlt:
    "Ein Weg, der sich in zwei verschiedene Wege verzweigt, die jeweils in unterschiedliche Richtungen führen.",
  code: {
    python:
      'from turtle import *\npenup()\ngoto(-200, -200)\npensize(5)\npendown()\n\nfor i in range(10):\n    if i % 2 == 0:\n        pencolor("red")\n    else:\n        pencolor("green")\n\n    forward(40)\n    left(90)\n    forward(40)\n    right(90)\n\nmainloop()',
  },
  codeFilename: {
    python: "pythonTurtle4.py",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: '<code class="code-dark">goto(x, y)</code>',
        content:
          "Mit diesem Befehl wird die Turtle an die Position <code class='code-dark'>(x, y)</code> bewegt.",
      },
      {
        title: '<code class="code-dark">penup()</code>',
        content:
          "Mit dieser Funktion wird der Stift der Turtle angehoben, sodass keine Linien mehr gezeichnet werden, während sich die Turtle bewegt.",
      },
      {
        title: '<code class="code-dark">pendown()</code>',
        content:
          "Mit dieser Funktion wird der Stift der Turtle wieder abgesenkt, sodass Linien gezeichnet werden, während sich die Turtle bewegt.",
      },
      {
        title: '<code class="code-dark">if ... :</code>',
        content:
          "Mit dem Schlüsselwort <code class='code-dark'>if</code> wird eine Bedingung überprüft. Wenn die Bedingung wahr ist, wird der folgende Codeblock ausgeführt.",
      },
      {
        title: '<code class="code-dark">i % 2 == 0</code>',
        content:
          "Dies ist die Bedingung, die überprüft, ob <code class='code-dark'>i</code> eine gerade Zahl ist. Wenn dies der Fall ist, wird der folgende Codeblock ausgeführt. Das Prozentzeichen <code class='code-dark'>%</code> steht für den Modulo-Operator, der den Rest einer Division berechnet. In diesem Fall wird überprüft, ob der Rest der Division von <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> gleich <code class='code-dark'>0</code> ist.",
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
          task: "Nennen Sie die Anzahl an Wiederholungen, die die Schleife in Zeile 7 ausführt.",
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
          task: "Beschreiben Sie, was die Bedingung in Zeile 8 überprüft – also wann der folgende Code ausgeführt wird. Die Bedingung überprüft, ob die Variable <code class='code-dark'>i</code> ...",
          answerType: "multipleChoice",
          choices: [
            {
              text: "größer als 2 ist.",
              correct: false,
              feedbackText:
                "Die Bedingung in Zeile 8 überprüft, ob die Variable <code class='code-dark'>i</code> eine gerade Zahl ist. Dies wird durch den Ausdruck <code class='code-dark'>i % 2 == 0</code> erreicht, der den Modulo-Operator verwendet, um zu überprüfen, ob der Rest der Division von <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> gleich <code class='code-dark'>0</code> ist.",
            },
            {
              text: "kleiner als 2 ist.",
              correct: false,
              feedbackText:
                "Die Bedingung in Zeile 8 überprüft, ob die Variable <code class='code-dark'>i</code> eine gerade Zahl ist. Dies wird durch den Ausdruck <code class='code-dark'>i % 2 == 0</code> erreicht, der den Modulo-Operator verwendet, um zu überprüfen, ob der Rest der Division von <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> gleich <code class='code-dark'>0</code> ist.",
            },
            {
              text: "eine gerade Zahl ist.",
              correct: true,
              feedbackText:
                "Die Bedingung in Zeile 8 überprüft, ob die Variable <code class='code-dark'>i</code> eine gerade Zahl ist. Dies wird durch den Ausdruck <code class='code-dark'>i % 2 == 0</code> erreicht, der den Modulo-Operator verwendet, um zu überprüfen, ob der Rest der Division von <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> gleich <code class='code-dark'>0</code> ist.",
            },
            {
              text: "eine ungerade Zahl ist.",
              correct: false,
              feedbackText:
                "Die Bedingung in Zeile 8 überprüft, ob die Variable <code class='code-dark'>i</code> eine gerade Zahl ist. Dies wird durch den Ausdruck <code class='code-dark'>i % 2 == 0</code> erreicht, der den Modulo-Operator verwendet, um zu überprüfen, ob der Rest der Division von <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> gleich <code class='code-dark'>0</code> ist.",
            },
          ],
          hints: [
            "Der Modulo-Operator <code class='code-dark'>%</code> gibt den Rest einer Division zurück.",
            "Mit dem Ausdruck <code class='code-dark'>i % 2 == 0</code> wird überprüft, ob <code class='code-dark'>i</code> durch <code class='code-dark'>2</code> teilbar ist, ohne einen Rest zu hinterlassen.",
            "Beispiel: <code class='code-dark'>4 % 2 == 0</code> ist wahr, weil 4 durch 2 teilbar ist, während <code class='code-dark'>5 % 2 == 0</code> falsch ist, weil 5 einen Rest von 1 hat, wenn es durch 2 geteilt wird.",
          ],
        },
        {
          task: "Nennen Sie, welche Art von Wert in den Klammern der Funktion <code class='code-dark'>goto()</code> in Zeile 3 übergeben werden kann.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Koordinaten",
            "Position",
            "x- und y-Wert",
            "Zahlen",
            "Zahlenwerte",
            "Zahlenwerte für x und y",
            "Zahlenwerte für die Position",
            "Positionswerte",
            "Koordinatenwerte",
            "X- und Y-Koordinaten",
            "X- und Y-Wert",
          ],
          feedbackText:
            "In den Klammern der Funktion <code class='code-dark'>goto</code> in Zeile 3 können die Koordinaten (x- und y-Wert) übergeben werden. Diese Werte geben an, zu welcher Position die Turtle bewegt werden soll.",
          hints: [
            "Überlegen Sie, was in einem Koordinatensystem mit zwei Werten angegeben werden kann.",
            "Die Turtle bewegt sich wie in einem Koordinatensystem in einem zweidimensionalen Raum.",
          ],
        },
        {
          task: "Nennen Sie den Namen des Konzepts, das in Zeile 8 auf eine <code class='code-dark'>if</code>-Anweisung folgt, um bestimmten Code nur unter bestimmten Bedingungen auszuführen.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "Bedingung",
            "if-Anweisung",
            "Bedingte Anweisung",
            "Bedingte Anweisung",
            "bedingung",
            "If-Anweisung",
            "bedingte Anweisung",
          ],
          feedbackText:
            "Auf eine <code class='code-dark'>if</code>-Anweisung folgt eine Bedingung, die überprüft, ob der folgende Code ausgeführt werden soll oder nicht. Wenn die Bedingung wahr ist, wird der eingerückte Code unterhalb der <code class='code-dark'>if</code>-Anweisung ausgeführt.",
          hints: [
            "Lesen Sie sich den Einführungstext am Beginn des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Nennen Sie den Namen des Operators, der in der Bedingung in Zeile 8 verwendet wird, um den Rest einer Division zu berechnen.",
          answerType: "textShortCheckable",
          correctAnswers: [
            "modulo",
            "Modulo",
            "Modulus",
            "modulus",
            "Restwert",
            "Restwertoperator",
          ],
          feedbackText:
            "Der Operator, der in der Bedingung in Zeile 8 verwendet wird, um den Rest einer Division zu berechnen, ist der Modulo-Operator. In Python wird dieser Operator durch das Prozentzeichen <code class='code-dark'>%</code> dargestellt.",
          hints: [
            "Lesen Sie die weiteren Erklärungen zum Code am Anfang des Arbeitsblatts noch einmal durch.",
          ],
        },
        {
          task: "Erklären Sie, in welchen Fällen der Code in Zeile 11 ausgeführt wird.",
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
          task: "Stellen Sie eine Vermutung auf, was passieren würde, wenn der Code in Zeilen 10 und 11 entfernt wird.",
          answerType: "text",
          hints: [
            "Überlegen Sie sich, wann der Code in Zeile 9 ausgeführt wird und was mit den anderen Fällen passiert.",
            "Wird die Farbe in Zeile 9 auch für ungerade Zahlen geändert?",
            "Wird die Farbe überhaupt noch geändert?",
          ],
          phrasingHelpers: [
            "Wenn der Code in Zeilen 10 und 11 entfernt wird, dann ...",
            "Die grafische Ausgabe würde sich verändern, weil ...",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verändern",
      subtasks: [
        {
          task: "Passen Sie den Code so an, dass die Turtle nur dann rot zeichnet, wenn der Wert von <code class='code-dark'>i</code> durch 3 teilbar ist. In allen anderen Fällen soll die Turtle grün zeichnen.",
          answerType: "code",
          hints: [
            "Ändern Sie einen Wert in der Bedingung.",
            "Die Bedingung finden Sie hinter dem Stichwort <code class='code-dark'>if</code>.",
            "Der Modulo-Operator <code class='code-dark'>%</code> kann Ihnen dabei helfen, zu überprüfen, ob eine Zahl durch eine andere Zahl teilbar ist.",
          ],
        },
        {
          task: "Stellen Sie eine Vermutung auf, wie sich die grafische Ausgabe verändert, wenn in der Bedingung geprüft wird, ob der Wert in der Variable <code class='code-dark'>i</code> kleiner als 5 ist, anstatt ob er durch 2 teilbar ist.",
          answerType: "text",
          hints: [
            "Überlegen Sie, welche Werte die Variable <code class='code-dark'>i</code> während der Schleife annimmt.",
          ],
          phrasingHelpers: [
            "Meine Vermutung ist, dass ...",
            "Ich glaube, dass ...",
            "Für die ersten ... Werte von <code class='code-dark'>i</code> wird die Farbe ... sein, weil ...",
          ],
        },
        {
          task: "Passen Sie den Code so an, dass in der Bedingung geprüft wird, ob der Wert in der Variable <code class='code-dark'>i</code> kleiner als 5 ist.",
          answerType: "code",
          hints: [
            "Passen Sie den Code in der Bedingung an.",
            "Ob eine Zahl kleiner als 5 ist, können Sie mit dem Vergleichsoperator <code class='code-dark'><</code> überprüfen.",
          ],
        },
        {
          task: "Führen Sie den Code nun aus und überprüfen Sie Ihre Vorhersage. Beschreiben Sie anschließend, ob Ihre Vorhersage korrekt war oder warum das Ergebnis abweicht.",
          answerType: "text",
          phrasingHelpers: [
            "Meine Vorhersage war korrekt, weil ...",
            "Meine Vorhersage war nicht korrekt, weil ...",
          ],
        },
        {
          task: "Verändern Sie den ursprünglichen Code so, dass nur dann rot gezeichnet wird, wenn der Wert der Variable <code class='code-dark'>i</code> nicht durch zwei teilbar ist. <i>Hinweis: Es gibt explizit mehrere Möglichkeiten, dies zu erreichen. Sie finden alle Varianten in den Hinweisen.</i>",
          answerType: "code",
          hints: [
            "Überlegen Sie, wie Sie die Bedingung anpassen können, um das Gegenteil der ursprünglichen Bedingung zu überprüfen.",
            "Eine Möglichkeit ist die Verwendung des Ungleichheitsoperators <code class='code-dark'>!=</code>.",
            "Eine andere Möglichkeit ist die Verwendung des Operators <code class='code-dark'>not</code> vor der ursprünglichen Bedingung.",
            "Eine dritte Möglichkeit ist die Verwendung des Modulo-Operators <code class='code-dark'>%</code> mit dem Wert 1.",
            "Eine vierte Möglichkeit ist das Austauschen der Anweisungen unter <code class='code-dark'>if</code> und <code class='code-dark'>else</code>.",
          ],
        },
        {
          task: "Verändern Sie den ursprünglichen Code so, dass nur dann rot gezeichnet wird, wenn der Wert der Variable <code class='code-dark'>i</code> sowohl durch zwei als auch durch drei teilbar ist. Sie können mehrere Bedingungen durch den Operator <code class='code-dark'>and</code> verknüpfen. <i>Beispiel: Falls i kleiner als 10 und teilbar durch zwei sein soll, kann <code class='code-dark'>if i < 10 and i % 2 == 0:</code></i> als Bedingung genutzt werden",
          answerType: "code",
          hints: [
            "Überlegen Sie, wie Sie die Bedingung anpassen können, um beide Teilbarkeitsprüfungen zu integrieren.",
            "Nutzen Sie den logischen Operator <code class='code-dark'>and</code>, um beide Bedingungen zu verknüpfen.",
            "Die Bedingung könnte so aussehen: <code class='code-dark'>if i % ... == 0 and i % ... == 0:</code>",
          ],
        },
        {
          task: "Ergänzen Sie den ursprünglichen Code so, dass die Turtle bei durch zwei teilbaren Werten von <code class='code-dark'>i</code> rot zeichnet, bei durch drei teilbaren Werten von <code class='code-dark'>i</code> blau zeichnet und in allen anderen Fällen grün zeichnet.",
          answerType: "code",
          hints: [
            "An welcher Stelle im Code könnten Sie eine weitere Bedingung ergänzen? Wann ist die Zahl definitiv nicht durch zwei teilbar?",
            "Nutzen Sie eine weitere <code class='code-dark'>if</code>-Anweisung innerhalb der <code class='code-dark'>else</code>-Anweisung.",
            "Achten Sie auf die Einrückungen, wenn Sie eine neue <code class='code-dark'>if</code>-Anweisung ergänzen.",
            "Die neue Bedingung könnte so aussehen: <code class='code-dark'>if i % 3 == 0:</code>",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Neuen Code schreiben",
      subtasks: [
        {
          task: "Schreiben Sie Code, der mithilfe einer <code class='code-dark'>for</code>-Schleife ein Quadrat zeichnet. Dabei sollen die ungeraden Seiten des Quadrats rot und die geraden Seiten grün sein. <i>Hinweis: In den Hinweisen finden Sie eine Starthilfe, die Sie kopieren können.</i>",
          answerType: "code",
          hints: [
            "<pre>from turtle import *\n\nfor i in range(4):\n    # Fügen Sie hier Ihre Bedingung ein\n    \n    forward(100)\n    right(90)\n\nmainloop()</pre>",
            "Ergänzen Sie in der Starthilfe eine Bedingung, die überprüft, ob die Seite gerade oder ungerade ist.",
            "Nutzen Sie den Modulo-Operator <code class='code-dark'>%</code>, um zu überprüfen, ob die Zahl in der Variable <code class='code-dark'>i</code> gerade oder ungerade ist.",
          ],
        },
        {
          task: "<img src='img/turtle-ifelse-spirale.png' style='width:180px;' alt='Beispiel einer Spirale, die aus vielen Linien besteht, die sich immer weiter nach außen drehen. Die inneren Linien sind blau, die äußeren orange.' class='img-thumbnail float-end mb-2'/>Schreiben Sie Code, der mithilfe einer beliebigen Schleife eine Spirale zeichnet. Dabei soll die Spirale bei Seitenlängen unter 100 Pixel blau sein, ansonsten orange.",
          answerType: "code",
          hints: [
            "Nutzen Sie die Ihre bisherigen Lösungen aus den vorherigen Arbeitsblättern und ergänzen Sie diese um eine Verzweigung.",
          ],
        },
      ],
    },
    {
      title: "Zusatzaufgaben",
      subtasks: [
        {
          task: "<img src='img/turtle-ifelse-zufallspunkte.png' style='width:180px;' alt='Mehrere zufällig angeordnete Punkte. Die linken unteren Punkte sind grün, die oberen rechten rot.' class='img-thumbnail float-end mb-2'/>Schreiben Sie Code, der ähnlich wie im Bild zufällige Punkte zeichnet. Dabei soll jeder Punkt grün sein, wenn die Summe seiner x- und y-Koordinate kleiner als 0 ist, ansonsten rot. Nutzen Sie die Bibliothek <code class='code-dark'>from random import *</code> und die Funktion <code class='code-dark'>randint()</code> sowie eine einfache for-Schleife. <i>Hinweis: Sie finden in den Hinweisen eine Starthilfe, die Sie kopieren können.</i>",
          answerType: "code",
          hints: [
            "<pre>from turtle import *\nfrom random import *\npenup()\nspeed(1000)\n\nfor i in range(100):\n    x = randint(-300, 300)\n    y = randint(-300, 300)\n    goto(x, y)\n\n    #...</pre>",
          ],
        },
        {
          task: "<img src='img/turtle-ifelse-punkte.png' style='width:180px;' alt='Es werden viele Punkte in einem quadratischen Muster angezeigt. Die linke obere Hälfte ist dabei grün, die rechte untere rot.' class='img-thumbnail float-end mb-2'/>Schreiben Sie Code, das folgende Bild erzeugt. Nutzen Sie dazu zwei ineinander verschachtelte <code class='code-dark'>for</code>-Schleifen und eine Verzweigung. <i>Hinweis: Sie finden in den Hinweisen eine Starthilfe, die Sie kopieren können.</i>",
          answerType: "code",
          hints: [
            "<pre>from turtle import *\n\nfor i in range(-200, 200, 20):\n    for j in range(-200, 200, 20):\n        goto(i, j)\n        #Fügen Sie hier Ihre Bedingung ein\n     pendown()\n        dot(15)\n        penup()\n\nmainloop()</pre>",
            "Ergänzen Sie in der Starthilfe eine Bedingung, die überprüft, ob die Summe von i und j kleiner oder größer als 0 ist.",
          ],
        },
      ],
    },
  ],
});
