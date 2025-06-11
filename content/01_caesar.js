worksheets.push({
  titleShort: "Caesar",
  titleTechnical: "caesar",
  title: "Wie schaffte es schon Caesar, geheime Botschaften zu übermitteln?",
  description:
    "<p>Beim Schreiben von Nachrichten in Messenger-Apps wie WhatsApp oder Signal stellt sich die Frage, wie sicher diese eigentlich sind. Was passiert, wenn eine Nachricht abgefangen wird? Moderne Apps verwenden komplexe Verschlüsselungsverfahren, um Nachrichten geheim zu halten. Doch die Idee, Nachrichten zu verschlüsseln, ist keineswegs neu.</p><p>Bereits in der Antike entwickelten Menschen Methoden, um geheime Botschaften zu schützen. Eine der bekanntesten nutzte bereits Julius Caesar: Er griff auf eine einfache Technik zurück, um seine Nachrichten vor unbefugtem Zugriff zu sichern.</p><p>Wie ist Caesar vorgegangen? Und wie sicher waren seine Nachrichten verschlüsselt?</p>",
  citations: [
    {
      short: "wikipedia2025",
      citation:
        'Wikipedia contributors (2025). List of Unicode characters. <i>Wikipedia, The Free Encyclopedia</i>. Aufgerufen am 11. Juni 2025 von <a href="https://en.wikipedia.org/w/index.php?title=List_of_Unicode_characters&oldid=1291316821" target="_blank">https://en.wikipedia.org/w/index.php?title=List_of_Unicode_characters&oldid=1291316821</a>',
    },
  ],
  image: "img/caesar-chatgpt.jpg",
  imageDescription: "Bild: Generiert mit ChatGPT, eigene Bearbeitung.",
  imageAlt: "Kaiser Caesar übergibt einem Boten eine verschlüsselte Nachricht.",
  code: {
    javascript:
      'function shiftCharacter(char, shift) {\n    if (/[A-Z]/.test(char)) {\n        let newPosition = char.charCodeAt() + shift;\n        return String.fromCharCode(newPosition);\n    } else {\n        return char;\n    }\n}\n\nfunction caesarEncrypt(text, shift) {\n    let result = "";\n    text = text.toUpperCase();\n    for (let char of text) {\n        result = result + shiftCharacter(char, shift);\n    }\n    return result;\n}\n\nlet message = "Hello, World!";\nlet shift = 3;\nlet encrypted = caesarEncrypt(message, shift);\nconsole.log(encrypted);',
    python:
      'def shift_character(char, shift):\n    if char.isalpha():\n        char = char.upper()\n        new_position = ord(char) + shift\n        return chr(new_position)\n    else:\n        return char\n\ndef caesar_encrypt(text, shift):\n    result = ""\n    for char in text:\n        result = result + shift_character(char, shift)\n    return result\n\nmessage = "Hello, World!"\nshift = 3\nencrypted = caesar_encrypt(message, shift)\nprint(encrypted)',
  },
  codeFilename: {
    python: "caesar.py",
    javascript: "caesar.js",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: '<code>String <span class="text-dark">isalpha()</span></code>',
        content:
          "Diese Funktion prüft, ob der gegebene String nur Charaktere aus dem Alphabet, also Buchstaben, enthält.",
      },
      {
        title: '<code class="text-dark">upper()</code>',
        content:
          'Diese Funktion wandelt den String in Großbuchstaben um. Beispiel: <pre style="display:inline;"><code>"Hallo".upper()</code></pre> gibt <code>"HALLO"</code> zurück.',
      },
      {
        title:
          '<code><span class="hljs-built_in">ord</span><span class="text-dark">()</span></code>',
        content:
          "Diese Funktion gibt die Zahl des Unicode-Codes eines Zeichens zurück. Beispiel: <pre style=\"display:inline;\"><code>ord('H')</code></pre> gibt <code>72</code> zurück.",
      },
      {
        title:
          '<code><span class="hljs-built_in">chr</span><span class="text-dark">()</span></code>',
        content:
          "Diese Funktion gibt das Unicode-Zeichen zurück, das durch diese Nummer repräsentiert wird. Beispiel: <pre style=\"display:inline;\"><code>chr(72)</code></pre> gibt <code>'H'</code> zurück.",
      },
      {
        title: "Unicode-Tabelle",
        content:
          "Die Unicode-Tabelle ist eine standardisierte Zuordnung von Zeichen zu Zahlen. Sie stellt sicher, dass die als Zahl gespeicherten Zeichen auf jedem digitalen Gerät das gleiche Zeichen darstellen. In diesem Fall werden Buchstaben durch ihre Unicode-Werte dargestellt. Ein Ausschnitt der Unicode-Tabelle für Großbuchstaben ist unten zu finden.",
      },
    ],
    javascript: [
      {
        title:
          '<code><span class="text-dark">/[A-Z]/.</span><span class="hljs-title function_">test</span><span class="text-dark">(char)</span></code>',
        content:
          "Hierbei handelt es sich um einen regulären Ausdruck, mit dem geprüft wird, ob der eingegebene Parameter <code>char</code> ein Buchstaben ist.<br><br>Ein regulärer Ausdruck ist ein Muster an Zeichen, das verwendet wird, um in einer Zeichenkette bestimmte Folgen von Zeichen zu suchen. In diesem Fall wird geprüft, ob <code>char</code> ein Großbuchstabe zwischen <code>'A'</code> und <code>'Z'</code> ist.",
      },
      {
        title:
          '<code><span class="hljs-title function_">String</span><span class="text-dark">.</span><span class="hljs-title function_">prototype</span><span class="text-dark">.</span><span class="hljs-title function_">charCodeAt</span><span class="text-dark">()</span></code>',
        content:
          "Diese Methode gibt den Unicode-Wert des Zeichens an der ersten Position zurück. Beispiel: <pre style=\"display:inline;\"><code>'H'.charCodeAt()</code></pre> gibt <code>72</code> zurück.",
      },
      {
        title:
          '<code><span class="hljs-title function_">String</span><span class="text-dark">.</span><span class="hljs-title function_">fromCharCode</span>()</code>',
        content:
          "Diese Funktion gibt das Unicode-Zeichen zurück, das durch diese Nummer repräsentiert wird. Beispiel: <pre style=\"display:inline;\"><code>String.fromCharCode(72)</code></pre> gibt <code>'H'</code> zurück.",
      },
      {
        title:
          '<code><span class="hljs-title function_">String</span><span class="text-dark">.</span><span class="hljs-title function_">toUpperCase</span><span class="text-dark">()</span></code>',
        content:
          'Diese Funktion wandelt den String in Großbuchstaben um. Beispiel: <pre style="display:inline;"><code>"hallo".toUpperCase()</code></pre> gibt <code>"HALLO"</code> zurück.',
      },
      {
        title:
          '<code><span class="hljs-variable">console</span>.<span class="hljs-title function_">log</span><span class="text-dark">()</span></code>',
        content:
          "Diese Funktion gibt den übergebenen Wert in der Konsole des Browsers aus.",
      },
      {
        title: "Unicode-Tabelle",
        content:
          "Die Unicode-Tabelle ist eine standardisierte Zuordnung von Zeichen zu Zahlen. Sie stellt sicher, dass die als Zahl gespeicherten Zeichen auf jedem digitalen Gerät das gleiche Zeichen darstellen. In diesem Fall werden Buchstaben durch ihre Unicode-Werte dargestellt. Ein Ausschnitt der Unicode-Tabelle für Großbuchstaben ist unten zu finden.",
      },
    ],
  },
  tasks: [
    {
      title: "Aufgabe 1: Den Code beschreiben",
      subtasks: [
        {
          task: 'Beschreiben Sie, was die Funktion <code class="language-specific task-language-python">shift_character()</code><code class="language-specific task-language-javascript hide-element">shiftCharacter()</code> macht.',
          answerType: "text",
          phrasingHelpers: [
            "Die Funktion <code class='language-specific task-language-python'>shift_character()</code><code class='language-specific task-language-javascript hide-element'>shiftCharacter()</code> erhält als Parameter ... übergeben.",
            "Es wird zuerst überprüft, ob...",
            "In der Variable ... wird ... gespeichert.",
          ],
        },
        {
          task: 'Nennen Sie die erwartete Ausgabe der Funktion <code class="language-specific task-language-python">shift_character()</code><code class="language-specific task-language-javascript hide-element">shiftCharacter()</code> mit den Eingabewerten <code>char = "H"</code> und <code>shift = 3</code>.',
          answerType: "multipleChoice",
          choices: [
            {
              text: "D",
              correct: false,
              feedbackText:
                "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
            },
            {
              text: "E",
              correct: false,
              feedbackText:
                "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
            },
            {
              text: "J",
              correct: false,
              feedbackText:
                "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
            },
            {
              text: "K",
              correct: true,
              feedbackText:
                "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
            },
          ],
        },
        {
          task: "Beschreiben Sie, was der gezeigte Code beim Aufruf der Funktion <code>main()</code> macht.",
          answerType: "textLong",
          phrasingHelpers: [
            "Beim Aufruf der Funktion <code>main()</code> wird zunächst ...",
            "Zuerst wird der Text aus der Variable <code>message</code> ...",
            "Danach wird ...",
            'Die Funktion <code class="language-specific task-language-python">shift_character()</code><code class="language-specific task-language-javascript hide-element">shiftCharacter()</code> überprüft ...',
            'In der Funktion <code class="language-specific task-language-python">caesar_encrypt()</code><code class="language-specific task-language-javascript hide-element">caesar_encrypt()</code> wird jeder Buchstabe ...',
            "... innerhalb der Schleife ...",
            "... wird in der Bedingung <code>if</code> überprüft, ob ...",
            "Am Ende wird das Ergebnis ...",
          ],
        },
        {
          task: "Nennen Sie die erwartete Ausgabe.",
          answerType: "textShort",
        },
      ],
      helpers: [
        {
          title:
            '<table class="table text-center"><thead><tr><th colspan="3">Unicode-Tabelle (Ausschnitt)</th></tr><tr><th>Position</th><th>Buchstabe</th><th>Unicode</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>65</td></tr><tr><td>2</td><td>B</td><td>66</td></tr><tr><td>3</td><td>C</td><td>67</td></tr><tr><td>4</td><td>D</td><td>68</td></tr><tr><td>5</td><td>E</td><td>69</td></tr><tr><td>6</td><td>F</td><td>70</td></tr><tr><td>7</td><td>G</td><td>71</td></tr><tr><td>8</td><td>H</td><td>72</td></tr><tr><td colspan="3"><span class="text-muted">Für mehr Zeilen ausklappen</span></td></tr></tbody></table>',
          content:
            '<table class="table text-center"><tbody><tr><td>9</td><td>I</td><td>73</td></tr><tr><td>10</td><td>J</td><td>74</td></tr><tr><td>11</td><td>K</td><td>75</td></tr><tr><td>12</td><td>L</td><td>76</td></tr><tr><td>13</td><td>M</td><td>77</td></tr><tr><td>14</td><td>N</td><td>78</td></tr><tr><td>15</td><td>O</td><td>79</td></tr><tr><td>16</td><td>P</td><td>80</td></tr><tr><td>17</td><td>Q</td><td>81</td></tr><tr><td>18</td><td>R</td><td>82</td></tr><tr><td>19</td><td>S</td><td>83</td></tr><tr><td>20</td><td>T</td><td>84</td></tr><tr><td>21</td><td>U</td><td>85</td></tr><tr><td>22</td><td>V</td><td>86</td></tr><tr><td>23</td><td>W</td><td>87</td></tr><tr><td>24</td><td>X</td><td>88</td></tr><tr><td>25</td><td>Y</td><td>89</td></tr><tr><td>26</td><td>Z</td><td>90</td></tr></tbody></table><br><a class="link-secondary" href="#wikipedia2025">(Wikipedia, 2025)</a>',
        },
      ],
    },
    {
      title: "Aufgabe 2: Den Code ausführen",
      subtasks: [
        {
          task: '<a href="#worksheet-code">Kopieren Sie den Code auf ihren PC oder laden Sie ihn herunter</a>. Schreiben Sie ihn nicht ab.',
          answerType: "none",
        },
        {
          task: "Führen Sie den Code aus.",
          answerType: "none",
        },
        {
          task: "Vergleichen Sie das Ergebnis mit Ihrer Vorhersage und erklären Sie, ob und warum Ihre Vorhersage korrekt war oder warum das Ergebnis abweicht.",
          answerType: "textLong",
        },
      ],
    },
    {
      title: "Aufgabe 3: Den Code analysieren",
      subtasks: [
        {
          task: 'Nennen Sie den Datentyp, der in der Funktion <code class="language-specific task-language-python">caesar_encrypt()</code><code class="language-specific task-language-javascript hide-element">caesarEncrypt()</code> im Parameter <code>text</code> übergeben wird.',
          answerType: "textShortCheckable",
          correctAnswers: ["String", "string"],
          feedbackText:
            "Der zu verschlüsselnde Text ist eine Zeichenkette und damit ein <code>String</code>.",
          hints: [
            "Gibt es in Programmiersprachen wie Python oder JavaScript einen spezifischen Datentypen für Textketten?",
            '<table class="table text-center"><thead><tr><th>Datentyp</th><th>Beispiel</th></tr></thead><tbody><tr><td>String</td><td><code>"Hallo Welt"</code></td></tr><tr><td>Char</td><td><code>\'H\'<code></td></tr><tr><td>Integer</td><td><code>42<code></td></tr><tr><td>Float</td><td><code>3.1415<code></td></tr></tbody></table>',
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Da der text aus mehreren Zeichen bestehen kann, ist der Datentyp <code>Char</code> für diesen nicht geeignet.",
            },
            {
              text: "String",
              correct: true,
              feedbackText:
                "Der zu verschlüsselnde Text ist eine Zeichenkette und damit ein <code>String</code>.",
            },
            {
              text: "Integer",
              correct: false,
              feedbackText:
                "Im Datentyp <code>Integer</code> werden ganze Zahlen gespeichert. Der Text ist jedoch eine Zeichenkette und damit ein <code>String</code>.",
            },
            {
              text: "Boolean",
              correct: false,
              feedbackText:
                "Der Datentyp <code>Boolean</code> speichert nur zwei Werte: <code>True</code> oder <code>False</code>. Der Text ist jedoch eine Zeichenkette und damit ein <code>String</code>.",
            },
          ],
        },
        {
          task: "Nennen Sie den Datentyp, der im Parameter <code>shift</code> übergeben wird.",
          answerType: "textShortCheckable",
          correctAnswers: ["Integer", "integer"],
          feedbackText:
            "Die Anzahl, um die die Buchstaben verschoben werden, ist immer eine ganze Zahl und damit ein <code>Integer</code>.",
          hints: [
            "Welcher Datentyp wird in Programmiersprachen wie Python oder JavaScript für ganze Zahlen verwendet?",
            '<table class="table text-center"><thead><tr><th>Datentyp</th><th>Beispiel</th></tr></thead><tbody><tr><td>String</td><td><code>"Hallo Welt"</code></td></tr><tr><td>Char</td><td><code>\'H\'<code></td></tr><tr><td>Integer</td><td><code>42<code></td></tr><tr><td>Float</td><td><code>3.1415<code></td></tr></tbody></table>',
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Integer",
              correct: true,
              feedbackText:
                "Die Anzahl, um die die Buchstaben verschoben werden, ist immer eine ganze Zahl und damit ein <code>Integer</code>.",
            },
            {
              text: "Float",
              correct: false,
              feedbackText:
                "Obwohl es möglich ist, den <code>shift</code> als <code>Float</code> zu übergeben, ist es nicht sinnvoll. Der Code verschiebt Buchstaben, es gibt allerdings keine 'halben' Buchstaben. Der <code>shift</code> sollte entsprechend immer eine ganze Zahl und damit ein <code>Integer</code> sein.",
            },
            {
              text: "String",
              correct: false,
              feedbackText:
                "Obwohl es möglich ist, den <code>shift</code> als <code>String</code> zu übergeben, ist es nicht sinnvoll. Bestimmte Rechenoperationen sind in vielen Programmiersprachen erst möglich oder korrekt, wenn Werte als ganze Zahl gespeichert werden. Der <code>shift</code> sollte immer eine ganze Zahl und damit ein <code>Integer</code> sein.",
            },
            {
              text: "Char",
              correct: false,
              feedbackText:
                "Obwohl es möglich ist, den <code>shift</code> als <code>Char</code> zu übergeben, ist es nicht sinnvoll. Der <code>shift</code> ist eine Zahl, die angibt, um wie viele Stellen die Buchstaben verschoben werden sollen. Der <code>shift</code> sollte entsprechend immer eine ganze Zahl und damit ein <code>Integer</code> sein.",
            },
          ],
        },
        {
          task: 'Beschreiben Sie, wie häufig die for-Schleife in Zeile <span class="language-specific task-language-python">11</span><span class="language-specific task-language-javascript hide-element">13</span> durchlaufen wird.',
          answerType: "text",
          hints: [
            "Welcher Wert wird in <code>text</code> gespeichert?",
            "Wie viele Zeichen hat der Text <code>text</code>?",
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Genau 10 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird nicht nur 10 Mal durchlaufen, sondern so oft, wie der Text <code>text</code> Zeichen enthält. Der Text <code>text</code> hat 13 Zeichen, daher wird die Schleife in diesem Fall 13 Mal durchlaufen.",
            },
            {
              text: "Genau 13 Mal",
              correct: true,
              feedbackText:
                "Die Schleife wird nicht nur 10 Mal durchlaufen, sondern so oft, wie der Text <code>text</code> Zeichen enthält. Der Text <code>text</code> hat 13 Zeichen, daher wird die Schleife in diesem Fall 13 Mal durchlaufen.",
            },
            {
              text: "So oft, wie der Text Zeichen enthält",
              correct: true,
              feedbackText:
                "Die Schleife wird so oft durchlaufen, wie der Text <code>text</code> Zeichen enthält. In diesem Fall sind es 13 Zeichen.",
            },
            {
              text: "Genau 3 Mal",
              correct: false,
              feedbackText:
                "Die Schleife wird nicht nur 3 Mal durchlaufen, sondern so oft, wie der Text <code>text</code> Zeichen enthält. In diesem Fall sind es 13 Zeichen.",
            },
          ],
        },
        {
          task: 'Begründen Sie, warum die Funktion <code class="language-specific task-language-python">ord()</code><code class="language-specific task-language-javascript hide-element">charCodeAt()</code> im Code nicht weggelassen werden kann.',
          answerType: "text",
          hints: [
            '<span class="language-specific task-language-python">Welcher Wert wird im Parameter der Funktionen übergeben?</span><span class="language-specific task-language-javascript hide-element">Auf was für ein Element wird die Funktion angewandt? Was enthält dieses Element?</span>',
            "Wie heißt die Variable, in der das Ergebnis dieser Funktion gespeichert wird?",
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Da mit dieser Funktion die Zeichen des Textes erst in Großbuchstaben umgewandelt werden.",
              correct: false,
              feedbackText:
                "Die Funktion wird verwendet, um den Unicode-Wert des Zeichens zu ermitteln, nicht um es in Großbuchstaben umzuwandeln. Wird sie weggelassen, kann der Code nicht korrekt funktionieren, da Buchstaben nicht einfach addiert werden können.",
            },
            {
              text: "Die Funktion gibt das Zeichen eines Unicode-Wertes zurück. Ohne sie würden nur Zahlen zurückgegeben werden.",
              correct: false,
              feedbackText:
                "Die Funktion wird verwendet, um den Unicode-Wert des Zeichens zu ermitteln. Wird sie weggelassen, kann der Code nicht korrekt funktionieren, da Buchstaben nicht einfach addiert werden können.",
            },
            {
              text: "Die Funktion ist nicht relevant für den Code, sie kann weggelassen werden.",
              correct: false,
              feedbackText:
                "Die Funktion wird verwendet, um den Unicode-Wert des Zeichens zu ermitteln. Wird sie weggelassen, kann der Code nicht korrekt funktionieren, da Buchstaben nicht einfach addiert werden können.",
            },
            {
              text: "Mit der Funktion wird der Unicode-Wert eines Zeichens ermittelt. Ohne sie würde der Code nicht funktionieren, da Chars nicht einfach addiert werden können.",
              correct: true,
              feedbackText:
                "Die Funktion gibt beispielsweise den Unicode-Wert des Zeichens <code>H</code> zurück, der 72 ist. Mit dieser Zahl kann dann die Verschiebung um den Wert von <code>shift</code> erfolgen.",
            },
          ],
        },
        {
          task: 'Begründen Sie, warum die Funktion <code class="language-specific task-language-python">chr()</code><code class="language-specific task-language-javascript hide-element">String.fromCharCode()</code> im Code nicht weggelassen werden kann.',
          answerType: "text",
          hints: [
            "Welcher Wert wird im Parameter der Funktion übergeben?",
            "Welcher Wert würde ohne diese Funktion zurückgegeben?",
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Die Funktion ist nicht relevant für den Code, sie kann weggelassen werden.",
              correct: false,
              feedbackText:
                "Die Funktion gibt das Zeichen zurück, das dem Unicode-Code zugeordnet ist. Ohne sie würden nur Zahlen zurückgegeben werden.",
            },
            {
              text: "Die Funktion gibt das Zeichen zurück, das dem Unicode-Code zugeordnet ist. Ohne sie würden nur Zahlen zurückgegeben werden.",
              correct: true,
              feedbackText:
                "Die Funktion gibt beispielsweise das Zeichen zurück, das dem Unicode-Code 72 zugeordnet ist, also <code>H</code>.",
            },
            {
              text: "Mit der Funktion wird der Unicode-Wert eines Zeichens ermittelt. Ohne sie würde der Code nicht funktionieren, da Chars nicht einfach addiert werden können.",
              correct: false,
              feedbackText:
                "Die Funktion gibt das Zeichen zurück, das dem Unicode-Code zugeordnet ist. Ohne sie würden nur Zahlen zurückgegeben werden.",
            },
            {
              text: "Da mit dieser Funktion die Zeichen des Textes erst in Großbuchstaben umgewandelt werden.",
              correct: false,
              feedbackText:
                "Die Funktion gibt das Zeichen zurück, das dem Unicode-Code zugeordnet ist. Ohne sie würden nur Zahlen zurückgegeben werden.",
            },
          ],
        },
        {
          task: 'Erklären Sie den Code in <span class="language-specific task-language-python">Zeile 4</span><span class="language-specific task-language-javascript hide-element">Zeile 3</span>: <code class="language-specific task-language-python">new_position = ord(char) + shift</code><code class="language-specific task-language-javascript hide-element">let newPosition = char.charCodeAt() + shift;</code>',
          answerType: "text",
          hints: [
            "Welchen Wert gibt die Funktion <code class='language-specific task-language-python'>ord()</code><code class='language-specific task-language-javascript hide-element'>charCodeAt()</code> für den Buchstaben <code>H</code> zurück?",
            "Was wird mit dem Wert der Variable <code>shift</code> gemacht?",
          ],
          multipleChoice: true,
          choices: [
            {
              text: 'Über die Funktion <code class="language-specific task-language-python">ord(char)</code><code class="language-specific task-language-javascript hide-element">char.charCodeAt()</code> wird der Unicode-Wert des Zeichens <code>char</code>ermittelt. Der Unicode-Wert des Zeichens <code>char</code> wird anschließend um den Wert von <code>shift</code> verringert.',
              correct: false,
              feedbackText:
                "Mit dem Operator <code>+</code> wird der Wert von <code>shift</code> addiert, nicht subtrahiert.",
            },
            {
              text: 'Über die Funktion <code class="language-specific task-language-python">ord(char)</code><code class="language-specific task-language-javascript hide-element">char.charCodeAt()</code> wird der Unicode-Wert des Zeichens <code>char</code>ermittelt. Der Unicode-Wert des Zeichens <code>char</code> wird anschließend um den Wert von <code>shift</code> erhöht.',
              correct: true,
              feedbackText:
                "Wird beispielsweise <code>H</code> (Unicode 72) um 3 erhöht, ergibt sich <code>K</code> (Unicode 75).",
            },
            {
              text: 'Über die Funktion <code class="language-specific task-language-python">ord(char)</code><code class="language-specific task-language-javascript hide-element">char.charCodeAt()</code> wird das Zeichen mit dem Unicode-Wert <code>char</code>ermittelt. An der neuen Position im <code>text</code> wird das Zeichen <code>shift</code> anschließend eingefügt.',
              correct: false,
              feedbackText:
                "Die Variable <code>shift</code> ist eine Zahl, die angibt, um wie viele Stellen die Buchstaben verschoben werden sollen. Sie wird nicht als Zeichen in den Text eingefügt.",
            },
            {
              text: 'Über die Funktion <code class="language-specific task-language-python">ord(char)</code><code class="language-specific task-language-javascript hide-element">char.charCodeAt()</code> wird das Zeichen mit dem Unicode-Wert <code>char</code>ermittelt. Das bisherige Schlüsselwort wird anschließend um den neu verschobenen Buchstaben <code>shift</code> erweitert.',
              correct: false,
              feedbackText:
                "Die Variable <code>shift</code> ist eine Zahl, die angibt, um wie viele Stellen die Buchstaben verschoben werden sollen. Sie wird nicht als Zeichen in den Text eingefügt.",
            },
          ],
        },
        {
          task: "Beschreiben Sie, was bei der Eingabe von Leer- oder Satzzeichen passieren würde. Nennen Sie auch die Zeilen des Codes, die hier relevant sind.",
          answerType: "text",
          hints: [
            "In welchen Codezeilen wird überprüft, ob ein Zeichen ein Buchstabe ist?",
            "Gibt es eine weitere Codezeile, die das Zeichen unverändert übernimmt?",
          ],
          multipleChoice: true,
          choices: [
            {
              text: 'Leer- und Satzzeichen werden ebenfalls um den Wert von <code>shift</code> verschoben (Zeile <span class="language-specific task-language-python">4</span><span class="language-specific task-language-javascript hide-element">3</span>).',
              correct: false,
              feedbackText:
                "Da eine Verschiebung von Leer- und Satzzeichen keinen Sinn ergeben würde, wird in der <code>if</code>-Abfrage in Zeile <span class='language-specific task-language-python'>4</span><span class='language-specific task-language-javascript hide-element'>3</span> überprüft, ob das Zeichen ein Buchstabe ist. Wenn nicht (<code>else</code>), wird es in Zeile <span class='language-specific task-language-python'>7</span><span class='language-specific task-language-javascript hide-element'>6</span> unverändert übernommen.",
            },
            {
              text: 'Leer- und Satzzeichen werden unverändert übernommen (Zeile <span class="language-specific task-language-python">7</span><span class="language-specific task-language-javascript hide-element">6</span>).',
              correct: true,
              feedbackText:
                "In der <code>if</code>-Abfrage in Zeile 2 wird überprüft, ob das Zeichen ein Buchstabe ist. Wenn nicht (<code>else</code>), wird es in Zeile <span class='language-specific task-language-python'>7</span><span class='language-specific task-language-javascript hide-element'>6</span> unverändert übernommen.",
            },
            {
              text: 'Es wird eine Fehlermeldung ausgegeben (Zeile <span class="language-specific task-language-python">7</span><span class="language-specific task-language-javascript hide-element">6</span>).',
              correct: false,
              feedbackText:
                "Eine Fehlermeldung wird im Code nicht ausgegeben. In der <code>if</code>-Abfrage in Zeile 2 wird überprüft, ob das Zeichen ein Buchstabe ist. Wenn nicht (<code>else</code>), wird es in Zeile <span class='language-specific task-language-python'>7</span><span class='language-specific task-language-javascript hide-element'>6</span> unverändert übernommen.",
            },
            {
              text: 'Leer- und Satzzeichen werden aus dem Text entfernt (Zeile <span class="language-specific task-language-python">3</span><span class="language-specific task-language-javascript hide-element">12</span>).',
              correct: false,
              feedbackText:
                "Es werden keine Zeichen aus dem eingebenen Text entfernt. In der <code>if</code>-Abfrage in Zeile 2 wird überprüft, ob das Zeichen ein Buchstabe ist. Wenn nicht (<code>else</code>), wird es in Zeile <span class='language-specific task-language-python'>7</span><span class='language-specific task-language-javascript hide-element'>6</span> unverändert übernommen.",
            },
          ],
        },
        {
          task: 'Erklären Sie, warum die Eingaben <code>"hello, world!"</code> und <code>"HELLO, WORLD!"</code> zu einer identischen Ausgabe führen.',
          answerType: "text",
          hints: [
            "Wird im Code zwischen Groß- und Kleinbuchstaben unterschieden?",
            "Betrachten Sie Zeile <span class='language-specific task-language-python'>3</span><span class='language-specific task-language-javascript hide-element'>12</span>, in der der Wert der Variable <code class='language-specific task-language-python'>char</code><code class='language-specific task-language-javascript hide-element'>text</code> verändert wird.",
          ],
          multipleChoice: true,
          choices: [
            {
              text: "Der Code ist fehlerhaft und sollte unterschiedliche Ausgaben liefern.",
              correct: false,
              feedbackText:
                "Der Code ist nicht fehlerhaft. Er wandelt mit der Funktion <code class='language-specific task-language-python'>upper()</code><code class='language-specific task-language-javascript hide-element'>toUpperCase()</code> in Zeile <span class='language-specific task-language-python'>3</span><span class='language-specific task-language-javascript hide-element'>12</span> alle Zeichen in Großbuchstaben um, bevor sie verschlüsselt werden. Daher ist die Ausgabe für beide Eingaben identisch.",
            },
            {
              text: "Da Klein- und Großbuchstaben immer um genau 26 Zeichen verschoben sind, ist die Ausgabe gleich.",
              correct: false,
              feedbackText:
                "Die Unicode-Werte von Groß- und Kleinbuchstaben sind unterschiedlich, daher ist diese Aussage nicht korrekt. Der Code wandelt entsprechend in Zeile <span class='language-specific task-language-python'>3</span><span class='language-specific task-language-javascript hide-element'>12</span> alle Zeichen in Großbuchstaben um, bevor sie verschlüsselt werden.",
            },
            {
              text: "Der Unicode-Code von Groß- und Kleinbuchstaben ist identisch, daher ist die Ausgabe gleich.",
              correct: false,
              feedbackText:
                "Die Unicode-Werte von Groß- und Kleinbuchstaben sind unterschiedlich. Der Code wandelt daher in Zeile <span class='language-specific task-language-python'>3</span><span class='language-specific task-language-javascript hide-element'>12</span> alle Zeichen in Großbuchstaben um, bevor sie verschlüsselt werden.",
            },
            {
              text: "Der Code konvertiert alle Zeichen in Großbuchstaben, bevor er sie verschlüsselt.",
              correct: true,
              feedbackText:
                "Der Code wandelt mit der Funktion <code class='language-specific task-language-python'>upper()</code><code class='language-specific task-language-javascript hide-element'>toUpperCase()</code> in Zeile <span class='language-specific task-language-python'>3</span><span class='language-specific task-language-javascript hide-element'>12</span> alle Zeichen in Großbuchstaben um, bevor sie verschlüsselt werden.",
            },
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verbessern",
      helpers: [
        {
          title: "Unicode-Tabelle (Zeichen 88 bis 102)",
          content:
            '<table class="table text-center"><thead><tr><th>Position</th><th>Zeichen</th><th>Unicode</th></tr></thead><tbody><tr><td colspan="3">...</td></tr><tr><td>25</td><td>X</td><td>88</td></tr><tr><td>25</td><td>Y</td><td>89</td></tr><tr><td>26</td><td>Z</td><td>90</td></tr><tr><td>27</td><td>[</td><td>91</td></tr><tr><td>28</td><td>\\</td><td>92</td></tr><tr><td>29</td><td>]</td><td>93</td></tr><tr><td>30</td><td>^</td><td>94</td></tr><tr><td>31</td><td>_</td><td>95</td></tr><tr><td>32</td><td>`</td><td>96</td></tr><tr><td>33</td><td>a</td><td>97</td></tr><tr><td>34</td><td>b</td><td>98</td></tr><tr><td>35</td><td>c</td><td>99</td></tr><tr><td>36</td><td>d</td><td>100</td></tr><tr><td>37</td><td>e</td><td>101</td></tr><tr><td>38</td><td>f</td><td>102</td></tr><tr><td colspan="3">...</td></tr></tbody></table>',
        },
      ],
      subtasks: [
        {
          task: "Nennen und begründen Sie, welche Ausgabe Sie beim Ausführen des Codes mit dem Parametern <code>message = 'A'</code> und <code>shift = 26</code> (Zeilen <span class='language-specific task-language-python'>16 und 17</span><span class='language-specific task-language-javascript hide-element'>20 und 21</span>) erwarten. Sie müssen keinen spezifischen Ausgabewert angeben. Führen Sie den Code noch nicht aus.",
          answerType: "text",
          hints: [
            "Vermuten Sie, welche Zeichen noch auf der Unicode-Tabelle vorhanden sind. Großbuchstaben sind nur den Werten 65 und 90 zu finden.",
            "Der Unicode-Wert von <code>A</code> ist 65. Welcher Buchstabe wird bei der Verschiebung um 26 Zeichen ausgegeben?",
          ],
          phrasingHelpers: [
            "Bei einer Verschiebung um 26 Zeichen wird der Buchstabe ...",
            "Das Unicode-Zeichen an der Stelle ... wird ausgegeben.",
          ],
        },
        {
          task: 'Setzen Sie die Parameter <code>message = "A"</code> und <code>shift = 26</code> und führen den Code aus. Vergleichen Sie das Ergebnis mit Ihrer Vorhersage.',
          answerType: "text",
        },
        {
          task: "Im verschlüsselten Text sollen weiterhin nur Buchstaben angezeigt werden. Erklären Sie das entsprechende Problem mit dem aktuellen Code. Beschreiben Sie, um was der Code ergänzt oder verändert werden müsste, damit der Code auch mit dem aufgezeigten Problem umgehen kann.",
          answerType: "textLong",
          hints: [
            "Welches Zeichen würde ausgegeben werden, wenn die neu errechnete Position eines verschobenen Buchstaben größer ist als die Position des Buchstabens <code>Z</code>?",
            "Wie kann sichergestellt werden, dass <code>shift</code> immer kleiner ist als die Anzahl der Buchstaben im Alphabet?",
            "Es könnte in einer <code>if</code>-Verzweigung geprüft werden, ob der <code>shift</code> größer als 25 ist.",
          ],
        },
        {
          task: "Verändern Sie den Code so, dass das in Teilaufgabe a beschriebene Problem behoben wird.",
          answerType: "code",
          hints: [
            "Überlegen Sie, wie Sie sicherstellen können, dass der Wert von <code>shift</code> immer kleiner ist als die Anzahl der Buchstaben im Alphabet.",
            "Wäre es sinnvoll, mit einer if-Abfrage überprüfen, ob der Wert von <code>shift</code> größer ist als 25?",
            "Sie könnten den Wert von <code>shift</code> auf 25 begrenzen, wenn er größer ist. Das könnte so aussehen:<br><code class='language-specific task-language-python'><pre>if shift > 25:\n    shift = 25</pre></code><code class='language-specific task-language-javascript hide-element'><pre>if (shift > 25) {\n    shift = 25;\n}</pre></code>",
          ],
        },
        {
          task: 'Beschreiben Sie, welche Ausgabe Sie beim Ausführen des veränderten Codes mit dem Parametern <code>text = "A"</code> und <code>shift = 104</code>. erwarten. Sie müssen keinen spezifischen Ausgabewert angeben.',
          answerType: "text",
          hints: [
            "Wie haben Sie den Code verändert? Gibt es jetzt eine Begrenzung für den Wert von <code>shift</code>?",
            "Deckt Ihr neuer Code auch Fälle ab, in denen <code>shift</code> deutlich größer als 25 ist?",
          ],
        },
        {
          task: 'Setzen Sie die Parameter <code>text = "A"</code> und <code>shift = 104</code> und führen den Code aus. Vergleichen Sie das Ergebnis mit Ihrer Vorhersage.',
          answerType: "text",
        },
        {
          task: "Falls die Ausgabe nicht Ihrer Vorhersage entsprach: Verändern Sie den Code so, dass auch ein Fall wie in der letzten Teilaufgabe ohne Probleme ausgeführt werden kann.",
          answerType: "code",
          hints: [
            "Der Modulo-Operator <code>%</code> gibt den Rest einer Division zurück.<br>Beispiel: <code>31 % 26</code> ergibt <code>5</code>, weil 26 genau einmal in 31 passt, mit einem Rest von 5.<br>So können Werte wie 27, 52 oder 86 in einen Bereich zwischen 0 und 25 gebracht werden.",
            "Um das Verschieben auch für Werte größer als 25 zu ermöglichen, sollten Sie einen sogenannten <i>Wraparound</i> implementieren. Für einen solchen benötigen Sie:<ol><li>Die Position des Buchstabens im Alphabet (z. B. A = 0, B = 1, ..., Z = 25),</li><li>Eine Addition des Shift-Werts zu dieser Position,</li><li>Einen Modulo 26 auf das Ergebnis – damit Sie bei Z wieder auf A springen können.</li><li>Am Ende müssen Sie diesen neuen Wert wieder in einen Buchstaben umwandeln.</li></ol>",
            "Die zuvor genannten Schritte können Sie mit folgendem Code umsetzen:<ol><li><code class='language-specific task-language-python'>position = ord(char) - ord('A')</code><code class='language-specific task-language-javascript hide-element'>let position = char.charCodeAt() - 'A'.charCodeAt()</code></li><li><code class='language-specific task-language-python'>position = position + shift</code><code class='language-specific task-language-javascript hide-element'>position = position + shift</code></li><li><code class='language-specific task-language-python'>position = position % 26</code><code class='language-specific task-language-javascript hide-element'>position = position % 26</code></li></ul>.",
          ],
        },
      ],
    },
    {
      title: "Aufgabe 5: Den Code erweitern",
      description:
        "Sie konnten den verschlüsselten Text <code>EVZE, ZTY YRSV DVZE VJJVE MVIXVJJVE. VJ XZSK JGRVKVI ELUVCE LEU VZJ ZE UVI TRWVKVIZR!</code>, der zwischen zwei Mitschüler*innen ausgetauscht wurde, abfangen. Wie können Sie nun möglichst schnell erfahren, worum es in der Nachricht geht?",
      subtasks: [
        {
          task: "Ergänzen Sie den Code um eine Funktion <code class='language-specific task-language-python'>caesar_decrypt</code><code class='language-specific task-language-javascript hide-element'>caesarDecrypt</code> zum Entschlüsseln eines Strings, der vorher mit dem Caesar-Chiffre verschlüsselt wurde. Die Funktion sollte wie bisher die Parameter <code>text</code> und <code>shift</code> als Eingabe erhalten. Nutzen Sie die bestehende Funktion <code class='language-specific task-language-python'>shift_character()</code><code class='language-specific task-language-javascript hide-element'>shiftCharakter()</code>, ohne diese zu verändern.",
          answerType: "code",
          hints: [
            "Denken Sie darüber nach, wie Sie die Richtung der Verschiebung umkehren können.",
            "Kopieren Sie den ursprünglichen Code bzw. Ihre Version aus Aufgabe 4. An welcher Stelle können Sie die Richtung umkehren?",
            'Ein möglicher Ansatz für die Funktion (noch mit Lücken): <code class="language-specific task-language-python"><pre>def caesar_decrypt(text, shift):\n    result = ""\n    for char in text:\n        # TODO\n    return result</pre></code><code class="language-specific task-language-javascript hide-element"><pre>function caesarDecrypt(text, shift) {\n    let result = "";\n    text = text.toUpperCase();\n    for (let char of text) {\n        // TODO\n    }\n    return result;\n}</pre></code>',
          ],
        },
        {
          task: "Erklären Sie, wie häufig Sie nun den Code ausführen müssten, um den verschlüsselten Text lesen zu können und was das für die Sicherheit des Caesar-Chiffres bedeuten. Handelt es sich um ein sicheres Verfahren?",
          answerType: "textLong",
          hints: [
            "Wie viele Verschiebungen müssen ausprobiert werden, um den Text zu entschlüsseln?",
            "Ist es sinnvoll, ein Verfahren zu verwenden, bei dem nur 25 mögliche Schlüssel ausprobiert werden müssen?",
          ],
        },
        {
          task: '<span class="text-muted">(Zusatzaufgabe)</span> Schreiben Sie eine Funktion, die alle möglichen Varianten für Verschiebungen ausprobiert.',
          answerType: "code",
          hints: [
            "Wie können Sie es schaffen, die bereits implementierte Funktion <code>caesar_decrypt()</code> mehrmals mit verschiedenen Parametern auszuführen?",
            "Sie können mit einer <code>for-Schleife</code> arbeiten.",
            '<code class="language-specific task-language-python">for shift in range(1, 26):</code><code class="language-specific task-language-javascript hide-element">for (let shift = 1; shift < 26; shift++) {</code>',
            'Ein möglicher Ansatz für die Funktion (noch mit Lücken): <code class="language-specific task-language-python"><pre>def caesar_all_variants(text):\n    for shift in range(1, 26):\n        # TODO</pre></code><code class="language-specific task-language-javascript hide-element"><pre>function caesar_bruteforce(text) {\n    for (let shift = 1; shift < 26; shift++) {\n        // TODO\n    }\n}</pre></code>',
          ],
        },
        {
          task: '<span class="text-muted">(Zusatzaufgabe)</span> Erläutern Sie mögliche Wege, wie die Anzahl der Prüfung auf mögliche Verschiebungen reduziert werden kann. Geben Sie auch an, welche Informationen Sie dafür benötigen würden.',
          answerType: "textLong",
          hints: [
            "Wäre es sinnvoll, die Häufigkeit von Buchstaben im Text zu analysieren?",
            '<figure class="figure"><img src="img/caesar-buchstabenhaeufigkeit.png" alt="Durchschnittliche Buchstabenhäufigkeit in deutschen Texten. Die Buchstaben E, N, I, R und S kommen am häufigsten vor." class="figure-img img-fluid"><figcaption class="figure-caption">Die häufigsten Buchstaben in deutschen Wörtern (Quelle: <a href="https://www.duden.de/sprachwissen/sprachratgeber/Die-haufigsten-Buchstaben-deutschen-Wortern" target="_blank" title="Die häufigsten Buchstaben in deutschen Wörtern auf duden.de">DUDEN</a>)</figcaption></figure>',
            "Wäre es möglich, den entschlüsselten Text auf bekannte und lesbare Wörter zu überprüfen?",
          ],
        },
      ],
    },
  ],
});
