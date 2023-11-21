import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import HomeScreenCharacteres from "./characters";

export default function Accueil(){
    return (
        <View style={styles.container}>
        <Menu />
        <HomeScreenCharacteres />
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