svg = d3.selectAll("svg")

g = svg.append("g").attr("transform","translate(0,100)")

g.append("text").attr("x","230").attr("y","320").text("Q1").attr("class","label")
g.append("text").attr("x","330").attr("y","320").text("Q2").attr("class","label")
g.append("text").attr("x","430").attr("y","320").text("Q3").attr("class","label")
g.append("text").attr("x","530").attr("y","320").text("Q4").attr("class","label")

g.append("line").attr("x1","180").attr("x2",600).attr("y1",301).attr("y2",301).attr("stroke","black")

g.append("rect").attr("x",650).attr("y",100).attr("height",20).attr("width",20).attr("fill","steelblue")
g.append("rect").attr("x",650).attr("y",140).attr("height",20).attr("width",20).attr("fill","orange")
g.append("text").attr("x","675").attr("y","115").text("2015")
g.append("text").attr("x","675").attr("y","155").text("2016")


g.append("rect").attr("class","bar2").attr("x",240).attr("y",110).attr("height",190).attr("width",40).attr("fill","steelblue")
g.append("rect").attr("class","bar1").attr("x",200).attr("y",145).attr("height",155).attr("width",40).attr("fill","orange")

g.append("rect").attr("class","bar3").attr("x",300).attr("y",110).attr("height",190).attr("width",40).attr("fill","orange")
g.append("rect").attr("class","bar4").attr("x",340).attr("y",220).attr("height",80).attr("width",40).attr("fill","steelblue")

g.append("rect").attr("class","bar6").attr("x",440).attr("y",40).attr("height",260).attr("width",40).attr("fill","steelblue")
g.append("rect").attr("class","bar5").attr("x",400).attr("y",180).attr("height",120).attr("width",40).attr("fill","orange")

g.append("rect").attr("class","bar7").attr("x",500).attr("y",70).attr("height",230).attr("width",40).attr("fill","orange")
g.append("rect").attr("class","bar8").attr("x",540).attr("y",110).attr("height",190).attr("width",40).attr("fill","steelblue")

g.append("text").attr("x","240").attr("y","0").text("Quarterly Widget Sales").style("font-size","30px").attr("class","title")

var scale = d3.scaleLinear().domain([180, -80]).range([123.5, 523.5])
var axis = d3.axisLeft(scale).ticks(10);
svg.append("g").attr("transform","translate(180,0)").call(axis)

function move () {
d3.selectAll(".bar1").transition().attr("x","240").transition().duration(500).ease(d3.easeCubic).attr("height","0").attr("y","299")

d3.selectAll(".bar2").transition().transition().duration(500).ease(d3.easeCubic).attr("height","40").attr("y","260")

d3.selectAll(".bar3").transition().attr("x","340").transition().duration(200).ease(d3.easeCubicIn).attr("height","120").attr("y","180").transition().duration(300).ease(d3.easeCubicOut).attr("y","302") 

d3.selectAll(".bar4").transition().attr("x","340").transition().duration(200).ease(d3.easeCubicIn).attr("y","300").attr("height","0")

d3.selectAll(".bar5").transition().attr("x","440").transition().duration(500).ease(d3.easeCubic).attr("height","0").attr("y","299")

d3.selectAll(".bar6").transition().transition().duration(500).ease(d3.easeCubic).attr("height","110").attr("y","190")

d3.selectAll(".bar7").transition().attr("x","540").transition().duration(200).ease(d3.easeCubicIn).attr("height","40").attr("y","260").transition().duration(300).ease(d3.easeCubicOut).attr("y","302") 

d3.selectAll(".bar8").transition().attr("x","540").transition().duration(200).ease(d3.easeCubicIn).attr("y","300").attr("height","0")

g.selectAll(".label").transition().style("fill","white")
g.selectAll(".title").transition().duration(250).style("fill","white").transition().duration(1).text("Year-to-Year Change in Quarterly Widget Sales").attr("x","100").transition().duration(250).style("fill","black")
}


function move2 () {


d3.selectAll(".bar1").transition().duration(400).attr("y","145").attr("height","155").transition().attr("x",200)

d3.selectAll(".bar2").transition().duration(400).attr("height","190").attr("y",110)

d3.selectAll(".bar3").transition().duration(300).ease(d3.easeCubicIn).attr("y","180").attr("height","120").transition().duration(200).ease(d3.easeCubicOut).attr("height","200").attr("y",100).transition().attr("x",300)

d3.selectAll(".bar4").transition().duration(300).style("").transition().ease(d3.easeCubicOut).duration(200).attr("height","80").attr("y",220)

d3.selectAll(".bar5").transition().duration(400).attr("y","180").attr("height","120").transition().attr("x",400)

d3.selectAll(".bar6").transition().duration(400).attr("height","260").attr("y",40)

d3.selectAll(".bar7").transition().duration(300).ease(d3.easeCubicIn).attr("y","180").attr("height","120").transition().duration(200).ease(d3.easeCubicOut).attr("height","230").attr("y",70).transition().attr("x",500)

d3.selectAll(".bar8").transition().duration(300).style("").transition().ease(d3.easeCubicOut).duration(200).attr("height","190").attr("y",110)


g.selectAll(".label").transition().duration(500).style("fill","white").transition().style("fill","black")
g.selectAll(".title").transition().duration(250).style("fill","white").transition().duration(1).text("Quarterly Widget Sales").attr("x","240").transition().duration(250).style("fill","black")


}


svg.on("mousedown",move)

d3.selectAll("html").on("mouseup", move2)