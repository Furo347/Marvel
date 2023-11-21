//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import HomeScreenCharacters from "./characters";

export default function Accueil(){
    return (
        <View style={styles.container}>
        <Menu />
        <HomeScreenCharacters />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
    },
})