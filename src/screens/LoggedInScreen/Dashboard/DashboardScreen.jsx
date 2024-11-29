import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { Icons } from '../../../Icons/Icons';
import { globalStyle } from '../../../style/globalStyles';
import { colors } from '../../../style/colors';
import DashboardSalesInfoCard from './DashboardSalesInfoCard';
import SalesOverviewChart from './SalesOverviewChart';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assuming your Icons are correctly imported
// import Icons from 'path_to_icons';

export default function DashboardScreen() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('Month');

    const months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December',
    ];

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        setDropdownVisible(false);
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.dropdownWrapper}>
                    {/* Dropdown Trigger */}
                    <TouchableOpacity style={globalStyle.dropdown} onPress={() => setDropdownVisible(true)}>
                        <Image source={Icons.date} style={styles.icon} />
                        <Text style={globalStyle.dropdownText}>{selectedMonth}</Text>
                        <Image source={Icons.arrow_down} style={styles.arrowIcon} />
                    </TouchableOpacity>

                    {/* Dropdown Modal */}
                    <Modal
                        visible={isDropdownVisible}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={() => setDropdownVisible(false)}
                    >
                        <TouchableOpacity
                            style={globalStyle.modalOverlay}
                            onPress={() => setDropdownVisible(false)} // Close when clicking outside
                        >
                            <View style={globalStyle.dropdownList}>
                                <FlatList
                                    data={months}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={globalStyle.dropdownItem}
                                            onPress={() => handleMonthSelect(item)}
                                        >
                                            <Text style={styles.itemText}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
                <View style={{ marginTop: 20 }}>
                    <DashboardSalesInfoCard />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '70%', marginRight: 10 }}>
                        <SalesOverviewChart />
                    </View>
                    <View style={{ width: '30%' }}>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Allows the content to expand
        padding: 10,
        backgroundColor: colors.mainBackgroundColor
    },
    dropdownWrapper: {
        width: 150,
        height: 40
    },

    icon: {
        width: 20,
        height: 20,
    },

    arrowIcon: {
        width: 20,
        height: 10,
    },

    itemText: {
        fontSize: 16,
        color: '#333',
    },
});
