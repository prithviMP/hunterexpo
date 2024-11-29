import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { colors } from "../style/colors";
import { fonts } from "../style/fonts";
import { Icons } from "../Icons/Icons";

export default function Header({ headerText, toggleSidebar }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSidebar}>
        <Image
          source={Icons.hamburger}
          alt="hamburger icon"
          style={[styles.iconImage, { marginLeft: -10 }]}
        ></Image>
      </TouchableOpacity>

      {/* Left: Sales text */}
      <Text style={styles.headerText}>{headerText}</Text>
      {/* Center: Search input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Right: Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Image source={Icons.bell} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={Icons.setting} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={Icons.user} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: colors.mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between", // Distribute the elements evenly
  },
  headerText: {
    fontSize: 30,
    fontWeight: colors.bold,
    color: colors.blackColor,
    flex: 1,
    fontFamily: fonts.montserratRegular, // Use Montserrat font
  },
  searchContainer: {
    flex: 1, // Takes up more space for the search bar
    justifyContent: "center",
  },
  searchInput: {
    height: 36,
    borderRadius: 25,
    borderColor: colors.cardBorder,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: colors.whiteColor,
    fontFamily: fonts.manropeRegular,
    fontWeight: colors.extraSemiBold,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15, // Add space between icons
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: "contain", // Ensures the image scales correctly
    cursor: "pointer",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 16, // Circular profile picture
    resizeMode: "cover", // Ensures proper scaling for the profile picture
  },
});
