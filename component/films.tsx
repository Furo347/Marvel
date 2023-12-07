//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet, ImageBackground } from "react-native";
import SuperheroDisplay from "./allfims";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Films(){
  const {top} = useSafeAreaInsets();
    return (
      <View style={{paddingTop: top}}>
        <View style={styles.container1}>
          <Menu />
        </View>
          <SuperheroDisplay />
      </View>
    )
}
const styles = StyleSheet.create({
    container1: {
      height:64,
    },
})