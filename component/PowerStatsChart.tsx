import React from 'react'
import { View, Text  } from 'react-native'
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { PowerStats } from './characterdetails'
interface PowerStatsChartProps {
    character: PowerStats;
}
class PowerStatsChart extends React.PureComponent {

    render() {
        const { character } = this.props;
        const powerStats = character.powerstats as PowerStats;
        const data = [
        {
        value: parseInt(powerStats.combat ?? '0'),
        label: 'Combat Power',
        },
        {
            value: parseInt(powerStats.durability ?? '0'),
            label: 'Durability',
        },
        {
            value: parseInt(powerStats.intelligence ?? '0'),
            label: 'Intelligence',
        },
        {
            value: parseInt(powerStats.power ?? '0'),
            label: 'Power',
        },
        {
            value: parseInt(powerStats.speed ?? '0'),
            label: 'Speed',
        },
        {
            value: parseInt(powerStats.strength ?? '0'),
            label: 'Strength',
        },
];




        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 10 }}>
                <YAxis
                    style={{ flex: 1, marginRight: 6     }}
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => (
                        <Text style={{ color: 'white' }}>{data[index].label}</Text>
                    )}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 3 }}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacingInner={0.4}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL} />
                </BarChart>
            </View>
        );
    }
}

export default PowerStatsChart