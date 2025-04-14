worksheets.push({
  titleShort: "Caesar",
  title: "Wie schaffte es schon Caesar, geheime Botschaften zu übermitteln?",
  description:
    "<p>Beim Schreiben von Nachrichten in Messenger-Apps wie WhatsApp oder Signal stellt sich die Frage, wie sicher diese eigentlich sind. Was passiert, wenn eine Nachricht abgefangen wird? Moderne Apps verwenden komplexe Verschlüsselungsverfahren, doch die Idee dahinter ist keineswegs neu.</p><p>Bereits in der Antike entwickelten Menschen Methoden, um geheime Botschaften zu schützen. Eine der bekanntesten stammt von Julius Caesar: Er nutzte eine einfache Technik, um seine Nachrichten vor unbefugtem Zugriff zu sichern.</p><p>Wie ist Caesar vorgegangen? Und wie sicher waren seine Nachrichten verschlüsselt?</p>",
  image: "img/caesar-chatgpt.jpg",
  imageDescription: "Bild: Generiert mit ChatGPT, eigene Bearbeitung.",
  imageAlt: "Kaiser Caesar übergibt einem Boten eine verschlüsselte Nachricht.",
  code: {
    javascript:
      'function caesar_encrypt(text, shift) {\n    let result = "";\n    text = text.toUpperCase();\n    for (let char of text) {\n        if (char.isAlpha()) {\n            let newposition = char.charCodeAt(0) + shift;\n            let newchar = String.fromCharCode(newposition);\n            result = result + newchar;\n        } else {\n            result = result + char;\n        }\n    }\n    return result;\n}\n\nlet message = "Hello, World!";\nlet shift = 3;\nlet encrypted_message = caesar_encrypt(message, shift);\nconsole.log(encrypted_message);',
    python:
      'def caesar_encrypt(text, shift):\n    result = ""\n    text = text.upper()\n    for char in text:\n        if char.isalpha():\n            newposition = ord(char) + shift\n            newchar = chr(newposition)\n            result = result + newchar\n        else:\n            result = result + char\n    return result\n\nmessage = "Hello, World!"\nshift = 3\nencrypted_message = caesar_encrypt(message, shift)\nprint(encrypted_message)',
  },
  codeFilename: {
    python: "caesar.py",
    javascript: "caesar.js",
  },
  primaryLanguage: "python",
  codeHelpers: {
    python: [
      {
        title: "<code>String isalpha()</code>",
        content:
          "Diese Funktion prüft, ob der gegebene String nur Charaktere aus dem Alphabet, also Buchstaben, enthält.",
      },
      {
        title: "<code>ord()</code>",
        content:
          'Diese Funktion gibt die Zahl des Unicode-Codes eines Zeichens zurück. Beispiel: <code>ord("h")</code> gibt <code>104</code> zurück.',
      },
      {
        title: "<code>chr()</code>",
        content:
          'Diese Funktion gibt das Unicode-Zeichen zurück, das durch diese Nummer repräsentiert wird. Beispiel: <code>chr(104)</code> gibt <code>"h"</code> zurück.',
      },
    ],
    javascript: [
      {
        title: "<code>String.prototype.isAlpha()</code>",
        content:
          "Diese Methode prüft, ob der gegebene String nur Charaktere aus dem Alphabet, also Buchstaben, enthält.",
      },
      {
        title: "<code>String.prototype.charCodeAt()</code>",
        content:
          'Diese Methode gibt den Unicode-Wert des Zeichens an der angegebenen Position zurück. Beispiel: <code>"h".charCodeAt(0)</code> gibt <code>104</code> zurück.',
      },
      {
        title: "<code>String.fromCharCode()</code>",
        content:
          'Diese Funktion gibt das Unicode-Zeichen zurück, das durch diese Nummer repräsentiert wird. Beispiel: <code>String.fromCharCode(104)</code> gibt <code>"h"</code> zurück.',
      },
      {
        title: "<code>console.log()</code>",
        content: "Diese Funktion gibt den übergebenen Wert in der Konsole aus.",
      },
    ],
  },
  tasks: [
    {
      title: "Aufgabe 1: Den Code beschreiben",
      subtasks: [
        {
          task: "Beschreiben Sie, was der gezeigte Code macht.",
          answerType: "textLong",
        },
        {
          task: "Nennen Sie die erwartete Ausgabe.",
          answerType: "text",
        },
      ],
      helpers: [
        {
          title: "Alphabet-Tabelle",
          content:
            '<table class="table text-center"><thead><tr><th>Position</th><th>Buchstabe</th><th>Unicode</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>65</td></tr><tr><td>2</td><td>B</td><td>66</td></tr><tr><td>3</td><td>C</td><td>67</td></tr><tr><td>4</td><td>D</td><td>68</td></tr><tr><td>5</td><td>E</td><td>69</td></tr><tr><td>6</td><td>F</td><td>70</td></tr><tr><td>7</td><td>G</td><td>71</td></tr><tr><td>8</td><td>H</td><td>72</td></tr><tr><td>9</td><td>I</td><td>73</td></tr><tr><td>10</td><td>J</td><td>74</td></tr><tr><td>11</td><td>K</td><td>75</td></tr><tr><td>12</td><td>L</td><td>76</td></tr><tr><td>13</td><td>M</td><td>77</td></tr><tr><td>14</td><td>N</td><td>78</td></tr><tr><td>15</td><td>O</td><td>79</td></tr><tr><td>16</td><td>P</td><td>80</td></tr><tr><td>17</td><td>Q</td><td>81</td></tr><tr><td>18</td><td>R</td><td>82</td></tr><tr><td>19</td><td>S</td><td>83</td></tr><tr><td>20</td><td>T</td><td>84</td></tr><tr><td>21</td><td>U</td><td>85</td></tr><tr><td>22</td><td>V</td><td>86</td></tr><tr><td>23</td><td>W</td><td>87</td></tr><tr><td>24</td><td>X</td><td>88</td></tr><tr><td>25</td><td>Y</td><td>89</td></tr><tr><td>26</td><td>Z</td><td>90</td></tr></tbody></table>',
        },
        {
          title: "Formulierungshilfen",
          content:
            "<ul><li>Die Funktion <code>caesar_encrypt()</code> wird verwendet, um...</li><li>Die Funktion nimmt zwei Parameter entgegen: ...</li><li>Der Parameter <code>text</code> ist der Eingabetext, der...</li><li>Die Variable <code>result</code> wird erstellt, um...</li><li>Falls das Zeichen ein Buchstabe ist, wird...</li></ul>",
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
          task: "Vergleichen Sie das Ergebnis mit ihrer Vorhersage.",
          answerType: "textLong",
        },
      ],
    },
    {
      title: "Aufgabe 3: Den Code analysieren",
      subtasks: [
        {
          task: "Beschreiben Sie, welche Datentypen in den Parametern <code>text</code> und <code>shift</code> übergeben werden.",
          answerType: "text",
          hints: [
            "Denken Sie an die möglichen Datentypen von Variablen in Python oder JavaScript.",
            '<table class="table text-center"><thead><tr><th>Datentyp</th><th>Beispiel</th></tr></thead><tbody><tr><td>String</td><td><code>"Hallo Welt"</code></td></tr><tr><td>char</td><td><code>\'H\'<code></td></tr><tr><td>integer</td><td><code>42<code></td></tr><tr><td>Float</td><td><code>3.1415<code></td></tr></tbody></table>',
          ],
          multipleChoice: true,
          choices: [
            {
              text: "<code>text</code>: Char, <code>shift</code> Integer",
              correct: false,
            },
            {
              text: "<code>text</code>: String, <code>shift</code> Integer",
              correct: true,
            },
            {
              text: "<code>text</code>: Integer, <code>shift</code> String",
              correct: false,
            },
            {
              text: "<code>text</code>: String, <code>shift</code> String",
              correct: false,
            },
          ],
        },
        {
          task: "Beschreiben Sie, wie häufig die for-Schleife in Zeile 4 durchlaufen wird.",
          answerType: "text",
          multipleChoice: true,
          choices: [
            {
              text: "Genau 10 Mal",
              correct: false,
            },
            {
              text: "Genau 13 Mal",
              correct: true,
            },
            {
              text: "So oft, wie der Text Zeichen enthält",
              correct: true,
            },
            {
              text: "Genau 3 Mal",
              correct: false,
            },
          ],
        },
        {
          task: 'Erklären Sie die Verwendung der Funktionen <code class="language-specific task-language-python">ord()</code><code class="language-specific task-language-javascript hide-element">charCodeAt()</code> und <code class="language-specific task-language-python">chr()</code><code class="language-specific task-language-javascript hide-element">String.fromCharCode</code> im Code.',
          answerType: "text",
          multipleChoice: true,
          choices: [
            {
              text: "Mit den Funktionen werden die Zeichen des Textes in Großbuchstaben umgewandelt.",
              correct: false,
            },
            {
              text: "Die Funktionen verändern den Text, um ihn zu verschlüsseln.",
              correct: true,
            },
            {
              text: "Die Funktionen sind nicht relevant für den Code.",
              correct: false,
            },
            {
              text: "Mit den Funktionen werden die Unicode-Werte der Zeichen ermittelt und wieder in Zeichen umgewandelt.",
              correct: true,
            },
          ],
        },
        {
          task: "Erklären Sie den Code in Zeile 6: <code>newposition = ord(char) + shift</code>",
          answerType: "text",
          multipleChoice: true,
          choices: [
            {
              text: "Der Unicode-Wert des Zeichens wird um den Wert von <code>shift</code> erhöht.",
              correct: true,
            },
            {
              text: "Der Unicode-Wert des Zeichens wird um den Wert von <code>shift</code> verringert.",
              correct: false,
            },
            {
              text: "An der neuen Position wird das Zeichen <code>shift</code> eingefügt.",
              correct: false,
            },
            {
              text: "Die neue Position wird berechnet, indem das Zeichen <code>shift</code> hinzugefügt wird.",
              correct: false,
            },
          ],
        },
        {
          task: "Beschreiben Sie, was bei der Eingabe von Leer- oder Satzzeichen passieren würde. Welche Zeilen des Codes sind hier relevant?",
          answerType: "text",
          multipleChoice: true,
          choices: [
            {
              text: "Leer- und Satzzeichen werden ebenfalls um den Wert von <code>shift</code> verschoben (Zeile 6).",
              correct: false,
            },
            {
              text: "Leer- und Satzzeichen werden unverändert übernommen (Zeilen 5 und 10).",
              correct: true,
            },
            {
              text: "Es wird eine Fehlermeldung ausgegeben (Zeile 13).",
              correct: false,
            },
            {
              text: "Leer- und Satzzeichen werden aus dem Text entfernt (Zeile 9).",
              correct: false,
            },
          ],
        },
        {
          task: 'Erklären Sie, warum die Eingaben <code>"hello, world!"</code> und <code>"HELLO, WORLD!"</code> zu einer identischen Ausgabe führen.',
          answerType: "text",
          multipleChoice: true,
          choices: [
            {
              text: "Der Code ist fehlerhaft und sollte unterschiedliche Ausgaben liefern.",
              correct: false,
            },
            {
              text: "Da Klein- und Großbuchstaben immer um genau 26 Zeichen verschoben sind, ist die Ausgabe gleich.",
              correct: false,
            },
            {
              text: "Der Unicode-Code von Groß- und Kleinbuchstaben ist identisch, daher ist die Ausgabe gleich.",
              correct: false,
            },
            {
              text: "Der Code konvertiert in Zeile 3 alle Zeichen in Großbuchstaben, bevor er sie verschlüsselt.",
              correct: true,
            },
          ],
        },
      ],
    },
    {
      title: "Aufgabe 4: Den Code verbessern",
      subtasks: [
        {
          task: "Beschreiben Sie, welche Ausgabe Sie beim Ausführen des Codes mit dem Parameter <code>shift = 32</code>. erwarten.",
          answerType: "text",
        },
        {
          task: "Setzen Sie den Parameter <code>shift = 32</code> und führen den Code aus. Vergleichen Sie das Ergebnis mit Ihrer Vorhersage.",
          answerType: "text",
        },
        {
          task: "Erklären Sie ein mögliches Problem sowie einen potenziellen Lösungsansatz.",
          answerType: "textLong",
        },
        {
          task: "Verändern Sie den Code so, dass das in Teilaufgabe a beschriebene Problem behoben wird.",
          answerType: "code",
        },
      ],
      helpers: [
        {
          title: "Formulierungshilfen",
          content:
            "<ul><li>Bei einer Verschiebung um 32 Zeichen wird der Buchstabe...</li><li>...wird das Unicode-Zeichen an der Stelle ... ausgegeben.</li><li>Ein Problem könnte entstehen, wenn...</li><li>Um das Problem zu lösen, müsste der Code...</li></ul>",
        },
      ],
    },
    {
      title: "Aufgabe 5: Den Code erweitern",
      subtasks: [
        {
          task: "Ergänzen Sie den Code um eine Funktion zum Entschlüsseln eines Strings, der vorher mit dem Caesar-Chiffre um eine bekannte Länge verschlüsselt wurde. Die Funktion sollte wie bisher die Parameter <code>text</code> und <code>shift</code> als Eingabe erhalten.",
          answerType: "code",
        },
        {
          task: '<span class="text-muted">(Zusatzaufgabe)</span> Schreiben Sie eine Funktion, die in einer Brute-Force-Methode alle möglichen Varianten für Verschiebungen ausprobiert.',
          answerType: "code",
        },
        {
          task: '<span class="text-muted">(Zusatzaufgabe)</span> Erläutern Sie sinnvolle Optimierungsmöglichkeiten einer Funktion, wie sie in Teilaufgabe b erstellt werden soll.',
          answerType: "text",
        },
      ],
    },
  ],
});
