import React from 'react';
import dailyProductPerceivedQualityData from '../../constants/dailyProductPerceivedQuality.json';
import TimeSeriesSparkLineScatterPlot from '../TimeSeriesSparkLineScatterPlot';

export default () => (
  <TimeSeriesSparkLineScatterPlot
    data={dailyProductPerceivedQualityData}
    height={40}
    margin={20}
    selectX={datum => new Date(datum.day)
      .setHours(0,0,0,0)
    }
    selectY={datum => parseFloat(datum.productPerceivedQuality)}
    width={200}
  />
);
