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

The code object needs to contain at least one element. The index should provide the name of the given programming language, the value contains the code. Line breaks need to be included using `\n`.

```
code: {
    javascript: 'function shiftCharacter(char, shift) {\n    if (/[A-Z]/.test(char)) ...',
    python: 'def shift_character(char, shift):\n    if char.isalpha(): ...'
}
```

The name of the code files should be provided in the codeFilenames object:

```
codeFilename: {
    python: "caesar.py",
    javascript: "caesar.js",
},
```

The primary selected programming language should be set in the primaryLanguage attribute of the worksheet:

```
primaryLanguage: "python"
```

Code helpers can be provided in the codeHelpers attribute of the worksheet, with the programming languages as index and arrays containing the helper texts. As code highlighting by [highlight.js](https://highlightjs.org) is used in the worksheet, the css classes of the framework can be used in the texts.

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
