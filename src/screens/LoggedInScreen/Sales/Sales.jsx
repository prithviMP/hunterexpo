import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Modal,
    Image,
    ScrollView
} from "react-native";
import Tabs from './Report/Tabs';
import SalesInfoCards from './Report/SalesInfoCards';
import MonthlySalesGraph from './Report/MonthlySalesGraph';
import TopBilledPartners from './Report/TopBilledPartners';
import TopBilledProducts from './Report/TopBilledProducts';

import { Icons } from '../../../Icons/Icons';
import { colors } from '../../../style/colors';
import { fonts } from '../../../style/fonts';
import { globalStyle } from '../../../style/globalStyles';

export default function Sales() {

    const [activeTab, setActiveTab] = useState("Report"); // State to track active tab in the parent

    const handleTabChange = (selectedTab) => {
        setActiveTab(selectedTab); // Update the active tab in the parent
        console.log(`Active Tab: ${selectedTab}`); // Log for debugging
    };

    const partnerData = [
        {
            name: 'Nt N-Tech Solutions Pvt Ltd (sales)',
            location: 'Bengaluru, Karnataka',
            revenue: '10',
        },

        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
        {
            name: 'ABC Solutions Pvt Ltd (sales)',
            location: 'Mumbai, Maharashtra',
            revenue: '₹45,000.00',
        },
    ];

    const productData = [
        {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        },
        {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        }, {
            name: 'Hunter Faceplate (HDMI x1) L-Type Connector Metal SS-9292',
            quentity: '10',
        },

    ];

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
    const handleViewAll = () => {
        console.log('View all partners clicked');
    };
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* Tabs */}
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                {activeTab === "Report" && (
                    <>
                        {/* Filter Componant */}
                        <View View style={styles.filterContainer}>
                            <View style={{ width: 150 }}>
                                <TouchableOpacity style={globalStyle.dropdown} onPress={() => setDropdownVisible(true)}>
                                    <Image source={Icons.date} style={{ width: 20, height: 20 }}></Image>
                                    <Text style={globalStyle.dropdownText}>{selectedMonth}</Text>
                                    <Image source={Icons.arrow_down} style={{ width: 20, height: 10 }}></Image>
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
                                        onPress={() => setDropdownVisible(false)}
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
                            <View style={{ flexDirection: 'row', width: 400 }}>
                                <View style={[globalStyle.dropdown, { backgroundColor: colors.primary, borderRadius: 26 }]}>
                                    <Text style={[globalStyle.dropdownText, { color: colors.whiteColor }]}>Select Region</Text>
                                    <Image source={Icons.arrow_down_white} style={{ width: 20, height: 10 }}></Image>
                                </View>
                                <View style={[globalStyle.dropdown, { backgroundColor: colors.primary, borderRadius: 26 }]}>
                                    <Text style={[globalStyle.dropdownText, { color: colors.whiteColor }]}>Select Sales ID</Text>
                                    <Image source={Icons.arrow_down_white} style={{ width: 20, height: 10 }}></Image>
                                </View>
                            </View>
                        </View>

                        {/* Card Details componant */}
                        <SalesInfoCards />

                        {/* monthly graph componant */}
                        <MonthlySalesGraph />

                        <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center', }}>
                            <View style={{ flex: 1 }}>
                                <TopBilledPartners data={partnerData} onViewAll={handleViewAll} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TopBilledProducts data={productData} onViewAll={handleViewAll} />
                            </View>
                        </View>
                    </>
                )}
            </View>
        </ScrollView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        backgroundColor: colors.mainBackgroundColor,
        paddingRight: 18,
        paddingBottom: 20
    },

    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: -5
    },

    itemText: {
        fontSize: 16,
        color: '#333',
        fontFamily: fonts.montserratRegular
    },
});