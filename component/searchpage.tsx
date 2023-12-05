import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterByName } from "../hooks/useGetCharacterByName";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false); // State to track button press
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { data, isLoading } = useGetCharacterByName(searchQuery);

  useEffect(() => {
    if (buttonPressed && data) {
      // Check if 'results' exists within 'data'
      if ('results' in data && data.results && Array.isArray(data.results) && data.results.length > 0) {
        const character = data.results[0];
        navigation.navigate('CharacterDetails', { character });
        setButtonPressed(false); 
      } else {
        console.log('Results not found or empty');
      }
    }
  }, [buttonPressed, data, navigation, searchQuery]);
  
  
  

  const handleSearch = () => {
    setButtonPressed(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  searchInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
});
export default SearchPage;