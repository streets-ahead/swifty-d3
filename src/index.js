import d3Scale from 'd3-scale';
import d3Shape from 'd3-shape';
import d3Array from 'd3-array';

export let getPath = (data, dim) => { 
  const [w, h] = dim; 
  const x = d3Scale.scaleLinear()
    .domain([0, data.length])
    .range([0, w]);
  
  const y = d3Scale.scaleLinear()
    .domain([0, d3Array.max(data)])
    .range([0, h]);
    
  const line = d3Shape.line()
    .x((d, i) =>  x(i))
    .y((d, i) => y(d))
    .curve(d3Shape.curveBasis);
  
  return line(data);
}
