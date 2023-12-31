import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterByName } from "../hooks/useGetCharacterByName";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBarreOpen, setIsBarreOpen] = useState(false);
  const route = useRoute();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(route.name);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetCharacterByName(searchQuery);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectMenuItem = (item: string) => {
    setSelectedMenuItem(item);
  };
  
  const OuvFermBarre = () => {
    setIsBarreOpen(!isBarreOpen);
  };

  const handleSearch = () => {
    if (data){
      if ('results' in data && data.results && Array.isArray(data.results) && data.results.length > 0) {
        const character = data.results[0];
        navigation.navigate('CharacterDetails', { character });
      }
      };
    }

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

      {!isMenuOpen && isBarreOpen && (
        <>
          <View style={styles.barreItem}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.fleche}>
            <Image
              style={styles.menuIcon}
              source={require("../image/fleche-droite.png")}
            />
            </TouchableOpacity>
          </View>
        </>
      )}

        <Image
          style={styles.logo}
          source={require("../image/logomarvel.png")}
          />

        <TouchableOpacity onPress={OuvFermBarre} style= {styles.searchButton}>
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
  barreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderBottomColor: 'white',
    borderTopWidth: 15,
    borderTopColor: 'white',
    paddingVertical: 1,
    paddingHorizontal: 10,
    top : -5
  },
  searchInput: {
    height : 40,
    width: "100%",
    borderWidth: 3,
    borderColor: "#444444",
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    color : 'black',
    fontSize: 15,
  },
  fleche : {
    right : 50,
    marginBottom : 10
  }
});