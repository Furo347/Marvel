import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Image
          style={styles.menuIcon}
          source={require("../image/menu.png")}
        />
      </TouchableOpacity>

      {isMenuOpen && (
        <View style={styles.sideMenu}>
          <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
          {/* Your menu content goes here */}
          <Text>Menu Item 1</Text>
          <Text>Menu Item 2</Text>
          <Text>Menu Item 3</Text>
        </View>
      )}
      <Image
      style={styles.logo}
      source={require("../image/logomarvel.png")}
      />
      <Image
      style={styles.search}
      source={require("../image/search.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    menuButton: {
      padding: 10,
    },
    menuIcon: {
      width: 30,
      height: 30,
    },
    sideMenu: {
      width: Dimensions.get("window").width * 0.75, // Adjust the width as needed
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      zIndex: 1,
      borderRightWidth: 1,
      borderColor: "#ccc",
      padding: 20,
    },
    closeButton: {
      padding: 10,
      alignItems: "center",
      backgroundColor: "#eee",
    },
    logo: {
      width: 100,
      height: 50,
      resizeMode: "contain",
      left: 100,
    },
    search: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        position: "absolute",
        right: 0,
        top: 0,
      },
  });
  