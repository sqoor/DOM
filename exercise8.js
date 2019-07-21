function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    var colorsDiv = document.getElementById('colors');
    var selectedDiv = document.getElementById('selected');
    var choice;

    colors.forEach(function(color) {
        choice = document.createElement('div');
        choice.id = color;
        choice.style.backgroundColor = color;
        choice.classList = 'choice';
        choice.addEventListener('click', function(e) {
            console.log('bg-color', e.target.style.backgroundColor);
            console.log('id', e.target.id);
            selectedDiv.style.backgroundColor = e.target.id;
            selectedDiv.innerText = e.target.id; 
        });

        colorsDiv.appendChild(choice);
    });


}

window.onload = function () {
    initGrid();
}
