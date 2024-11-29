import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { colors } from "../style/colors";
import { Icons } from "../Icons/Icons";
import { fonts } from "../style/fonts";

export default function Sidebar({ setHeaderText }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const navigation = useNavigation(); // Use navigation hook

  const menuItems = [
    { name: "Dashboard", icon: Icons.dashboard, navigateTo: "Dashboard" },
    { name: "Sales", icon: Icons.codicon_graph, navigateTo: "Sales" },
    {
      name: "Call Manager",
      icon: Icons.ion_call_outline,
      navigateTo: "CallManager",
    },
    {
      name: "Performance Metrics",
      icon: Icons.eos_icons_performance,
      navigateTo: "PerformanceMetrics",
    },
    { name: "Targets", icon: Icons.mdi_target, navigateTo: "Targets" },
    {
      name: "Invoice Management",
      icon: Icons.stash_invoice,
      navigateTo: "InvoiceManagement",
    },
    { name: "Pricelist", icon: Icons.priceList, navigateTo: "Pricelist" },
    {
      name: "Company Management",
      icon: Icons.mdi_company,
      navigateTo: "CompanyManagement",
    },
  ];

  const handlePress = (menuItem, navigateTo) => {
    setSelectedItem(menuItem);
    setHeaderText(menuItem);
    navigation.navigate(navigateTo); // Use navigation hook
  };

  return (
    <View style={styles.sidebar}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => handlePress(item.name, item.navigateTo)}
        >
          <View
            style={[
              styles.commoncss,
              selectedItem === item.name && styles.selectedMenuItem,
            ]}
          >
            <Image source={item.icon} style={styles.iconImage} />
            <Text
              style={[
                styles.menuItem,
                selectedItem === item.name && styles.selectedMenuText,
              ]}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: colors.mainBackgroundColor,
    paddingVertical: 15,
    justifyContent: "flex-start",
    borderRightWidth: 2,
    borderColor: colors.cardBorder,
    padding: 10,
  },
  menuItem: {
    fontSize: 14,
    color: colors.sideNavMenuColor,
    fontFamily: fonts.manropeRegular,
    marginVertical: 5,
  },
  commoncss: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
  },
  selectedMenuItem: {
    backgroundColor: colors.primary,
  },
  selectedMenuText: {
    color: "#FFF",
  },
  iconImage: {
    width: 18,
    height: 18,
  },
});
