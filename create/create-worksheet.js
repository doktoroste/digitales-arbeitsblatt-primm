const worksheet = {
  titleShort: "",
  titleTechnical: "",
  title: "",
  description: "",
  image: "",
  imageDescription: "",
  imageAlt: "",
  citations: [],
  code: {},
  codeFilename: {},
  primaryLanguage: "",
  codeHelpers: {},
  tasks: [],
};

const SUBTASK_LABELS = {
  text: "Freitext",
  textShort: "Freitext (kurz)",
  textLong: "Freitext (lang)",
  code: "Code",
  textShortCheckable: "Freitext (kurz) überprüfbar",
  multipleChoice: "Multiple Choice",
  none: "keine Antwort",
};

let codeWrapperCount = 1;

function cloneTemplate(id) {
  return document.getElementById(id).content.firstElementChild.cloneNode(true);
}

function getOptionalTextValue(element) {
  const value = element?.value?.trim() || "";
  return value || undefined;
}

function getOptionalTextArray(elements) {
  const values = Array.from(elements)
    .map((el) => el.value.trim())
    .filter(Boolean);
  return values.length ? values : undefined;
}

function createFormCheck(labelText, dataAttribute) {
  const wrapper = document.createElement("div");
  wrapper.className = "form-check mt-2";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "form-check-input";
  input.dataset[dataAttribute] = "";

  const label = document.createElement("label");
  label.className = "form-check-label small";
  label.textContent = labelText;

  wrapper.appendChild(input);
  wrapper.appendChild(label);
  return wrapper;
}

function createLabel(text, className = "form-label small") {
  const label = document.createElement("label");
  label.className = className;
  label.textContent = text;
  return label;
}

function createTextarea({ className, rows, placeholder, dataAttribute }) {
  const textarea = document.createElement("textarea");
  textarea.className = className;
  textarea.rows = rows;
  textarea.placeholder = placeholder;
  if (dataAttribute) textarea.dataset[dataAttribute] = "";
  return textarea;
}

function createTaskWrapper(index) {
  const wrapper = cloneTemplate("task-wrapper-template");
  wrapper.dataset.taskIndex = index;
  const taskNumber = wrapper.querySelector(".task-number");
  if (taskNumber) taskNumber.textContent = index + 1;
  return wrapper;
}

function syncCodeWrapper(wrapperEl) {
  const langInput = wrapperEl.querySelector(".worksheet-code-language");
  const lang = langInput ? langInput.value.trim() : "";
  const prevLang = wrapperEl.dataset.prevLanguage || "";

  if (prevLang && prevLang !== lang) {
    delete worksheet.code[prevLang];
    delete worksheet.codeFilename[prevLang];
    delete worksheet.codeHelpers[prevLang];
    if (worksheet.primaryLanguage === prevLang) {
      worksheet.primaryLanguage = "";
    }
  }
  wrapperEl.dataset.prevLanguage = lang;

  if (langInput) {
    langInput.classList.toggle("is-invalid", !lang);
  }

  if (!lang) return;

  const codeArea = wrapperEl.querySelector("[data-code-content]");
  worksheet.code[lang] = codeArea ? codeArea.value : "";

  const filenameInput = wrapperEl.querySelector(".worksheet-code-filename");
  worksheet.codeFilename[lang] = filenameInput
    ? filenameInput.value.trim()
    : "";

  const radioInput = wrapperEl.querySelector(
    ".worksheet-code-primary-language",
  );
  if (radioInput?.checked) {
    worksheet.primaryLanguage = lang;
  }

  const cards = wrapperEl.querySelectorAll("[data-helper-card]");
  worksheet.codeHelpers[lang] = Array.from(cards).map((card) => ({
    title: card.querySelector("[data-helper-title]")?.value || "",
    content: card.querySelector("[data-helper-content]")?.value || "",
  }));
}

function createCodeHelperCard(wrapperEl) {
  const card = cloneTemplate("code-helper-card-template");
  const sync = () => syncCodeWrapper(wrapperEl);

  card.querySelector("[data-helper-title]").addEventListener("input", sync);
  card.querySelector("[data-helper-content]").addEventListener("input", sync);
  card.querySelector("[data-remove-helper]").addEventListener("click", () => {
    card.remove();
    sync();
  });

  return card;
}

