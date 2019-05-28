// Build the chart
Highcharts.chart('container_us1', {

    title: {
      text: 'This is Us Sankey Diagram'
    },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['This is Us', 'Positive', 72],
        ['This is Us', 'Negative', 28],
        
        ['Positive', 'Anticipation', 29],
        ['Positive', 'Joy', 29],
        ['Positive', 'Surprise', 11],
        ['Positive', 'Trust', 31],
        
        ['Negative', 'Anger', 23],
        ['Negative', 'Sadness', 29],
        ['Negative', 'Disgust', 18],
        ['Negative', 'Fear', 30],
        
      ],
      type: 'sankey',
      name: 'Sentiment Analysis (%)'
    }]
  
  });