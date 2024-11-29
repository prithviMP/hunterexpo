import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../../style/colors';
import { fonts } from '../../../../style/fonts';

const TopBilledPartners = ({ data, onViewAll }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Top 10 Billed Partners</Text>
                <TouchableOpacity onPress={onViewAll}>
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>

            {/* Partner List */}
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={ // Adding a header for the table
                    <View style={styles.headerContainer}>
                        <Text style={styles.partnerHeader}>Partner</Text>
                        <Text style={styles.revenueHeader}>Revenue</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.partnerDetails}>
                            <Text style={styles.partnerName}>{item.name}</Text>
                            <Text style={[styles.partnerName,{fontSize:12}]}>{item.location}</Text>
                        </View>
                        <Text style={styles.revenue}>{item.revenue}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,

        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#9C9393',
        marginVertical:10
    },
    partnerHeader: {
        flex: 1,
        fontSize: 18,
        fontWeight: colors.extraSemiBold,
        color:colors.cardHeadingTextCOlor,
        fontFamily: fonts.montserratRegular,
       
    },
    revenueHeader: {
        fontSize: 18,
        fontWeight: colors.extraSemiBold,
        color:colors.cardHeadingTextCOlor,
        fontFamily: fonts.montserratRegular,
    },
    title: {
        fontSize: 18,
        fontWeight: colors.semiBold,
        color:colors.blackColor,
        fontFamily: fonts.montserratRegular,
    },
    viewAll: {
        fontSize: 14,
        fontWeight: colors.bold,
        color: colors.primary,
        fontFamily: fonts.montserratRegular,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#9C9393',
    },
    partnerDetails: {
        flex: 1,
    },
    partnerName: {
        fontSize: 15,
        fontWeight: colors.extraSemiBold,
        color:colors.cardHeadingTextCOlor,
        fontFamily: fonts.montserratRegular,
    },
    
    revenue: {
        fontSize: 15,
        fontWeight: colors.extraSemiBold,
        color: colors.primary,
        fontFamily: fonts.montserratRegular,
    },
});

export default TopBilledPartners;
