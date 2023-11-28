//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import HomeScreenCharacters from "./characters";

export default function Accueil(){
    return ( <><View style={styles.container}>
        <Menu />
        </View>
        <View style={styles.container}>
        <HomeScreenCharacters />
        </View></>
    )
}
const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      marginBottom : -500
    },
    container2: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
      },
})