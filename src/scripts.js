function initialiseWorksheet() {
  loadUserInput(currentIndex);

  document
    .querySelectorAll(".save-user-input, .save-user-feedback")
    .forEach((input) => {
      input.addEventListener("change", () => saveUserInput(currentIndex));
    });

  document
    .querySelectorAll(
      ".btn-subtask-multiple-choice-answer, .change-code-language, .btn-subtask-hint .btn-subtask-phrasing-helper"
    )
    .forEach((button) => {
      button.addEventListener("click", () => saveUserInput(currentIndex));
    });

  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () =>
      setTimeout(function () {
        saveUserInput(currentIndex);
      }, 1000)
    );
  });

  // Disabling and enabling subtask hint buttons
  document.querySelectorAll(".btn-subtask-hint").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (showDebugLogs)
        console.log(
          "Disabling subtask hint and enabling next for ",
          e.target.getAttribute("data-subtask-id")
        );
      const subtaskId = e.target.getAttribute("data-subtask-id");
      const subtaskHintButtons = document.querySelectorAll(
        `.btn-subtask-hint[data-subtask-id="${subtaskId}"][data-hint-opened="false"]`
      );
      if (subtaskHintButtons.length > 0) {
        if (showDebugLogs)
          console.log("Found these hint buttons: ", subtaskHintButtons);
        subtaskHintButtons[0].removeAttribute("disabled");
      }
      this.disabled = true;
      this.setAttribute("data-hint-opened", "true");
    });
  });

  // Setting multiple choice buttons to active
  document
    .querySelectorAll(".btn-subtask-multiple-choice-answer")
    .forEach((button) => {
      button.addEventListener("click", function (e) {
        // Disable all buttons of this subtask
        const subtaskId = e.target.getAttribute("data-subtask-id");
        const subtaskButtons = document.querySelectorAll(
          `.btn-subtask-multiple-choice-answer[data-subtask-id="${subtaskId}"]`
        );
        let correctAnswer = null;
        subtaskButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("disabled", "true");
          if (btn.value === "true") {
            correctAnswer = btn.innerHTML;
          }
        });
        this.classList.add("active");

        // Feedback: If answer was correct, set button to green, else red
        if (this.value === "true") {
          this.classList.remove("btn-outline-secondary");
          this.classList.add("btn-outline-success");
        } else {
          this.classList.remove("btn-outline-secondary");
          this.classList.add("btn-outline-danger");
        }

        // Display feedback
        let feedbackText = "";
        console.log(
          "(MC) Trying to display feedback in element:",
          `#${subtaskId}-multiple-choice-feedback`
        );
        const feedback = document.querySelector(
          `#${subtaskId}-multiple-choice-feedback`
        );
        if (feedback) {
          feedback.classList.remove("hide-element");
          feedback.classList.add("show");
          if (this.getAttribute("data-feedback-text")) {
            feedbackText = this.getAttribute("data-feedback-text");
          }
          if (this.value === "true") {
            feedback.querySelector(
              ".alert"
            ).innerHTML = `<span class="badge text-bg-success">Die Antwort ist korrekt.</span><br>${feedbackText}`;
          } else {
            feedback.querySelector(
              ".alert"
            ).innerHTML = `<span class="badge text-bg-danger">Die Antwort ist falsch.</span><br>${feedbackText}<div class="mt-2"><span class="text-muted">Die richtige Antwort ist:</span><br>${correctAnswer}</div>`;
          }
        }
      });
    });
  // if (showDebugLogs) showInputIDs();
}

document.addEventListener("DOMContentLoaded", function () {
  initialiseWorksheet();
  document.getElementById("subject-name").innerHTML = subjectName;
  document.getElementById("course-name").innerHTML = courseName;
  document.getElementById("sidebar-label").innerHTML = courseName;
});

