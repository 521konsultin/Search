/*// Get the checklist items and button element
let checklist = document.querySelectorAll('#checklist input[type="checkbox"]');
let executeButton = document.getElementById('execute-btn');

// Add event listener to each checkbox
checklist.forEach(function(item) {
  item.addEventListener('click', function() {
    // Check if all items are confirmed
    let allChecked = true;
    checklist.forEach(function(item) {
      if (!item.checked) {
        allChecked = false;
      }
    });
    // Enable button if all items are checked, disable otherwise
    if (allChecked) {
      executeButton.removeAttribute('disabled');
    } else {
      executeButton.setAttribute('disabled', true);
    }
  });
});*/

// Function to execute the trade
executeButton.addEventListener("click", function () {
  // Your trade execution code goes here
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const executeButton = document.querySelector("#execute-button");

function updateButtonColor() {
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );
  executeButton.disabled = !allChecked;
  executeButton.style.backgroundColor = allChecked ? "#3e8e41" : "#4caf50";
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateButtonColor);
});

updateButtonColor();

// Get the checklist items and button element
let checklist = document.querySelectorAll('#checklist input[type="checkbox"]');
let executeBtn = document.getElementById("execute-button");

// Add event listener to each checkbox
checklist.forEach(function (item) {
  item.addEventListener("click", function () {
    // Check if all items are confirmed
    let allChecked = true;
    checklist.forEach(function (item) {
      if (!item.checked) {
        // if an item is not checked, set allChecked to false
        allChecked = false;
      }
    });
    // Enable button if all items are checked, disable otherwise
    if (allChecked) {
      executeBtn.removeAttribute("enabled"); // enable button
    } else {
      executeBtn.setAttribute("disabled", true); // disable button
    }
  });
});

// Function to execute the trade
executeButton.addEventListener("click", function () {
  // Your trade execution code goes here
});


