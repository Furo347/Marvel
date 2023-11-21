import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import Menu from "./Menu";
import HomeScreenCharacteres from "./characters";
export default function Comics(){
    return (
        <View style={styles.container}>
            <Menu />
            <HomeScreenCharacteres />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
    },
})