var	width = 730,
	n = revs.data.length,
	height = width,
	square = width/n,
	squarepadding = 0,
	radius = 5;

var xscale = d3.scale.linear()
		  .domain([0,n-1])
		  .range([-0.5*Math.PI, 0.5*Math.PI]);              

var yscale = d3.scale.linear()
		  .domain([0,n-1])
		  .range([-0.5*Math.PI, 0.5*Math.PI]);   

var color = d3.scale.linear()
  .domain([-10, 0, 10])
  .range(["#ca0020","#f7f7f7","#0571b0"]);

var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);


// var textRevs = svg.append("text")
// 		.text("REVS")
// 		.attr({
// 			"text-anchor":"middle",
// 			x: width/2,
// 			y: width/2,
// 			class: "clubname"
// 		});

// var textCrew = svg.append("text")
// 		.text("CREW")
// 		.attr({
// 			"text-anchor":"middle",
// 			x: width/2,
// 			y: width/2 + 120,
// 			class: "clubname"
// 		});

// var textTop = svg.append("text")
// 		.text("JULY 26, 2016")
// 		.attr({
// 			"text-anchor":"middle",
// 			x: width/2,
// 			y: 30,
// 			class: "date"
// 		});

// var textBottom = svg.append("text")
// 		.text("GILLETTE STADIUM, FOXBORO, MA")
// 		.attr({
// 			"text-anchor":"middle",
// 			x: width/2,
// 			y: width-5,
// 			class: "date"
// 		});



function createDots(data) {
 	var games = svg.selectAll("rect")
			.data(data.data)
			.enter().append("g");

	var dots = games.selectAll("circle")
	  		.data(function(d) { return d3.range(d); })
	  		.enter().append("circle")
			.attr("data-goals", function(d) {return d;})
			.attr("r", radius)
			.attr("cx", function(d, i, j) { return (width/2) + (((i*data.dir*radius*2) + data.radius) * Math.sin(xscale(j))) })
			.attr("cy", function(d, i, j) { return (width-10) + (((i*data.dir*radius*2) + data.radius) * -Math.cos(yscale(j))) })
			.style("fill", data.color);
}

createDots(revs);
createDots(crew);