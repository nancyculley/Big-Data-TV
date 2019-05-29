// Create the chart
Highcharts.chart("container_summary", {
  chart: {
    type: "column"
  },
  title: {
    text: "Popular TV Show Sentiment Scores"
  },
  subtitle: {
    text:
      'Click the columns to view specific emotions per show'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    title: {
      text: "Total percent market share"
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "{point.y:.2f}"
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: "Total Sentiment Score",
      colorByPoint: true,
      data: [
        { name: "This is Us", y: 0.58, drilldown: "This is Us" },
        { name: "Stranger Things", y: 0.37, drilldown: "Stranger Things" },
        { name: "GOT", y: 0.27, drilldown: "GOT" },
        { name: "Walking Dead", y: 0.14, drilldown: "Walking Dead" },
        { name: "HTGAWM", y: 0.13, drilldown: "HTGAWM" },
        { name: "Greys Anatomy", y: 0.07, drilldown: "Greys Anatomy" }
      ]
    }
  ],
  drilldown: {
    series: [
      {
        name: "Emotions",
        id: "GOT",
        data: [
          ["anger",0.271065264],["anticipation",0.4883055868],["disgust",0.2138698805],["fear",0.3807578388],["joy",0.35930957],["sadness",0.3556327239],["surprise",0.2458380145],["trust",0.6469206414]
        ]
      },
      {
        name: "Emotions",
        id: "HTGAWM",
        data: [
          ["anger",0.2462562396],["anticipation",0.3826955075],["disgust",0.2079866889],["fear",0.2811980033],["joy",0.3277870216],["sadness",0.2545757072],["surprise",0.2362728785],["trust",0.4226289517]
        ]
      },
      {
        name: "Emotions",
        id: "Walking Dead",
        data: [["anger",0.3195020747],["anticipation",0.6556016598],["disgust",0.2157676349],["fear",0.4771784232],["joy",0.4937759336],["sadness",0.3713692946],["surprise",0.3091286307],["trust",0.6369294606]]
      },
      {
        name: "Emotions",
        id: "Greys Anatomy",
        data: [
          ["anger",0.271957672],["anticipation",0.3851851852],["disgust",0.217989418],["fear",0.3375661376],["joy",0.3619047619],["sadness",0.2941798942],["surprise",0.1947089947],["trust",0.4698412698]
        ]
      },
      {
        name: "Emotions",
        id: "Stranger Things",
        data: [["anger",0.1704180064],["anticipation",0.5048231511],["disgust",0.127545552],["fear",0.4308681672],["joy",0.3011789925],["sadness",0.1864951768],["surprise",0.2015005359],["trust",0.3890675241]]
      },
      {
        name: "Emotion",
        id: "This is Us",
        data: [["anger",0.1802443992],["anticipation",0.5682281059],["disgust",0.1384928717],["fear",0.2352342159],["joy",0.5814663951],["sadness",0.2250509165],["surprise",0.2209775967],["trust",0.6028513238]]
      }
    ]
  }
});