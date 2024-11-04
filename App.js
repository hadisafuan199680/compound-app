import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./screens/LoginPage";
import FormPage from "./screens/FormPage";
import ImageCapturePage from "./screens/ImageCapturePage";
import AnotherFormPage from "./screens/AnotherFormPage";
import SummaryPage from "./screens/SummaryPage";
import FinalCapturePage from "./screens/FinalCapturePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="NOTIS_BARU" component={FormPage} />
        <Stack.Screen
          name="GAMBAR_SEBELUM_KOMPAUN"
          component={ImageCapturePage}
        />
        <Stack.Screen
          name="PERUNTUKKAN_UNDANG_UNDANG"
          component={AnotherFormPage}
        />
        <Stack.Screen name="RUMUSAN" component={SummaryPage} />
        <Stack.Screen name="FinalCapture" component={FinalCapturePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
