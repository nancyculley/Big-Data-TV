// Build the chart
Highcharts.chart('container_stranger', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Stranger Things Sentiment by Emotion'
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
            y: 21.8,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 7.4
        }, {
            name: 'Trust',
            y: 16.8
        }, {
            name: 'Surprise',
            y: 8.7
        }, {
            name: 'Sadness',
            y: 8.1
        }, {
            name: 'Joy',
            y: 13.0
        },{
            name: 'Fear',
            y: 18.6
        },{
            name: 'Disgust',
            y: 5.5
        }]
    }]
});