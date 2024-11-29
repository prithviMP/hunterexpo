import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";
import { colors } from "../../../../style/colors";
import { Icons } from "../../../../Icons/Icons";
import { fonts } from "../../../../style/fonts";


const MonthlySalesGraph = () => {

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <Text style={styles.title}>Monthly Sales</Text>
                <View style={{ flexDirection: 'row', gap: '0' }}>
                    <View style={{ width: 130, height: 40, }}>
                        <View style={styles.dropdown}>
                            <Image source={Icons.date} style={{ width: 15, height: 15 }}></Image>
                            <Text style={styles.dropdownText}>Year</Text>
                            <Image source={Icons.arrow_down} style={{ width: 15, height: 8 }}></Image>
                        </View>

                    </View>

                    <View style={{ width: 140, height: 40, }}>
                        <View style={styles.dropdown}>
                            <Text style={[styles.dropdownText, { color: colors.primary }]}>Download</Text>
                            <Image source={Icons.download_icon} style={{ width: 15, height: 15 }}></Image>
                        </View>
                    </View>
                </View>


            </View>

            <StackedBarChart
                data={{
                    labels: [
                        "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024",
                        "Jun 2024", "Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024",
                        "Nov 2024", "Dec 2024",
                    ],
                    data: [
                        [18, 58], [20, 50], [25, 40], [28, 35], [20, 30],
                        [22, 40], [18, 60], [15, 45], [20, 30], [10, 25],
                        [5, 15], [8, 20],
                    ],
                    barColors: ["#0057ff", "#cce4ff"], // Achieved (dark blue), Planned (light blue)
                }}
                width={Dimensions.get("window").width - 330} // Dynamic width
                height={250}
                yAxisSuffix="L"
                verticalLabelRotation={0}
                chartConfig={{
                    backgroundColor: colors.whiteColor,
                    backgroundGradientFrom: colors.whiteColor,
                    backgroundGradientTo: colors.whiteColor,
                    decimalPlaces: 0, // Avoid decimals
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: () => "#666666",
                    barPercentage: 1,
                    propsForVerticalLabels: {
                        rotation: 0,
                        fontSize: 12,
                        fontFamily: fonts.manropeRegular,
                        fontWeight: colors.semiBold,
                        color: colors.cardHeadingTextCOlor,
                    },
                    propsForHorizontalLabels: {
                        fontSize: 12,
                        fontFamily: fonts.manropeRegular,
                        fontWeight: colors.semiBold,
                        color: colors.cardHeadingTextCOlor,
                    },
                    propsForBackgroundLines: {
                        strokeDasharray: "4", // Dashed grid lines
                        strokeWidth: 0.5,
                        stroke: "#dcdcdc",
                    },
                    formatYLabel: (value) => `${Math.round(value)}`, // Round all labels to integers
                }}
                yAxisInterval={10} // Explicit interval for Y-axis (0, 10, 20, ..., 60)
                fromZero={true} // Start Y-axis at 0
                showValuesOnTopOfBars={false} // Ensure no values are displayed on bars
                hideLegend={true} // Hide the legend
            />



            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <View style={{ width: 15, height: 15, backgroundColor: colors.salesGraphColor }}></View>
                        <Text style={[styles.dropdownText, { color: colors.blackColor }]}>Planned sales</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <View style={{ width: 15, height: 15, backgroundColor: colors.primary }}></View>
                        <Text style={[styles.dropdownText, { color: colors.blackColor }]}>Achieved sales</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.note}>Note: The amounts are in Lakhs</Text>
        </View>
    );
};


export default MonthlySalesGraph;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.whiteColor,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: colors.semiBold,
        marginBottom: 20,
        color: colors.cardHeadingTextCOlor,
        fontFamily: fonts.montserratRegular
    },

    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: -5
    },
    dropdown: {
        flex: 1,

        marginHorizontal: 10,
        justifyContent: "center",
        backgroundColor: '#F5F7FA',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5
    },
    dropdownText: {
        fontSize: 16,
        color: colors.cardHeadingTextCOlor,
        fontFamily: fonts.montserratRegular
    },

    note: {
        marginTop: 10,
        fontSize: 13,
        color: colors.cardHeadingTextCOlor,
        textAlign: "center",
        fontWeight: colors.extraSemiBold,
        fontFamily: fonts.manropeRegular
    },
});
