// === VARIABLES ===
let currentDay = 1;
let completedTasks = 0;

// === FUNCTION: CHECK TASK ===
function checkTask(checkbox) {
    const listItem = checkbox.parentElement;
    
    if (checkbox.checked) {
        listItem.classList.add('completed');
        completedTasks++;
    } else {
        listItem.classList.remove('completed');
        completedTasks--;
    }

    // Call the update function (THIS IS LINE 16 - the error!)
    updateTaskCounter();
}

// === FUNCTION: UPDATE TASK COUNTER ===
// THIS FUNCTION WAS MISSING!
function updateTaskCounter() {
    document.getElementById('completedCount').textContent = completedTasks;
}

// === FUNCTION: COMPLETE DAY ===
function completeDay() {
    // Check if all tasks are done
    if (completedTasks < 5) {
        alert('⚠️ You must complete ALL 5 tasks before marking the day complete!');
        return;
    }

    // Move to next day
    currentDay++;

    // Calculate progress percentage
    const progress = ((currentDay - 1) / 75 * 100).toFixed(1);

    // Update day counter
    document.getElementById('dayCounter').textContent = 
        `Day ${currentDay} of 75 (${progress}% complete)`;

    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

    // Reset all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('completed');
    });

    // Reset completed tasks counter
    completedTasks = 0;
    updateTaskCounter();

    // Show success message
    alert(`🎉 Day ${currentDay - 1} complete! Keep going! You're at ${progress}% of your 75 Hard journey!`);

    // Check if completed all 75 days
    if (currentDay > 75) {
        alert('🏆 CONGRATULATIONS! YOU COMPLETED THE 75 HARD CHALLENGE! 🏆');
        currentDay = 1;
    }
}

// === LOG TO CONSOLE ===
console.log('75 Hard Challenge Tracker loaded! 💪');
