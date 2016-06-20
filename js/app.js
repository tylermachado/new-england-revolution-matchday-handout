

var	width = 600,
	n = crew.length,
	height = width/2,
	square = width/n,
	squarepadding = 0;

var color = d3.scale.linear()
  .domain([-10, 0, 10])
  .range(["#ca0020","#f7f7f7","#0571b0"]);


function createBars(data) {
	console.log(data);
	var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);

    var squares = svg.selectAll("rect")
			.data(data)
			.enter().append("rect")
			.attr("width",square)
			.attr("height",function(d,i) { 
					return d*square * 2;
			} )
			.attr("x", function(d, i) { return (i % n) * (square+squarepadding) } )
			.attr("y", function(d, i) { 
				if (data == revs) {
					return height-d*square*2 - 50; 
				} else {
					return 50; 
				}
			 } )
			.style("fill", function(d, i) { 
				if (data == revs) {
					return "#0A2141"; 
				} else {
					return "#FFDB00"; 
				}
			} );
}

createBars(revs);
createBars(crew);