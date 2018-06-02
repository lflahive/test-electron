const Dygraph = require("dygraphs");

var Graph = function(type, element, data, labels) {

    // Can put an if statement here for type

    var graph = new Dygraph(
        document.getElementById(element), 
        data,
        {
            drawPoints: true,
            valueRange: [0.0, 1.2],
            labels: labels
        }
    );
}

module.exports = Graph;