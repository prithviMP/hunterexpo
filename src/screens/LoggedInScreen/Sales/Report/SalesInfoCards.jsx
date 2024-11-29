import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { colors } from '../../../../style/colors';
import { fonts } from '../../../../style/fonts';


const SalesInfoCards = () => {

    const cardDetails = [
        {
            title: "Sales",
            value: "₹ 27,50,000",
            dateRange: "1 Nov - 30 Nov",
            percentage: "+10%",
            color: "green",
        },
        {
            title: "Pipeline deals",
            value: "68",
            dateRange: "1 Nov - 30 Nov",
            percentage: "-8%",
            color: "red",
        },
        {
            title: "Pipeline won",
            value: "₹ 11,82,598",
            dateRange: "1 Nov - 30 Nov",
            percentage: "+5%",
            color: "green",
        },
        {
            title: "Average revenue",
            value: "₹ 13,76,494",
            dateRange: "1 Nov - 30 Nov",
            percentage: "+10%",
            color: "green",
        },
    ];
    return (

        <View style={styles.detailsOnSmallCardContainer}>
            {cardDetails.map((card, index) => (
                <View key={index} style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.cardTitle}>{card.title}</Text>
                        <Text style={styles.cardDate}>{card.dateRange}</Text>

                    </View>
                    <Text style={styles.cardValue}>{card.value}</Text>
                    <Text
                        style={[
                            styles.cardPercentage,
                            { color: card.color === "green" ? "green" : "red" },
                        ]}
                    >
                        {card.percentage} <Text style={{ color: colors.cardHeadingTextCOlor, paddingLeft: 5 }}>since last month</Text>
                    </Text>
                </View>
            ))}

        </View>
    )
}

export default SalesInfoCards

const styles = StyleSheet.create({
    detailsOnSmallCardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 10,

    },
    card: {
        width: "24%",
        backgroundColor: colors.whiteColor,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 2, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    cardTitle: {
        fontSize: 14,
        color: colors.cardHeadingTextCOlor,
        fontWeight: colors.semiBold,
        fontFamily: fonts.montserratRegular
    },
    cardValue: {
        fontSize: 26,
        color: colors.blackColor,
        fontWeight: colors.bold,
        marginVertical: 5,
        fontFamily: fonts.manropeRegular
    },
    cardDate: {
        fontSize: 12,
        color: colors.cardHeadingTextCOlor,
        fontWeight: colors.extraSemiBold,
        fontFamily: fonts.manropeRegular
    },
    cardPercentage: {
        fontSize: 14,
        fontWeight: colors.semiBold,
        fontFamily: fonts.manropeRegular,
        color: colors.cardHeadingTextCOlor
    },
})