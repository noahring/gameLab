d3.select("#names")
    .on("click",function()
{   
 d3.select("#suspectBox")
    .classed("hidden", false)})

d3.select("#lebron")
    .on("click", function()
{
    d3.select("#banner") 
     .text("Lebron James")
})

d3.select("#kawhi")
    .on("click", function()
{
    d3.select("#banner") 
     .text("Kawhi Leonard")
})
d3.select("#steph")
    .on("click", function()
{
    d3.select("#banner") 
     .text("Stephen Curry")
})
d3.select("#kd")
    .on("click", function()
{
    d3.select("#banner") 
     .text("Kevin Durant")
})