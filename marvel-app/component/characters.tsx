//characters.tsx
import * as React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useGetCharacterByName } from '../hooks/useGetCharacterByName';
import CharacterDetails from './characterdetails';
import { StackNavigationProp } from '@react-navigation/stack';
export default function HomeScreenCharacteres() {
  const {data, isLoading }= useGetCharacterByName('Spider-Man');
  const character = data?.results[0];
  
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goToCharacterDetails = () => {
    // Naviguez vers la page de détails du personnage
    navigation.navigate('CharacterDetails',{ character });  
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: character?.image?.url }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>{character?.biography['full-name']}</Text>
          <Text style={styles.title}>{character?.name}</Text>
          <TouchableOpacity onPress={goToCharacterDetails}>
        <Text>Voir les détails</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 10, // Add padding to space out the items
  },
  container: {
    width: 150, // Adjust width of each container
    height: 150, // Adjust height of each container
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5, // Add margin to space out the containers
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(42, 42, 42, 0.62)',
    padding: 5,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});