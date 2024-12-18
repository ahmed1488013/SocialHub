document.addEventListener('DOMContentLoaded', () => {
    // Get all like buttons and like counts
    const likeButtons = document.querySelectorAll('.like-button');
    const likeCounts = document.querySelectorAll('.like-count');

    // Event listener for like buttons
    likeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(likeCounts[index].textContent);
            count++;
            likeCounts[index].textContent = `${count} Likes`;
        });
    });
});
