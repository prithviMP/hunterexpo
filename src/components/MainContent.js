import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AppNavigator from "../navigation/AppNavigator"; // Ensure AppNavigator does not include NavigationContainer
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MainContent({ navigation }) {
  const [headerText, setHeaderText] = useState("Dashboard"); // Manage header text state
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Manage sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible); // Toggle visibility of sidebar
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* Sidebar with dynamic header text */}
        {isSidebarVisible && (
          <Sidebar setHeaderText={setHeaderText} navigation={navigation} />
        )}

        <View style={{ flex: 1 }}>
          {/* Header with dynamic text */}
          {Platform.OS === "web" && <Header headerText={headerText} toggleSidebar={toggleSidebar}/>}

          <SafeAreaProvider>
            <View style={styles.mainContent}>
              {/* AppNavigator to handle routing and navigation */}
              <AppNavigator />
            </View>
          </SafeAreaProvider>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flexDirection: "row",
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});
