import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterById, Item } from '../hooks/useGetCharacterById';
import AllgoodCharacter from './allcharactergood';

const heroNames: number[] = [
  1,
  4,
  5,
  6,
  10,
  11,
  12,
  13,
  21,
  25,
  31,
  39
];

export default function HomeScreenCharacters() {

  let tabGentil = [];
  let tabMechant = [];
  
for (const heroName of heroNames) {
  const { data, isLoading } = useGetCharacterById(heroName);
  const character = data;

  // Vérifier si le personnage appartient à Marvel
  const isMarvelCharacter = character?.biography?.publisher === 'Marvel Comics';

  if (isMarvelCharacter) {
    const alignment = character?.biography?.alignment;

    if (alignment === 'good') {
      tabGentil.push(character);
    } else {
      tabMechant.push(character);
    }}}
   
  
  
  const navigation = useNavigation<StackNavigationProp<any>>();
  const goToCharacterDetails = (character:  Item) => {
    navigation.navigate('CharacterDetails', { character });
  };

  const renderCharacterCards = (characters: Item[]) =>
  characters.map((character:  Item, index: number) => (
    <TouchableOpacity key={index} onPress={() => goToCharacterDetails(character)}>
      <View key={index} style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: character?.image?.url }} 
        />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>{character?.biography?.['full-name'] || ''}</Text>
          <Text style={styles.title}>{character?.name || ''}</Text>
          <Text style={styles.details}>Voir les détails</Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
  const goToAllCharactersgood = () => {
    navigation.navigate('AllgoodCharacter');
  };
  const goToAllCharactersbad = () => {
    navigation.navigate('AllbadCharacter');
  };
  return (
    <>
    <ScrollView>
      <View style={styles.categoryContainer}>
        <Text style={styles.categorie}>Protagonistes</Text>
        <TouchableOpacity onPress={goToAllCharactersgood} style={styles.seeAllText}>
          <View>
            <Text style={styles.seeAllText}>Voir tout</Text>
            </View>
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContent1} horizontal={true}>
        {renderCharacterCards(tabGentil.slice(0, 6))}
      </ScrollView>
      <View style={styles.categoryContainer}>
        <Text style={styles.categorie}>Antagonistes</Text>
        <TouchableOpacity onPress={goToAllCharactersbad} style={styles.seeAllText}>
          <View>
            <Text style={styles.seeAllText}>Voir tout</Text>
            </View>
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContent2} horizontal={true}>
        {renderCharacterCards(tabMechant.slice(0, 6))}
      </ScrollView>
    </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  scroll:{
    top:"3%",
  },
  scrollViewContent1: {
    paddingHorizontal: 10,
  },
  scrollViewContent2: {
    paddingHorizontal: 10,
    paddingBottom:"20%",
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    height: 300,
    width: 150,
    marginRight: 10,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sectionTitle: {
    fontSize: 10,
    elevation: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  categorie: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom : 10,
    marginTop : 10,
    color: 'red',
  },
  details:  {
    color: 'white'
  },
  seeAllText: {
    fontSize: 16,
    color: 'black',
    right: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});