var	width = 730,
	n = crew.length,
	height = width,
	square = width/n,
	squarepadding = 0,
	radius = 5;

var color = d3.scale.linear()
  .domain([-10, 0, 10])
  .range(["#ca0020","#f7f7f7","#0571b0"]);

  var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);


function createDots(data) {
	console.log(data);
	
    var dots = svg.selectAll("rect")
			.data(data)
			.enter().append("g").selectAll("circle")
  .data(function(d) { return d3.range(d); })
  .enter()
  .append("circle")
			.attr("data-goals", function(d) {return d;})
			.attr("r", radius)
			.attr("cx", function(d, i, j) { return (j % n) * (square+squarepadding) + radius } )
			.attr("cy", function(d, i, j) { 
				if (data == revs) {
					return (height/2) - (radius) - (radius*2*d); 
				} else {
					return (height/2) + (radius) + (radius*2*d); 
				}
			 } )
			.style("fill", function(d, i, j) { 
				if (data == revs) {
					return "#0A2141"; 
				} else {
					return "#FFDB00"; 
				}
			} );
}

createDots(revs);
createDots(crew);