function showLessons() {
    const lessons = document.querySelectorAll('.coming-soon');
    const button = document.querySelector('#show-lessons');

    for (let lesson of lessons) {
        lesson.classList.remove('hide');
    }

    button.classList.remove('show-btn');
}