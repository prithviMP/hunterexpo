import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colors } from '../../../style/colors';
import { fonts } from '../../../style/fonts';

const SalesOverviewChart = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales overview</Text>
      <View>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                data: [500, 2122, 2500, 2200, 2700, 2000, 1900, 2300, 2500, 2400, 2600, 3000],
                color: () => "#F8D854", // Line color
                strokeWidth: 2,
              }
            ]
          }}
          width={Dimensions.get("window").width - 630} // from react-native
          height={350}
          fromZero
          yAxisInterval={12} // optional, defaults to 1
          segments={6}
          chartConfig={{
            backgroundColor: colors.whiteColor,
            backgroundGradientFrom: colors.whiteColor,
            backgroundGradientTo: colors.whiteColor,
            decimalPlaces: 0, // Show whole numbers
            color: () => "#000000", // Grid line color
            labelColor: () => "#000000", // Label color
            decimalPlaces: 2, // optional, defaults to 2dp
            useShadowColorFromDataset: false,

            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2",
              strokeWidth: "6",
              stroke: "#DD5835"
            },
            propsForBackgroundLines: {
              strokeDasharray: "4", // Dashed grid lines
              strokeWidth: 0.5,
              stroke: "#dcdcdc",
            },
          }}
          bezier

          style={{
            marginVertical: 20,
            color: colors.blackColor,
            fontFamily: fonts.manropeRegular,
            backgroundColor: colors.whiteColor
          }}

        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.montserratRegular,
    fontWeight: colors.bold,
    marginBottom: 8,
  },

});

export default SalesOverviewChart;