function loadUserInput(currentWorksheet) {
  const worksheetDataKey = "worksheetData";
  const worksheetData =
    JSON.parse(localStorage.getItem(worksheetDataKey)) || {};
  const sheetData = worksheetData[currentWorksheet];
  if (showDebugLogs)
    console.log("Loading user input for worksheet: ", currentWorksheet);

  if (!sheetData) return;

  const worksheet = worksheets[currentWorksheet];

  // Load code helpers state
  const codeHelpers = sheetData.codeHelpers || [];
  codeHelpers.forEach((helperId) => {
    const helper = document.getElementById(helperId);
    if (helper) {
      const helperBody = document.getElementById(helperId + "-body");
      if (helperBody) {
        helperBody.classList.add("show");
        helperBody.setAttribute("aria-expanded", "true");
      }
      const button = document.querySelector(
        `#${helperId} .accordion-header.accordion-button`
      );
      if (button) {
        button.setAttribute("aria-expanded", "true");
        button.classList.remove("collapsed");
      }
    }
    if (showDebugLogs)
      console.log(`Loading code helper into ${helperId} (open)`);
  });

  // Load task-related data
  worksheet.tasks.forEach((task, taskIndex) => {
    const taskData = sheetData.tasks[taskIndex];
    if (showDebugLogs) console.log(`Loading task data for task ${taskIndex}`);
    if (!taskData) return;

    // Load feedback
    if (taskData.feedback) {
      const feedbackInput = document.getElementById(
        `task-feedback-${worksheet.titleTechnical}-${taskIndex}-answer-${taskData.feedback}`
      );
      if (feedbackInput) feedbackInput.checked = true;
      if (showDebugLogs)
        console.log(
          `- Task has feedback, load it into #task-feedback-${worksheet.titleTechnical}-${taskIndex}-answer-${taskData.feedback}`
        );
    }

    if (taskData.feedbackCorrect) {
      const feedbackInputCorrect = document.getElementById(
        `task-feedback-correct-${worksheet.titleTechnical}-${taskIndex}-answer-${taskData.feedbackCorrect}`
      );
      if (feedbackInputCorrect) feedbackInputCorrect.checked = true;
      if (showDebugLogs)
        console.log(
          `- Task has feedback-correct, load it into #task-feedback-correct-${worksheet.titleTechnical}-${taskIndex}-answer-${taskData.feedbackCorrect}`
        );
    }

    // Load feedback text
    if (taskData.feedbackText) {
      const feedbackTextInput = document.getElementById(
        `task-feedback-${worksheet.titleTechnical}-${taskIndex}-answer-text`
      );
      feedbackTextInput.value = taskData.feedbackText || "";
      if (showDebugLogs)
        console.log(
          `- Task has feedback text, load it into #task-feedback-${worksheet.titleTechnical}-${taskIndex}-answer-text`
        );
    }

    // Open task helpers that have been opened before
    taskData.helpers.forEach((helperId) => {
      const helper = document.getElementById(helperId);
      if (helper) {
        const button = helper.querySelector(
          ".accordion-header .accordion-button"
        );
        if (button) {
          button.setAttribute("aria-expanded", "true");
          button.classList.remove("collapsed");
        }
        const body = helper.querySelector(".accordion-collapse");
        if (body) {
          body.classList.add("show");
          body.setAttribute("aria-expanded", "true");
        }
        if (showDebugLogs) console.log(`- Task has open helper: #${helperId}`);
      }
    });

    // Load subtasks
    task.subtasks.forEach((subtask, subtaskIndex) => {
      const subtaskData = taskData.subtasks[subtaskIndex];
      if (!subtaskData) return;
      if (showDebugLogs)
        console.log(
          `- - Loading subtask data for task ${taskIndex} subtask ${subtaskIndex}: ${subtaskData.studentSolution}`
        );

      // Load student solution
      const subtaskInput = document.getElementById(
        `task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}`
      );
      if (subtaskInput) {
        subtaskInput.value = subtaskData.studentSolution;
        if (showDebugLogs)
          console.log(
            `- - - Loading student solution into #task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}`
          );
      }

      // Load subtask hints states:
      // Disable all already opened hints, only enable hints that have not been opened yet
      const subtaskHintButtons = document.querySelectorAll(
        `.btn-subtask-hint[data-subtask-id="task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}"]`
      );
      let previousHintOpened = false;
      subtaskHintButtons.forEach((button, hintIndex) => {
        if (subtaskData.hintsOpened[hintIndex]) {
          if (showDebugLogs)
            console.log(
              "- - - - hint with index was open, set to disabled:",
              hintIndex
            );
          button.setAttribute("data-hint-opened", "true");
          button.setAttribute("disabled", "true");

          // Open collapsed hint
          const hintBody = document.querySelector(
            `#task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-hint-${hintIndex}`
          );
          if (hintBody) {
            hintBody.classList.add("show");
            hintBody.setAttribute("aria-expanded", "true");
          }
          previousHintOpened = true;
        } else {
          if (showDebugLogs)
            if (previousHintOpened) {
              console.log(
                "- - - - hint with index has not been opened yet and is the next to be opened:",
                hintIndex
              );
              button.disabled = false;
              previousHintOpened = false;
            } else {
              console.log(
                "- - - - hint with index has not been opened yet, let it stay disabled:",
                hintIndex
              );
            }
        }
        if (showDebugLogs)
          console.log(
            `- - - Loading subtask hint state for task ${taskIndex} subtask ${subtaskIndex} hint ${hintIndex}:`,
            subtaskData.hintsOpened[hintIndex]
          );
      });

      // Load multiple choice state
      if (subtaskData.multipleChoice) {
        if (subtaskData.multipleChoice.opened) {
          const mcContainer = document.getElementById(
            `task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-mc`
          );
          if (mcContainer) mcContainer.classList.add("show");
          if (showDebugLogs)
            console.log(
              `- - - Loading multiple choice state into #task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-mc`
            );
        }

        if (subtaskData.multipleChoice.selectedAnswer) {
          // Disable all multiple choice buttons
          if (showDebugLogs)
            console.log(
              `Search for buttons with following selector: .btn-subtask-multiple-choice-answer[data-subtask-id="task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}"]`
            );
          const mcButtons = document.querySelectorAll(
            `.btn-subtask-multiple-choice-answer[data-subtask-id="task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}"]`
          );
          let = correctAnswer = "";
          mcButtons.forEach((btn) => {
            btn.setAttribute("disabled", true);
            btn.classList.remove("active");
            btn.classList.remove("btn-outline-secondary");
            if (btn.value === "true") {
              correctAnswer = btn.innerHTML;
            }
          });

          // Display selected answer
          const selectedAnswer = document.getElementById(
            subtaskData.multipleChoice.selectedAnswer
          );
          if (selectedAnswer) {
            if (selectedAnswer.getAttribute("value") === "true") {
              selectedAnswer.classList.remove("btn-outline-secondary");
              selectedAnswer.classList.add("btn-outline-success");
              selectedAnswer.classList.add("active");
            } else {
              selectedAnswer.classList.remove("btn-outline-secondary");
              selectedAnswer.classList.add("btn-outline-danger");
              selectedAnswer.classList.add("active");
            }
            if (showDebugLogs)
              console.log(
                `- - - Loading selected answer into ${subtaskData.multipleChoice.selectedAnswer}`
              );

            // Show feedback for selected answer
            const feedback = document.querySelector(
              `#task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-multiple-choice-feedback`
            );
            if (feedback) {
              feedback.classList.remove("hide-element");
              feedback.classList.add("show");
              if (selectedAnswer.getAttribute("value") === "true") {
                feedback.querySelector(".alert").innerHTML =
                  `<span class="badge text-bg-success">Die Antwort ist korrekt.</span>` +
                  "<br>" +
                  selectedAnswer.getAttribute("data-feedback-text");
              } else {
                feedback.querySelector(".alert").innerHTML =
                  `<span class="badge text-bg-danger">Die Antwort ist falsch.</span>` +
                  "<br>" +
                  selectedAnswer.getAttribute("data-feedback-text") +
                  `<div class="mt-2"><span class="text-muted">Die richtige Antwort ist:</span><br>${correctAnswer}</div>`;
              }
            }
            if (showDebugLogs)
              console.log(
                `- - - Loading multiple choice feedback into #task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-multiple-choice-feedback`
              );
          }
        }
      }
    });
  });

  // Load code helpers (add aria-expanded="true" to the button)
  sheetData.codeHelpers.forEach((helperId) => {
    const helper = document.getElementById(helperId);
    if (helper) {
      const button = document.querySelector(`#${helperId} .accordion-button`);
      if (button) {
        button.setAttribute("aria-expanded", "true");
        button.classList.remove("collapsed");
      }
      const body = document.querySelector(`#${helperId} .accordion-body`);
      if (body) {
        body.classList.add = "show";
        body.setAttribute("aria-expanded", "true");
      }
      if (showDebugLogs)
        console.log(`- Loading code helper into ${helperId} (open)`);
    }
  });
}

