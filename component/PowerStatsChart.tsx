//PowerStatsChart.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';

interface PowerStatsChartProps {
  character: {
    powerstats?: {
      [key: string]: number | undefined;
    };
  };
}

const PowerStatsChart: React.FC<PowerStatsChartProps> = ({ character }) => {
  const { powerstats } = character;
    console.log(powerstats)
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

  const contentInset = { top: 20, bottom: 20 };
  console.log(data)
  return (
    <View>
      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{ fontSize: 10, fill: 'black' }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}%`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            yAccessor={({ item }) => item.value}
            svg={{ fill: 'orange' }}
            contentInset={contentInset}
          >
            <Grid />
          </BarChart>
          <XAxis
            data={data}
            formatLabel={(index) => data[index].key}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View>
      </View>
    </View>
  );
};

export default PowerStatsChart;
