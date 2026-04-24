const container = document.querySelector('#recipe-container');

fetch('./datas/data.json')
.then(response => response.json())
.then(recipes => {
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-3';

        card.innerHTML = `
        <div class="recipe-card">
            <div class="recipe-img"></div>
            <h4>${recipe.name}</h4>
            <div class="d-flex gap-2 flex-wrap">
            <span class="recipe-tag">
                ${recipe.time}
            </span>
            <span class="recipe-tag">
                ${recipe.difficulty}
            </span>
            </div>
        </div>
        `;

        container.appendChild(card);
    });
})
.catch(error => console.log(error));