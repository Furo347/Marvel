import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Item } from "../hooks/useGetCharacterByName";

type RootStackParamList = {
  CharacterDetails: { character: Item };
};

type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'CharacterDetails'>;

interface CharacterDetailsProps {
  route: CharacterDetailsRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'CharacterDetails'>;
}

export default function CharacterDetails({ route }: CharacterDetailsProps) {
  const { character } = route.params;

  return (
    
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: character?.image?.url }}
        />
        <View style={styles.overlay}>
        <Text style={styles.title}>{character?.name}</Text>
          <Text style={styles.sectionTitle}>Nom et prénom: {character?.biography!['full-name']}</Text>
          <Text style={styles.sectionTitle}>Lieu de naissance: {character?.biography!['place-of-birth']}</Text>
          <Text style={styles.sectionTitle}>Première apparition: {character?.biography!['first-appearance']}</Text>
          <Text style={styles.sectionTitle}>Genre: {character?.appearance?.gender}</Text>
          <Text style={styles.sectionTitle}>Race: {character?.appearance?.race}</Text>
          <Text style={styles.sectionTitle}>Taille: {character?.appearance?.height?.[1]}</Text>
          <Text style={styles.sectionTitle}>Poids: {character?.appearance?.weight?.[1]}</Text>
          <Text style={styles.sectionTitle}>Couleur des yeux: {character?.appearance?.["eye-color"]}</Text>
          <Text style={styles.sectionTitle}>Couleur des cheveux: {character?.appearance?.["hair-color"]}</Text>
          <Text style={styles.sectionTitle}>Métier: {character?.work?.occupation}</Text>
          <Text style={styles.sectionTitle}>Base: {character?.work?.base}</Text>
          <Text style={styles.sectionTitle}>Affiliation: {character?.connections?.["group-affiliation"]}</Text>
          <Text style={styles.sectionTitle}>Raltions: {character?.connections?.relatives}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },
});