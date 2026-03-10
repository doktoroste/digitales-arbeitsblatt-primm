# Digitales Arbeitsblatt PRIMM

This repository contains the project "Digitales Arbeitsblatt PRIMM", which combines modern web technologies such as CSS, JavaScript, and HTML for creating digital worksheets. The project is designed to facilitate interactive and engaging learning experiences as part of my masters thesis.

## Cloning the Repository

This repository uses Git submodules. To properly clone the repository along with its submodules, use the following command:

```bash
git clone --recurse-submodules https://github.com/doktoroste/digitales-arbeitsblatt-primm.git
```

Alternatively, if you have already cloned the repository without submodules, you can initialise and update the submodules with:

```bash
git submodule update --init --recursive
```

## Creating Worksheets

Worksheets are currently stored in JavaScript files to provide functionality on offline Browsers using only vanilla JavaScript. In the JavaScript file, a JavaScript object is added to the array `worksheets`.

The file itself needs to be included using the `source` tag in the file `index.html`.

### General Worksheet Data

The following attributes need to be provided for each worksheet:

```
worksheets.push[{
    titleShort: "...",      // Title used for internal purposes only.
    titleTechnical: "...",  // Unique title used to save exercise results in the localStorage
    title: "...",           // Title displayed on the worksheet
    description: "...",     // Description shown below the title, can include HTML
    citations: [],          // Optional array containing citations, shown in footer
    image: "...",           // Image shown on the right in the worksheet header
    imageDescription: "...",// Shown below image
    imageAlt: "...",        // Alternative text for image
    code: {},               // Contains code versions for worksheet
    codeFilename: {},       // Contains filenames for given codes
    primaryLanguage: "...", // Sets primary shown code version
    codeHelpers: {},        // Contains helper texts for code versions
    tasks: []               // Contains all tasks for worksheet
}]
```

### Code

The **code** object needs to contain at least one element. The index should provide the name of the given programming language, the value contains the code. Line breaks need to be included using `\n`.

```
code: {
    javascript: 'function shiftCharacter(char, shift) {\n    if (/[A-Z]/.test(char)) ...',
    python: 'def shift_character(char, shift):\n    if char.isalpha(): ...'
}
```

The name of the **code files** should be provided in the codeFilenames object:

```
codeFilename: {
    python: "caesar.py",
    javascript: "caesar.js",
},
```

The primary selected **programming language** should be set in the primaryLanguage attribute of the worksheet:

```
primaryLanguage: "python"
```