function saveUserInput(currentWorksheet) {
  console.log("Saving user input for worksheet: ", currentWorksheet);
  const worksheetDataKey = "worksheetData";
  const worksheetData =
    JSON.parse(localStorage.getItem(worksheetDataKey)) || {};

  const worksheet = worksheets[currentWorksheet];

  // Save worksheet data
  if (!worksheetData[currentWorksheet]) {
    worksheetData[currentWorksheet] = {
      title: worksheet.title,
      titleTechnical: worksheet.titleTechnical,
      selectedProgrammingLanguage: currentSelectedLanguage,
      codeHelpers: [],
      tasks: {},
    };
  }

  // Save code helper state
  codeHelpers = Array.from(
    document.querySelectorAll(`#code-helpers .accordion-collapse.show`)
  ).map((helper) => {
    const parent = helper.closest(".accordion-item");
    if (parent) {
      return parent.id;
    }
    return null;
  });
  codeHelpers = codeHelpers.filter((helper) => helper !== null);
  worksheetData[currentWorksheet].codeHelpers = codeHelpers;
  if (showDebugLogs)
    console.log(
      "Saving code helper state: ",
      worksheetData[currentWorksheet].codeHelpers
    );

  // Save task-related data
  worksheet.tasks.forEach((task, taskIndex) => {
    if (!worksheetData[currentWorksheet].tasks[taskIndex]) {
      worksheetData[currentWorksheet].tasks[taskIndex] = {
        title: task.title,
        subtasks: {},
        helpers: [],
      };
    }

    // Save feedback
    const feedbackInput = document.querySelector(
      `input[name="task-feedback-${worksheet.titleTechnical}-${taskIndex}"]:checked`
    );
    worksheetData[currentWorksheet].tasks[taskIndex].feedback = feedbackInput
      ? feedbackInput.value
      : null;

    const feedbackCorrectInput = document.querySelector(
      `input[name="task-feedback-correct-${worksheet.titleTechnical}-${taskIndex}"]:checked`
    );
    worksheetData[currentWorksheet].tasks[taskIndex].feedbackCorrect =
      feedbackCorrectInput ? feedbackCorrectInput.value : null;

    const feedbackText = document.getElementById(
      `task-feedback-${worksheet.titleTechnical}-${taskIndex}-answer-text`
    );
    if (feedbackText) {
      worksheetData[currentWorksheet].tasks[taskIndex].feedbackText =
        feedbackText.value;
    }

    // If this task has helpers (class .accordion-helpers or id #task-${currentWorksheet.titleTechnical}-${taskIndex}-helpers),
    // save task helper state (open or closed)
    const taskHelpers = document.querySelector(
      `#task-${worksheet.titleTechnical}-${taskIndex}-helpers`
    );
    if (taskHelpers) {
      openedHelpers = Array.from(
        taskHelpers.querySelectorAll(`.accordion-collapse.show`)
      ).map((helper) => {
        const parent = helper.closest(".accordion-item");
        if (parent) {
          return parent.id;
        }
        return null;
      });
      openedHelpers = openedHelpers.filter((helper) => helper !== null);
      worksheetData[currentWorksheet].tasks[taskIndex].helpers =
        openedHelpers.length > 0 ? openedHelpers : [];
    }
    if (showDebugLogs)
      console.log(
        `- - Saving task helper state for task ${taskIndex}:`,
        worksheetData[currentWorksheet].tasks[taskIndex].helpers
      );

    // Save subtasks
    task.subtasks.forEach((subtask, subtaskIndex) => {
      if (
        !worksheetData[currentWorksheet].tasks[taskIndex].subtasks[subtaskIndex]
      ) {
        worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
          subtaskIndex
        ] = {
          task: subtask.task,
          studentSolution: null,
          multipleChoice: {
            opened: false,
            selectedAnswer: null,
            correct: null,
          },
          hintsOpened: [],
        };
      }

      // Save student solution
      const subtaskInput = document.getElementById(
        `task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}`
      );
      if (subtaskInput) {
        worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
          subtaskIndex
        ].studentSolution = subtaskInput.value;
      }

      // Save subtask hints state (open or closed), check for data-hint-opened
      const subtaskHintButtons = document.querySelectorAll(
        `.btn-subtask-hint[data-subtask-id="task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}"]`
      );
      subtaskHintButtons.forEach((button, hintIndex) => {
        if (button.getAttribute("data-hint-opened") === "true") {
          if (
            !worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].hintsOpened
          ) {
            worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].hintsOpened = [];
          }
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].hintsOpened[hintIndex] = true;
        } else {
          if (
            !worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].hintsOpened
          ) {
            worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].hintsOpened = [];
          }
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].hintsOpened[hintIndex] = false;
        }
        if (showDebugLogs)
          console.log(
            `- - - Saving subtask hint state for task ${taskIndex} subtask ${subtaskIndex} hint ${hintIndex}:`,
            worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].hintsOpened[hintIndex]
          );
      });

      // Save multiple choice state
      const mcContainer = document.getElementById(
        `task-${worksheet.titleTechnical}-${taskIndex}-${subtaskIndex}-mc`
      );
      if (mcContainer) {
        if (
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].multipleChoice
        ) {
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].multipleChoice.opened = mcContainer.classList.contains("show");
          console.log(
            `- - - Saved multipleChoice.open for task ${taskIndex} subtask ${subtaskIndex}:`,
            worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
              subtaskIndex
            ].multipleChoice.opened
          );

          // If an answer was selected, save which one and if it was correct
          const selectedAnswer = Array.from(
            mcContainer.querySelectorAll(".btn-subtask-multiple-choice-answer")
          ).find((btn) => btn.classList.contains("active"));
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].multipleChoice.selectedAnswer = selectedAnswer
            ? selectedAnswer.innerHTML
            : null;
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].multipleChoice.correct = selectedAnswer
            ? selectedAnswer.value === "true"
              ? true
              : false
            : null;
          if (showDebugLogs)
            console.log(
              `- - - Saved multipleChoice.selectedAnswer for task ${taskIndex} subtask ${subtaskIndex}:`,
              worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
                subtaskIndex
              ].multipleChoice.selectedAnswer
            );
          if (showDebugLogs)
            console.log(
              `- - - Saved multipleChoice.correct for task ${taskIndex} subtask ${subtaskIndex}:`,
              worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
                subtaskIndex
              ].multipleChoice.correct
            );
        }

        if (mcContainer.classList.contains("show")) {
          const selectedAnswer = Array.from(
            mcContainer.querySelectorAll(".btn-subtask-multiple-choice-answer")
          ).find((btn) => btn.classList.contains("active"));
          worksheetData[currentWorksheet].tasks[taskIndex].subtasks[
            subtaskIndex
          ].multipleChoice.selectedAnswer = selectedAnswer
            ? selectedAnswer.id
            : null;
        }
      }
    });
  });

  localStorage.setItem(worksheetDataKey, JSON.stringify(worksheetData));
}

