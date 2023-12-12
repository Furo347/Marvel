import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGetCharacterById, Item } from '../hooks/useGetCharacterById';

const { width, height } = Dimensions.get('window');
const heroNames: number[] = [];
for (let id = 1; id <= 731; id++) {
  heroNames.push(id);
}

interface AllgoodCharacterProps {}

export default function AllbadCharacter(props: AllgoodCharacterProps) {
  const tabMechants: Item[] = [];

  for (const heroName of heroNames) {
    const { data } = useGetCharacterById(heroName);
    const character = data;

    // Vérifier si le personnage appartient à Marvel
    const isMarvelCharacter = character?.biography?.publisher === 'Marvel Comics';

    if (isMarvelCharacter) {
      const alignment = character?.biography?.alignment;

      if (alignment === 'bad') {
        tabMechants.push(character);
      }
    }
  }

  const navigation = useNavigation<StackNavigationProp<any>>();
  const goToCharacterDetails = (character: Item) => {
    navigation.navigate('CharacterDetails', { character });
  };

  return (
    <View style={styles.scrollViewContent}>
      <FlatList
        data={tabMechants}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => goToCharacterDetails(item)} >
            <Image style={styles.image} source={{ uri: item?.image?.url }} />
        <View style={styles.textContainer}>   
          <Text style={styles.sectionTitle}>{item?.biography?.['full-name'] || ''}</Text>
          <Text style={styles.title}>{item?.name || ''}</Text>
          <Text style={styles.details}>Voir les détails</Text>
        </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom:"20%",
    paddingHorizontal: 10,
    top: 10,
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    height: 300,
    width: '45%',
    marginLeft: "1%",
    marginRight: "5%",
    marginBottom: "5%",
    position: "relative",
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajoutez un fond semi-transparent pour améliorer la lisibilité du texte
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
    color: 'red',
    marginBottom: 10,
    marginTop: 10,
  },
  details: {
    color: 'white',
  },
  cont : {
  },
  img: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: height/4,
    left: width/3
  }
});
