import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { colors } from '../../../style/colors';
import { fonts } from '../../../style/fonts';

const DashboardSalesInfoCard = () => {

    const cardDetails = [
        {
            title: "Total Sales",
            value: "₹ 27,50,000",

        },
        {
            title: "Current month sales",
            value: "₹ 27,50,000",
            percentage: "+10%",
            color: "green",
        },
        {
            title: "Active Companies",
            value: "4483",

        },
        {
            title: "New Contacts",
            value: "23",
            dateRange: "1 Nov - 30 Nov",
            percentage: "+10%",
            color: "green",
        },


        {
            title: "Total Call Logs",
            value: "500",
            percentage: "+10%",
            color: "green",
        },
        {
            title: "Pending Calls",
            value: "80",

        },
        {
            title: "New Leads",
            value: "76",
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
                    <View style={{ flexDirection: 'row', gap:0}}>
                        <Text
                            style={[
                                styles.cardPercentage,
                                { color: card.color === "green" ? "green" : "red" },
                            ]}
                        >
                            {card.percentage}

                        </Text>
                        {card.percentage && (
                            <Text style={{ color: colors.cardHeadingTextCOlor, paddingLeft: 5 }}>
                                since last month
                            </Text>
                        )}
                    </View>
                </View>
            ))}


        </View>
    )
}

export default DashboardSalesInfoCard

const styles = StyleSheet.create({
    detailsOnSmallCardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
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