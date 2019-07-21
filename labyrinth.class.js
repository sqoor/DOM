var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];

    this.printConsole = function() {
        this.map.forEach(function(row) {
            var rowCells = '';
            row.forEach(function(cell) {
                if(cell === 0)
                    rowCells += ' '
                else 
                    rowCells += '*'
            });
            console.log(rowCells);
        });
    };

    this.printDisplay = function(id) {
        var element = document.getElementById(id);
        var newDiv;
        var classList;

        this.map.forEach(function(row) {
            row.forEach(function(cell) {
                newDiv = document.createElement('div');
                classList = 'cell';
                cell === 0 ? classList += ' road' : classList += ' wall';
                newDiv.classList = classList;
                element.appendChild(newDiv);
            });
        });
    };
}

/* TODO implement core labyrinth functionality here */


