Highcharts.chart('container_greys1', {

    title: {
      text: "Grey's Anatomy Sankey Diagram"
    },
    series: [{
      keys: ['from', 'to', 'weight'],
      data: [
        ['Greys Anatomy', 'Positive', 56],
        ['Greys Anatomy', 'Negative', 44],
        
        ['Positive', 'Anticipation', 27],
        ['Positive', 'Joy', 26],
        ['Positive', 'Surprise', 14],
        ['Positive', 'Trust', 33],
        
        ['Negative', 'Anger', 24],
        ['Negative', 'Sadness', 26],
        ['Negative', 'Disgust', 19],
        ['Negative', 'Fear', 30],
        
      ],
      type: 'sankey',
      name: 'Sentiment Analysis (%)'
    }]
  
  });