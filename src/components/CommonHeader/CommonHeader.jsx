import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CommonHeader = ({ headerName }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{headerName}</Text>
        </View>
    );
};

export default CommonHeader;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: '#f8f8f8', // You can customize this color
        borderBottomWidth: 1,
        borderBottomColor: '#ddd', // Border color for separation
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Text color
    },
});
