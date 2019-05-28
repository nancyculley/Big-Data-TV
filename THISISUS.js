// Build the chart
Highcharts.chart('container_us', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'This Is Us Sentiment by Emotion'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Emotions',
        colorByPoint: true,
        data: [{
            name: 'Anticipation',
            y: 20.6,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 6.5
        }, {
            name: 'Trust',
            y: 21.9
        }, {
            name: 'Surprise',
            y: 8.0
        }, {
            name: 'Sadness',
            y: 8.2
        }, {
            name: 'Joy',
            y: 21.1
        },{
            name: 'Fear',
            y: 8.5
        },{
            name: 'Disgust',
            y: 5.0
        }]
    }]
});