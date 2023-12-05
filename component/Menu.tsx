import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useRoute();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(route.name);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectMenuItem = (item: string) => {
    setSelectedMenuItem(item);
  };

  const goToSearchPage = () => {
    navigation.navigate('SearchPage');
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
          <TouchableOpacity onPress={() => {selectMenuItem('Personnages');toggleMenu();}}>
            <Text style={selectedMenuItem === 'Personnages' ? styles.selectedMenuItem : styles.menuItem} onPress={() => navigation.navigate('Personnages')}>
              Personnages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { selectMenuItem('Films'); closeMenu(); }}>
            <Text style={selectedMenuItem === 'Films' ? styles.selectedMenuItem : styles.menuItem} onPress={() => navigation.navigate('Films')}>
              Films
            </Text>
          </TouchableOpacity>
        </View>
      )}

        <Image
          style={styles.logo}
          source={require("../image/logomarvel.png")}
        />

       <TouchableOpacity onPress={goToSearchPage} style= {styles.searchButton}>
        <Image
          style={styles.search}
          source={require("../image/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    position: 'relative',
  },
  menuButton: {
    flex : 0,
    padding : 10,
    width: "15%",
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius:50,
    
  },
  searchButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginLeft: "95%"
  },
  sideMenu: {
    width: "70%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    height: "1500%",
    zIndex: 2,
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
    borderRadius:50,
    resizeMode: "contain",
    position: "absolute",
    right: 5,
    top: 5
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