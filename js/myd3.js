var svg = d3.selectAll("svg");
var c = svg.append('circle');
var l1 = svg.append('line');
var l2 = svg.append('line');
var l3 = svg.append('line');
var l4 = svg.append('line');
var p = svg.append('polygon');
var l5 = svg.append('line');
var l6 = svg.append('line');
var cx = 150;
var cy = 150;
c.attr('cx',cx).attr('cy',cy).attr('r',50).attr('stroke','black').attr('stroke-width',3).attr('fill','#ffffff');
l1.attr('x1',cx-30).attr('y1',cy-20).attr('x2',cx-20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
l2.attr('x1',cx-10).attr('y1',cy-20).attr('x2',cx-20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
l3.attr('x1',cx+30).attr('y1',cy-20).attr('x2',cx+20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
l4.attr('x1',cx+10).attr('y1',cy-20).attr('x2',cx+20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
p.attr('points','150,140 140,150 160,150').attr('fill','lime').attr('stroke-width',1).attr('stroke','purple');
l5.attr('x1',cx-10).attr('y1',cy+20).attr('x2',cx).attr('y2',cy+30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
l6.attr('x1',cx+10).attr('y1',cy+20).attr('x2',cx).attr('y2',cy+30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');



function smile(){
    $('line').remove();
    $('polygon').remove();
svg.append('line').attr('x1',cx-30).attr('y1',cy-20).attr('x2',cx-20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx-10).attr('y1',cy-20).attr('x2',cx-20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx+30).attr('y1',cy-20).attr('x2',cx+20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx+10).attr('y1',cy-20).attr('x2',cx+20).attr('y2',cy-30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx-10).attr('y1',cy+20).attr('x2',cx).attr('y2',cy+30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx+10).attr('y1',cy+20).attr('x2',cx).attr('y2',cy+30).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('polygon').attr('points','150,140 140,150 160,150').attr('fill','lime').attr('stroke-width',1).attr('stroke','purple');
}

function angry(){
    $('line').remove();
    $('polygon').remove();
svg.append('line').attr('x1',cx-30).attr('y1',cy-30).attr('x2',cx-10).attr('y2',cy-20).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx+30).attr('y1',cy-30).attr('x2',cx+10).attr('y2',cy-20).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx-10).attr('y1',cy+30).attr('x2',cx).attr('y2',cy+20).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('line').attr('x1',cx+10).attr('y1',cy+30).attr('x2',cx).attr('y2',cy+20).attr('stroke-width',2).attr('stroke','rgb(0,0,0)');
svg.append('polygon').attr('points','150,140 140,150 160,150').attr('fill','red').attr('stroke-width',1).attr('stroke','purple');
}