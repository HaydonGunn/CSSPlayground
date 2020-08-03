

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawCharts);

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
        chartArea: {
            backgroundColor: '#41608F',
            fill: '#ffffff'
        },
        legend: {
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
            textStyle: {
                viewWindow: {
                    min: 0,
                    max: 3
                },
                color: '#ffffff',
                fontSize: 16,
                fontName: 'Source Code Pro'
            }
        },
        height: 800,
        colors: ['#FDC37F', '#ffffff', '#6BC7BB']
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));

      var btns = document.getElementById('btn-group');

      btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
          options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      }
}