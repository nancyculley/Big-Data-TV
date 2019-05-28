// Build the chart
Highcharts.chart('container_murder', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'How To Get Away With Murder Sentiment by Emotion'
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
            y: 16.2,
            sliced: true,
            selected: true
        }, {
            name: 'Anger',
            y: 10.4
        }, {
            name: 'Trust',
            y: 17.9
        }, {
            name: 'Surprise',
            y: 10.0
        }, {
            name: 'Sadness',
            y: 10.8
        }, {
            name: 'Joy',
            y: 13.9
        },{
            name: 'Fear',
            y: 11.9
        },{
            name: 'Disgust',
            y: 8.8
        }]
    }]
});