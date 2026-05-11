import { getPath, displayAllRecipeCards } from './script.js';

const linkElementsDifficulty = document.querySelectorAll('.filter-diff-chip');
const linkElementsTime = document.querySelectorAll('.filter-time-chip');

const searchInput = document.querySelector('[data-search]');

let selectedDifficulty = 'any';
let selectedTime = 'any';

fetch(getPath('datas/data.json'))
.then(response => response.json())
.then(recipeData => {
    function applyFilters() {
        const filtered = recipeData.filter(data => {
            const matchDifficulty =
                selectedDifficulty === 'any' ||
                data.difficulty.toLowerCase() === selectedDifficulty;

            const matchTime =
                selectedTime === 'any' ||
                data.time_value === selectedTime;

            return matchDifficulty && matchTime;
        });

        displayAllRecipeCards(filtered);
    }
// difficulty chips
    linkElementsDifficulty.forEach((links) => {
        links.addEventListener('click', (element) => {

            const difficulty = element.target.dataset.value;

            if (links.classList.contains('active')) {
                links.classList.remove('active');
                selectedDifficulty = 'any';
            } else {
                linkElementsDifficulty.forEach(chip => chip.classList.remove('active'));
                links.classList.add('active');
                selectedDifficulty = difficulty;
            }

            applyFilters();
        });
    });

    // time chips
    linkElementsTime.forEach((links) => {
        links.addEventListener('click', (element) => {

            const time = element.target.dataset.value;

            if (links.classList.contains('active')) {
                links.classList.remove('active');
                selectedTime = 'any';
            } else {
                linkElementsTime.forEach(chip => chip.classList.remove('active'));
                links.classList.add('active');
                selectedTime = time;
            }

            applyFilters();
        });
    });

    // all recipes
    displayAllRecipeCards(recipeData);

    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();
        const filteredRecipes = recipeData.filter(card => {
            return card.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(value)
            );
        });
        displayAllRecipeCards(filteredRecipes);
        console.log(value);
    })
});

