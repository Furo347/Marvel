//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import HomeScreenCharacters from "./characters";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Accueil(){
  const { top } = useSafeAreaInsets();
    return ( 
      <View style={{ paddingTop: top}}>
        <View style={styles.container1}>
          <Menu />
        </View>
          <HomeScreenCharacters />
      </View>
    )
}

const styles = StyleSheet.create({
  container1: {
    top:2,
    height:"10%",
    zIndex:2,
  },
})