// Change code language
document
  .getElementById("worksheet-code-language-buttons")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("change-code-language")) {
      currentSelectedLanguage = e.target.getAttribute("data-code-language");
      localStorage.setItem("currentSelectedLanguage", currentSelectedLanguage);
      if (showDebugLogs)
        console.log("Saving selected language: ", currentSelectedLanguage);
      document.querySelectorAll(".change-code-language").forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");
      document.getElementById(
        "worksheet-code"
      ).innerHTML = `<code class="language-${currentSelectedLanguage}">${worksheets[currentIndex].code[currentSelectedLanguage]}</code>`;
      hljs.highlightAll();
      hljs.initLineNumbersOnLoad({
        singleLine: true,
      });
      getCodeHelpers(
        currentIndex,
        worksheets[currentIndex],
        currentSelectedLanguage
      );

      // For each element with class "language-specific", show or hide based on currentSelectedLanguage
      document.querySelectorAll(".language-specific").forEach((element) => {
        if (
          element.classList.contains("task-language-" + currentSelectedLanguage)
        ) {
          element.classList.remove("hide-element");
        } else {
          element.classList.add("hide-element");
        }
      });
    }
  });

// Copy code to clipboard
document
  .getElementById("copy-code-to-clipboard")
  .addEventListener("click", function () {
    var code = worksheets[currentIndex].code[currentSelectedLanguage];
    navigator.clipboard.writeText(code);
    // Small animation on button
    var button = document.getElementById("copy-code-to-clipboard");
    button.classList.add("btn-outline-success");
    var buttonText = button.innerHTML;
    button.innerHTML = '<i class="bi bi-check"></i> Code kopiert!';
    setTimeout(function () {
      button.classList.remove("btn-outline-success");
      button.innerHTML = buttonText;
    }, 1000);
  });

