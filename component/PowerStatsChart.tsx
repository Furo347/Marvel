//PowerStatsChart.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale'
interface PowerStatsChartProps {
  character: {
    powerstats?: {
      [key: string]: number | undefined;
    };
  };
}

const PowerStatsChart: React.FC<PowerStatsChartProps> = ({ character }) => {
  const { powerstats } = character;

  if (!powerstats || Object.keys(powerstats).length === 0) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>No PowerStats</Text>
      </View>
    );
  }

  const filteredStats = Object.entries(powerstats).filter(([, value]) => value !== undefined);

  if (filteredStats.length === 0) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>No valid PowerStats</Text>
      </View>
    );
  }

  const data = filteredStats.map(([key, value]) => ({
    key,
    value: value ?? 0,
  }));
  console.log(data)
  return (
    <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
    <YAxis
        data={data}
        yAccessor={({ index }) => index}
        scale={scale.scaleBand}
        contentInset={{ top: 10, bottom: 10 }}
        formatLabel={(_, index) => data[ index ].key}
    />
    <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={data}
        horizontal={true}
        yAccessor={({ item }) => {
          console.log(item.value); // Log the value here
          return item.value; // Return the value for proper yAccessor
        }}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 10, bottom: 10 }}
        gridMin={0}
    >
        <Grid direction={Grid.Direction.VERTICAL}/>
    </BarChart>
</View>
  );
};

export default PowerStatsChart;

