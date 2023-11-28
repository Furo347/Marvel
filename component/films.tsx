//accueil.tsx
import React from "react";
import Menu from "./Menu";
import { View, StyleSheet, ImageBackground } from "react-native";
import SuperheroDisplay from "./allfims";


export default function Accueil(){
    return (
      <>
        <View style={styles.container1}>
          <Menu />
        </View>
        <View style={styles.container2}>
          <ImageBackground source={require('../image/EndGameMarvel.jpg')}>
            <SuperheroDisplay />
          </ImageBackground>
        </View>
      </>
    )
}
const styles = StyleSheet.create({
    container1: {
      top:2,
      height:"10%",
      zIndex:2,
      backgroundColor:'#051232',
    },
    container2: {
        height: "100%",
        position: "absolute",
        top:50,
      },
})