// Export code and download
document.getElementById("export-code").addEventListener("click", function () {
  var code = worksheets[currentIndex].code[currentSelectedLanguage];
  const dataStr = `data:text/${currentSelectedLanguage};charset=utf-8,${encodeURIComponent(
    code
  )}`;
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute(
    "download",
    worksheets[currentIndex].codeFilename[currentSelectedLanguage]
  );
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
});

// Export user data as JSON file
document.getElementById("export-data").addEventListener("click", function () {
  // Retrieve the hierarchical data from localStorage
  const worksheetDataKey = "worksheetData";
  const worksheetData =
    JSON.parse(localStorage.getItem(worksheetDataKey)) || {};

  // Convert the data to a JSON string with indentation for readability
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(worksheetData, null, 2));

  // Create a temporary anchor element to trigger the download
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute(
    "download",
    `AB_${subjectName}_${courseName}.json`
  );

  // Append the anchor to the document, trigger the download, and remove the anchor
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
});

// Print worksheet
document
  .getElementById("print-worksheet")
  .addEventListener("click", function () {
    window.print();
  });

// Debugging helpers
// Show id of input and textarea elements
function showInputIDs() {
  (function showInputAndTextareaIDs() {
    const style = `
      font-size: 12px;
      color: white;
      background: rgba(0, 0, 0, 0.7);
      padding: 2px 4px;
      margin-top: 2px;
      display: inline-block;
      border-radius: 4px;
      font-family: monospace;
    `;

    document.querySelectorAll('input[type="text"], textarea').forEach((el) => {
      const id = el.id;
      if (id) {
        const label = document.createElement("div");
        label.textContent = `ID: ${id}`;
        label.setAttribute("style", style);
        el.insertAdjacentElement("afterend", label);
      }
    });

    console.log("IDs wurden angezeigt.");
  })();
}
