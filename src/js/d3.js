import * as d3 from "d3"

export function setD3() {
    const square = d3.selectAll("rect")
    square.style("fill", "orange")
}
