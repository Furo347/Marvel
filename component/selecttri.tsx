import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Menu from "./Menu";

export default function SelectTri() {
    const [isGentilValidated, setIsGentilValidated] = useState(false);
    const [isVilainValidated, setIsVilainValidated] = useState(false);
  
    const handleGentilPress = () => {
      setIsGentilValidated(!isGentilValidated);
    };
  
    const handleVilainPress = () => {
      setIsVilainValidated(!isVilainValidated);
    };

    return (
        <>
        <View style={styles.tri}>
            <TouchableOpacity onPress={handleGentilPress}>
                {isGentilValidated ? (
                    <Image
                        style={styles.menuGentil}
                        source={require("../image/gentil.png")} />
                ) : (
                    <Image
                        style={styles.menuGentil}
                        source={require("../image/gentils.png")} />
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={handleVilainPress}>
                {isVilainValidated ? (
                    <Image
                        style={styles.menuVilain}
                        source={require("../image/vilain.png")} />
                ) : (
                    <Image
                        style={styles.menuVilain}
                        source={require("../image/vilains.png")} />
                )}
            </TouchableOpacity>
        </View></>
      );
    }
    

const styles = StyleSheet.create({
    tri: {
        justifyContent: "flex-start",
        marginTop: 80,
        height: "90%",
      },
  menuGentil: {
    width: 50,
    height: 50,
    left: 110,
    position: "absolute",
  },
  menuVilain: {
    width: 50,
    height: 50,
    left: 220,
    position: "absolute"
  },
});
