// from data.js
var tableData;

d3.json("pricingdata.json").then((jsonData) => {
    
    tableData = jsonData;
    
// Build the table when the page loads

    buildTable(tableData);
});

console.log(datas);

var datas;

