import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Sales from "../screens/LoggedInScreen/Sales/Sales";
import DashboardScreen from "../screens/LoggedInScreen/Dashboard/DashboardScreen";
import CallManager from "../screens/LoggedInScreen/CallManager/CallManager";
import CompanyManagement from "../screens/LoggedInScreen/CompanyManagement/CompanyManagement";
import InvoiceManagement from "../screens/LoggedInScreen/InvoiceManagement/InvoiceManagement";
import PerformanceMetrics from "../screens/LoggedInScreen/PerformanceMetrics/PerformanceMetrics";
import Pricelist from "../screens/LoggedInScreen/Pricelist/Pricelist";
import Targets from "../screens/LoggedInScreen/Targets/Targets";

const Stack = createStackNavigator();

const AppNavigator = () => (

    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="CallManager" component={CallManager} />
        <Stack.Screen name="CompanyManagement" component={CompanyManagement} />
        <Stack.Screen name="InvoiceManagement" component={InvoiceManagement} />
        <Stack.Screen name="PerformanceMetrics" component={PerformanceMetrics} />
        <Stack.Screen name="Pricelist" component={Pricelist} />
        <Stack.Screen name="Targets" component={Targets} />
    </Stack.Navigator>

);

export default AppNavigator;
