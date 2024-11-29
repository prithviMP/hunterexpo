import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import MainContent from "./components/MainContent";
import { colors } from "./style/colors";
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // Load fonts
  const [fontsLoaded, error] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    Manrope: require("../assets/fonts/Manrope-Medium.ttf"), // Adjust the path if needed
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"), // Adjust the path if needed
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  // Show a loading spinner until fonts are loaded
  // if (!fontsLoaded) {
  //   return (
  //     <View style={styles.loaderContainer}>
  //       <ActivityIndicator size="large" color="#007BFF" />
  //     </View>
  //   );
  // }

  // Once fonts are loaded, render the main content
  return (
    <NavigationContainer>
      <MainContent />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.mainBackgroundColor,
  },
});
