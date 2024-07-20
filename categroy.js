document.addEventListener('DOMContentLoaded', () => {
    const categoryElements = document.querySelectorAll('.category');

    categoryElements.forEach(category => {
        category.addEventListener('click', () => {
            alert(`You clicked on ${category.querySelector('h2').innerText}`);
        });
    });
});
