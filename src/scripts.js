
document.addEventListener("DOMContentLoaded", function () {
    saveAndLoadUserInput()
});

// Load user inputs from LocalStorage and save them on every input
function saveAndLoadUserInput() {
    // Load all user inputs from LocalStorage
    document.querySelectorAll(".save-user-input").forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue !== null) {
            input.value = savedValue;
        }
        
        // Save user input to LocalStorage on every input
        input.addEventListener("input", function () {
            localStorage.setItem(input.id, input.value);
        });
    });
}

// Change code language
document.getElementById("worksheet-code-language-buttons").addEventListener("click", function (e) {
    if (e.target.classList.contains("change-code-language")) {
        currentSelectedLanguage = e.target.getAttribute("data-code-language");
        localStorage.setItem(currentSelectedLanguage, currentSelectedLanguage);
        document.querySelectorAll(".change-code-language").forEach(button => {
            button.classList.remove("active");
        });
        e.target.classList.add("active");
        document.getElementById("worksheet-code").innerHTML = `<code class="language-${currentSelectedLanguage}">${worksheets[currentIndex].code[currentSelectedLanguage]}</code>`;
        hljs.highlightAll();
        hljs.initLineNumbersOnLoad({
            singleLine: true
        });
        getCodeHelpers(currentIndex, worksheets[currentIndex], currentSelectedLanguage);
        
        // For each element with class "language-specific", show or hide based on currentSelectedLanguage
        document.querySelectorAll(".language-specific").forEach(element => {
            if (element.classList.contains("task-language-"+currentSelectedLanguage)) {
                element.classList.remove("hide-element");
            } else {
                element.classList.add("hide-element");
            }
        });
    }
});

// Copy code to clipboard
document.getElementById("copy-code-to-clipboard").addEventListener("click", function () {
    var code = worksheets[currentIndex].code[currentSelectedLanguage];
    navigator.clipboard.writeText(code);
});

// Export code and download
document.getElementById("export-code").addEventListener("click", function () {
    var code = worksheets[currentIndex].code[currentSelectedLanguage];
    const dataStr = `data:text/${currentSelectedLanguage};charset=utf-8,${encodeURIComponent(code)}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", worksheets[currentIndex].codeFilename[currentSelectedLanguage]);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
});


// Export user data as JSON file
document.getElementById("export-data").addEventListener("click", function () {
    let data = {};
    document.querySelectorAll(".save-user-input").forEach(input => {
        data[input.id] = input.value;
    });
    document.querySelectorAll(".show-helper").forEach(button => {
        data[button.id] = localStorage.getItem(button.id) === "true";
    });
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "user_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
});

document.getElementById("print-worksheet").addEventListener("click", function () {
    window.print();
});
