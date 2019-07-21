/* TODO implement game logic here */

window.onload = function() {
    // create map
    var labyrinth = new Labyrinth();
    labyrinth.printConsole();
    labyrinth.printDisplay('map');

    // charachter
    var hero = document.createElement('div');
    document.getElementById('map').appendChild(hero);

    // movement
}