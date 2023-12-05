import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Item, useGetCharacterByName } from '../hooks/useGetCharacterByName';
import { StackNavigationProp } from '@react-navigation/stack';

const heroNames: string[] = [
  'Iron Man',
  'Captain America',
  'Spider-Man',
  'Black Widow',
  'Lex Luthor',
  'Hulk',
  'Wolverine',
  'Deadpool',
  'Wonder Woman',
  'Batman',
  'Superman',
  'Black Panther',
  'Doctor Strange',
  'Aquaman',
  'Killer Croc'
];


export default function HomeScreenCharacters() {

  let tabGentil = [];
  let tabMechant = [];
  
  for (const heroName of heroNames) {
    const { data, isLoading } = useGetCharacterByName(heroName);
    const character = data?.results[0];
    const alignment = character?.biography?.alignment;
    
    if (alignment === 'good') {
      tabGentil.push(character);
    } else {
      tabMechant.push(character);
    }
  }
  
  
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

  return (
    <>
     <ScrollView style={styles.scroll}>
      <View><Text style={styles.categorie}>Protagonistes</Text></View>
      <ScrollView style={styles.scrollViewContent1} horizontal={true}>
        {renderCharacterCards(tabGentil)}
      </ScrollView>
      <View><Text style={styles.categorie}>Antagonistes</Text></View>
      <ScrollView style={styles.scrollViewContent2} horizontal={true}>
        {renderCharacterCards(tabMechant)}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    marginBottom : 10,
    marginTop : 10
  },
  details:  {
    color: 'white'
  },
});