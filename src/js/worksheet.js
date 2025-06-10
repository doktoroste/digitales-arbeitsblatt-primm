let worksheets = [];
let currentIndex = 0;
let currentSelectedLanguage = "";
if (localStorage.getItem(currentSelectedLanguage)) {
  currentSelectedLanguage = localStorage.getItem(currentSelectedLanguage);
}

async function loadWorksheets() {
  let tocHtml = "";
  worksheets.forEach((ws, index) => {
    const status = localStorage.getItem(ws.file) === "done" ? "✔️" : "";
    tocHtml += `<li><a href="#" onclick="loadWorksheet(${index})">${ws.title} ${status}</a></li>`;
  });
  document.getElementById("sidebar-content").innerHTML = tocHtml;
  if (localStorage.getItem("currentWorksheet")) {
    loadWorksheet(parseInt(localStorage.getItem("currentWorksheet")));
  } else {
    loadWorksheet(0);
  }
}

// Load worksheet content
async function loadWorksheet(index) {
  localStorage.setItem("currentWorksheet", index);
  data = worksheets[index];

  // Worksheet header
  document.title = `Arbeitsblatt ${index + 1}: ${data.title}`;
  document.getElementById("worksheet-number").innerHTML = `Arbeitsblatt ${
    index + 1
  }`;
  document.getElementById(
    "worksheet-title"
  ).innerHTML = `<h1>${data.title}</h1>`;
  document.getElementById("worksheet-description").innerHTML = data.description;
  if (data.image) {
    document
      .querySelector("#worksheet-image-wrapper")
      .classList.remove("hide-element");
    document.getElementById(
      "worksheet-image"
    ).innerHTML = `<img src="${data.image}" class="figure-img img-fluid" alt="${data.imageAlt}" >
            <figcaption class="figure-caption" id="worksheet-image-description">${data.imageDescription}</figcaption>`;
  } else {
    document
      .querySelector("#worksheet-image-wrapper")
      .classList.add("hide-element");
  }

  // Worksheet code
  if (data.code) {
    document
      .querySelector("#worksheet-code-container")
      .classList.remove("hide-element");
    // Code
    if (Object.keys(data.code).length === 1) {
      // if only one language version given, disable language buttons
      // TODO: Does not work yet
      document.getElementById(
        "worksheet-code-language-buttons"
      ).innerHTML = `<button class="btn btn-sm btn-outline-secondary btn-disabled" disabled>${
        languageNames[data.primaryLanguage]
      }</button>`;
    } else {
      let languageButtonsHtml = "";
      for (const language in data.code) {
        if (
          language === currentSelectedLanguage ||
          (currentSelectedLanguage === "" && language === data.primaryLanguage)
        ) {
          languageButtonsHtml += `<button class="btn btn-sm btn-outline-secondary active change-code-language" data-code-language="${language}" id="worksheet-${index}-btn-language-${language}">${languageNames[language]}</button>`;
        } else {
          languageButtonsHtml += `<button class="btn btn-sm btn-outline-secondary change-code-language" data-code-language="${language}" id="worksheet-${index}-btn-language-${language}">${languageNames[language]}</button>`;
        }
      }
      document.getElementById("worksheet-code-language-buttons").innerHTML =
        languageButtonsHtml;
    }
    if (currentSelectedLanguage === "") {
      currentSelectedLanguage = data.primaryLanguage;
    }
    document.getElementById(
      "worksheet-code"
    ).innerHTML = `<code class="language-${data.primaryLanguage}">${data.code[currentSelectedLanguage]}</code>`;

    // Code highlighting
    hljs.highlightAll();
    hljs.initLineNumbersOnLoad({
      singleLine: true,
    });

    // Code helpers
    getCodeHelpers(index, data, currentSelectedLanguage);
  } else {
    document
      .querySelector("#worksheet-code-container")
      .classList.add("hide-element");
  }

  // Tasks
  let taskHtml = "";
  if (data.tasks) {
    data.tasks.forEach((task, i) => {
      taskHtml += `<!-- Aufgabe ${i} -->
                <div class="row mt-5">
                    <!-- Aufgabe -->
                    <div class="col-md-12 mb-3">
                        <h4 class="border-bottom pb-3" id="aufgabe${i}">${task.title} <a href="#aufgabe${i}" class="link-secondary"><i class="bi bi-hash"></i></a></h4>
                    </div>
                    <div class="col-md-8">
                        <ol type="a">`;
      task.subtasks.forEach((subtask, j) => {
        taskHtml += `<li class="mb-3">${subtask.task}`;
        if (subtask.answerType === "text") {
          taskHtml += `<textarea class="form-control save-user-input" id="aufgabe-${index}-${i}-${j}"></textarea>`;
        } else if (subtask.answerType === "textLong") {
          taskHtml += `<textarea class="form-control textarea-lg save-user-input" id="aufgabe-${index}-${i}-${j}"></textarea>`;
        } else if (subtask.answerType === "code") {
          taskHtml += `<textarea class="form-control textarea-lg textarea-code save-user-input" id="aufgabe-${index}-${i}-${j}"></textarea>`;
        }

        if (subtask.hints) {
          subtask.hints.forEach((hint, k) => {
            taskHtml += `<button class="btn btn-sm btn-outline-secondary mt-2" data-bs-toggle="collapse" data-bs-target="#aufgabe-${index}-${i}-${j}-hint-${k}" aria-expanded="false" aria-controls="aufgabe-${index}-${i}-${j}-hint-${k}">Hilfe aktivieren (Tipp)</button>
                            <div class="collapse" id="aufgabe-${index}-${i}-${j}-hint-${k}">
                                <div class="alert alert-light mt-2">
                                    ${hint}
                                </div>
                            </div>`;
          });
        }
        if (subtask.multipleChoice) {
          taskHtml += `<button class="btn btn-sm btn-outline-secondary mt-2" data-bs-toggle="collapse" data-bs-target="#aufgabe-${index}-${i}-${j}-mc" aria-expanded="false" aria-controls="aufgabe-${index}-${i}-${j}-mc">Hilfe aktivieren (Antwortmöglichkeiten)</button>`;
          taskHtml += `<div class="collapse" id="aufgabe-${index}-${i}-${j}-mc">
                        <div class="d-grid gap-2 mt-3 helpers">`;
          subtask.choices.forEach((mc, k) => {
            taskHtml += `<button class="btn btn-outline-secondary " id="aufgabe-${index}-${i}-${j}-${k}" value="${mc.correct}">${mc.text}</button>`;
          });
          taskHtml += `</div>
                        </div>`;
        }

        taskHtml += `</li>`;
      });
      if (askForFeedback) {
        taskHtml += `<li class="mt-5" style="list-style-type: none;">
                    <div class="alert alert-light">
                        <div class="btn-group btn-group-sm float-end" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check save-user-feedback" name="task-feedback-${index}-${i}" id="task-feedback-${index}-${i}-answer-1" autocomplete="off" value="1">
                            <label class="btn btn-outline-dark" for="task-feedback-${index}-${i}-answer-1">--</label>
                            
                            <input type="radio" class="btn-check save-user-feedback" name="task-feedback-${index}-${i}" id="task-feedback-${index}-${i}-answer-2" autocomplete="off" value="2">
                            <label class="btn btn-outline-dark" for="task-feedback-${index}-${i}-answer-2">-</label>
                            
                            <input type="radio" class="btn-check save-user-feedback" name="task-feedback-${index}-${i}" id="task-feedback-${index}-${i}-answer-3" autocomplete="off" value="3">
                            <label class="btn btn-outline-dark" for="task-feedback-${index}-${i}-answer-3">o</label>

                            <input type="radio" class="btn-check save-user-feedback" name="task-feedback-${index}-${i}" id="task-feedback-${index}-${i}-answer-4" autocomplete="off" value="4">
                            <label class="btn btn-outline-dark" for="task-feedback-${index}-${i}-answer-4">+</label>

                            <input type="radio" class="btn-check save-user-feedback" name="task-feedback-${index}-${i}" id="task-feedback-${index}-${i}-answer-5" autocomplete="off" value="5">
                            <label class="btn btn-outline-dark" for="task-feedback-${index}-${i}-answer-5">++</label>
                            </div>
                        <strong>Feedback zur Aufgabe</strong><br>
                        Wie sicher Sind sie sich, dass Ihre Antwort korrekt ist (-- = unsicher, ++ = sicher)?
                    </div>
                </li>`;
      }
      taskHtml += `</ol>
                </div>`;

      // Task helpers
      if (task.helpers) {
        taskHtml += `<div class="col-md-4">
                        <h6>Hilfestellungen</h6>
                        <div class="accordion" id="task${index}-${i}-helpers">`;
        task.helpers.forEach((helper, j) => {
          taskHtml += `<div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#task${index}-${i}-helper${j}" aria-expanded="false" aria-controls="helper2-1">
                                ${helper.title}
                            </button>
                        </h2>
                        <div id="task${index}-${i}-helper${j}" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                ${helper.content}
                            </div>
                        </div>
                    </div>`;
        });
        taskHtml += `</div>`;
      }

      taskHtml += `</div>`;
    });
  }
  document.getElementById("worksheet-tasks").innerHTML = taskHtml;
  saveAndLoadUserInput();

  // Citations
  let citationsHtml = "";
  if (data.citations) {
    document
      .querySelector("#worksheet-citations-wrapper")
      .classList.remove("hide-element");
    data.citations.forEach((citation, i) => {
      citationsHtml += `<p id="${citation.short}">${citation.citation}</p>`;
    });
    document.getElementById("worksheet-citations").innerHTML = citationsHtml;
  } else {
    document
      .querySelector("#worksheet-citations-wrapper")
      .classList.add("hide-element");
  }
}

function getCodeHelpers(index, data, language) {
  if (data.codeHelpers[language]) {
    document
      .querySelector("#code-helpers-wrapper")
      .classList.remove("hide-element");
    let codeHelpersHtml = "";
    data.codeHelpers[language].forEach((helper, i) => {
      codeHelpersHtml += `<div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#helper${index}-${language}-${i}" aria-expanded="false" aria-controls="helper${index}-${language}-${i}">
                            ${helper.title}
                        </button>
                    </h2>
                    <div id="helper${index}-${language}-${i}" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            ${helper.content}
                        </div>
                    </div>
                </div>`;
      i++;
    });
    document.getElementById("code-helpers").innerHTML = codeHelpersHtml;
  } else {
    document
      .querySelector("#code-helpers-wrapper")
      .classList.add("hide-element");
  }
}
