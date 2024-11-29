import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../../style/colors';
import { fonts } from '../../../../style/fonts';

const Tabs = ({ activeTab: parentActiveTab, onTabChange }) => {
    const tabs = ['Report', 'Orders', 'Leads', 'Sale Reversal', 'Stock Requests'];
    const [activeTab, setActiveTab] = useState(parentActiveTab || 'Report'); // Default active tab

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        onTabChange(tab); // Notify parent component about the active tab
    };

    return (
        <View>
            <View style={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.tab,
                            activeTab === tab && styles.activeTab, // Highlight active tab
                        ]}
                        onPress={() => handleTabPress(tab)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    tabsContainer: {
        backgroundColor: colors.whiteColor,
        width: 560,
        height: 42,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    tab: {
        height: 32,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: colors.tabsBagroundColor,
    },
    tabText: {
        color: colors.blackColor,
        fontSize: 16,
        fontFamily: fonts.manropeRegular,
    },
    activeTabText: {
        color: colors.primary,
    },
});
