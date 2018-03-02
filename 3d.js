function bar(number,barName,barColor,maxNumber){
    var chart;
    var chartData = [
        {
            "country": "USA",
            "visits": number,
            "color": "#FF0F00"
        }
    ];

        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = "country";
        // the following two lines makes chart 3D
        chart.depth3D =35;
        chart.angle = 50;
        chart.startDuration = 1;  //展出动画
        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.labelRotation = 90;
        categoryAxis.dashLength = 5;
        categoryAxis.gridPosition = "start";
        categoryAxis.color='rgba(0,0,0,0)';
        categoryAxis.axisAlpha=0;
        categoryAxis.gridAlpha=0;
        // value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.dashLength = 5;
        valueAxis.axisAlpha=0;
        valueAxis.gridAlpha=0;
        valueAxis.color='rgba(0,0,0,0)';
        valueAxis.maximum = maxNumber;
        chart.addValueAxis(valueAxis);

        // GRAPH
        var graph = new AmCharts.AmGraph();
        graph.valueField = "visits";
        graph.balloonText="";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.lineColor = barColor;
        graph.fillAlphas = 0.5;  //透明度
        graph.labelText="[[value]]";
        graph.labelPosition="bottom";
        graph.fontSize="14";
        graph.color="#fff";
        chart.addGraph(graph);
        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        chart.addChartCursor(chartCursor);

        chart.creditsPosition = "bottom-left";
        chart.write(barName);
}
           