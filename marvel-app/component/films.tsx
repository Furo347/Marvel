import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import Menu from "./Menu";
import SuperheroDisplay from "./allfilms";
export default function Movies(){
    return (
        <><View style={styles.container}>
            <Menu />
        </View><View>
                <SuperheroDisplay />
            </View></>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        height: "100%",
        position: "absolute"
      },
})