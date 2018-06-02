const Graph = require('../../components/graphs/dygraph');

function GetData() {
    // Generate Random Data (this is where you'd call the data from the DB)
    var data = [];
      var t = new Date();
      for (var i = 100; i >= 0; i--) {
        var x = new Date(t.getTime() - i * 1000);
        data.push([x, Math.random()]);
      }

      return data;
}

var graph1 = new Graph("dygraph", "graph-one", GetData(), ['Time', 'Random']);
var graph1 = new Graph("dygraph", "graph-two", GetData(), ['Time', 'Random']);
var graph1 = new Graph("dygraph", "graph-three", GetData(), ['Time', 'Random']);
var graph1 = new Graph("dygraph", "graph-four", GetData(), ['Time', 'Random']);