function initCodeWrapper(wrapperEl) {
  const sync = () => syncCodeWrapper(wrapperEl);

  wrapperEl
    .querySelector("[data-code-content]")
    ?.addEventListener("input", sync);

  const langInput = wrapperEl.querySelector(".worksheet-code-language");
  if (langInput) {
    langInput.addEventListener("input", sync);
    langInput.addEventListener("blur", () => {
      langInput.classList.toggle("is-invalid", !langInput.value.trim());
    });
  }

  wrapperEl
    .querySelector(".worksheet-code-filename")
    ?.addEventListener("input", sync);

  wrapperEl
    .querySelector(".worksheet-code-primary-language")
    ?.addEventListener("change", sync);

  const staticCard = wrapperEl.querySelector("[data-helper-card]");
  if (staticCard) {
    staticCard
      .querySelector("[data-helper-title]")
      ?.addEventListener("input", sync);
    staticCard
      .querySelector("[data-helper-content]")
      ?.addEventListener("input", sync);
  }

  const addBtn = wrapperEl.querySelector(".worksheet-code-add-explanation");
  const container = wrapperEl.querySelector(".worksheet-code-explanations");
  if (addBtn && container) {
    addBtn.addEventListener("click", () => {
      container.appendChild(createCodeHelperCard(wrapperEl));
      sync();
    });
  }
}

function readChoiceCard(card) {
  const text = getOptionalTextValue(card.querySelector("[data-choice-text]"));
  const correct = card.querySelector("[data-choice-correct]")?.checked || false;
  const feedbackText = getOptionalTextValue(
    card.querySelector("[data-choice-feedback]"),
  );

  if (!text && !correct && !feedbackText) return null;

  const choice = {};
  if (text) choice.text = text;
  if (correct) choice.correct = true;
  if (feedbackText) choice.feedbackText = feedbackText;
  return choice;
}

function readSubtask(card) {
  const type = card.dataset.answerType;
  const task = getOptionalTextValue(card.querySelector("[data-subtask-task]"));
  const result = { answerType: type };

  if (task) result.task = task;

  if (["text", "code", "textShortCheckable"].includes(type)) {
    const hints = getOptionalTextArray(
      card.querySelectorAll("[data-hint-input]"),
    );
    if (hints) result.hints = hints;
  }

  if (["text", "textShortCheckable"].includes(type)) {
    const phrasingHelpers = getOptionalTextArray(
      card.querySelectorAll("[data-phrasing-input]"),
    );
    if (phrasingHelpers) result.phrasingHelpers = phrasingHelpers;

    const usesMultipleChoice =
      card.querySelector("[data-mc-checkbox]")?.checked || false;
    if (usesMultipleChoice) {
      const choices = Array.from(card.querySelectorAll("[data-choice-card]"))
        .map(readChoiceCard)
        .filter(Boolean);
      if (choices.length) {
        result.multipleChoice = true;
        result.choices = choices;
      }
    }
  }

  if (type === "textShortCheckable") {
    const usesMultipleChoice =
      card.querySelector("[data-mc-checkbox]")?.checked || false;

    if (!usesMultipleChoice) {
      const correctAnswers = getOptionalTextArray(
        card.querySelectorAll("[data-correct-answer]"),
      );
      const feedbackText = getOptionalTextValue(
        card.querySelector("[data-feedback-text]"),
      );
      if (correctAnswers) result.correctAnswers = correctAnswers;
      if (feedbackText) result.feedbackText = feedbackText;
    }
  }

  if (type === "multipleChoice") {
    if (card.querySelector("[data-mc-checkbox]")?.checked) {
      result.multipleChoice = true;
    }
    const choices = Array.from(card.querySelectorAll("[data-choice-card]"))
      .map(readChoiceCard)
      .filter(Boolean);
    if (choices.length) result.choices = choices;
  }

  return result;
}

function syncTask(taskEl) {
  const idx = Number.parseInt(taskEl.dataset.taskIndex, 10);
  const title = taskEl.querySelector("[data-task-title]")?.value || "";
  const description =
    taskEl.querySelector("[data-task-description]")?.value || "";

  const helpers = Array.from(
    taskEl.querySelectorAll("[data-task-helper-card]"),
  ).map((card) => ({
    title: card.querySelector("[data-task-helper-title]")?.value || "",
    content: card.querySelector("[data-task-helper-content]")?.value || "",
  }));

  const subtasks = Array.from(
    taskEl.querySelectorAll("[data-subtask-card]"),
  ).map(readSubtask);

  while (worksheet.tasks.length <= idx) {
    worksheet.tasks.push({
      title: "",
      description: "",
      helpers: [],
      subtasks: [],
    });
  }

  worksheet.tasks[idx] = {
    title,
    description,
    helpers,
    subtasks,
  };
}

