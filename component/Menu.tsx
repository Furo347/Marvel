import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useRoute();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(route.name);
  
  const navigation = useNavigation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectMenuItem = (item: string) => {
    setSelectedMenuItem(item);
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
          <TouchableOpacity onPress={() => selectMenuItem('Personnages')}>
            <Text style={selectedMenuItem === 'Personnages' ? styles.selectedMenuItem : styles.menuItem} onPress={() => navigation.navigate('Personnages')}>
              Personnages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectMenuItem('Comics')}>
            <Text style={selectedMenuItem === 'Comics' ? styles.selectedMenuItem : styles.menuItem} onPress={() => navigation.navigate('Comics')}>
              Comics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectMenuItem('Films')}>
            <Text style={selectedMenuItem === 'Films' ? styles.selectedMenuItem : styles.menuItem} onPress={() => navigation.navigate('Films')}>
              Films
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {!isMenuOpen && (
        <Image
          style={styles.logo}
          source={require("../image/logomarvel.png")}
        />
      )}

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
    justifyContent: "flex-start",
    position: 'relative'
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  sideMenu: {
    width: 250,
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
    position: "absolute",
    left: 140,
    top: 0,
  },
  search: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: 0,
  },
  menuItem: {
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  selectedMenuItem: {
    padding: 10,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
