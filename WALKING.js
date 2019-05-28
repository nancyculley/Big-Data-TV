// Build the chart
Highcharts.chart('container_walking', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Walking Dead Sentiment by Emotion'
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
            y: 18.8,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 9.2
        }, {
            name: 'Trust',
            y: 18.3
        }, {
            name: 'Surprise',
            y: 8.9
        }, {
            name: 'Sadness',
            y: 10.7
        }, {
            name: 'Joy',
            y: 14.2
        },{
            name: 'Fear',
            y: 13.7
        },{
            name: 'Disgust',
            y: 6.2
        }]
    }]
});