**Code helpers** can be provided in the codeHelpers attribute of the worksheet, with the programming languages as index and arrays containing the helper texts. As code highlighting by [highlight.js](https://highlightjs.org) is used in the worksheet, the css classes of the framework can be used in the texts.

```
codeHelpers: {
    python: [
      {
        title: '<code>String <span class="code-dark">isalpha()</span></code>',
        content:
          "Diese Funktion prüft, ob der gegebene String nur Charaktere aus dem Alphabet, also Buchstaben, enthält.",
      },
      ...
    ],
    javascript: [
      {
        title: '<code class="hljs-keyword">return</code>',
        content:
          'Mit diesem Schlüsselwort wird festgelegt, welcher Wert von der Funktion zurückgegeben wird, wenn diese aufgerufen wird. In diesem Fall wird der Wert der Variable, die hinter <code class="hljs-keyword">return</code> steht, zurückgegeben. Beispiel: <pre style="display:inline;"><code class="language-javascript nohljsln">return "Hallo"</code></pre> gibt den String <code class="hljs-string">"Hallo"</code> zurück.',
      },
    ]
}
```

### Tasks

Tasks provide a general overview over the upcoming subtasks. Within the PRIMM framework, each worksheet should ideally consist of five tasks mirroring each PRIMM phase. The tasks will not be automatically numbered, so you can provide a number if neccessary. Internally, task numbering will begin with 0.

Each task needs to have a title and can contain a description, helpers which are displayed on the right side of the task and subtasks:

```
tasks: [
  {
    title: "Aufgabe 1: Den Code beschreiben",
    description: "In dieser Aufgabe sollen Sie den Code analysieren und verstehen, was er macht.",
    subtasks: [],
    helpers:[
      {
        title: 'Unicode-Tabelle',
        content: '...',
      },
    ],
  }
]
```

### Subtasks

The subtasks contain the actual tasks of the worksheet and can be of different types, providing a different kind of input or possibility to check answers.

Besides specific parameters for each subtask type, each subtask can contain the following parameters:

```
subtasks: [
    task: 'Beschreiben Sie, was die Funktion shift_character macht.',
    answerType: 'text',
    hints: [],
    multipleChoice: false,
    phrasingHelpers: []
]
```

The values containing text like task, phrasingHelpers, choices or feedbackText may contain HTML.

#### Language specific text or code elements

By using `span` or `code` elements with the class `language-specific`, these parts of a task can be set to be only shown when a specific programming language is selected. The language needs to provided with another class `task-language-javascript` . All elements for programming languages which are not the primary language need to be hidden on default by adding the class `hide-element` as well. Example for a language specific task:

```
task: 'Nennen Sie die erwartete Ausgabe der Funktion <code class="language-specific task-language-python"><span class="hljs-title">shift_character</span><span class="code-dark">()</span></code><code class="language-specific task-language-javascript hide-element"><span class="hljs-title">shiftCharacter</span><span class="code-dark">()</span></code> mit den Eingabewerten <code><span class="code-dark">char = </span><span class="hljs-title">"H"</span></code> und <code><span class="code-dark">shift = 3</span></code>.'
```

This can also be used to point to different code line numbers depending on the programming language:

```
task: 'Nennen Sie die Anzahl, wie häufig die <code class="hljs-keyword">for</code>-Schleife in Zeile <span class="language-specific task-language-python">11</span><span class="language-specific task-language-javascript hide-element">13</span> durchlaufen wird.',
```

#### Hints

Hints are helpers for subtasks which can be opened by students if they are stuck on answering a subtask. By default, only the first hint is enabled. The next hint is only enabled by opening the hint before.

```
hints: [
    'Gibt es in Programmiersprachen wie Python oder JavaScript einen spezifischen Datentypen für Textketten?',
    '<table class="table text-center"><thead><tr><th>Datentyp</th><th>Beispiel</th></tr></thead><tbody><tr><td>String</td><td><code>"Hallo Welt"</code></td></tr><tr><td>Char</td><td><code>\'H\'<code></td></tr><tr><td>Integer</td><td><code>42<code></td></tr><tr><td>Float</td><td><code>3.1415<code></td></tr></tbody></table>',
    ],
```

#### Multiple Choice Hints

Multiple choice hints will always be displayed as the last hint of a subtask. These can be used for situations students can not come up with an answer on their own. If set to `true`, a parameter `choices` should be provided containing an array of at least one choice. Multiple choices can be marked as correct. For every choice a specific feedback text can be provided that is shown after a user chooses a choice.

```
multipleChoice: true,
choices: [
{
    text: "Char",
    correct: false,
    feedbackText: "Da der text aus mehreren Zeichen bestehen kann, ist der Datentyp <code>Char</code> für diesen nicht geeignet.",
  },
  {
    text: "String",
    correct: true,
    feedbackText: "Der zu verschlüsselnde Text ist eine Zeichenkette und damit ein <code>String</code>.",
  },
  {
    text: "Integer",
    correct: false,
    feedbackText: "Im Datentyp <code>Integer</code> werden ganze Zahlen gespeichert. Der Text ist jedoch eine Zeichenkette und damit ein <code>String</code>.",
  },
  {
    text: "Boolean",
    correct: false,
    feedbackText: "Der Datentyp <code>Boolean</code> speichert nur zwei Werte: <code>True</code> oder <code>False</code>. Der Text ist jedoch eine Zeichenkette und damit ein <code>String</code>.",
  },
],
```

#### Phrasing Helpers

Phrasing helpers should support students by giving sentence beginnings, structural advice or a set of words they can use. These kind of helpers will always be shown all at once when opened.

```
phrasingHelpers: [
    "Die Funktion <code class='language-specific task-language-python'>shift_character()</code><code class='language-specific task-language-javascript hide-element'>shiftCharacter()</code> erhält als Parameter ... übergeben.",
    "Es wird zuerst überprüft, ob...",
    "In der Variable ... wird ... gespeichert.",
],
```

#### Subtask Types

##### text, textShort, textLong

The default type for tasks is `text`, providing a approximately three lines long `textarea`.
`textLong` provides a `textarea` with more lines, `textShort` a single line `input` field.
No other parameter is needed for these types.

```
{
    task: 'Begründen Sie, warum die Funktion ord() im Code nicht weggelassen werden kann.',
    answerType: "text"
}

```

#### code

Works like `textLong` but provides a monospace font in the `textarea`. The provided code in the answer field is currently not being highlighted.

```
{
  task: "Ergänzen Sie den Code um eine Funktion caesar_decrypt.",
  answerType: "code"
}
```

#### textShortCheckable

Works like `textShort` and adds a button on the right to let users check their given answer for a match with one of the given correct answers in the array `correctAnswers`. The check against the user input is case-sensitive. For further explanation of why the answer is (in)correct, it can be explained in the `feedbackText` parameter which is shown after an answer is submitted.

```
{
  task: 'Nennen Sie den Datentyp, der im Parameter <code>text</code> übergeben wird.',
  correctAnswers: [
    "String",
    "string"
  ],
  feedbackText: "Der zu verschlüsselnde Text ist eine Zeichenkette und damit ein <code>String</code>.",
}
```

#### multipleChoice

Provides buttons with choices instead of a text or code input. Multiple answers can be set as correct. When this answer type is used, provide the possible answers in the parameter `choices` which should contain an array of objects with the parameters `text` for the displayed text, `correct` with a boolean value setting this option as correct or incorrect and `feedbackText` for an individual feedback that is displayed after choosing an answer. The user is only allowed to choose one answer.

```
{
  task: 'Nennen Sie die erwartete Ausgabe der Funktion shift_character mit den Eingabewerten char = "H" und shift = 3.',
  answerType: "multipleChoice",
  choices: [
    {
        text: "D",
        correct: false,
        feedbackText: "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
    },
    {
        text: "J",
        correct: false,
        feedbackText: "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
    },
    {
        text: "K",
        correct: true,
        feedbackText: "Die Verschiebung <code>shift</code> wird auf den Unicode-Wert des Zeichens <code>char</code> addiert, so dass <code>H</code> (Unicode 72) um 3 verschoben wird und <code>K</code> (Unicode 75) ergibt.",
    },
  ],
}
```

##### none

If you only want to display a text, for example for referencing to a task outside of the digital worksheet, you can set the type to `none`.

```
{
  task: "Führen Sie den Code aus.",
  answerType: "none"
}
```

### Citations

Citations can be provided in the worksheet by adding javascript objects in an array `citations` containing a unique name `short` and a text field `citation` which can be filled as wished. Citations will be displayed at the bottom of the worksheet if there is at least one provided.

```
citations: [
  {
    short: "schroedel2008",
    citation: 'Schrödel, T. (2008). Breaking Short Vigenère Ciphers. <i>Cryptologia</i>, 32(4), 334–347. <a href="https://doi.org/10.1080/01611190802336097" target="_blank">https://doi.org/10.1080/01611190802336097</a>',
  },
  {
    short: "wikipedia2025",
    citation: 'Wikipedia contributors (2025). List of Unicode characters. <i>Wikipedia, The Free Encyclopedia</i>. Aufgerufen am 11. Juni 2025 von <a href="https://en.wikipedia.org/w/index.php?title=List_of_Unicode_characters&oldid=1291316821" target="_blank">https://en.wikipedia.org/w/index.php?title=List_of_Unicode_characters&oldid=1291316821</a>',
  },
]
```

A citation can be refered to in any text field by linking to the `short` name that works as the id:

```
<a class="link-secondary" href="#schroedel2008">(Schrödel, 2008)</a>
```
