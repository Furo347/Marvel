import React, { useState } from "react";
import Menu from "./Menu";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import HomeScreenCharacteres from "./characters";
import SelectTri from "./selecttri";

export default function Accueil() {
    const [isGentilValidated, setIsGentilValidated] = useState(false);
    const [isVilainValidated, setIsVilainValidated] = useState(false);
  
    const handleGentilPress = () => {
      setIsGentilValidated(!isGentilValidated);
    };
  
    const handleVilainPress = () => {
      setIsVilainValidated(!isVilainValidated);
    };

    return (
        <><View style={styles.container}>
            <Menu />
        </View><View>
                <SelectTri />
                <HomeScreenCharacteres />
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
});
