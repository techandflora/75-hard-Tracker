
let currentDay = 1;
let completedTasks = 0;


function checkTask(checkbox) {
    const listItem = checkbox.parentElement;
    
    if (checkbox.checked) {
        listItem.classList.add('completed');
        completedTasks++;
    } else {
        listItem.classList.remove('completed');
        completedTasks--;
    }

   
    updateTaskCounter();
}


function updateTaskCounter() {
    document.getElementById('completedCount').textContent = completedTasks;
}


function completeDay() {
   
    if (completedTasks < 5) {
        alert('⚠️ You must complete ALL 5 tasks before marking the day complete!');
        return;
    }

   
    currentDay++;

    
    const progress = ((currentDay - 1) / 75 * 100).toFixed(1);

    
    document.getElementById('dayCounter').textContent = 
        `Day ${currentDay} of 75 (${progress}% complete)`;

    
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

   
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.classList.remove('completed');
    });

    
    completedTasks = 0;
    updateTaskCounter();

    
    alert(`🎉 Day ${currentDay - 1} complete! Keep going! You're at ${progress}% of your 75 Hard journey!`);

  
    if (currentDay > 75) {
        alert('🏆 CONGRATULATIONS! YOU COMPLETED THE 75 HARD CHALLENGE! 🏆');
        currentDay = 1;
    }
}

// === LOG TO CONSOLE ===
console.log('75 Hard Challenge Tracker loaded! 💪');