function createListItem(dataAttr, placeholder, onChange, useTextarea) {
  const templateId = useTextarea
    ? "textarea-list-item-template"
    : "input-list-item-template";
  const wrapper = cloneTemplate(templateId);
  const input = wrapper.querySelector("input, textarea");
  input.placeholder = placeholder;
  input.dataset[dataAttr] = "";
  input.addEventListener("input", onChange);

  wrapper.querySelector("[data-remove-item]").addEventListener("click", () => {
    wrapper.remove();
    onChange();
  });

  return wrapper;
}

function createAddableList(
  container,
  dataAttr,
  placeholder,
  onChange,
  useTextarea,
) {
  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "btn btn-sm btn-outline-secondary mt-1";
  const icon = document.createElement("i");
  icon.className = "bi bi-plus-circle";
  addBtn.appendChild(icon);
  addBtn.appendChild(document.createTextNode(" Hinzufügen"));

  addBtn.addEventListener("click", () => {
    container.insertBefore(
      createListItem(dataAttr, placeholder, onChange, useTextarea),
      addBtn,
    );
    onChange();
  });

  container.appendChild(addBtn);
  container.insertBefore(
    createListItem(dataAttr, placeholder, onChange, useTextarea),
    addBtn,
  );
}

function createChoiceCard(onChange) {
  const card = cloneTemplate("choice-card-template");
  card.querySelector("[data-choice-text]").addEventListener("input", onChange);
  card
    .querySelector("[data-choice-correct]")
    .addEventListener("change", onChange);
  card
    .querySelector("[data-choice-feedback]")
    .addEventListener("input", onChange);
  card.querySelector("[data-remove-choice]").addEventListener("click", () => {
    card.remove();
    onChange();
  });
  return card;
}

function buildChoicesSection(onChange) {
  const section = cloneTemplate("choices-section-template");
  const container = section.querySelector("[data-choices-container]");
  section.querySelector("[data-add-choice]").addEventListener("click", () => {
    container.appendChild(createChoiceCard(onChange));
    onChange();
  });
  return section;
}

