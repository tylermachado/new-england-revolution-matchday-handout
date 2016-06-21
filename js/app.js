var	width = 730,
	n = revs.data.length,
	height = width,
	square = width/n,
	squarepadding = 0,
	radius = 5;

var xscale = d3.scale.linear()
		  .domain([0, n])
		  .range([0, -2*Math.PI]);              // used to scale node index to x position

	    var yscale = d3.scale.linear()
		  .domain([0, n])
		  .range([0, 2*Math.PI]);   

var color = d3.scale.linear()
  .domain([-10, 0, 10])
  .range(["#ca0020","#f7f7f7","#0571b0"]);

  var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);


function createDots(data) {
	// console.log(data);
	
    var dots = svg.selectAll("rect")
			.data(data.data)
			.enter().append("g");

		dots.selectAll("circle")
	  		.data(function(d) { return d3.range(d); })
	  		.enter().append("circle")
			.attr("data-goals", function(d) {return d;})
			.attr("r", radius)
			.attr("cx", function(d, i, j) { return (width/2) + (((i*data.dir*10) + data.radius) * Math.sin(xscale(j))) })
			.attr("cy", function(d, i, j) { return (width/2) + (((i*data.dir*10) + data.radius) * Math.cos(yscale(j))) })
			.style("fill", function(d, i) { return data.color; });

	// dots.selectAll("circle")
 //  		.data(function(d) { return d3.range(d); })
 //  		.enter()
 //  		.append("circle")
	// 		.attr("data-goals", function(d) {return d;})
	// 		.attr("r", radius)
	// 		.attr("cx", function(d, i, j) { return (j % n) * (square+squarepadding) + radius } )
	// 		.attr("cy", function(d, i, j) { 
	// 			if (data == revs) {
	// 				return (height/2) - (radius) - (radius*2*d); 
	// 			} else {
	// 				return (height/2) + (radius) + (radius*2*d); 
	// 			}
	// 		 } )
	// 		.style("fill", function(d, i, j) { 
	// 			if (data == revs) {
	// 				return "#0A2141"; 
	// 			} else {
	// 				return "#FFDB00"; 
	// 			}
	// 		} );
}

createDots(revs);
createDots(crew);