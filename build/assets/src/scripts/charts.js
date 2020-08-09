

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawCharts);

var prevButton = document.querySelector("[data-js-chart-btn-prev]");
var nextButton = document.querySelector("[data-js-chart-btn-next]");

var maxWindow = 6;

function drawCharts() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'In flow', 'Active', 'Out flow'],
        ['JAN 2020', 100, 450, 33],
        ['FEB 2020', 130, 540, 33],
        ['MAR 2020', 145, 640, 40],
        ['APR 2020', 550, 1134, 50],
        ['MAY 2020', 320, 1265, 90],
        ['JUN 2020', 190, 1421, 130]
    ]);

    var options = {
        backgroundColor: '#41608F',
        bars: 'vertical',
        width: 600,
        height: 500,
        chartArea: {
            backgroundColor: '#41608F',
            fill: '#ffffff'
        },
        legend: {
            position: 'none',
            alignment: 'start',
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
                fontName: 'Montserrat'
            }
        },
        vAxis: {
            format: 'decimal',
            textStyle: {
                color: '#6BC7BB',
                fontSize: 16,
                fontName: 'Source Code Pro'
            }
        },
        hAxis: {
            viewWindowMode: 'explicit',
            viewWindow: {
                min: 0,
                max: 3
            },
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
                fontName: 'Source Code Pro'
            }
        },
        colors: ['#FDC37F', '#ffffff', '#6BC7BB']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    google.visualization.events.addListener(chart, 'ready',
        function() {
            prevButton.disabled = options.hAxis.viewWindow.min <= 0;
            nextButton.disabled = options.hAxis.viewWindow.max >= maxWindow;
        });
        
    prevButton.onclick = function() {
        options.hAxis.viewWindow.min -= 3;
        options.hAxis.viewWindow.max -= 3;
        //drawCharts();
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
    nextButton.onclick = function() {
        options.hAxis.viewWindow.min += 3;
        options.hAxis.viewWindow.max += 3;
        //drawCharts();
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}
