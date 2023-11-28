import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterByName } from "../hooks/useGetCharacterByName";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { data, isLoading, refetch } = useGetCharacterByName(searchQuery);

  useEffect(() => {
    if (data && !isLoading) {
      const character = data?.results[0];
      if (character) {
        navigation.navigate('CharacterDetails', { character });
      }
    }
  }, [data, isLoading, navigation]);

  const handleSearch = () => async () => {
    // Perform the search when the button is pressed
    // This will trigger the API call to fetch data
    await refetch();
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
