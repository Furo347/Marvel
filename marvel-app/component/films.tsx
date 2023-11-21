import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import Menu from "./Menu";
export default function Movies(){
    return (
        <View style={styles.container}>
            <Menu />
            <Text>This is a movies</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
})