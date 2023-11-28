//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet } from "react-native";
import HomeScreenCharacteres from "./characters";

export default function Accueil(){
    return ( <><View style={styles.container1}>
        <Menu />
        </View>
        <View style={styles.container2}>
        <HomeScreenCharacteres />
        </View></>
    )
}
const styles = StyleSheet.create({
    container1: {
      height: "100%",
    },
    container2: {
        height: "100%",
        position: "absolute",
        top:40,
      },
})