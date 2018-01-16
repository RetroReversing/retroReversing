var React = require("react")
var HexViewer = require("../index.js")

var data = []
for (var i = 0; i < 295; i++) {
	data.push(parseInt(Math.random() * 255))
}

React.render(<HexViewer buffer={new Buffer(data)} rowLength={16} setLength={4} />, document.getElementById('example'));