function createSubtaskCard(taskEl, type) {
  const card = cloneTemplate("subtask-card-template");
  const body = card.querySelector("[data-subtask-body]");
  const sync = () => syncTask(taskEl);

  card.dataset.answerType = type;
  card.querySelector("[data-subtask-label]").textContent =
    SUBTASK_LABELS[type] || type;
  card.querySelector("[data-remove-subtask]").addEventListener("click", () => {
    card.remove();
    sync();
  });

  body.appendChild(createLabel("Aufgabentext"));
  const taskArea = createTextarea({
    className: "form-control form-control-sm mb-2",
    rows: 2,
    placeholder: "Aufgabentext (HTML erlaubt)",
    dataAttribute: "subtaskTask",
  });
  taskArea.addEventListener("input", sync);
  body.appendChild(taskArea);

  let correctAnswersSection = null;

  if (type === "textShortCheckable") {
    correctAnswersSection = document.createElement("div");
    correctAnswersSection.dataset.correctAnswersSection = "";
    correctAnswersSection.appendChild(createLabel("Korrekte Antworten"));

    const correctAnswersContainer = document.createElement("div");
    correctAnswersSection.appendChild(correctAnswersContainer);
    createAddableList(
      correctAnswersContainer,
      "correctAnswer",
      "Korrekte Antwort",
      sync,
      false,
    );

    const feedbackLabel = createLabel("Feedback-Text (allgemein)");
    feedbackLabel.classList.add("mt-2");
    correctAnswersSection.appendChild(feedbackLabel);

    const feedbackArea = createTextarea({
      className: "form-control form-control-sm mb-2",
      rows: 2,
      placeholder: "Feedback-Text (HTML erlaubt)",
      dataAttribute: "feedbackText",
    });
    feedbackArea.addEventListener("input", sync);
    correctAnswersSection.appendChild(feedbackArea);
    body.appendChild(correctAnswersSection);
  }

  if (["text", "code", "textShortCheckable"].includes(type)) {
    const hintsLabel = createLabel("Hinweise");
    hintsLabel.classList.add("mt-1");
    body.appendChild(hintsLabel);
    const hintsContainer = document.createElement("div");
    body.appendChild(hintsContainer);
    createAddableList(
      hintsContainer,
      "hintInput",
      "Hinweistext (HTML erlaubt)",
      sync,
      true,
    );
  }

  if (["text", "textShortCheckable"].includes(type)) {
    const phrasingLabel = createLabel("Formulierungshilfen");
    phrasingLabel.classList.add("mt-1");
    body.appendChild(phrasingLabel);
    const phrasingContainer = document.createElement("div");
    body.appendChild(phrasingContainer);
    createAddableList(
      phrasingContainer,
      "phrasingInput",
      "Formulierungshilfe (HTML erlaubt)",
      sync,
      true,
    );
  }

  if (["text", "textShortCheckable"].includes(type)) {
    const multipleChoiceWrapper = createFormCheck(
      "Multiple-Choice-Antworten einblenden",
      "mcCheckbox",
    );
    body.appendChild(multipleChoiceWrapper);

    const choicesSection = buildChoicesSection(sync);
    choicesSection.classList.add("d-none");
    body.appendChild(choicesSection);

    multipleChoiceWrapper
      .querySelector("[data-mc-checkbox]")
      .addEventListener("change", (event) => {
        const checked = event.target.checked;
        choicesSection.classList.toggle("d-none", !checked);
        if (correctAnswersSection) {
          correctAnswersSection.classList.toggle("d-none", checked);
        }
        sync();
      });
  }

  if (type === "multipleChoice") {
    const multiSelectWrapper = createFormCheck(
      "Mehrfachauswahl erlauben",
      "mcCheckbox",
    );
    multiSelectWrapper.classList.add("mb-2");
    multiSelectWrapper
      .querySelector("[data-mc-checkbox]")
      .addEventListener("change", sync);
    body.appendChild(multiSelectWrapper);
    body.appendChild(buildChoicesSection(sync));
  }

  return card;
}

function createTaskHelperCard(taskEl) {
  const card = cloneTemplate("task-helper-card-template");
  const sync = () => syncTask(taskEl);

  card
    .querySelector("[data-task-helper-title]")
    .addEventListener("input", sync);
  card
    .querySelector("[data-task-helper-content]")
    .addEventListener("input", sync);
  card
    .querySelector("[data-remove-task-helper]")
    .addEventListener("click", () => {
      card.remove();
      sync();
    });

  return card;
}

function initTask(taskEl) {
  const sync = () => syncTask(taskEl);

  taskEl.querySelector("[data-task-title]")?.addEventListener("input", sync);
  taskEl
    .querySelector("[data-task-description]")
    ?.addEventListener("input", sync);

  const staticHelper = taskEl.querySelector("[data-task-helper-card]");
  if (staticHelper) {
    staticHelper
      .querySelector("[data-task-helper-title]")
      ?.addEventListener("input", sync);
    staticHelper
      .querySelector("[data-task-helper-content]")
      ?.addEventListener("input", sync);
  }

  const addHelperBtn = taskEl.querySelector(".worksheet-task-add-explanation");
  const helpersContainer = taskEl.querySelector(".worksheet-task-explanations");
  if (addHelperBtn && helpersContainer) {
    addHelperBtn.addEventListener("click", () => {
      helpersContainer.appendChild(createTaskHelperCard(taskEl));
      sync();
    });
  }

  const addSubtaskBtn = taskEl.querySelector("[data-add-subtask]");
  const subtasksContainer = taskEl.querySelector("[data-subtasks-container]");
  const typeSelect = taskEl.querySelector(".worksheet-subtask-type");
  if (addSubtaskBtn && subtasksContainer && typeSelect) {
    addSubtaskBtn.addEventListener("click", () => {
      subtasksContainer.appendChild(
        createSubtaskCard(taskEl, typeSelect.value),
      );
      sync();
    });
  }
}

function updateTaskIndices() {
  document.querySelectorAll(".worksheet-task-wrapper").forEach((el, index) => {
    el.dataset.taskIndex = index;
    const number = el.querySelector(".task-number");
    if (number) number.textContent = index + 1;
  });
}

