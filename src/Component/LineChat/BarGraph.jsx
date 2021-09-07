import React from 'react'
import Chart from "react-google-charts";

export default function Line() {
  return (
    <div style={{ margin: 50, }}>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Month', 'Resolved', 'UnAssigned', 'Open Issues'],
          ['17 Nov', 1000, 400, 200],
          ['18 Nov', 1170, 460, 250],
          ['19 Nov', 660, 1120, 300],
          ['20 Nov', 1030, 540, 1350],
          ['21 Nov', 1500, 1140, 850],
          ['22 Nov', 740, 540, 350],
          ['23 Nov', 440, 540, 950],
        ]}
        options={{
          chart: {
            title: 'Company Performance',
            subtitle: 'Resolved, UnAssigned, and Open Issues: 17 Nov - 23Nov',

          },
          colors: ['#0c6924', 'red', 'orange'],
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  )
}





