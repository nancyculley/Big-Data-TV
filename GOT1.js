// Build chart
Highcharts.chart('container_got1', {

    title: {
      text: 'Game of Thrones Sankey Diagram'
    },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['Game Of Thrones', 'Positive', 63],
        ['Game Of Thrones', 'Negative', 37],
        
        ['Positive', 'Anticipation', 28],
        ['Positive', 'Joy', 21],
        ['Positive', 'Surprise', 14],
        ['Positive', 'Trust', 37],
        
        ['Negative', 'Anger', 22],
        ['Negative', 'Sadness', 29],
        ['Negative', 'Disgust', 18],
        ['Negative', 'Fear', 31],
        
      ],
      type: 'sankey',
      name: 'Sentiment Analysis (%)'
    }]
  
  });