function validateWorksheet() {
  let valid = true;

  document.querySelectorAll(".worksheet-code-wrapper").forEach((wrapperEl) => {
    const langInput = wrapperEl.querySelector(".worksheet-code-language");
    if (langInput && !langInput.value.trim()) {
      langInput.classList.add("is-invalid");
      if (valid) {
        langInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      valid = false;
    }
  });

  return valid;
}

function initWorksheetMeta() {
  document
    .getElementById("worksheet-title")
    .addEventListener("input", (event) => {
      worksheet.title = event.target.value;
    });

  document
    .getElementById("worksheet-title-short")
    .addEventListener("input", (event) => {
      worksheet.titleShort = event.target.value;
      worksheet.titleTechnical = event.target.value;
    });

  document
    .getElementById("worksheet-description")
    .addEventListener("input", (event) => {
      worksheet.description = event.target.innerHTML;
    });

  document
    .getElementById("worksheet-image-path")
    .addEventListener("input", (event) => {
      worksheet.image = event.target.value;
    });

  document
    .getElementById("worksheet-image-description")
    .addEventListener("input", (event) => {
      worksheet.imageDescription = event.target.value;
    });

  document
    .getElementById("worksheet-image-alt")
    .addEventListener("input", (event) => {
      worksheet.imageAlt = event.target.value;
    });
}

function initCodeSection() {
  initCodeWrapper(document.getElementById("worksheet-code-wrapper-1"));

  document
    .getElementById("worksheet-code-add-language")
    .addEventListener("click", () => {
      const templateWrapper = document.getElementById(
        "worksheet-code-wrapper-1",
      );
      const newWrapper = templateWrapper.cloneNode(true);
      codeWrapperCount += 1;
      newWrapper.id = `worksheet-code-wrapper-${codeWrapperCount}`;

      newWrapper.querySelectorAll("input, textarea").forEach((element) => {
        element.value = "";
        element.classList.remove("is-invalid");
      });

      const radio = newWrapper.querySelector(
        ".worksheet-code-primary-language",
      );
      if (radio) radio.checked = false;

      newWrapper
        .querySelector(".worksheet-code-explanations")
        ?.replaceChildren();
      newWrapper.querySelector(".btn-remove-language")?.remove();
      delete newWrapper.dataset.prevLanguage;

      const removeBtn = cloneTemplate("remove-language-button-template");
      removeBtn.addEventListener("click", () => {
        const lang = newWrapper.dataset.prevLanguage || "";
        if (lang) {
          delete worksheet.code[lang];
          delete worksheet.codeFilename[lang];
          delete worksheet.codeHelpers[lang];
          if (worksheet.primaryLanguage === lang) {
            worksheet.primaryLanguage = "";
          }
        }
        newWrapper.remove();
      });
      newWrapper.appendChild(removeBtn);

      templateWrapper.parentNode.insertBefore(
        newWrapper,
        templateWrapper.nextSibling,
      );
      initCodeWrapper(newWrapper);
    });
}

function initTaskSection() {
  initTask(document.getElementById("worksheet-task-wrapper-1"));
  worksheet.tasks.push({
    title: "",
    description: "",
    helpers: [],
    subtasks: [],
  });

  document
    .getElementById("worksheet-add-task")
    .addEventListener("click", () => {
      const tasksMain = document.getElementById("worksheet-tasks");
      const taskIndex = tasksMain.querySelectorAll(
        ".worksheet-task-wrapper",
      ).length;
      const wrapper = createTaskWrapper(taskIndex);

      worksheet.tasks.push({
        title: "",
        description: "",
        helpers: [],
        subtasks: [],
      });

      wrapper
        .querySelector(".btn-remove-task")
        ?.addEventListener("click", () => {
          const idx = Number.parseInt(wrapper.dataset.taskIndex, 10);
          worksheet.tasks.splice(idx, 1);
          wrapper.remove();
          updateTaskIndices();
        });

      const hr = tasksMain.querySelector("hr");
      tasksMain.insertBefore(wrapper, hr);
      initTask(wrapper);
    });
}

function initDownload() {
  document
    .getElementById("download-worksheet-json")
    .addEventListener("click", () => {
      if (!validateWorksheet()) return;

      const blob = new Blob([JSON.stringify(worksheet, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${worksheet.titleShort}.json`;
      link.click();
      URL.revokeObjectURL(url);
    });
}

initWorksheetMeta();
initCodeSection();
initTaskSection();
initDownload();
