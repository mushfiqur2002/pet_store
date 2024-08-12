function toggleAnswer(button) {
    // Get the current answer and icons
    const answer = button.closest('.qna_sctn').querySelector('.ans');
    const plusIcon = button.querySelector('.plus_icon');
    const minusIcon = button.querySelector('.minus_icon');

    // Check if the current answer is already displayed
    const isCurrentlyVisible = answer.style.display === "block";

    // Hide all answers and reset icons
    const allAnswers = document.querySelectorAll('.ans');
    const allPlusIcons = document.querySelectorAll('.plus_icon');
    const allMinusIcons = document.querySelectorAll('.minus_icon');
    
    allAnswers.forEach(ans => ans.style.display = 'none');
    allPlusIcons.forEach(icon => icon.style.display = 'inline');
    allMinusIcons.forEach(icon => icon.style.display = 'none');

    // Toggle the current answer based on its previous state
    if (!isCurrentlyVisible) {
        answer.style.display = "block";
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
    }
}
