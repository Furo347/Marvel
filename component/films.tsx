//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import SuperheroDisplay from "./allfims";


export default function Accueil(){
    return (
      <>
        <View style={styles.container1}>
          <Menu />
        </View>
        <View style={styles.container2}>
          <SuperheroDisplay />
        </View>
      </>
    )
}
const styles = StyleSheet.create({
    container1: {
      top:2,
      height:"15%",
      zIndex:2,
    },
    container2: {
        height: "100%",
        position: "absolute",
        top:50,
      },
})