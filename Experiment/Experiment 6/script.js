// Step 1: Select DOM elements
const mainHeading = document.getElementById("mainHeading");
const toggleParagraph = document.getElementById("toggleParagraph");
const messageInput = document.getElementById("messageInput");
const livePreview = document.getElementById("livePreview");

const btnHeading = document.getElementById("btnHeading");
const btnBgColor = document.getElementById("btnBgColor");
const btnFontSize = document.getElementById("btnFontSize");
const btnToggle = document.getElementById("btnToggle");
const btnReset = document.getElementById("btnReset");

// Variables to keep track of state
let isHidden = false;
let currentFontSize = 16; // Base font size in pixels

// ==========================================
// EVENT HANDLER 1: onchange property
// Triggers when you type in the input box and click outside (lose focus)
// ==========================================
messageInput.onchange = function() {
    if (messageInput.value.trim() !== "") {
        livePreview.textContent = messageInput.value;
    } else {
        livePreview.textContent = "None";
    }
};

// ==========================================
// EVENT HANDLER 2: onclick property
// Changes the heading text using the input value
// ==========================================
btnHeading.onclick = function() {
    const newMessage = messageInput.value.trim();
    if (newMessage !== "") {
        mainHeading.textContent = newMessage;
        messageInput.value = ""; // Clear input after using it
        livePreview.textContent = "None"; // Reset preview
    } else {
        alert("Please enter a message in the input field first!");
    }
};

// ==========================================
// EVENT HANDLER 3: onmouseover property
// Changes background color dynamically when the mouse hovers over the button
// ==========================================
btnBgColor.onmouseover = function() {
    // Generate a random hex color code
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
};

// ==========================================
// EVENT HANDLER 4: addEventListener() method
// Increases the font size of the heading and paragraph safely
// ==========================================
btnFontSize.addEventListener("click", function() {
    currentFontSize += 2; // Increase by 2px
    mainHeading.style.fontSize = (currentFontSize + 12) + "px"; // Keep heading bigger
    toggleParagraph.style.fontSize = currentFontSize + "px";
});

// ==========================================
// EVENT HANDLER 5: Inline onclick (Defined in HTML, function written here)
// Shows or hides the paragraph text
// ==========================================
function toggleVisibility() {
    if (isHidden) {
        toggleParagraph.style.display = "block";
        btnToggle.textContent = "Hide Paragraph";
        isHidden = false;
    } else {
        toggleParagraph.style.display = "none";
        btnToggle.textContent = "Show Paragraph";
        isHidden = true;
    }
}

// ==========================================
// EVENT HANDLER 6: Reset Page using addEventListener
// Restores all original DOM states
// ==========================================
btnReset.addEventListener("click", function() {
    // Reset Texts
    mainHeading.textContent = "Welcome to the DOM!";
    livePreview.textContent = "None";
    messageInput.value = "";
    
    // Reset Styles
    document.body.style.backgroundColor = "#f4f7f6";
    
    // Reset Font Sizes
    currentFontSize = 16;
    mainHeading.style.fontSize = ""; 
    toggleParagraph.style.fontSize = "";
    
    // Reset Visibility
    toggleParagraph.style.display = "block";
    btnToggle.textContent = "Hide Paragraph";
    isHidden = false;
});