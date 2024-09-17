$(document).ready(function () {
    $('#searchButton').on('click', function () {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=3cc602c4888c404f97f95f614a29588e`
        }).done(function (data) {
            const searchResults = document.querySelector('.searchResults');
            
            // Clear previous search results
            searchResults.innerHTML = '';

            data.results.forEach(recipe => {
                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                searchResults.appendChild(newItem);
            });
        });
    });
});
