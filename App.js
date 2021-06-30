import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/themes";
import Navigation from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// Contexts in services
import { AuthenticationContextProvider } from "./src/services/authentication/Authentication.context";

import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKattv_YIE7Scu_rNJuxYsJ0G-83tLpVU",
  authDomain: "foodexpress-edd8e.firebaseapp.com",
  projectId: "foodexpress-edd8e",
  storageBucket: "foodexpress-edd8e.appspot.com",
  messagingSenderId: "134777404925",
  appId: "1:134777404925:web:e02be22803e57d32f32d94",
  measurementId: "G-LPH0650YCF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
