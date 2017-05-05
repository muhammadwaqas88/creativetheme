//areachart function
anychart.onDocumentReady(function() {
    var data = anychart.data.set([
      ["January", 10000],
      ["February", 12000],
      ["March", 18000],
      ["April", 11000],
      ["May", 9000]
    ]);
    // create a chart
    chart = anychart.area();
    // create an area series and set the data
    var series = chart.area(data);
    series.stroke({color: '#f36a5b', dash: '5', thickness: 3}).fill('#0a2335');
    // set the chart title
    chart.title(false);
    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title(false);
    var yAxis = chart.yAxis();
    yAxis.title(false);
    // set the container id
    chart.container("areachart");
    // initiate drawing the chart
    chart.draw();
});

//piecharts function
anychart.onDocumentReady(function() {
    var data = [
      {x: "A", value: 637166,fill: "#0a2335"},
      {x: "B", value: 721630,fill: "#f36a5b"},
      {x: "C", value: 148662,fill: "#0a2335"},
      {x: "D", value: 78662,fill: "#f36a5b"},
      {x: "E", value: 90000,fill: "#0a2335"}
    ];
    // create a chart and set the data
    chart = anychart.pie(data);
    // set the chart title
    chart.title(false);
    // set the container id
    chart.container("piecharts");
    // initiate drawing the chart
    chart.draw();
});

//columnchart function
anychart.onDocumentReady(function() {
    var data = anychart.data.set([
      ["John", 10000, 12500, "#f36a5b", "#0a2335", null, {enabled: true}],
      ["Jake", 12000, 15000, "#f36a5b", "#0a2335", null, {enabled: true}],
      ["Peter", 13000, 16500, "#f36a5b", "#0a2335", null, {enabled: true}],
      ["James", 10000, 13000, "#f36a5b", "#0a2335", null, {enabled: true}],
      ["Mary", 9000, 11000, "#f36a5b", "#0a2335", null, {enabled: true}]
    ]);
    // map the data
    var seriesData_1 = data.mapAs({x: [0], value: [1], fill: [3], stroke: [5], label: [6]});
    var seriesData_2 = data.mapAs({x: [0], value: [2], fill: [4], stroke: [5], label: [6]});
    // create a chart
    chart = anychart.column();
    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);
    series1.name(false);
    // create the second series, set the data and name
    var series2 = chart.column(seriesData_2);
    series2.name(false);
    // set the chart title
    chart.title(false);
    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title(false);
    var yAxis = chart.yAxis();
    yAxis.title(false);
    // set the container id
    chart.container("columnchart");
    // initiate drawing the chart
    chart.draw();
});

//doughnut_chart1 function
anychart.onDocumentReady(function() {
    // create data
    var data = [
    {x: "A", value: 110,fill: "#204562"},
    {x: "B", value: 90,fill: "#f36a5b"},
    {x: "C", value: 120,fill: "#5c91b6"},
    {x: "D", value: 125,fill: "#a5524e"},
    {x: "E", value: 95,fill: "#0e2e45"}
    ];
    // create a pie chart and set the data
    chart = anychart.pie(data);
    // set the inner radius
    // (to turn the pie chart into a doughnut chart)
    chart.innerRadius("65%");
    // set the position of labels
    var labels = chart.labels();
    labels.position("inside");
    // configure the labels: font, overlap, offset
    labels.fontColor("#fff");
    chart.overlapMode(true);
    chart.insideLabelsOffset("-420%");
    // disable the legend
    chart.legend(false);
    // set the chart title
    chart.title(false);
    // set the container id
    chart.container("doughnut_chart1");
    // initiate drawing the chart
    chart.draw();
});

//linechart1 function
anychart.onDocumentReady(function() {
    // create data, enable and configure markers
    var data = [
    {x: "January", value:10000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}},
    {x: "February", value:12000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}},
    {x: "March", value:13000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}},
    {x: "April", value:10000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}},
    {x: "May", value:9000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}},
    {x: "June", value:15000, marker:{enabled:true, type:"circle", fill:"#204562", size:5}}
    ];
    // set the chart type
    chart = anychart.line();
    // create a series and set the data
    var series = chart.line(data);
    // set the chart title
    chart.title(false);
    series.stroke('3 #f36a5b');
    series.stroke({color: '#f36a5b', dash: '5', thickness: 3}).fill('#f36a5b 0.4');
    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title(false);
    var yAxis = chart.yAxis();
    yAxis.title(false);
    // set the container id
    chart.container("linechart1");
    // initiate drawing the chart
    chart.draw();
});

//barcharts function
anychart.onDocumentReady(function() {
    // create a data set
    var data = anychart.data.set([
    {x: "IOS", value: 10000, fill: "#0a2335", stroke: null, label: {enabled: true}},
    {x: "ANDROID", value: 12000, fill: "#f36a5b", stroke: null, label: {enabled: true}},
    {x: "WINDOWS", value: 13000, fill: "#0a2335", stroke: null, label: {enabled: true}},
    {x: "NOKIA", value: 10000, fill: "#f36a5b", stroke: null, label: {enabled: true}},
    {x: "MAC", value: 9000, fill: "#0a2335", stroke: null, label: {enabled: true}}
    ]);
    // create a chart
    chart = anychart.bar();
    // create a bar series and set the data
    var series = chart.bar(data);
    // set the chart title
    chart.title(false);
    // set the titles of the axes
    var xAxis = chart.xAxis();
    xAxis.title(false);
    var yAxis = chart.yAxis();
    yAxis.title(false);
    // set the container id
    chart.container("barcharts");
    // initiate drawing the chart
    chart.draw();
});



